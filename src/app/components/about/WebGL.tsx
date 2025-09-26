import React, { useEffect, useRef, useState } from 'react';

// Optimized fluid config for fast, light behavior
const config = {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 512,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 0.97,
    VELOCITY_DISSIPATION: 0.98,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6000,
    SHADING: true,
    COLORFUL: true,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false,
    BLOOM: true,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: true,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1.0,
};

// Pointer prototype - exact port
interface PointerType {
    id: number;
    texcoordX: number;
    texcoordY: number;
    prevTexcoordX: number;
    prevTexcoordY: number;
    deltaX: number;
    deltaY: number;
    down: boolean;
    moved: boolean;
    color: { r: number; g: number; b: number };
}

function pointerPrototype(): PointerType {
    return {
        id: -1,
        texcoordX: 0,
        texcoordY: 0,
        prevTexcoordX: 0,
        prevTexcoordY: 0,
        deltaX: 0,
        deltaY: 0,
        down: false,
        moved: false,
        color: { r: 30, g: 0, b: 300 }
    };
}

const pointers: PointerType[] = [];
const splatStack: number[] = [];
pointers.push(pointerPrototype());

// WebGL context and extensions - exact port
interface WebGLExt {
    formatRGBA: { internalFormat: number; format: number } | null;
    formatRG: { internalFormat: number; format: number } | null;
    formatR: { internalFormat: number; format: number } | null;
    halfFloatTexType: number;
    supportLinearFiltering: boolean;
}

function isMobile(): boolean {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function getWebGLContext(canvas: HTMLCanvasElement): { gl: WebGLRenderingContext | WebGL2RenderingContext; ext: WebGLExt } {
    const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };

    let gl: WebGLRenderingContext | WebGL2RenderingContext | null = canvas.getContext('webgl2', params) as WebGL2RenderingContext;
    const isWebGL2 = !!gl;
    if (!isWebGL2)
        gl = (canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params)) as WebGLRenderingContext;

    if (!gl) throw new Error('WebGL not supported');

    let halfFloat: OES_texture_half_float | null = null;
    let supportLinearFiltering: boolean;
    if (isWebGL2) {
        gl.getExtension('EXT_color_buffer_float');
        supportLinearFiltering = !!gl.getExtension('OES_texture_float_linear');
    } else {
        halfFloat = gl.getExtension('OES_texture_half_float');
        supportLinearFiltering = !!gl.getExtension('OES_texture_half_float_linear');
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    const halfFloatTexType = isWebGL2 ? (gl as WebGL2RenderingContext).HALF_FLOAT : halfFloat?.HALF_FLOAT_OES ?? 0;
    let formatRGBA: { internalFormat: number; format: number } | null;
    let formatRG: { internalFormat: number; format: number } | null;
    let formatR: { internalFormat: number; format: number } | null;

    if (isWebGL2) {
        const gl2 = gl as WebGL2RenderingContext;
        formatRGBA = getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl2, gl2.RG16F, gl2.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl2, gl2.R16F, gl2.RED, halfFloatTexType);
    } else {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    }

    return {
        gl,
        ext: {
            formatRGBA,
            formatRG,
            formatR,
            halfFloatTexType,
            supportLinearFiltering
        }
    };
}

function getSupportedFormat(gl: WebGLRenderingContext | WebGL2RenderingContext, internalFormat: number, format: number, type: number): { internalFormat: number; format: number } | null {
    if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        const gl2 = gl as WebGL2RenderingContext;
        if ('RG16F' in gl && internalFormat === gl2.R16F) {
            return getSupportedFormat(gl, gl2.RG16F, gl2.RG, type);
        }
        if ('RGBA16F' in gl && internalFormat === gl2.RG16F) {
            return getSupportedFormat(gl, gl2.RGBA16F, gl.RGBA, type);
        }
        return null;
    }

    return {
        internalFormat,
        format
    };
}

function supportRenderTextureFormat(gl: WebGLRenderingContext | WebGL2RenderingContext, internalFormat: number, format: number, type: number): boolean {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    return status === gl.FRAMEBUFFER_COMPLETE;
}

// ====== SHADER COMPILATION FUNCTIONS ======
function compileShader(gl: WebGLRenderingContext | WebGL2RenderingContext, type: number, source: string, keywords?: string[]): WebGLShader {
    source = addKeywords(source, keywords);

    const shader = gl.createShader(type);
    if (!shader) throw new Error('Could not create shader');
    
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.trace(gl.getShaderInfoLog(shader));

    return shader;
}

function addKeywords(source: string, keywords?: string[]): string {
    if (keywords == null) return source;
    let keywordsString = '';
    keywords.forEach(keyword => {
        keywordsString += '#define ' + keyword + '\n';
    });
    return keywordsString + source;
}

// ====== BASE VERTEX SHADERS ======
const baseVertexShaderSource = `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const blurVertexShaderSource = `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

// ====== FRAGMENT SHADERS ======
const blurShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`;

const copyShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`;

const clearShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`;

const colorShaderSource = `
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`;

const checkerboardShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;

    #define SCALE 25.0

    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`;

const displayShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`;

const bloomPrefilterShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`;

const bloomBlurShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`;

const bloomFinalShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`;

const sunraysMaskShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`;

const sunraysShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`;

const splatShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`;

const advectionShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }
`;

const divergenceShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`;

const curlShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`;

const vorticityShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`;

const pressureShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`;

const gradientSubtractShaderSource = `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`;

// ====== SHADER MANAGEMENT CLASSES ======
class Material {
    vertexShader: WebGLShader;
    fragmentShaderSource: string;
    programs: { [key: number]: WebGLProgram } = {};
    activeProgram: WebGLProgram | null = null;
    uniforms: { [key: string]: WebGLUniformLocation | null } = {};
    gl: WebGLRenderingContext | WebGL2RenderingContext;

    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShaderSource: string) {
        this.gl = gl;
        this.vertexShader = vertexShader;
        this.fragmentShaderSource = fragmentShaderSource;
    }

    setKeywords(keywords: string[]) {
        let hash = 0;
        for (let i = 0; i < keywords.length; i++)
            hash += hashCode(keywords[i]);

        let program = this.programs[hash];
        if (program == null) {
            const fragmentShader = compileShader(this.gl, this.gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
            program = createProgram(this.gl, this.vertexShader, fragmentShader);
            this.programs[hash] = program;
        }

        if (program === this.activeProgram) return;

        this.uniforms = getUniforms(this.gl, program);
        this.activeProgram = program;
    }

    bind() {
        this.gl.useProgram(this.activeProgram);
    }
}

class Program {
    uniforms: { [key: string]: WebGLUniformLocation | null } = {};
    program: WebGLProgram;
    gl: WebGLRenderingContext | WebGL2RenderingContext;

    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        this.gl = gl;
        this.program = createProgram(gl, vertexShader, fragmentShader);
        this.uniforms = getUniforms(gl, this.program);
    }

    bind() {
        this.gl.useProgram(this.program);
    }
}

function createProgram(gl: WebGLRenderingContext | WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
    const program = gl.createProgram();
    if (!program) throw new Error('Could not create program');
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        console.trace(gl.getProgramInfoLog(program));

    return program;
}

function getUniforms(gl: WebGLRenderingContext | WebGL2RenderingContext, program: WebGLProgram): { [key: string]: WebGLUniformLocation | null } {
    const uniforms: { [key: string]: WebGLUniformLocation | null } = {};
    const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
        const uniformInfo = gl.getActiveUniform(program, i);
        if (uniformInfo) {
            uniforms[uniformInfo.name] = gl.getUniformLocation(program, uniformInfo.name);
        }
    }
    return uniforms;
}

// Hash code function for Material keyword caching
function hashCode(s: string): number {
    if (s.length === 0) return 0;
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

// ====== BLIT FUNCTION ======
function createBlit(gl: WebGLRenderingContext | WebGL2RenderingContext) {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    return (target: FBO | null = null, clear: boolean = false) => {
        if (target == null) {
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        } else {
            gl.viewport(0, 0, target.width, target.height);
            gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        }
        if (clear) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    };
}

// ====== UTILITY FUNCTIONS ======
function getResolution(resolution: number): { width: number; height: number } {
    let aspectRatio = window.innerWidth / window.innerHeight;
    if (aspectRatio < 1)
        aspectRatio = 1.0 / aspectRatio;

    const min = Math.round(resolution);
    const max = Math.round(resolution * aspectRatio);

    if (window.innerWidth > window.innerHeight)
        return { width: max, height: min };
    else
        return { width: min, height: max };
}

function getTextureScale(texture: { width: number; height: number }, width: number, height: number): { x: number; y: number } {
    return {
        x: width / texture.width,
        y: height / texture.height
    };
}

function normalizeColor(input: { r: number; g: number; b: number }): { r: number; g: number; b: number } {
    const output = {
        r: input.r / 255,
        g: input.g / 255,
        b: input.b / 255
    };
    return output;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function clamp01(input: number): number {
    return Math.min(Math.max(input, 0), 1);
}

function wrap(value: number, min: number, max: number): number {
    const range = max - min;
    if (range === 0) return min;
    return (value - min) % range + min;
}

// ====== FRAMEBUFFER SYSTEM ======
interface FBO {
    texture: WebGLTexture;
    fbo: WebGLFramebuffer;
    width: number;
    height: number;
    texelSizeX: number;
    texelSizeY: number;
    attach: (id: number) => number;
}

interface DoubleFBO {
    width: number;
    height: number;
    texelSizeX: number;
    texelSizeY: number;
    read: FBO;
    write: FBO;
    swap: () => void;
}

function createFBO(gl: WebGLRenderingContext | WebGL2RenderingContext, w: number, h: number, internalFormat: number, format: number, type: number, param: number): FBO {
    gl.activeTexture(gl.TEXTURE0);
    const texture = gl.createTexture();
    if (!texture) throw new Error('Could not create texture');
    
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

    const fbo = gl.createFramebuffer();
    if (!fbo) throw new Error('Could not create framebuffer');
    
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const texelSizeX = 1.0 / w;
    const texelSizeY = 1.0 / h;

    return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX,
        texelSizeY,
        attach(id: number) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            return id;
        }
    };
}

function createDoubleFBO(gl: WebGLRenderingContext | WebGL2RenderingContext, w: number, h: number, internalFormat: number, format: number, type: number, param: number): DoubleFBO {
    let fbo1 = createFBO(gl, w, h, internalFormat, format, type, param);
    let fbo2 = createFBO(gl, w, h, internalFormat, format, type, param);

    return {
        width: w,
        height: h,
        texelSizeX: fbo1.texelSizeX,
        texelSizeY: fbo1.texelSizeY,
        get read() {
            return fbo1;
        },
        set read(value: FBO) {
            fbo1 = value;
        },
        get write() {
            return fbo2;
        },
        set write(value: FBO) {
            fbo2 = value;
        },
        swap() {
            const temp = fbo1;
            fbo1 = fbo2;
            fbo2 = temp;
        }
    };
}

function resizeFBO(gl: WebGLRenderingContext | WebGL2RenderingContext, target: FBO, w: number, h: number, internalFormat: number, format: number, type: number, param: number, copyProgram: Program): FBO {
    const newFBO = createFBO(gl, w, h, internalFormat, format, type, param);
    copyProgram.bind();
    gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
    // Note: blit function will be called here in actual usage
    return newFBO;
}

function resizeDoubleFBO(gl: WebGLRenderingContext | WebGL2RenderingContext, target: DoubleFBO, w: number, h: number, internalFormat: number, format: number, type: number, param: number, copyProgram: Program): DoubleFBO {
    if (target.width === w && target.height === h)
        return target;
    target.read = resizeFBO(gl, target.read, w, h, internalFormat, format, type, param, copyProgram);
    target.write = createFBO(gl, w, h, internalFormat, format, type, param);
    target.width = w;
    target.height = h;
    target.texelSizeX = 1.0 / w;
    target.texelSizeY = 1.0 / h;
    return target;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createTextureAsync(gl: WebGLRenderingContext | WebGL2RenderingContext, url: string) {
    const texture = gl.createTexture();
    if (!texture) throw new Error('Could not create texture');
    
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

    const obj = {
        texture,
        width: 1,
        height: 1,
        attach(id: number) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            return id;
        }
    };

    const image = new Image();
    image.onload = () => {
        obj.width = image.width;
        obj.height = image.height;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    };
    image.src = url;

    return obj;
}

// ====== COLOR GENERATION ======
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HSVtoRGB(h: number, s: number, v: number): { r: number; g: number; b: number } {
    let r: number, g: number, b: number;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
        default: r = v; g = t; b = p; break;
    }

    return { r, g, b };
}

function generateColor(): { r: number; g: number; b: number } {
    // Xtremery brand theme - Aqua Spark, Blue, Purple
    const colors = [
        { r: 147, g: 51, b: 234 },  // Purple-600 #9333ea - main brand purple
        { r: 79, g: 70, b: 229 },   // Indigo-600 #4f46e5 - deep blue
        { r: 37, g: 99, b: 235 },   // Blue-600 #2563eb - bright blue  
        { r: 14, g: 165, b: 233 },  // Sky-500 #0ea5e9 - aqua spark
        { r: 6, g: 182, b: 212 },   // Cyan-500 #06b6d4 - cyan accent
        { r: 168, g: 85, b: 247 },  // Purple-500 #a855f7 - lighter purple
    ];
    
    // Pick a random base color from your palette
    const baseColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Variation for natural fluid movement
    const variation = 0.15; // Slightly more variation for dynamic effect
    const brightnessMultiplier = 0.25; // Increased brightness for better visibility
    
    let r = baseColor.r + (Math.random() - 0.5) * variation * 50; // Reduced variation range
    let g = baseColor.g + (Math.random() - 0.5) * variation * 50;
    let b = baseColor.b + (Math.random() - 0.5) * variation * 50;
    
    // Clamp to valid range and normalize
    r = Math.max(0, Math.min(255, r)) / 255 * brightnessMultiplier;
    g = Math.max(0, Math.min(255, g)) / 255 * brightnessMultiplier;
    b = Math.max(0, Math.min(255, b)) / 255 * brightnessMultiplier;
    
    return { r, g, b };
}

function correctRadius(radius: number): number {
    const aspectRatio = window.innerWidth / window.innerHeight;
    if (aspectRatio > 1)
        radius *= aspectRatio;
    return radius;
}

// ====== INPUT HANDLING SYSTEM ======
function updatePointerDownData(pointer: PointerType, id: number, posX: number, posY: number, canvas: HTMLCanvasElement) {
    pointer.id = id;
    pointer.down = true;
    pointer.moved = false;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1.0 - posY / canvas.height;
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.deltaX = 0;
    pointer.deltaY = 0;
    pointer.color = generateColor();
}

function updatePointerMoveData(pointer: PointerType, posX: number, posY: number, canvas: HTMLCanvasElement) {
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1.0 - posY / canvas.height;
    pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
    pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
    pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
}

function updatePointerUpData(pointer: PointerType) {
    pointer.down = false;
}

function correctDeltaX(delta: number): number {
    const aspectRatio = window.innerWidth / window.innerHeight;
    if (aspectRatio < 1) delta *= aspectRatio;
    return delta;
}

function correctDeltaY(delta: number): number {
    const aspectRatio = window.innerWidth / window.innerHeight;
    if (aspectRatio > 1) delta /= aspectRatio;
    return delta;
}

// ====== SPLAT FUNCTIONS ======
function splat(gl: WebGLRenderingContext | WebGL2RenderingContext, x: number, y: number, dx: number, dy: number, color: { r: number; g: number; b: number }, splatProgram: Program, velocity: DoubleFBO, dye: DoubleFBO, blit: (target?: FBO | null, clear?: boolean) => void, canvas: HTMLCanvasElement) {
    splatProgram.bind();
    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
    gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(splatProgram.uniforms.point, x, y);
    gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
    gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
    blit(velocity.write);
    velocity.swap();

    gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
    gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
    blit(dye.write);
    dye.swap();
}

function splatPointer(gl: WebGLRenderingContext | WebGL2RenderingContext, pointer: PointerType, splatProgram: Program, velocity: DoubleFBO, dye: DoubleFBO, blit: (target?: FBO | null, clear?: boolean) => void, canvas: HTMLCanvasElement) {
    const dx = pointer.deltaX * config.SPLAT_FORCE;
    const dy = pointer.deltaY * config.SPLAT_FORCE;
    splat(gl, pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color, splatProgram, velocity, dye, blit, canvas);
}

function multipleSplats(gl: WebGLRenderingContext | WebGL2RenderingContext, amount: number, splatProgram: Program, velocity: DoubleFBO, dye: DoubleFBO, blit: (target?: FBO | null, clear?: boolean) => void, canvas: HTMLCanvasElement) {
    for (let i = 0; i < amount; i++) {
        const color = generateColor();
        color.r *= 10.0;
        color.g *= 10.0;
        color.b *= 10.0;
        const x = Math.random();
        const y = Math.random();
        const dx = 1000 * (Math.random() - 0.5);
        const dy = 1000 * (Math.random() - 0.5);
        splat(gl, x, y, dx, dy, color, splatProgram, velocity, dye, blit, canvas);
    }
}

function applyInputs(gl: WebGLRenderingContext | WebGL2RenderingContext, splatProgram: Program, velocity: DoubleFBO, dye: DoubleFBO, blit: (target?: FBO | null, clear?: boolean) => void, canvas: HTMLCanvasElement) {
    if (splatStack.length > 0)
        multipleSplats(gl, splatStack.pop()!, splatProgram, velocity, dye, blit, canvas);

    pointers.forEach(p => {
        if (p.moved) {
            p.moved = false;
            splatPointer(gl, p, splatProgram, velocity, dye, blit, canvas);
        }
    });
}

// ====== TIME MANAGEMENT ======
let lastUpdateTime = Date.now();
let colorUpdateTimer = 0.0;

function calcDeltaTime(): number {
    const now = Date.now();
    let dt = (now - lastUpdateTime) / 1000;
    dt = Math.min(dt, 0.016666);
    lastUpdateTime = now;
    return dt;
}

function updateColors(dt: number) {
    if (!config.COLORFUL) return;

    colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
    if (colorUpdateTimer >= 1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
        pointers.forEach(p => {
            p.color = generateColor();
        });
    }
}

// ====== RESIZE HANDLING ======
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function resizeCanvas(canvas: HTMLCanvasElement): boolean {
    const width = scaleByPixelRatio(canvas.clientWidth);
    const height = scaleByPixelRatio(canvas.clientHeight);
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

// ====== KEYWORD MANAGEMENT ======
function updateKeywords(displayMaterial: Material) {
    const displayKeywords: string[] = [];
    if (config.SHADING) displayKeywords.push("SHADING");
    if (config.BLOOM) displayKeywords.push("BLOOM");
    if (config.SUNRAYS) displayKeywords.push("SUNRAYS");
    displayMaterial.setKeywords(displayKeywords);
}

// ====== PHYSICS SIMULATION STEP ======
function step(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    dt: number,
    velocity: DoubleFBO,
    dye: DoubleFBO,
    divergence: FBO,
    curl: FBO,
    pressure: DoubleFBO,
    programs: {
        curlProgram: Program;
        vorticityProgram: Program;
        divergenceProgram: Program;
        clearProgram: Program;
        pressureProgram: Program;
        gradientSubtractProgram: Program;
        advectionProgram: Program;
    },
    blit: (target?: FBO | null, clear?: boolean) => void,
    ext: WebGLExt
) {
    gl.disable(gl.BLEND);

    // 1. Calculate curl (vorticity)
    programs.curlProgram.bind();
    gl.uniform2f(programs.curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(programs.curlProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(curl);

    // 2. Apply vorticity confinement
    programs.vorticityProgram.bind();
    gl.uniform2f(programs.vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(programs.vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(programs.vorticityProgram.uniforms.uCurl, curl.attach(1));
    gl.uniform1f(programs.vorticityProgram.uniforms.curl, config.CURL);
    gl.uniform1f(programs.vorticityProgram.uniforms.dt, dt);
    blit(velocity.write);
    velocity.swap();

    // 3. Calculate divergence
    programs.divergenceProgram.bind();
    gl.uniform2f(programs.divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(programs.divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergence);

    // 4. Clear pressure
    programs.clearProgram.bind();
    gl.uniform1i(programs.clearProgram.uniforms.uTexture, pressure.read.attach(0));
    gl.uniform1f(programs.clearProgram.uniforms.value, config.PRESSURE);
    blit(pressure.write);
    pressure.swap();

    // 5. Solve pressure (Jacobi iterations)
    programs.pressureProgram.bind();
    gl.uniform2f(programs.pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(programs.pressureProgram.uniforms.uDivergence, divergence.attach(0));
    for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(programs.pressureProgram.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
    }

    // 6. Subtract pressure gradient
    programs.gradientSubtractProgram.bind();
    gl.uniform2f(programs.gradientSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(programs.gradientSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
    gl.uniform1i(programs.gradientSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write);
    velocity.swap();

    // 7. Advect velocity
    programs.advectionProgram.bind();
    gl.uniform2f(programs.advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    if (!ext.supportLinearFiltering)
        gl.uniform2f(programs.advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
    const velocityId = velocity.read.attach(0);
    gl.uniform1i(programs.advectionProgram.uniforms.uVelocity, velocityId);
    gl.uniform1i(programs.advectionProgram.uniforms.uSource, velocityId);
    gl.uniform1f(programs.advectionProgram.uniforms.dt, dt);
    gl.uniform1f(programs.advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
    blit(velocity.write);
    velocity.swap();

    // 8. Advect dye
    if (!ext.supportLinearFiltering)
        gl.uniform2f(programs.advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
    gl.uniform1i(programs.advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(programs.advectionProgram.uniforms.uSource, dye.read.attach(1));
    gl.uniform1f(programs.advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
    blit(dye.write);
    dye.swap();
}

// ====== BLOOM POST-PROCESSING ======
function applyBloom(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    source: FBO,
    destination: FBO,
    bloom: FBO,
    bloomFramebuffers: FBO[],
    programs: {
        bloomPrefilterProgram: Program;
        bloomBlurProgram: Program;
        bloomFinalProgram: Program;
    },
    blit: (target?: FBO | null, clear?: boolean) => void
) {
    if (bloomFramebuffers.length < 2)
        return;

    let last = destination;

    gl.disable(gl.BLEND);
    programs.bloomPrefilterProgram.bind();
    const knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 0.0001;
    const curve0 = config.BLOOM_THRESHOLD - knee;
    const curve1 = knee * 2;
    const curve2 = 0.25 / knee;
    gl.uniform3f(programs.bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
    gl.uniform1f(programs.bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD);
    gl.uniform1i(programs.bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
    blit(last);

    programs.bloomBlurProgram.bind();
    for (let i = 0; i < bloomFramebuffers.length; i++) {
        const dest = bloomFramebuffers[i];
        gl.uniform2f(programs.bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
        gl.uniform1i(programs.bloomBlurProgram.uniforms.uTexture, last.attach(0));
        blit(dest);
        last = dest;
    }

    gl.blendFunc(gl.ONE, gl.ONE);
    gl.enable(gl.BLEND);

    for (let i = bloomFramebuffers.length - 2; i >= 0; i--) {
        const baseTex = bloomFramebuffers[i];
        gl.uniform2f(programs.bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
        gl.uniform1i(programs.bloomBlurProgram.uniforms.uTexture, last.attach(0));
        gl.viewport(0, 0, baseTex.width, baseTex.height);
        blit(baseTex);
        last = baseTex;
    }

    gl.disable(gl.BLEND);
    programs.bloomFinalProgram.bind();
    gl.uniform2f(programs.bloomFinalProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
    gl.uniform1i(programs.bloomFinalProgram.uniforms.uTexture, last.attach(0));
    gl.uniform1f(programs.bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);
    blit(destination);
}

// ====== SUNRAYS POST-PROCESSING ======
function applySunrays(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    source: FBO,
    mask: FBO,
    destination: FBO,
    programs: {
        sunraysMaskProgram: Program;
        sunraysProgram: Program;
    },
    blit: (target?: FBO | null, clear?: boolean) => void
) {
    gl.disable(gl.BLEND);
    programs.sunraysMaskProgram.bind();
    gl.uniform1i(programs.sunraysMaskProgram.uniforms.uTexture, source.attach(0));
    blit(mask);

    programs.sunraysProgram.bind();
    gl.uniform1f(programs.sunraysProgram.uniforms.weight, config.SUNRAYS_WEIGHT);
    gl.uniform1i(programs.sunraysProgram.uniforms.uTexture, mask.attach(0));
    blit(destination);
}

// ====== BLUR UTILITY ======
function blur(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    target: FBO,
    temp: FBO,
    iterations: number,
    blurProgram: Program,
    blit: (target?: FBO | null, clear?: boolean) => void
) {
    blurProgram.bind();
    for (let i = 0; i < iterations; i++) {
        gl.uniform2f(blurProgram.uniforms.texelSize, target.texelSizeX, 0.0);
        gl.uniform1i(blurProgram.uniforms.uTexture, target.attach(0));
        blit(temp);

        gl.uniform2f(blurProgram.uniforms.texelSize, 0.0, target.texelSizeY);
        gl.uniform1i(blurProgram.uniforms.uTexture, temp.attach(0));
        blit(target);
    }
}

// ====== MAIN RENDER FUNCTION ======
function render(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    target: FBO | null,
    dye: DoubleFBO,
    bloom: FBO,
    bloomFramebuffers: FBO[],
    sunrays: FBO,
    sunraysTemp: FBO,
    ditheringTexture: { texture: WebGLTexture | null; width: number; height: number; attach: (id: number) => number },
    programs: {
        colorProgram: Program;
        checkerboardProgram: Program;
        bloomPrefilterProgram: Program;
        bloomBlurProgram: Program;
        bloomFinalProgram: Program;
        sunraysMaskProgram: Program;
        sunraysProgram: Program;
        blurProgram: Program;
    },
    displayMaterial: Material,
    blit: (target?: FBO | null, clear?: boolean) => void,
    canvas: HTMLCanvasElement
) {
    if (config.BLOOM)
        applyBloom(gl, dye.read, bloom, bloom, bloomFramebuffers, programs, blit);
    
    if (config.SUNRAYS) {
        applySunrays(gl, dye.read, dye.write, sunrays, programs, blit);
        blur(gl, sunrays, sunraysTemp, 1, programs.blurProgram, blit);
    }

    if (target == null || !config.TRANSPARENT) {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    } else {
        gl.disable(gl.BLEND);
    }

    if (!config.TRANSPARENT)
        drawColor(gl, target, normalizeColor(config.BACK_COLOR), programs.colorProgram, blit);
    if (target == null && config.TRANSPARENT)
        drawCheckerboard(gl, target, programs.checkerboardProgram, blit, canvas);
    drawDisplay(gl, target, dye, bloom, sunrays, ditheringTexture, displayMaterial, blit, canvas);
}

function drawColor(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    target: FBO | null,
    color: { r: number; g: number; b: number },
    colorProgram: Program,
    blit: (target?: FBO | null, clear?: boolean) => void
) {
    colorProgram.bind();
    gl.uniform4f(colorProgram.uniforms.color, color.r, color.g, color.b, 1);
    blit(target);
}

function drawCheckerboard(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    target: FBO | null,
    checkerboardProgram: Program,
    blit: (target?: FBO | null, clear?: boolean) => void,
    canvas: HTMLCanvasElement
) {
    checkerboardProgram.bind();
    gl.uniform1f(checkerboardProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    blit(target);
}

function drawDisplay(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    target: FBO | null,
    dye: DoubleFBO,
    bloom: FBO,
    sunrays: FBO,
    ditheringTexture: { texture: WebGLTexture | null; width: number; height: number; attach: (id: number) => number },
    displayMaterial: Material,
    blit: (target?: FBO | null, clear?: boolean) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    canvas: HTMLCanvasElement
) {
    const width = target == null ? gl.drawingBufferWidth : target.width;
    const height = target == null ? gl.drawingBufferHeight : target.height;

    displayMaterial.bind();
    if (config.SHADING)
        gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
    gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
    if (config.BLOOM) {
        gl.uniform1i(displayMaterial.uniforms.uBloom, bloom.attach(1));
        gl.uniform1i(displayMaterial.uniforms.uDithering, ditheringTexture.attach(2));
        const scale = getTextureScale(ditheringTexture, width, height);
        gl.uniform2f(displayMaterial.uniforms.ditherScale, scale.x, scale.y);
    }
    if (config.SUNRAYS)
        gl.uniform1i(displayMaterial.uniforms.uSunrays, sunrays.attach(3));
    blit(target);
}

// ====== FRAMEBUFFER INITIALIZATION ======
function initFramebuffers(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    ext: WebGLExt,
    copyProgram: Program,
    existingBuffers?: {
        dye?: DoubleFBO;
        velocity?: DoubleFBO;
        divergence?: FBO;
        curl?: FBO;
        pressure?: DoubleFBO;
        bloom?: FBO;
        bloomFramebuffers?: FBO[];
        sunrays?: FBO;
        sunraysTemp?: FBO;
    }
) {
    const simRes = getResolution(config.SIM_RESOLUTION);
    const dyeRes = getResolution(config.DYE_RESOLUTION);

    const texType = ext.halfFloatTexType;
    const rgba = ext.formatRGBA!;
    const rg = ext.formatRG!;
    const r = ext.formatR!;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    gl.disable(gl.BLEND);

    let dye: DoubleFBO;
    if (existingBuffers?.dye == null)
        dye = createDoubleFBO(gl, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
    else
        dye = resizeDoubleFBO(gl, existingBuffers.dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering, copyProgram);

    let velocity: DoubleFBO;
    if (existingBuffers?.velocity == null)
        velocity = createDoubleFBO(gl, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
    else
        velocity = resizeDoubleFBO(gl, existingBuffers.velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering, copyProgram);

    const divergence = createFBO(gl, simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    const curl = createFBO(gl, simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    const pressure = createDoubleFBO(gl, simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);

    // Initialize bloom framebuffers
    const bloomRes = getResolution(config.BLOOM_RESOLUTION);
    const bloom = createFBO(gl, bloomRes.width, bloomRes.height, rgba.internalFormat, rgba.format, texType, filtering);
    
    const bloomFramebuffers: FBO[] = [];
    for (let i = 0; i < config.BLOOM_ITERATIONS; i++) {
        const width = bloomRes.width >> (i + 1);
        const height = bloomRes.height >> (i + 1);
        if (width < 2 || height < 2) break;
        const fbo = createFBO(gl, width, height, rgba.internalFormat, rgba.format, texType, filtering);
        bloomFramebuffers.push(fbo);
    }

    // Initialize sunrays framebuffers
    const sunraysRes = getResolution(config.SUNRAYS_RESOLUTION);
    const sunrays = createFBO(gl, sunraysRes.width, sunraysRes.height, r.internalFormat, r.format, texType, filtering);
    const sunraysTemp = createFBO(gl, sunraysRes.width, sunraysRes.height, r.internalFormat, r.format, texType, filtering);

    return {
        dye,
        velocity,
        divergence,
        curl,
        pressure,
        bloom,
        bloomFramebuffers,
        sunrays,
        sunraysTemp
    };
}

const WebGL: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Touch gesture detection refs
  const touchStartData = useRef<{ x: number; y: number; time: number; id: number } | null>(null);
  const touchMoveData = useRef<{ totalDistance: number; horizontalDistance: number; verticalDistance: number }>({
    totalDistance: 0,
    horizontalDistance: 0,
    verticalDistance: 0
  });
  const isFluidInteractionRef = useRef(false);

  useEffect(() => {
    // Set mounted flag to ensure client-side only rendering
    setIsMounted(true)
  }, []);

  useEffect(() => {
    // Only initialize WebGL after component is mounted and refs are available
    if (!isMounted || !containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;

    // Resize canvas function - Pavel's logic
    const resizeCanvas = () => {
      const width = scaleByPixelRatio(canvas.clientWidth);
      const height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    };

    // Initialize WebGL context
    const { gl, ext } = getWebGLContext(canvas);

    // Mobile adjustments - exactly like Pavel's
    if (isMobile()) {
      config.DYE_RESOLUTION = 512;
    }
    if (!ext.supportLinearFiltering) {
      config.DYE_RESOLUTION = 512;
      config.SHADING = false;
      config.BLOOM = false;
      config.SUNRAYS = false;
    }

    console.log('Pavel\'s WebGL fluid simulation initialized');
    console.log('WebGL version:', gl.getParameter(gl.VERSION));
    console.log('Linear filtering support:', ext.supportLinearFiltering);

    // Compile all shaders
    const baseVertexShader = compileShader(gl, gl.VERTEX_SHADER, baseVertexShaderSource);
    const blurVertexShader = compileShader(gl, gl.VERTEX_SHADER, blurVertexShaderSource);

    const blurProgram = new Program(gl, blurVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, blurShaderSource));
    const copyProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, copyShaderSource));
    const clearProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, clearShaderSource));
    const colorProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, colorShaderSource));
    const checkerboardProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, checkerboardShaderSource));
    const bloomPrefilterProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, bloomPrefilterShaderSource));
    const bloomBlurProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, bloomBlurShaderSource));
    const bloomFinalProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, bloomFinalShaderSource));
    const sunraysMaskProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, sunraysMaskShaderSource));
    const sunraysProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, sunraysShaderSource));
    const splatProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, splatShaderSource));
    const advectionProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, advectionShaderSource, ext.supportLinearFiltering ? undefined : ['MANUAL_FILTERING']));
    const divergenceProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, divergenceShaderSource));
    const curlProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, curlShaderSource));
    const vorticityProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, vorticityShaderSource));
    const pressureProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, pressureShaderSource));
    const gradientSubtractProgram = new Program(gl, baseVertexShader, compileShader(gl, gl.FRAGMENT_SHADER, gradientSubtractShaderSource));

    const displayMaterial = new Material(gl, baseVertexShader, displayShaderSource);

    // Create blit function
    const blit = createBlit(gl);

    // Create dithering texture (placeholder for now)
    const ditheringTexture = {
        texture: gl.createTexture(),
        width: 1,
        height: 1,
        attach(id: number) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            return id;
        }
    };

    // Initialize dithering texture with white pixel
    gl.bindTexture(gl.TEXTURE_2D, ditheringTexture.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

    // Initialize framebuffers
    let framebuffers = initFramebuffers(gl, ext, copyProgram);

    // Update shader keywords
    updateKeywords(displayMaterial);

    // Initial resize
    resizeCanvas();

    // Initial splats for startup effect
    multipleSplats(gl, Math.floor(Math.random() * 20) + 5, splatProgram, framebuffers.velocity, framebuffers.dye, blit, canvas);

    // Animation loop
    const animate = () => {
      const dt = calcDeltaTime();
      
      if (resizeCanvas()) {
        framebuffers = initFramebuffers(gl, ext, copyProgram, framebuffers);
      }
      
      updateColors(dt);
      applyInputs(gl, splatProgram, framebuffers.velocity, framebuffers.dye, blit, canvas);
      
      if (!config.PAUSED) {
        step(gl, dt, framebuffers.velocity, framebuffers.dye, framebuffers.divergence, framebuffers.curl, framebuffers.pressure, {
          curlProgram,
          vorticityProgram,
          divergenceProgram,
          clearProgram,
          pressureProgram,
          gradientSubtractProgram,
          advectionProgram
        }, blit, ext);
      }
      
      render(gl, null, framebuffers.dye, framebuffers.bloom, framebuffers.bloomFramebuffers, framebuffers.sunrays, framebuffers.sunraysTemp, ditheringTexture, {
        colorProgram,
        checkerboardProgram,
        bloomPrefilterProgram,
        bloomBlurProgram,
        bloomFinalProgram,
        sunraysMaskProgram,
        sunraysProgram,
        blurProgram
      }, displayMaterial, blit, canvas);

      requestAnimationFrame(animate);
    };

    animate();

    // Auto-trigger splats for continuous animation
    const autoSplat = () => {
      // Generate 8-15 random splats every 3-5 seconds for more dramatic effect
      const splatCount = Math.floor(Math.random() * 8) + 8;
      multipleSplats(gl, splatCount, splatProgram, framebuffers.velocity, framebuffers.dye, blit, canvas);
      
      // Schedule next auto-splat with random interval (3-6 seconds)
      const nextInterval = (Math.random() * 3 + 3) * 1000; // 3000-6000ms
      setTimeout(autoSplat, nextInterval);
    };

    // Start auto-splat after initial 2 seconds
    setTimeout(autoSplat, 2000);

    // Event handlers
    const handleMouseDown = (e: MouseEvent) => {
      const posX = scaleByPixelRatio(e.offsetX);
      const posY = scaleByPixelRatio(e.offsetY);
      let pointer = pointers.find(p => p.id === -1);
      if (pointer == null) {
        pointer = pointerPrototype();
        pointers.push(pointer);
      }
      updatePointerDownData(pointer, -1, posX, posY, canvas);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const pointer = pointers.find(p => p.id === -1);
      if (!pointer || !pointer.down) return;
      const posX = scaleByPixelRatio(e.offsetX);
      const posY = scaleByPixelRatio(e.offsetY);
      updatePointerMoveData(pointer, posX, posY, canvas);
    };

    const handleMouseUp = () => {
      const pointer = pointers.find(p => p.id === -1);
      if (pointer) {
        updatePointerUpData(pointer);
      }
    };

    // Smart touch detection - determines if touch is for fluid interaction or scrolling
    const shouldPreventDefault = (currentTouch: { x: number; y: number }, startTouch: { x: number; y: number }, timeElapsed: number) => {
      const deltaX = Math.abs(currentTouch.x - startTouch.x);
      const deltaY = Math.abs(currentTouch.y - startTouch.y);
      const totalDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Update move data for tracking
      touchMoveData.current.totalDistance = totalDistance;
      touchMoveData.current.horizontalDistance = deltaX;
      touchMoveData.current.verticalDistance = deltaY;
      
      // Thresholds for detecting interaction intent
      const MOVEMENT_THRESHOLD = 15; // pixels - minimum movement to determine intent
      const HORIZONTAL_BIAS_THRESHOLD = 0.7; // ratio - how much horizontal vs vertical movement
      const TIME_THRESHOLD = 150; // ms - quick movements are more likely scrolling
      
      // If very little movement, allow default behavior (potential scroll start)
      if (totalDistance < MOVEMENT_THRESHOLD) {
        return false;
      }
      
      // If movement is very quick and primarily vertical, it's likely scrolling
      if (timeElapsed < TIME_THRESHOLD && deltaY > deltaX * 1.5) {
        return false;
      }
      
      // If movement has significant horizontal component or is circular/chaotic, it's likely fluid interaction
      if (deltaX > deltaY * HORIZONTAL_BIAS_THRESHOLD || totalDistance > MOVEMENT_THRESHOLD * 2) {
        return true;
      }
      
      // Default: allow scrolling for primarily vertical movements
      return deltaX > deltaY;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        // Store initial touch data
        touchStartData.current = {
          x: touch.pageX,
          y: touch.pageY,
          time: Date.now(),
          id: touch.identifier
        };
        
        // Reset interaction state
        isFluidInteractionRef.current = false;
        touchMoveData.current = { totalDistance: 0, horizontalDistance: 0, verticalDistance: 0 };
      }
      
      // Always prevent default for multi-touch (clearly fluid interaction)
      if (e.touches.length > 1) {
        e.preventDefault();
        isFluidInteractionRef.current = true;
      }
      
      const touches = e.targetTouches;
      while (touches.length >= pointers.length)
        pointers.push(pointerPrototype());
      for (let i = 0; i < touches.length; i++) {
        const posX = scaleByPixelRatio(touches[i].pageX);
        const posY = scaleByPixelRatio(touches[i].pageY);
        updatePointerDownData(pointers[i + 1], touches[i].identifier, posX, posY, canvas);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      
      // Check if we should prevent default based on gesture analysis
      if (touch && touchStartData.current && touch.identifier === touchStartData.current.id) {
        const currentTime = Date.now();
        const timeElapsed = currentTime - touchStartData.current.time;
        const currentTouch = { x: touch.pageX, y: touch.pageY };
        const startTouch = { x: touchStartData.current.x, y: touchStartData.current.y };
        
        // Determine if this should be treated as fluid interaction
        const shouldPrevent = shouldPreventDefault(currentTouch, startTouch, timeElapsed);
        
        if (shouldPrevent || isFluidInteractionRef.current) {
          e.preventDefault();
          isFluidInteractionRef.current = true;
        }
      }
      
      // Always prevent default for multi-touch
      if (e.touches.length > 1) {
        e.preventDefault();
        isFluidInteractionRef.current = true;
      }
      
      const touches = e.targetTouches;
      for (let i = 0; i < touches.length; i++) {
        const pointer = pointers[i + 1];
        if (!pointer.down) continue;
        const posX = scaleByPixelRatio(touches[i].pageX);
        const posY = scaleByPixelRatio(touches[i].pageY);
        updatePointerMoveData(pointer, posX, posY, canvas);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // Reset touch interaction state when all touches end
      if (e.touches.length === 0) {
        touchStartData.current = null;
        isFluidInteractionRef.current = false;
        touchMoveData.current = { totalDistance: 0, horizontalDistance: 0, verticalDistance: 0 };
      }
      
      const touches = e.changedTouches;
      for (let i = 0; i < touches.length; i++) {
        const pointer = pointers.find(p => p.id === touches[i].identifier);
        if (pointer == null) continue;
        updatePointerUpData(pointer);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'KeyP')
        config.PAUSED = !config.PAUSED;
      if (e.key === ' ')
        splatStack.push(Math.floor(Math.random() * 20) + 5);
    };

    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart, false);
    canvas.addEventListener('touchmove', handleTouchMove, false);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [isMounted]);

  // Don't render anything until mounted on client side
  if (!isMounted) {
    return (
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ background: 'black' }}
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'black' }}
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};

// Utility function from Pavel's code
function scaleByPixelRatio(input: number): number {
  const pixelRatio = window.devicePixelRatio || 1;
  return Math.floor(input * pixelRatio);
}

export default WebGL;
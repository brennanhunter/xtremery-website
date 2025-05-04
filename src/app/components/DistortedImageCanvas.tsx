'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {OrthographicCamera } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useRef } from 'react';
import * as THREE from 'three';

function RippleImage() {
  const texture = useLoader(TextureLoader, '/Images/hunter-fixing.png');
  const shaderRef = useRef<any>(null);

  useFrame(({ clock, mouse }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();

      const u = mouse.x * 0.5 + 0.5;
      const v = mouse.y * 0.5 + 0.5;
      shaderRef.current.uniforms.uMouse.value.set(u, v);
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[12, 8]} />
      <shaderMaterial
        ref={shaderRef}
        args={[{
          uniforms: {
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform sampler2D uTexture;
            uniform float uTime;
            uniform vec2 uMouse;
            varying vec2 vUv;

            void main() {
              vec2 uv = vUv;

              vec2 center = vec2(0.5, 0.5);
              float distFromCenter = distance(uv, center);
              uv.y += 0.0004 * sin(distFromCenter * 60.0 - uTime * 4.0);

              float dist = distance(uv, uMouse);
              float strength = 0.002 / (dist + 0.1);
              uv += normalize(uv - uMouse) * strength;

              gl_FragColor = texture2D(uTexture, uv);
            }
          `,
          transparent: false,
        }]}
      />
    </mesh>
  );
}

export default function DistortedImageCanvas() {
  return (
    <div style={{ width: '100%', height: '1000px' }}>
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
        <ambientLight />
        <OrthographicCamera makeDefault zoom={50} position={[0, 0, 10]} />
        <RippleImage />
      </Canvas>
    </div>
  );
}
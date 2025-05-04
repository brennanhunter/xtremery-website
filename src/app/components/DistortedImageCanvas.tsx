'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { TextureLoader, ShaderMaterial } from 'three';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function RippleImage({ size }: { size: [number, number] }) {
  const texture = useLoader(TextureLoader, '/Images/hunter-fixing.png');
  const shaderRef = useRef<ShaderMaterial | null>(null);

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
      <planeGeometry args={size} />
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const zoom = isMobile ? 35 : 70;
  const planeSize: [number, number] = isMobile ? [4, 3] : [9, 6];

  return (
    <div
  className="w-full h-[600px] max-w-full overflow-hidden"
  style={{
    maxWidth: '100vw',
    overflowX: 'hidden',
    margin: 0,
    padding: 0,
  }}
>
      <Canvas orthographic camera={{ zoom, position: [0, 0, 10] }}>
        <ambientLight />
        <OrthographicCamera makeDefault zoom={zoom} position={[0, 0, 10]} />
        <RippleImage size={planeSize} />
      </Canvas>
    </div>
  );
}

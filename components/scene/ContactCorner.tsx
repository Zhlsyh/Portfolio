import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Ball, Box, C, Cyl, DISPLAY_FONT, useCanvasTexture } from './shared';

/** Pojok kontak: kotak surat dengan bendera yang melambai dan amplop melayang. */
export default function ContactCorner() {
  const flag = useRef<THREE.Group>(null!);
  const envelopes = useRef<THREE.Group[]>([]);

  const sign = useCanvasTexture(256, 96, (ctx, w, h) => {
    ctx.fillStyle = C.yellow;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = C.ink;
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, w - 8, h - 8);
    ctx.fillStyle = C.ink;
    ctx.font = `800 52px ${DISPLAY_FONT}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Say hi!', w / 2, h / 2 + 3);
  });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    flag.current.rotation.z = -0.15 + Math.sin(t * 2.4) * 0.12;
    envelopes.current.forEach((g, i) => {
      if (!g) return;
      g.position.y = 2.6 + i * 0.45 + Math.sin(t * 1.3 + i * 2.1) * 0.14;
      g.rotation.y = Math.sin(t * 0.8 + i) * 0.5;
      g.rotation.z = Math.sin(t * 1.1 + i * 1.7) * 0.15;
    });
  });

  return (
    <group>
      {/* karpet */}
      <Cyl r={1.9} h={0.03} pos={[0, 0.03, 0.2]} color={C.pink} rough={0.95} cast={false} />

      {/* kotak surat */}
      <Box size={[0.2, 1.3, 0.2]} pos={[0, 0.65, -0.3]} color="#b97f47" />
      <Box size={[0.7, 0.1, 0.5]} pos={[0, 0.05, -0.3]} color={C.grey} radius={0.03} />
      <Box size={[1.25, 0.8, 0.9]} pos={[0, 1.7, -0.3]} color={C.sky} radius={0.22} />
      <Box size={[0.9, 0.34, 0.03]} pos={[0, 1.66, 0.17]} color="#1d6f93" radius={0.015} cast={false} />
      <Box size={[0.26, 0.05, 0.04]} pos={[0, 1.66, 0.2]} color={C.paper} radius={0.02} cast={false} />
      <group ref={flag} position={[0.64, 1.62, -0.3]}>
        <Box size={[0.06, 0.62, 0.06]} pos={[0, 0.31, 0]} color={C.paper} />
        <Box size={[0.34, 0.2, 0.04]} pos={[0.19, 0.55, 0]} color="#ff5a5a" radius={0.015} />
      </group>
      <mesh position={[-0.0, 0.85, -0.18]}>
        <planeGeometry args={[0.8, 0.3]} />
        <meshBasicMaterial map={sign} toneMapped={false} />
      </mesh>

      {/* amplop melayang */}
      {[0, 1, 2].map((i) => (
        <group
          key={i}
          position={[0.9 + (i % 2) * -0.1, 2.6 + i * 0.45, 0.4]}
          ref={(g) => {
            if (g) envelopes.current[i] = g;
          }}
        >
          <Box size={[0.58, 0.4, 0.03]} color={C.paper} radius={0.012} />
          <Box size={[0.3, 0.3, 0.02]} pos={[0, 0.12, 0.02]} rot={[0, 0, Math.PI / 4]} color={[C.pink, C.yellow, C.mint][i]} cast={false} />
        </group>
      ))}

      {/* tanaman */}
      <group position={[1.7, 0, 1.05]}>
        <Cyl r={0.26} r2={0.2} h={0.4} pos={[0, 0.2, 0]} color={C.orange} />
        <Ball r={0.27} pos={[0, 0.62, 0]} color="#59b88a" scale={[1, 0.9, 1]} />
        <Ball r={0.2} pos={[0.17, 0.85, 0.05]} color="#6fcf9d" />
        <Ball r={0.18} pos={[-0.15, 0.82, -0.05]} color="#4aa57b" />
      </group>

      {/* tumpukan surat & telepon kaleng */}
      <Box size={[0.6, 0.06, 0.42]} pos={[-1.5, 0.06, 1.0]} rot={[0, 0.3, 0]} color={C.paper} />
      <Box size={[0.6, 0.06, 0.42]} pos={[-1.5, 0.12, 1.0]} rot={[0, -0.1, 0]} color={C.yellow} />
      <Box size={[0.6, 0.06, 0.42]} pos={[-1.5, 0.18, 1.0]} rot={[0, 0.2, 0]} color={C.mint} />
    </group>
  );
}

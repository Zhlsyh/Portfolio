import { useRef, type MutableRefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Lang } from '@/data/i18n';
import { Ball, Box, C, Cyl, DISPLAY_FONT, useCanvasTexture } from './shared';
import Mascot from './Mascot';

/** Tengah diorama: maskot Helmi yang mengikuti kamera, papan nama, dan pemutar piringan hitam. */
export default function Center({
  progress,
  dark,
  lang,
}: {
  progress: MutableRefObject<number>;
  dark: boolean;
  lang: Lang;
}) {
  const root = useRef<THREE.Group>(null!);
  const vinyl = useRef<THREE.Group>(null!);
  const notes = useRef<THREE.Group[]>([]);

  const sign = useCanvasTexture(512, 192, (ctx, w, h) => {
    ctx.fillStyle = C.paper;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = C.ink;
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, w - 10, h - 10);
    ctx.fillStyle = C.ink;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `800 80px ${DISPLAY_FONT}`;
    ctx.fillText('Zillyast', w / 2, h / 2 - 12);
    ctx.fillStyle = C.orange;
    ctx.font = `700 34px ${DISPLAY_FONT}`;
    ctx.fillText('embedded × kreatif', w / 2, h / 2 + 52);
  });

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    vinyl.current.rotation.y += dt * 3.2;
    notes.current.forEach((g, i) => {
      if (!g) return;
      const u = (t * 0.35 + i / 3) % 1;
      g.position.set(1.0 + Math.sin(u * 6 + i) * 0.18, 0.55 + u * 1.5, 0.95);
      g.scale.setScalar(Math.sin(u * Math.PI) * 1.0 + 0.01);
      g.rotation.z = Math.sin(u * 5) * 0.4;
    });
  });

  return (
    <group ref={root}>
      <Cyl r={1.15} h={0.12} pos={[0, 0.06, 0.2]} color={C.orange} seg={40} />
      <Cyl r={0.9} h={0.02} pos={[0, 0.13, 0.2]} color="#ffa273" seg={40} cast={false} />

      {/* papan nama */}
      <Box size={[0.08, 1.2, 0.08]} pos={[-0.85, 0.7, -0.75]} color="#b97f47" />
      <Box size={[0.08, 1.2, 0.08]} pos={[0.85, 0.7, -0.75]} color="#b97f47" />
      <Box size={[2.05, 0.8, 0.07]} pos={[0, 1.45, -0.75]} color={C.paper} radius={0.03} />
      <mesh position={[0, 1.45, -0.71]}>
        <planeGeometry args={[1.95, 0.73]} />
        <meshBasicMaterial map={sign} toneMapped={false} />
      </mesh>


      {/* pemutar piringan hitam */}
      <group position={[0.85, 0.12, 0.95]} rotation={[0, -0.5, 0]}>
        <Box size={[0.9, 0.18, 0.7]} pos={[0, 0.09, 0]} color="#b97f47" radius={0.04} />
        <Cyl r={0.27} h={0.03} pos={[-0.05, 0.2, 0]} color="#3a3344" />
        <group ref={vinyl} position={[-0.05, 0.23, 0]}>
          <Cyl r={0.25} h={0.025} color={C.ink} rough={0.3} />
          <Cyl r={0.09} h={0.03} pos={[0, 0.005, 0]} color={C.orange} />
          <Box size={[0.03, 0.035, 0.1]} pos={[0.12, 0.012, 0.08]} color="#ffffff" cast={false} />
        </group>
        <Box size={[0.04, 0.05, 0.4]} pos={[0.33, 0.24, -0.02]} rot={[0, 0.5, 0]} color={C.steel} cast={false} />
        <Cyl r={0.05} h={0.08} pos={[0.36, 0.22, -0.22]} color={C.grey} />
      </group>
      <group position={[1.45, 0.12, 0.6]} rotation={[0, -0.7, 0]}>
        <Box size={[0.3, 0.55, 0.28]} pos={[0, 0.275, 0]} color={C.ink} radius={0.04} />
        <Cyl r={0.1} h={0.02} pos={[0, 0.2, 0.15]} rot={[Math.PI / 2, 0, 0]} color="#59506a" />
        <Cyl r={0.05} h={0.02} pos={[0, 0.42, 0.15]} rot={[Math.PI / 2, 0, 0]} color="#59506a" />
      </group>
      {[0, 1, 2].map((i) => (
        <group
          key={i}
          ref={(g) => {
            if (g) notes.current[i] = g;
          }}
        >
          <Ball r={0.07} color={[C.pink, C.sky, C.yellow][i]} scale={[1, 0.8, 1]} cast={false} />
          <Box size={[0.025, 0.22, 0.025]} pos={[0.06, 0.11, 0]} color={[C.pink, C.sky, C.yellow][i]} cast={false} />
        </group>
      ))}

      {/* maskot */}
      <Mascot progress={progress} dark={dark} lang={lang} />
    </group>
  );
}

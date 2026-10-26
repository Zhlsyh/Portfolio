import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Box, C, Cyl, useCanvasTexture } from './shared';

type Draw = (ctx: CanvasRenderingContext2D, w: number, h: number) => void;

const bg = (ctx: CanvasRenderingContext2D, w: number, h: number, color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
};

const screenA: Draw = (ctx, w, h) => {
  bg(ctx, w, h, '#fff3d6');
  ctx.fillStyle = C.orange;
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.5, h * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.sky;
  ctx.fillRect(w * 0.5, h * 0.2, w * 0.35, h * 0.6);
  ctx.fillStyle = C.ink;
  ctx.fillRect(w * 0.5, h * 0.85, w * 0.35, 8);
};
const screenB: Draw = (ctx, w, h) => {
  bg(ctx, w, h, '#d9f0ff');
  ctx.fillStyle = C.yellow;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.12);
  ctx.lineTo(w * 0.85, h * 0.85);
  ctx.lineTo(w * 0.15, h * 0.85);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.fillStyle = C.pink;
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.25, h * 0.12, 0, Math.PI * 2);
  ctx.fill();
};
const screenC: Draw = (ctx, w, h) => {
  bg(ctx, w, h, '#ffe0e8');
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = [C.mint, C.sky, C.yellow, C.orange, C.pink, C.ink][i];
    ctx.fillRect(w * 0.08 + i * w * 0.14, h * (0.2 + (i % 3) * 0.08), w * 0.11, h * 0.6 - (i % 3) * h * 0.1);
  }
};
const posterDraw: Draw = (ctx, w, h) => {
  bg(ctx, w, h, '#ffd24a');
  ctx.fillStyle = C.ink;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.36, w * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.orange;
  ctx.beginPath();
  ctx.arc(w * 0.62, h * 0.3, w * 0.16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.sky;
  ctx.fillRect(w * 0.12, h * 0.72, w * 0.76, h * 0.07);
  ctx.fillStyle = C.paper;
  ctx.fillRect(w * 0.12, h * 0.84, w * 0.45, h * 0.05);
};

/** Pojok desain grafis: monitor yang bergonta-ganti karya, tablet, poster, dan bentuk melayang. */
export default function DesignDesk() {
  const screens = [useCanvasTexture(256, 160, screenA), useCanvasTexture(256, 160, screenB), useCanvasTexture(256, 160, screenC)];
  const poster = useCanvasTexture(160, 220, posterDraw);
  const screenMat = useRef<THREE.MeshBasicMaterial>(null!);
  const shapes = useRef<THREE.Mesh[]>([]);
  const current = useRef(0);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const idx = Math.floor(t / 2.6) % 3;
    if (idx !== current.current) {
      current.current = idx;
      screenMat.current.map = screens[idx];
      screenMat.current.needsUpdate = true;
    }
    shapes.current.forEach((m, i) => {
      if (!m) return;
      m.rotation.x += dt * (0.5 + i * 0.2);
      m.rotation.y += dt * (0.7 - i * 0.15);
      m.position.y = 2.75 + Math.sin(t * 1.4 + i * 2) * 0.12 + i * 0.28;
    });
  });

  return (
    <group>
      {/* meja */}
      <Box size={[3.4, 0.14, 1.5]} pos={[0, 1.0, -0.4]} color={C.paper} radius={0.05} />
      {[
        [-1.5, -1.0],
        [1.5, -1.0],
        [-1.5, 0.2],
        [1.5, 0.2],
      ].map(([x, z], i) => (
        <Box key={i} size={[0.14, 0.93, 0.14]} pos={[x, 0.47, z]} color={C.sky} />
      ))}

      {/* monitor */}
      <Box size={[0.2, 0.55, 0.12]} pos={[-0.2, 1.35, -0.95]} color={C.grey} />
      <Box size={[0.7, 0.04, 0.4]} pos={[-0.2, 1.09, -0.9]} color={C.grey} radius={0.015} />
      <group position={[-0.2, 1.95, -0.98]} rotation={[-0.05, 0.12, 0]}>
        <Box size={[1.5, 0.95, 0.07]} color={C.ink} radius={0.04} />
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.38, 0.83]} />
          <meshBasicMaterial ref={screenMat} map={screens[0]} toneMapped={false} />
        </mesh>
      </group>

      {/* tablet + stylus */}
      <group position={[0.95, 1.1, 0.05]} rotation={[0, -0.35, 0]}>
        <Box size={[0.85, 0.04, 0.58]} color={C.ink} radius={0.02} />
        <Box size={[0.74, 0.01, 0.48]} pos={[0, 0.025, 0]} color="#fdf3dc" cast={false} />
        <Cyl r={0.016} h={0.5} pos={[0.2, 0.05, 0.18]} rot={[Math.PI / 2, 0, 0.5]} color={C.pink} seg={8} />
      </group>

      {/* tumpukan poster */}
      {[C.mint, C.pink, C.yellow, C.sky].map((c, i) => (
        <Box
          key={c}
          size={[0.75, 0.025, 0.55]}
          pos={[-1.15, 1.1 + i * 0.03, -0.05]}
          rot={[0, 0.12 * (i - 1.5), 0]}
          color={c}
        />
      ))}

      {/* gelas pensil */}
      <Cyl r={0.12} h={0.3} pos={[1.4, 1.22, -0.85]} color={C.orange} />
      {[C.yellow, C.sky, C.pink, C.mint].map((c, i) => (
        <Cyl
          key={c}
          r={0.014}
          h={0.42}
          pos={[1.4 + (i - 1.5) * 0.035, 1.5, -0.85 + ((i % 2) - 0.5) * 0.05]}
          rot={[(i - 1.5) * 0.12, 0, (1.5 - i) * 0.14]}
          color={c}
          seg={6}
        />
      ))}

      {/* swatch warna */}
      {[C.orange, C.yellow, C.mint, C.sky, C.pink].map((c, i) => (
        <Cyl key={c} r={0.07} h={0.02} pos={[-0.5 + i * 0.2, 1.08, 0.32]} color={c} seg={16} cast={false} />
      ))}

      {/* easel poster */}
      <group position={[-1.9, 0, 0.9]} rotation={[0, 0.5, 0]}>
        <Box size={[0.06, 1.7, 0.06]} pos={[-0.4, 0.85, -0.1]} rot={[-0.12, 0, -0.06]} color={C.wood} />
        <Box size={[0.06, 1.7, 0.06]} pos={[0.4, 0.85, -0.1]} rot={[-0.12, 0, 0.06]} color={C.wood} />
        <Box size={[0.06, 1.5, 0.06]} pos={[0, 0.75, -0.55]} rot={[0.3, 0, 0]} color={C.wood} />
        <Box size={[0.98, 1.28, 0.05]} pos={[0, 1.0, 0.0]} rot={[-0.12, 0, 0]} color={C.paper} radius={0.02} />
        <mesh position={[0, 1.0, 0.03]} rotation={[-0.12, 0, 0]}>
          <planeGeometry args={[0.88, 1.2]} />
          <meshBasicMaterial map={poster} toneMapped={false} />
        </mesh>
      </group>

      {/* kursi */}
      <Cyl r={0.32} h={0.1} pos={[0.1, 0.65, 1.0]} color={C.pink} />
      <Cyl r={0.04} h={0.55} pos={[0.1, 0.32, 1.0]} color={C.grey} />
      <Cyl r={0.27} h={0.05} pos={[0.1, 0.03, 1.0]} color={C.grey} />
      <Box size={[0.5, 0.45, 0.07]} pos={[0.1, 1.0, 1.3]} color={C.pink} radius={0.03} />

      {/* bentuk melayang */}
      <group position={[1.85, 0, 0.4]}>
        <mesh ref={(m) => { if (m) shapes.current[0] = m; }} castShadow>
          <icosahedronGeometry args={[0.24, 0]} />
          <meshStandardMaterial color={C.yellow} roughness={0.5} flatShading />
        </mesh>
        <mesh ref={(m) => { if (m) shapes.current[1] = m; }} position={[0.05, 0, 0]} castShadow>
          <torusGeometry args={[0.2, 0.075, 12, 24]} />
          <meshStandardMaterial color={C.pink} roughness={0.5} />
        </mesh>
        <mesh ref={(m) => { if (m) shapes.current[2] = m; }} position={[-0.05, 0, 0]} castShadow>
          <coneGeometry args={[0.2, 0.38, 4]} />
          <meshStandardMaterial color={C.mint} roughness={0.5} flatShading />
        </mesh>
      </group>
    </group>
  );
}

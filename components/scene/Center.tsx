import { useRef, type MutableRefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Ball, Box, C, Cyl, DISPLAY_FONT, useCanvasTexture } from './shared';

/** Tengah diorama: maskot berhelm yang mengikuti kamera, plus papan nama. */
export default function Center({ progress: _progress }: { progress?: MutableRefObject<number> } = {}) {
  const root = useRef<THREE.Group>(null!);
  const mascot = useRef<THREE.Group>(null!);
  const body = useRef<THREE.Group>(null!);
  const jump = useRef(0);
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
    const cam = state.camera.position;
    const targetY = Math.atan2(cam.x - mascot.current.position.x, cam.z - mascot.current.position.z);
    let diff = targetY - mascot.current.rotation.y;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    mascot.current.rotation.y += diff * Math.min(1, dt * 3);

    jump.current = Math.max(0, jump.current - dt * 1.6);
    const hop = Math.sin(Math.min(1, jump.current) * Math.PI) * 0.7 * Math.min(1, jump.current * 3);
    const bob = Math.abs(Math.sin(t * 2.2)) * 0.06;
    body.current.position.y = bob + hop;
    const squash = 1 + Math.sin(t * 4.4) * 0.025;
    body.current.scale.set(1 / squash, squash, 1 / squash);
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
      <group ref={mascot} position={[0, 0.12, 0.2]} onClick={(e) => { e.stopPropagation(); jump.current = 1; }}
        onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { document.body.style.cursor = ''; }}>
        <group ref={body}>
          <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
            <capsuleGeometry args={[0.38, 0.36, 8, 20]} />
            <meshStandardMaterial color={C.yellow} roughness={0.55} />
          </mesh>
          {/* mata */}
          <Ball r={0.065} pos={[-0.15, 0.68, 0.34]} color={C.ink} scale={[1, 1.3, 0.6]} cast={false} />
          <Ball r={0.065} pos={[0.15, 0.68, 0.34]} color={C.ink} scale={[1, 1.3, 0.6]} cast={false} />
          <Ball r={0.05} pos={[-0.27, 0.56, 0.3]} color={C.pink} scale={[1, 0.7, 0.4]} cast={false} />
          <Ball r={0.05} pos={[0.27, 0.56, 0.3]} color={C.pink} scale={[1, 0.7, 0.4]} cast={false} />
          <Box size={[0.12, 0.03, 0.03]} pos={[0, 0.55, 0.375]} color={C.ink} cast={false} />
          {/* helm safety */}
          <mesh position={[0, 0.9, 0]} castShadow>
            <sphereGeometry args={[0.34, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color={C.orange} roughness={0.4} />
          </mesh>
          <Cyl r={0.4} h={0.04} pos={[0, 0.9, 0.02]} color="#e65f2b" />
          <Box size={[0.1, 0.12, 0.5]} pos={[0, 1.2, 0]} color="#e65f2b" cast={false} />
          {/* kaki */}
          <Ball r={0.11} pos={[-0.16, 0.04, 0.05]} color="#e8b92f" scale={[1, 0.6, 1.3]} />
          <Ball r={0.11} pos={[0.16, 0.04, 0.05]} color="#e8b92f" scale={[1, 0.6, 1.3]} />
        </group>
      </group>
    </group>
  );
}

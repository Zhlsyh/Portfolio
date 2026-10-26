import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Ball, Box, C, Cyl, useCanvasTexture } from './shared';

/** Pojok Engineering: meja kerja dengan ESP32, motor DC berputar, LED berkedip, dan drone mini. */
export default function Workbench() {
  const wheel = useRef<THREE.Group>(null!);
  const drone = useRef<THREE.Group>(null!);
  const rotors = useRef<THREE.Mesh[]>([]);
  const ledMats = useRef<THREE.MeshStandardMaterial[]>([]);
  const ledColors = ['#ff4d4d', '#5ee08a', '#ffd24a'];

  const screenTex = useCanvasTexture(256, 160, (ctx, w, h) => {
    ctx.fillStyle = '#1d2540';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    // setpoint
    ctx.strokeStyle = '#6ec1e4';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(10, 50);
    ctx.lineTo(w - 10, 50);
    ctx.stroke();
    ctx.setLineDash([]);
    // respons PID
    ctx.strokeStyle = '#ff7a45';
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let x = 10; x < w - 10; x += 3) {
      const t = (x - 10) / 60;
      const y = 140 - (1 - Math.exp(-t * 0.9) * Math.cos(t * 2.2)) * 90;
      if (x === 10) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  });

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    wheel.current.rotation.x += dt * 7;
    drone.current.position.y = 2.35 + Math.sin(t * 2) * 0.08;
    drone.current.rotation.y += dt * 0.5;
    drone.current.rotation.z = Math.sin(t * 1.3) * 0.05;
    rotors.current.forEach((m) => {
      if (m) m.rotation.y += dt * 40;
    });
    ledMats.current.forEach((m, i) => {
      if (m) m.emissiveIntensity = Math.sin(t * 3 + i * 2.1) > 0 ? 1.6 : 0.12;
    });
  });

  return (
    <group>
      {/* meja */}
      <Box size={[3.5, 0.14, 1.5]} pos={[0, 1.1, -0.5]} color={C.wood} radius={0.05} />
      {[
        [-1.55, -1.1],
        [1.55, -1.1],
        [-1.55, 0.1],
        [1.55, 0.1],
      ].map(([x, z], i) => (
        <Box key={i} size={[0.14, 1.03, 0.14]} pos={[x, 0.52, z]} color="#b97f47" />
      ))}

      {/* pegboard + perkakas */}
      <Box size={[3.5, 1.9, 0.1]} pos={[0, 2.2, -1.45]} color="#f3dcae" radius={0.04} />
      {[-1.2, -0.7, -0.2, 0.4, 0.95].map((x, i) => (
        <group key={i} position={[x, 2.2 + (i % 2) * 0.15, -1.36]}>
          <Cyl r={0.045} h={0.4} color={[C.orange, C.sky, C.yellow, C.mint, C.pink][i]} pos={[0, -0.1, 0]} />
          <Cyl r={0.018} h={0.4} color={C.steel} pos={[0, -0.5, 0]} />
        </group>
      ))}
      <Box size={[0.5, 0.06, 0.04]} pos={[1.35, 2.0, -1.37]} color={C.steel} rot={[0, 0, 0.5]} />
      <Box size={[0.5, 0.06, 0.04]} pos={[1.35, 2.0, -1.37]} color={C.grey} rot={[0, 0, -0.5]} />

      {/* ESP32 */}
      <group position={[-1.05, 1.2, -0.25]} rotation={[0, 0.3, 0]}>
        <Box size={[0.95, 0.05, 0.5]} color="#22305c" cast radius={0.015} />
        <Box size={[0.4, 0.06, 0.28]} pos={[0.12, 0.05, 0]} color={C.steel} rough={0.35} />
        <Box size={[0.12, 0.04, 0.2]} pos={[0.32, 0.04, 0]} color="#111" />
        <Box size={[0.85, 0.07, 0.05]} pos={[-0.02, 0.05, 0.2]} color={C.yellow} />
        <Box size={[0.85, 0.07, 0.05]} pos={[-0.02, 0.05, -0.2]} color={C.yellow} />
        <Box size={[0.14, 0.07, 0.13]} pos={[-0.5, 0.05, 0]} color={C.steel} rough={0.3} />
      </group>

      {/* breadboard + LED */}
      <group position={[-0.3, 1.2, 0.02]}>
        <Box size={[0.9, 0.05, 0.36]} color={C.paper} radius={0.015} />
        {ledColors.map((c, i) => (
          <mesh key={c} position={[-0.25 + i * 0.25, 0.1, 0]} castShadow>
            <sphereGeometry args={[0.07, 14, 12]} />
            <meshStandardMaterial
              ref={(m) => {
                if (m) ledMats.current[i] = m;
              }}
              color={c}
              emissive={c}
              emissiveIntensity={0.5}
              roughness={0.3}
            />
          </mesh>
        ))}
        {[-0.12, 0.13].map((x) => (
          <Box key={x} size={[0.14, 0.04, 0.05]} pos={[x, 0.05, 0.12]} color="#e7c9a0" />
        ))}
      </group>

      {/* motor DC */}
      <group position={[0.55, 1.17, -0.35]}>
        <Box size={[0.9, 0.16, 0.52]} pos={[0, 0.08, 0]} color={C.grey} radius={0.03} />
        <Cyl r={0.25} h={0.7} pos={[-0.05, 0.42, 0]} rot={[0, 0, Math.PI / 2]} color={C.orange} />
        <Cyl r={0.255} h={0.08} pos={[0.33, 0.42, 0]} rot={[0, 0, Math.PI / 2]} color="#e65f2b" />
        <Cyl r={0.05} h={0.3} pos={[0.5, 0.42, 0]} rot={[0, 0, Math.PI / 2]} color={C.steel} rough={0.3} />
        <group ref={wheel} position={[0.62, 0.42, 0]}>
          <Cyl r={0.2} h={0.05} rot={[0, 0, Math.PI / 2]} color={C.ink} />
          <Box size={[0.07, 0.06, 0.06]} pos={[0, 0.17, 0]} color={C.yellow} cast={false} />
          <Box size={[0.07, 0.06, 0.06]} pos={[0, -0.17, 0]} color="#fff" cast={false} />
        </group>
      </group>

      {/* layar digital twin */}
      <group position={[1.2, 1.17, -0.95]} rotation={[0, -0.25, 0]}>
        <Box size={[0.9, 0.04, 0.55]} pos={[0, 0.02, 0.1]} color={C.steel} radius={0.02} />
        <group position={[0, 0.4, -0.12]} rotation={[-0.12, 0, 0]}>
          <Box size={[1.0, 0.66, 0.05]} color={C.ink} radius={0.03} />
          <mesh position={[0, 0, 0.03]}>
            <planeGeometry args={[0.9, 0.56]} />
            <meshBasicMaterial map={screenTex} toneMapped={false} />
          </mesh>
        </group>
      </group>

      {/* drone mini */}
      <group ref={drone} position={[-1.7, 2.35, 0.9]}>
        <Box size={[0.36, 0.1, 0.36]} color={C.paper} radius={0.04} />
        <Box size={[0.14, 0.06, 0.14]} pos={[0, 0.07, 0]} color={C.orange} radius={0.02} />
        {[0, 1, 2, 3].map((i) => {
          const a = Math.PI / 4 + (i * Math.PI) / 2;
          const x = Math.cos(a) * 0.42;
          const z = Math.sin(a) * 0.42;
          return (
            <group key={i}>
              <Box size={[0.5, 0.04, 0.05]} pos={[x / 2, 0, z / 2]} rot={[0, -a, 0]} color={C.ink} />
              <Cyl r={0.05} h={0.08} pos={[x, 0.03, z]} color={C.grey} />
              <mesh
                position={[x, 0.09, z]}
                ref={(m) => {
                  if (m) rotors.current[i] = m;
                }}
              >
                <cylinderGeometry args={[0.2, 0.2, 0.01, 18]} />
                <meshStandardMaterial color={C.sky} transparent opacity={0.45} roughness={0.4} />
              </mesh>
              <Box size={[0.38, 0.012, 0.05]} pos={[x, 0.09, z]} color={C.ink} cast={false} />
            </group>
          );
        })}
      </group>

      {/* bayangan drone di lantai */}
      <mesh position={[-1.7, 0.02, 0.9]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.35, 20]} />
        <meshBasicMaterial color="#000" transparent opacity={0.1} />
      </mesh>

      {/* bangku + kardus komponen */}
      <Cyl r={0.34} h={0.12} pos={[0.35, 0.68, 1.15]} color={C.sky} />
      <Cyl r={0.05} h={0.62} pos={[0.35, 0.33, 1.15]} color={C.grey} />
      <Cyl r={0.26} h={0.05} pos={[0.35, 0.03, 1.15]} color={C.grey} />
      <Box size={[0.75, 0.5, 0.6]} pos={[1.95, 0.25, 0.5]} rot={[0, 0.3, 0]} color="#c89b6d" radius={0.03} />
      <Box size={[0.2, 0.012, 0.62]} pos={[1.95, 0.51, 0.5]} rot={[0, 0.3, 0]} color={C.paper} cast={false} />
      <Ball r={0.07} pos={[-2.0, 1.4, -0.3]} color={C.mint} cast={false} />
    </group>
  );
}

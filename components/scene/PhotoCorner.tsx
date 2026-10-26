import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Box, C, Cyl } from './shared';

const PRINTS = [C.mint, C.sky, C.yellow, C.orange, C.pink];

/** Pojok fotografi: kamera di tripod (sesekali flash), softbox, dan polaroid yang bergoyang. */
export default function PhotoCorner() {
  const prints = useRef<THREE.Group[]>([]);
  const flash = useRef<THREE.MeshStandardMaterial>(null!);
  const softbox = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    prints.current.forEach((g, i) => {
      if (g) g.rotation.z = Math.sin(t * 1.2 + i * 1.3) * 0.09;
    });
    const phase = t % 4.5;
    flash.current.emissiveIntensity = phase < 0.16 ? 6 : 0;
    softbox.current.emissiveIntensity = 0.75 + Math.sin(t * 1.5) * 0.08 + (phase < 0.16 ? 1.2 : 0);
  });

  return (
    <group>
      {/* backdrop kertas */}
      <Box size={[3.4, 2.5, 0.08]} pos={[0, 1.25, -1.95]} color={C.pink} radius={0.03} />
      <Cyl r={0.12} h={3.5} pos={[0, 2.55, -1.95]} rot={[0, 0, Math.PI / 2]} color={C.paper} />
      <Box size={[3.4, 0.03, 1.3]} pos={[0, 0.02, -1.25]} color={C.pink} rough={0.9} cast={false} />

      {/* tali polaroid */}
      <Cyl r={0.03} h={2.2} pos={[-1.55, 1.1, -1.55]} color={C.grey} />
      <Cyl r={0.03} h={2.2} pos={[1.55, 1.1, -1.55]} color={C.grey} />
      <Cyl r={0.008} h={3.1} pos={[0, 2.12, -1.55]} rot={[0, 0, Math.PI / 2]} color={C.ink} cast={false} />
      {PRINTS.map((c, i) => (
        <group
          key={c}
          position={[-1.2 + i * 0.6, 2.12, -1.55]}
          ref={(g) => {
            if (g) prints.current[i] = g;
          }}
        >
          <Box size={[0.07, 0.12, 0.05]} pos={[0, 0, 0]} color={C.orange} cast={false} />
          <Box size={[0.46, 0.56, 0.02]} pos={[0, -0.36, 0]} color={C.paper} radius={0.01} />
          <Box size={[0.37, 0.37, 0.025]} pos={[0, -0.31, 0.005]} color={c} cast={false} />
          <Box size={[0.2, 0.14, 0.03]} pos={[0.05, -0.36, 0.01]} color={C.paper} cast={false} />
        </group>
      ))}

      {/* kamera di tripod */}
      <group position={[0.3, 0, 0.3]}>
        {[0, 1, 2].map((i) => (
          <group key={i} position={[0, 1.4, 0]} rotation={[0, (i * Math.PI * 2) / 3, 0]}>
            <group rotation={[0.3, 0, 0]}>
              <Cyl r={0.024} h={1.5} pos={[0, -0.75, 0]} color={C.ink} seg={8} />
            </group>
          </group>
        ))}
        <Cyl r={0.1} h={0.1} pos={[0, 1.42, 0]} color={C.grey} />
        <group position={[0, 1.7, 0]} rotation={[0, 0.75, 0]}>
          <Box size={[0.62, 0.4, 0.32]} color={C.ink} radius={0.05} />
          <Box size={[0.28, 0.12, 0.22]} pos={[-0.12, 0.25, 0]} color={C.ink} radius={0.03} />
          <Box size={[0.14, 0.05, 0.06]} pos={[0.2, 0.2, 0.0]} color={C.orange} radius={0.015} />
          <Cyl r={0.15} h={0.3} pos={[0.02, 0, 0.3]} rot={[Math.PI / 2, 0, 0]} color="#3a3344" />
          <Cyl r={0.165} h={0.05} pos={[0.02, 0, 0.42]} rot={[Math.PI / 2, 0, 0]} color={C.orange} />
          <mesh position={[0.02, 0, 0.455]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.01, 18]} />
            <meshStandardMaterial color="#1b2a4a" roughness={0.1} metalness={0.4} />
          </mesh>
          <mesh position={[-0.2, 0.12, 0.17]}>
            <sphereGeometry args={[0.04, 10, 8]} />
            <meshStandardMaterial
              ref={flash}
              color="#fff"
              emissive="#fffbe0"
              emissiveIntensity={0}
              toneMapped={false}
            />
          </mesh>
        </group>
      </group>

      {/* softbox */}
      <group position={[-1.5, 0, 0.5]}>
        <Cyl r={0.04} h={1.8} pos={[0, 0.9, 0]} color={C.grey} />
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            size={[0.7, 0.035, 0.035]}
            pos={[Math.cos((i * Math.PI * 2) / 3) * 0.3, 0.03, Math.sin((i * Math.PI * 2) / 3) * 0.3]}
            rot={[0, (-i * Math.PI * 2) / 3, 0]}
            color={C.grey}
          />
        ))}
        <group position={[0, 2.0, 0]} rotation={[0.1, 0.8, 0]}>
          <Box size={[1.0, 1.0, 0.36]} color={C.ink} radius={0.05} />
          <mesh position={[0, 0, 0.19]}>
            <planeGeometry args={[0.9, 0.9]} />
            <meshStandardMaterial
              ref={softbox}
              color="#fff7dd"
              emissive="#fff0c4"
              emissiveIntensity={0.8}
              toneMapped={false}
            />
          </mesh>
        </group>
      </group>

      {/* bangku & karpet */}
      <Cyl r={0.33} h={0.12} pos={[-0.6, 0.62, 1.25]} color={C.orange} />
      <Cyl r={0.05} h={0.56} pos={[-0.6, 0.3, 1.25]} color={C.grey} />
      <Cyl r={0.25} h={0.05} pos={[-0.6, 0.03, 1.25]} color={C.grey} />
      <Cyl r={1.15} h={0.03} pos={[0.5, 0.03, 0.6]} color={C.paper} rough={0.95} cast={false} />
      {/* tas kamera */}
      <Box size={[0.6, 0.4, 0.4]} pos={[1.7, 0.2, 1.0]} rot={[0, -0.4, 0]} color="#3a3344" radius={0.07} />
      <Box size={[0.62, 0.05, 0.42]} pos={[1.7, 0.42, 1.0]} rot={[0, -0.4, 0]} color={C.yellow} radius={0.02} />
    </group>
  );
}

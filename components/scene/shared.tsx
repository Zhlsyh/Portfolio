import { useMemo, useRef, useState, type ReactNode } from 'react';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const C = {
  ink: '#2b2230',
  cream: '#f6efe3',
  paper: '#fffaf0',
  orange: '#ff7a45',
  sky: '#6ec1e4',
  yellow: '#ffd24a',
  mint: '#7fd1ae',
  pink: '#ff9eb5',
  wood: '#d9a066',
  steel: '#c9ced6',
  grey: '#8d8a96',
};

type V3 = [number, number, number];

interface BoxProps {
  size: V3;
  pos?: V3;
  rot?: V3;
  color: string;
  radius?: number;
  rough?: number;
  emissive?: string;
  emissiveIntensity?: number;
  cast?: boolean;
  receive?: boolean;
}

/** Kotak low-poly. radius > 0 memakai RoundedBox, selain itu boxGeometry biasa (lebih ringan). */
export function Box({
  size,
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  color,
  radius = 0,
  rough = 0.75,
  emissive,
  emissiveIntensity = 0,
  cast = true,
  receive = true,
}: BoxProps) {
  const mat = (
    <meshStandardMaterial
      color={color}
      roughness={rough}
      emissive={emissive ?? '#000000'}
      emissiveIntensity={emissiveIntensity}
    />
  );
  if (radius > 0) {
    return (
      <RoundedBox
        args={size}
        radius={Math.min(radius, Math.min(...size) / 2 - 0.001)}
        smoothness={3}
        position={pos}
        rotation={rot}
        castShadow={cast}
        receiveShadow={receive}
      >
        {mat}
      </RoundedBox>
    );
  }
  return (
    <mesh position={pos} rotation={rot} castShadow={cast} receiveShadow={receive}>
      <boxGeometry args={size} />
      {mat}
    </mesh>
  );
}

interface CylProps {
  r: number;
  h: number;
  pos?: V3;
  rot?: V3;
  color: string;
  r2?: number;
  seg?: number;
  rough?: number;
  emissive?: string;
  emissiveIntensity?: number;
  cast?: boolean;
}

export function Cyl({
  r,
  h,
  r2,
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  color,
  seg = 20,
  rough = 0.7,
  emissive,
  emissiveIntensity = 0,
  cast = true,
}: CylProps) {
  return (
    <mesh position={pos} rotation={rot} castShadow={cast} receiveShadow>
      <cylinderGeometry args={[r2 ?? r, r, h, seg]} />
      <meshStandardMaterial
        color={color}
        roughness={rough}
        emissive={emissive ?? '#000000'}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

export function Ball({
  r,
  pos = [0, 0, 0],
  color,
  scale = [1, 1, 1],
  rough = 0.6,
  emissive,
  emissiveIntensity = 0,
  cast = true,
}: {
  r: number;
  pos?: V3;
  color: string;
  scale?: V3;
  rough?: number;
  emissive?: string;
  emissiveIntensity?: number;
  cast?: boolean;
}) {
  return (
    <mesh position={pos} scale={scale} castShadow={cast} receiveShadow>
      <sphereGeometry args={[r, 20, 16]} />
      <meshStandardMaterial
        color={color}
        roughness={rough}
        emissive={emissive ?? '#000000'}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

/** Tekstur dari kanvas 2D. Digambar ulang setelah font web siap. */
export function useCanvasTexture(
  w: number,
  h: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
) {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      draw(ctx, w, h);
      tex.needsUpdate = true;
    };
    render();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(render).catch(() => undefined);
    }
    return tex;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export const DISPLAY_FONT = '"Bricolage Grotesque", ui-rounded, system-ui, sans-serif';

/** Satu pojok diorama: membesar saat di-hover, klik melompat ke section. */
export function Zone({
  position,
  id,
  onSelect,
  children,
}: {
  position: V3;
  id: string;
  onSelect: (id: string) => void;
  children: ReactNode;
}) {
  const ref = useRef<THREE.Group>(null!);
  const [hover, setHover] = useState(false);
  useFrame((_, dt) => {
    const s = THREE.MathUtils.damp(ref.current.scale.x, hover ? 1.035 : 1, 8, dt);
    ref.current.scale.setScalar(s);
  });
  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHover(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHover(false);
        document.body.style.cursor = '';
      }}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onSelect(id);
      }}
    >
      {children}
    </group>
  );
}

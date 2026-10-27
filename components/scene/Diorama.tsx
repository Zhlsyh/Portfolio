import { useMemo, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { Box, Zone } from './shared';
import Workbench from './Workbench';
import PhotoCorner from './PhotoCorner';
import DesignDesk from './DesignDesk';
import ContactCorner from './ContactCorner';
import Center from './Center';

const TILE = 5.5;
const OFF = 3.1;

/** Bayangan lembut di bawah platform supaya terasa melayang. */
function GroundShadow() {
  const tex = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(64, 64, 6, 64, 64, 64);
    grad.addColorStop(0, 'rgba(60,40,30,0.38)');
    grad.addColorStop(1, 'rgba(60,40,30,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  return (
    <mesh position={[0, -3.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[22, 22]} />
      <meshBasicMaterial map={tex} transparent depthWrite={false} />
    </mesh>
  );
}

export default function Diorama({
  onSelect,
  progress,
  dark,
  lang,
}: {
  onSelect: (id: string) => void;
  progress: MutableRefObject<number>;
  dark: boolean;
  lang: 'id' | 'en';
}) {
  return (
    <group>
      <GroundShadow />

      {/* platform */}
      <Box size={[12.6, 0.9, 12.6]} pos={[0, -0.45, 0]} color="#f1dfbf" radius={0.25} />
      <Box size={[9.6, 0.9, 9.6]} pos={[0, -1.25, 0]} color="#d9b98a" radius={0.2} />
      <Box size={[5.6, 0.8, 5.6]} pos={[0, -2.0, 0]} color="#c19766" radius={0.2} />
      {/* jalur tengah */}
      <Box size={[12.1, 0.04, 12.1]} pos={[0, 0.02, 0]} color="#fff4de" radius={0.15} cast={false} />

      {/* ubin tiap pojok */}
      <Box size={[TILE, 0.1, TILE]} pos={[-OFF, 0.05, -OFF]} color="#bfe8d4" radius={0.1} cast={false} />
      <Box size={[TILE, 0.1, TILE]} pos={[OFF, 0.05, -OFF]} color="#ffe1a0" radius={0.1} cast={false} />
      <Box size={[TILE, 0.1, TILE]} pos={[OFF, 0.05, OFF]} color="#bfe3f5" radius={0.1} cast={false} />
      <Box size={[TILE, 0.1, TILE]} pos={[-OFF, 0.05, OFF]} color="#ffd0dc" radius={0.1} cast={false} />

      <group position={[0, 0.1, 0]}>
        <Center progress={progress} dark={dark} lang={lang} />
      </group>
      <Zone id="workbench" position={[-OFF, 0.1, -OFF]} onSelect={onSelect}>
        <Workbench />
      </Zone>
      <Zone id="photo" position={[OFF, 0.1, -OFF]} onSelect={onSelect}>
        <PhotoCorner />
      </Zone>
      <Zone id="design" position={[OFF, 0.1, OFF]} onSelect={onSelect}>
        <DesignDesk />
      </Zone>
      <Zone id="contact" position={[-OFF, 0.1, OFF]} onSelect={onSelect}>
        <ContactCorner />
      </Zone>
    </group>
  );
}

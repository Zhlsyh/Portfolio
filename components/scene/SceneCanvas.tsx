import { Suspense, useState, memo, type MutableRefObject } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';
import CameraRig from './CameraRig';
import Diorama from './Diorama';
import Lighting from './Lighting';

function SceneCanvas({
  progress,
  onSelect,
  onReady,
  dark,
}: {
  progress: MutableRefObject<number>;
  onSelect: (id: string) => void;
  onReady: () => void;
  dark: boolean;
}) {
  const [maxDpr, setMaxDpr] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768 ? 1.5 : 2,
  );

  return (
    <Canvas
      shadows="soft"
      dpr={[1, maxDpr]}
      camera={{ fov: 30, near: 0.5, far: 80, position: [13.5, 11.5, 14.5] }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ touchAction: 'pan-y' }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
        onReady();
      }}
    >
      <PerformanceMonitor onDecline={() => setMaxDpr(1)} />
      <Lighting dark={dark} />
      <Suspense fallback={null}>
        <Diorama onSelect={onSelect} progress={progress} />
      </Suspense>
      <CameraRig progress={progress} />
    </Canvas>
  );
}

export default memo(SceneCanvas);


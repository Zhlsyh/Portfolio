import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DAY = {
  hemiSky: new THREE.Color('#fff4e0'),
  hemiGround: new THREE.Color('#d9b98a'),
  key: new THREE.Color('#fff1d6'),
  fill: new THREE.Color('#cfe4ff'),
};
const NIGHT = {
  hemiSky: new THREE.Color('#8196ee'),
  hemiGround: new THREE.Color('#2a2f5a'),
  key: new THREE.Color('#a9bcff'),
  fill: new THREE.Color('#4a5db0'),
};

const DAY_POS = new THREE.Vector3(7, 12, 6);
const NIGHT_POS = new THREE.Vector3(-6, 11, 4);

// Lampu hangat tiap pojok yang menyala saat malam.
const LAMPS: [number, number, number][] = [
  [-3.1, 3.4, -2.2],
  [3.1, 3.4, -2.0],
  [3.1, 3.2, 3.3],
  [-3.1, 3.2, 3.4],
  [0, 2.8, 0.8],
];

/** Pencahayaan siang/malam dengan transisi halus. */
export default function Lighting({ dark }: { dark: boolean }) {
  const hemi = useRef<THREE.HemisphereLight>(null!);
  const key = useRef<THREE.DirectionalLight>(null!);
  const fill = useRef<THREE.DirectionalLight>(null!);
  const lamps = useRef<THREE.PointLight[]>([]);
  const n = useRef(dark ? 1 : 0);

  useFrame(({ gl }, dt) => {
    n.current = THREE.MathUtils.damp(n.current, dark ? 1 : 0, 2.2, dt);
    const k = n.current;
    hemi.current.color.copy(DAY.hemiSky).lerp(NIGHT.hemiSky, k);
    hemi.current.groundColor.copy(DAY.hemiGround).lerp(NIGHT.hemiGround, k);
    hemi.current.intensity = THREE.MathUtils.lerp(1.0, 0.75, k);
    key.current.color.copy(DAY.key).lerp(NIGHT.key, k);
    key.current.intensity = THREE.MathUtils.lerp(2.6, 1.15, k);
    key.current.position.copy(DAY_POS).lerp(NIGHT_POS, k);
    fill.current.color.copy(DAY.fill).lerp(NIGHT.fill, k);
    fill.current.intensity = THREE.MathUtils.lerp(0.5, 0.35, k);
    lamps.current.forEach((l) => {
      if (l) l.intensity = k * 26;
    });
    gl.toneMappingExposure = THREE.MathUtils.lerp(1.05, 1.0, k);
  });

  return (
    <>
      <hemisphereLight ref={hemi} args={['#fff4e0', '#d9b98a', 1.0]} />
      <directionalLight
        ref={key}
        position={[7, 12, 6]}
        intensity={2.6}
        color="#fff1d6"
        castShadow
        shadow-mapSize={[1536, 1536]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={1}
        shadow-camera-far={40}
        shadow-bias={-0.0004}
        shadow-radius={4}
      />
      <directionalLight ref={fill} position={[-8, 5, 8]} intensity={0.5} color="#cfe4ff" />
      {LAMPS.map((p, i) => (
        <pointLight
          key={i}
          ref={(l) => {
            if (l) lamps.current[i] = l;
          }}
          position={p}
          color="#ffb877"
          intensity={0}
          distance={9}
          decay={2}
        />
      ))}
    </>
  );
}

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { MutableRefObject } from 'react';

type V3 = [number, number, number];

interface Key {
  pos: V3;
  tgt: V3;
  /** Geser scene secara horizontal (fraksi lebar layar) di desktop agar tidak tertutup panel. */
  ox: number;
}

// Urutan mengikuti section: home, workbench, photo, design, journey, bonus, skills, contact.
const KEYS: Key[] = [
  { pos: [13.5, 11.5, 14.5], tgt: [0, 0.4, 0], ox: -0.16 }, // home
  { pos: [5.4, 10.8, 5.5], tgt: [-3.1, 1.3, -3.0], ox: -0.2 }, // workbench
  { pos: [13.6, 10.7, 0.5], tgt: [3.1, 1.3, -3.0], ox: 0.2 }, // photo
  { pos: [11.6, 10.5, 11.5], tgt: [3.1, 1.0, 3.0], ox: -0.2 }, // design
  { pos: [-7, 8.8, 11], tgt: [0, 0.7, 0], ox: 0.2 }, // journey
  { pos: [-3.2, 5.6, 8.4], tgt: [0.9, 0.7, 0.8], ox: -0.2 }, // bonus (pemutar piringan hitam)
  { pos: [15, 13.5, 15], tgt: [0, 0.2, 0], ox: -0.2 }, // skills
  { pos: [1.4, 10.4, 13.6], tgt: [-3.1, 0.9, 3.1], ox: 0.2 }, // contact
];

// Quintic smootherstep: derivative 0 di kedua ujung (start & stop bebas hentakan)
const ease = (t: number) => {
  const c = Math.max(0, Math.min(1, t));
  return c * c * c * (c * (c * 6 - 15) + 10);
};

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _tgt = new THREE.Vector3();
const _wantPos = new THREE.Vector3();

export default function CameraRig({
  progress,
}: {
  progress: MutableRefObject<number>;
}) {
  // Simpan state kamera di ref agar TIDAK pernah ter-reset saat re-render
  // (misalnya saat modal proyek dibuka/ditutup, atau state active section berubah)
  const cur = useRef<{
    pos: THREE.Vector3;
    tgt: THREE.Vector3;
    ox: number;
    swayX: number;
    swayY: number;
    initialized: boolean;
  }>({
    pos: new THREE.Vector3(...KEYS[0].pos),
    tgt: new THREE.Vector3(...KEYS[0].tgt),
    ox: KEYS[0].ox,
    swayX: 0,
    swayY: 0,
    initialized: false,
  });

  useFrame((state, dt) => {
    const { camera, size, pointer } = state;
    const cam = camera as THREE.PerspectiveCamera;
    const desktop = size.width >= 768;
    const aspect = size.width / size.height;

    // Batasi dt untuk menghindari lompatan jika CPU mengalami lag sesaat
    const safeDt = Math.min(dt, 0.04);

    const idx = THREE.MathUtils.clamp(progress.current, 0, KEYS.length - 1);
    const i0 = Math.floor(idx);
    const i1 = Math.min(i0 + 1, KEYS.length - 1);
    const f = ease(idx - i0);
    const k0 = KEYS[i0];
    const k1 = KEYS[i1];

    _a.set(...k0.tgt).lerp(_b.set(...k1.tgt), f);
    _tgt.copy(_a);

    const dir = new THREE.Vector3(...k0.pos)
      .lerp(_b.set(...k1.pos), f)
      .sub(_tgt);

    // Layar sempit: mundurkan kamera supaya satu pojok tetap utuh di dalam frame.
    const spread = aspect >= 1.6 ? 1 : 1 + Math.min(0.5, (1.6 - aspect) * 0.35);
    dir.multiplyScalar(spread);
    _wantPos.copy(_tgt).add(dir);

    const wantOx = desktop ? k0.ox + (k1.ox - k0.ox) * f : 0;

    const c = cur.current;

    // Inisialisasi posisi awal secara mulus saat pertama kali dimuat
    if (!c.initialized) {
      c.pos.copy(_wantPos);
      c.tgt.copy(_tgt);
      c.ox = wantOx;
      c.initialized = true;
    }

    // Spring damping konstan yang halus dan natural
    const lam = 3.6;
    c.pos.x = THREE.MathUtils.damp(c.pos.x, _wantPos.x, lam, safeDt);
    c.pos.y = THREE.MathUtils.damp(c.pos.y, _wantPos.y, lam, safeDt);
    c.pos.z = THREE.MathUtils.damp(c.pos.z, _wantPos.z, lam, safeDt);

    c.tgt.x = THREE.MathUtils.damp(c.tgt.x, _tgt.x, lam, safeDt);
    c.tgt.y = THREE.MathUtils.damp(c.tgt.y, _tgt.y, lam, safeDt);
    c.tgt.z = THREE.MathUtils.damp(c.tgt.z, _tgt.z, lam, safeDt);

    c.ox = THREE.MathUtils.damp(c.ox, wantOx, lam, safeDt);

    // Damping parallax pointer agar gerakan mouse tidak patah atau mengagetkan
    const targetSwayX = desktop ? pointer.x * 0.22 : 0;
    const targetSwayY = desktop ? pointer.y * 0.12 : 0;
    c.swayX = THREE.MathUtils.damp(c.swayX, targetSwayX, 3.2, safeDt);
    c.swayY = THREE.MathUtils.damp(c.swayY, targetSwayY, 3.2, safeDt);

    cam.position.set(c.pos.x + c.swayX, c.pos.y + c.swayY, c.pos.z);
    cam.lookAt(c.tgt);

    if (Math.abs(c.ox) > 0.001) {
      cam.setViewOffset(size.width, size.height, c.ox * size.width, 0, size.width, size.height);
    } else if (cam.view?.enabled) {
      cam.clearViewOffset();
    }
  });

  return null;
}

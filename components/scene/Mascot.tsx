import { useEffect, useRef, useState, type MutableRefObject, type ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { UI, type Lang } from '@/data/i18n';
import { Ball, Box, C, Cyl, DISPLAY_FONT, useCanvasTexture } from './shared';

/**
 * Maskot Helmi: chibi low-poly dari kotak dan bola, mengikuti avatar piksel
 * (rambut tebal, alis miring, senyum miring). Baju utama hoodie biru; berganti outfit tiap section.
 *
 * Properti berganti mengikuti section yang aktif (urutan sama dengan KEYS di CameraRig):
 * home, workbench, photo, design, journey, bonus, skills, contact.
 */

const SKIN = '#f7d0ac';
const SKIN_SHADE = '#d9a07d';
const HAIR = '#26242e';
const S = 0.68; // skala keseluruhan maskot
const HAT = '#ff7a45';

/** Pose lengan per section: x = angkat ke depan (negatif), z = buka ke samping (kanan +, kiri -). */
interface Arm {
  x: number;
  z: number;
}
interface Pose {
  r: Arm;
  l: Arm;
}
const REST: Pose = { r: { x: 0, z: 0.14 }, l: { x: 0, z: -0.14 } };
const POSES: Pose[] = [
  { r: { x: 0, z: 2.55 }, l: REST.l }, // home: melambai
  { r: { x: -1.05, z: -0.2 }, l: REST.l }, // workbench: pegang papan ESP32
  { r: { x: -1.2, z: -0.45 }, l: { x: -1.2, z: 0.45 } }, // photo: dua tangan memegang kamera
  { r: { x: -0.95, z: -0.2 }, l: REST.l }, // design: stylus
  REST, // journey
  REST, // bonus
  { r: { x: -0.85, z: -0.2 }, l: REST.l }, // skills: gulungan sertifikat
  { r: { x: -0.95, z: -0.2 }, l: REST.l }, // contact: amplop
];

/**
 * Outfit per section. Warna dasar (badan, lengan, celana, sepatu) beralih halus,
 * aksesori pakaian (hood, rompi, jas lab, toga, blazer) muncul lewat <Pop>.
 */
interface Outfit {
  top: string;
  sleeve: string;
  pants: string;
  shoes: string;
}
const OUTFITS: Outfit[] = [
  { top: '#3b6fd8', sleeve: '#3b6fd8', pants: '#2a3350', shoes: '#f2efe8' }, // home: hoodie biru
  { top: '#4a4f5c', sleeve: '#4a4f5c', pants: '#3a3f4a', shoes: '#14131a' }, // workbench: rompi safety oranye
  { top: '#2d2d33', sleeve: '#2d2d33', pants: '#2a2832', shoes: '#14131a' }, // photo: rompi fotografer olive
  { top: '#e8b92f', sleeve: '#e8b92f', pants: '#7b8cb8', shoes: '#fffaf0' }, // design: sweater mustard, noda cat
  { top: '#1b1a22', sleeve: '#1b1a22', pants: '#1b1a22', shoes: '#14131a' }, // journey: toga wisuda
  { top: '#8f6bd6', sleeve: '#8f6bd6', pants: '#2a2832', shoes: '#ffffff' }, // bonus: jaket bomber ungu
  { top: '#4a7bd0', sleeve: '#f4f1ea', pants: '#2a3350', shoes: '#14131a' }, // skills: jas lab putih
  { top: '#26324f', sleeve: '#26324f', pants: '#26324f', shoes: '#14131a' }, // contact: blazer navy + dasi
];
const COLOR_KEYS = [
  ['torso', 'top'],
  ['sleeveR', 'sleeve'],
  ['sleeveL', 'sleeve'],
  ['legL', 'pants'],
  ['legR', 'pants'],
  ['shoeL', 'shoes'],
  ['shoeR', 'shoes'],
] as const;

/** Munculkan/sembunyikan satu properti dengan sedikit pantulan. */
function Pop({ on, children }: { on: boolean; children: ReactNode }) {
  const g = useRef<THREE.Group>(null!);
  const v = useRef(0);
  useFrame((_, dt) => {
    v.current = THREE.MathUtils.damp(v.current, on ? 1 : 0, on ? 9 : 14, Math.min(dt, 0.05));
    const s = v.current;
    const k = on ? s * (1 + 0.2 * Math.sin(Math.min(1, s) * Math.PI)) : s;
    g.current.scale.setScalar(Math.max(0.0001, k));
    g.current.visible = s > 0.01;
  });
  return (
    <group ref={g} scale={0.0001} visible={false}>
      {children}
    </group>
  );
}

type Mats = MutableRefObject<Record<string, THREE.MeshStandardMaterial>>;

/** Kotak yang warnanya dianimasikan (badan, lengan, celana, sepatu). */
function Tint({
  k,
  mats,
  size,
  pos,
  color,
  radius = 0,
}: {
  k: string;
  mats: Mats;
  size: [number, number, number];
  pos: [number, number, number];
  color: string;
  radius?: number;
}) {
  const mat = (
    <meshStandardMaterial
      ref={(m: THREE.MeshStandardMaterial | null) => {
        if (m) mats.current[k] = m;
      }}
      color={color}
      roughness={0.75}
    />
  );
  if (radius > 0) {
    return (
      <RoundedBox args={size} radius={radius} smoothness={3} position={pos} castShadow receiveShadow>
        {mat}
      </RoundedBox>
    );
  }
  return (
    <mesh position={pos} castShadow receiveShadow>
      <boxGeometry args={size} />
      {mat}
    </mesh>
  );
}

function Eye({ x, glintSide }: { x: number; glintSide: 1 | -1 }) {
  return (
    <group position={[x, 0.36, 0.395]}>
      <Box size={[0.1, 0.17, 0.04]} color={C.ink} cast={false} />
      <Box size={[0.04, 0.045, 0.02]} pos={[0.025 * glintSide * -1, 0.04, 0.025]} color="#ffffff" cast={false} />
    </group>
  );
}

export default function Mascot({
  progress,
  dark,
  lang,
}: {
  progress: MutableRefObject<number>;
  dark: boolean;
  lang: Lang;
}) {
  const t = UI[lang];
  const mascot = useRef<THREE.Group>(null!);
  const body = useRef<THREE.Group>(null!);
  const head = useRef<THREE.Group>(null!);
  const eyes = useRef<THREE.Group>(null!);
  const armR = useRef<THREE.Group>(null!);
  const armL = useRef<THREE.Group>(null!);
  const zs = useRef<THREE.Mesh[]>([]);
  const led = useRef<THREE.MeshStandardMaterial>(null!);
  const flash = useRef<THREE.MeshStandardMaterial>(null!);

  const jump = useRef(0);
  const nextBlink = useRef(2.2);
  const blink = useRef(0);
  const awakeUntil = useRef(0);
  const clicks = useRef<number[]>([]);
  const shadesUntil = useRef(0);
  const wasAsleep = useRef(false);
  const lastSec = useRef(0);
  const clockT = useRef(0);
  const mats = useRef<Record<string, THREE.MeshStandardMaterial>>({});
  const tint = useRef(new THREE.Color());

  const [sec, setSec] = useState(0);
  const [asleep, setAsleep] = useState(dark);
  const [shades, setShades] = useState(false);
  const [bubble, setBubble] = useState<{ text: string; id: number } | null>(null);
  const bubbleId = useRef(0);

  const zTex = useCanvasTexture(128, 128, (ctx, w, h) => {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `800 96px ${DISPLAY_FONT}`;
    ctx.lineWidth = 12;
    ctx.strokeStyle = C.ink;
    ctx.strokeText('z', w / 2, h / 2 + 4);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('z', w / 2, h / 2 + 4);
  });

  const say = (text: string, ms = 3400) => {
    const id = ++bubbleId.current;
    setBubble({ text, id });
    window.setTimeout(() => setBubble((b) => (b && b.id === id ? null : b)), ms);
  };

  // Sapaan non-blocking saat pertama dimuat, sebagai pengganti layar intro.
  useEffect(() => {
    const id = window.setTimeout(() => say(dark ? t.bubbleSleepHint : t.bubbleHome, 4200), 900);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Balon singkat tiap section berganti (ditunda supaya tidak berkedip saat scroll cepat).
  const keys = [
    t.bubbleHome,
    t.bubbleWorkbench,
    t.bubblePhoto,
    t.bubbleDesign,
    t.bubbleJourney,
    t.bubbleBonus,
    t.bubbleSkills,
    t.bubbleContact,
  ];
  useEffect(() => {
    if (sec === 0 && lastSec.current === 0) return; // sapaan awal sudah ditangani
    lastSec.current = sec;
    if (asleep) return;
    const id = window.setTimeout(() => say(keys[sec]), 600);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sec, lang]);

  useFrame((state, dt) => {
    const t0 = state.clock.elapsedTime;
    clockT.current = t0;
    const d = Math.min(dt, 0.05);

    // section aktif -> state (hanya saat berubah)
    const idx = THREE.MathUtils.clamp(Math.round(progress.current), 0, POSES.length - 1);
    if (idx !== sec) {
      setSec(idx);
      jump.current = Math.max(jump.current, 0.5); // lompatan kecil saat ganti baju
    }

    // warna baju beralih halus ke outfit section aktif
    const outfit = OUTFITS[idx];
    const kc = 1 - Math.exp(-7 * d);
    for (const [key, part] of COLOR_KEYS) {
      const m = mats.current[key];
      if (m) m.color.lerp(tint.current.set(outfit[part]), kc);
    }

    // tidur: hanya saat malam dan belum dibangunkan
    const sleeping = dark && t0 > awakeUntil.current;
    if (sleeping !== wasAsleep.current) {
      wasAsleep.current = sleeping;
      setAsleep(sleeping);
    }
    if (shades && t0 > shadesUntil.current) setShades(false);

    // menghadap kamera
    const cam = state.camera.position;
    const targetY = Math.atan2(cam.x - mascot.current.position.x, cam.z - mascot.current.position.z);
    let diff = targetY - mascot.current.rotation.y;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    mascot.current.rotation.y += diff * Math.min(1, d * 3);

    // lompat, napas, squash
    jump.current = Math.max(0, jump.current - d * 1.6);
    const hop = Math.sin(Math.min(1, jump.current) * Math.PI) * 0.7 * Math.min(1, jump.current * 3);
    const bob = sleeping ? Math.sin(t0 * 1.1) * 0.015 + 0.015 : Math.abs(Math.sin(t0 * 2.2)) * 0.06;
    body.current.position.y = bob + hop;
    const squash = 1 + Math.sin(t0 * (sleeping ? 1.5 : 4.4)) * (sleeping ? 0.012 : 0.025);
    body.current.scale.set(1 / squash, squash, 1 / squash);

    // kepala: ikut kursor (desktop), menunduk saat tidur, mengangguk ke irama di pojok musik
    const px = state.size.width >= 768 ? state.pointer.x : 0;
    const py = state.size.width >= 768 ? state.pointer.y : 0;
    const beat = idx === 5 && !sleeping ? Math.sin(t0 * 6.5) * 0.07 : 0;
    const wantYaw = sleeping ? 0.12 : px * 0.42;
    const wantPitch = sleeping ? 0.38 : -py * 0.25 + beat;
    const wantRoll = sleeping ? 0.14 : idx === 5 ? Math.sin(t0 * 3.25) * 0.05 : 0;
    head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, wantYaw, 5, d);
    head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, wantPitch, 6, d);
    head.current.rotation.z = THREE.MathUtils.damp(head.current.rotation.z, wantRoll, 5, d);

    // kedip
    if (t0 > nextBlink.current) {
      blink.current = 0.14;
      nextBlink.current = t0 + 2.4 + Math.random() * 3;
    }
    blink.current = Math.max(0, blink.current - d);
    const closed = sleeping || blink.current > 0;
    eyes.current.scale.y = THREE.MathUtils.damp(eyes.current.scale.y, closed ? 0.12 : 1, 30, d);

    // lengan
    const pose = sleeping ? REST : POSES[idx];
    const wave = idx === 0 && !sleeping ? Math.sin(t0 * 7) * 0.28 : 0;
    const sway = Math.sin(t0 * 1.6) * 0.035;
    armR.current.rotation.x = THREE.MathUtils.damp(armR.current.rotation.x, pose.r.x, 7, d);
    armR.current.rotation.z = THREE.MathUtils.damp(armR.current.rotation.z, pose.r.z + wave + sway, 7, d);
    armL.current.rotation.x = THREE.MathUtils.damp(armL.current.rotation.x, pose.l.x, 7, d);
    armL.current.rotation.z = THREE.MathUtils.damp(armL.current.rotation.z, pose.l.z - sway, 7, d);

    // Zzz naik pelan saat tidur
    zs.current.forEach((m, i) => {
      if (!m) return;
      const u = (t0 * 0.3 + i / 3) % 1;
      m.position.set(0.5 + u * 0.35 + i * 0.05, 1.4 + u * 0.9, 0.2);
      m.scale.setScalar(sleeping ? (0.5 + u * 0.55) * Math.sin(Math.min(1, u * 1.15) * Math.PI) : 0.0001);
    });

    // detail properti: LED berkedip di papan ESP32, lampu kilat kamera
    if (led.current) led.current.emissiveIntensity = Math.sin(t0 * 6) > 0 ? 1.6 : 0.1;
    if (flash.current) flash.current.emissiveIntensity = (t0 % 3.2) < 0.12 ? 3 : 0;
  });

  const onClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    const now = performance.now() / 1000;
    jump.current = 1;
    // bangunkan bila sedang tidur (malam)
    if (dark && wasAsleep.current) {
      awakeUntil.current = clockT.current + 5;
      say(t.bubbleWake, 2600);
    }
    // klik lima kali berturut-turut: kacamata hitam
    clicks.current = [...clicks.current.filter((c) => now - c < 3), now];
    if (clicks.current.length >= 5) {
      clicks.current = [];
      shadesUntil.current = clockT.current + 7;
      setShades(true);
      say(t.bubbleCool, 3000);
    }
  };
  const hatOn = sec === 1;
  const capOn = sec === 4;
  const beretOn = sec === 3;
  const phonesOn = sec === 5;
  const glassesOn = sec === 6;
  const hideSpikes = hatOn || capOn || beretOn || phonesOn;

  return (
    <>
      <group
        ref={mascot}
        position={[0, 0.12, 0.2]}
        scale={S}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = '';
        }}
      >
        {/* Zzz saat tidur */}
        {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(m) => {
            if (m) zs.current[i] = m;
          }}
          position={[0.6, 1.5, 0.4]}
          scale={0.0001}
        >
          <planeGeometry args={[0.36, 0.36]} />
          <meshBasicMaterial map={zTex} transparent depthWrite={false} toneMapped={false} />
        </mesh>
      ))}

        <group ref={body}>
          {/* kaki dan sepatu (warna mengikuti outfit) */}
          <Tint k="legL" mats={mats} size={[0.19, 0.22, 0.19]} pos={[-0.13, 0.2, 0]} color={OUTFITS[0].pants} radius={0.03} />
          <Tint k="legR" mats={mats} size={[0.19, 0.22, 0.19]} pos={[0.13, 0.2, 0]} color={OUTFITS[0].pants} radius={0.03} />
          <Tint k="shoeL" mats={mats} size={[0.22, 0.12, 0.34]} pos={[-0.13, 0.06, 0.06]} color={OUTFITS[0].shoes} radius={0.04} />
          <Tint k="shoeR" mats={mats} size={[0.22, 0.12, 0.34]} pos={[0.13, 0.06, 0.06]} color={OUTFITS[0].shoes} radius={0.04} />

          {/* badan */}
          <Tint k="torso" mats={mats} size={[0.58, 0.48, 0.4]} pos={[0, 0.56, 0]} color={OUTFITS[0].top} radius={0.08} />

          {/* home: hoodie biru (hood, tali, saku kanguru) */}
          <Pop on={sec === 0}>
            <Box size={[0.54, 0.22, 0.3]} pos={[0, 0.82, -0.1]} color="#3b6fd8" radius={0.07} />
            <Box size={[0.03, 0.15, 0.02]} pos={[-0.07, 0.69, 0.205]} color="#ffffff" cast={false} />
            <Box size={[0.03, 0.15, 0.02]} pos={[0.07, 0.69, 0.205]} color="#ffffff" cast={false} />
            <Box size={[0.36, 0.15, 0.04]} pos={[0, 0.4, 0.205]} color="#2f5ab8" radius={0.02} cast={false} />
          </Pop>

          {/* workbench: rompi safety oranye dengan strip reflektif */}
          <Pop on={sec === 1}>
            <Box size={[0.22, 0.46, 0.03]} pos={[-0.15, 0.56, 0.205]} color="#ff7a45" cast={false} />
            <Box size={[0.22, 0.46, 0.03]} pos={[0.15, 0.56, 0.205]} color="#ff7a45" cast={false} />
            <Box size={[0.6, 0.46, 0.03]} pos={[0, 0.56, -0.205]} color="#ff7a45" cast={false} />
            <Box size={[0.14, 0.04, 0.42]} pos={[-0.2, 0.8, 0]} color="#ff7a45" cast={false} />
            <Box size={[0.14, 0.04, 0.42]} pos={[0.2, 0.8, 0]} color="#ff7a45" cast={false} />
            <Box size={[0.22, 0.045, 0.035]} pos={[-0.15, 0.5, 0.21]} color={C.steel} cast={false} />
            <Box size={[0.22, 0.045, 0.035]} pos={[0.15, 0.5, 0.21]} color={C.steel} cast={false} />
          </Pop>

          {/* photo: rompi fotografer olive dengan saku */}
          <Pop on={sec === 2}>
            <Box size={[0.22, 0.46, 0.03]} pos={[-0.15, 0.56, 0.205]} color="#6b7a4e" cast={false} />
            <Box size={[0.22, 0.46, 0.03]} pos={[0.15, 0.56, 0.205]} color="#6b7a4e" cast={false} />
            <Box size={[0.6, 0.46, 0.03]} pos={[0, 0.56, -0.205]} color="#6b7a4e" cast={false} />
            <Box size={[0.14, 0.04, 0.42]} pos={[-0.2, 0.8, 0]} color="#6b7a4e" cast={false} />
            <Box size={[0.14, 0.04, 0.42]} pos={[0.2, 0.8, 0]} color="#6b7a4e" cast={false} />
            <Box size={[0.15, 0.12, 0.05]} pos={[-0.15, 0.44, 0.22]} color="#566340" cast={false} />
            <Box size={[0.15, 0.12, 0.05]} pos={[0.15, 0.44, 0.22]} color="#566340" cast={false} />
          </Pop>

          {/* design: kerah turtleneck dan noda cat */}
          <Pop on={sec === 3}>
            <Box size={[0.26, 0.1, 0.26]} pos={[0, 0.8, 0]} color="#e8b92f" radius={0.04} cast={false} />
            <Box size={[0.07, 0.07, 0.03]} pos={[-0.15, 0.64, 0.205]} color={C.pink} cast={false} />
            <Box size={[0.06, 0.06, 0.03]} pos={[0.1, 0.5, 0.205]} color={C.sky} cast={false} />
            <Box size={[0.08, 0.05, 0.03]} pos={[-0.06, 0.4, 0.205]} color={C.mint} cast={false} />
            <Box size={[0.05, 0.05, 0.03]} pos={[0.18, 0.66, 0.205]} color={C.paper} cast={false} />
            <Box size={[0.05, 0.05, 0.03]} pos={[-0.2, 0.46, 0.205]} color={C.orange} cast={false} />
          </Pop>

          {/* journey: toga wisuda dengan selempang kuning */}
          <Pop on={sec === 4}>
            <Box size={[0.68, 0.42, 0.46]} pos={[0, 0.27, 0]} color="#1b1a22" radius={0.06} />
            <Box size={[0.07, 0.52, 0.03]} pos={[-0.13, 0.5, 0.205]} color={C.yellow} cast={false} />
            <Box size={[0.07, 0.52, 0.03]} pos={[0.13, 0.5, 0.205]} color={C.yellow} cast={false} />
            <Box size={[0.2, 0.2, 0.04]} pos={[0, 0.8, 0.2]} rot={[0, 0, 0]} color="#fffaf0" cast={false} />
          </Pop>

          {/* bonus: jaket bomber ungu dengan rib krem */}
          <Pop on={sec === 5}>
            <Box size={[0.62, 0.07, 0.43]} pos={[0, 0.34, 0]} color="#fffaf0" radius={0.02} cast={false} />
            <Box size={[0.28, 0.07, 0.26]} pos={[0, 0.8, 0]} color="#fffaf0" radius={0.03} cast={false} />
            <Box size={[0.02, 0.42, 0.03]} pos={[0, 0.57, 0.205]} color="#ffffff" cast={false} />
          </Pop>

          {/* skills: jas lab putih dengan saku, pena, dan tanda pengenal */}
          <Pop on={sec === 6}>
            <Box size={[0.64, 0.36, 0.44]} pos={[0, 0.3, 0]} color="#f4f1ea" radius={0.05} />
            <Box size={[0.2, 0.46, 0.03]} pos={[-0.17, 0.56, 0.205]} color="#f4f1ea" cast={false} />
            <Box size={[0.2, 0.46, 0.03]} pos={[0.17, 0.56, 0.205]} color="#f4f1ea" cast={false} />
            <Box size={[0.12, 0.12, 0.04]} pos={[-0.1, 0.78, 0.2]} rot={[0, 0, 0.75]} color="#f4f1ea" cast={false} />
            <Box size={[0.12, 0.12, 0.04]} pos={[0.1, 0.78, 0.2]} rot={[0, 0, -0.75]} color="#f4f1ea" cast={false} />
            <Box size={[0.14, 0.1, 0.04]} pos={[0.17, 0.44, 0.22]} color="#dcd6c8" cast={false} />
            <Box size={[0.02, 0.1, 0.02]} pos={[0.19, 0.5, 0.235]} color={C.sky} cast={false} />
            <Box size={[0.09, 0.11, 0.025]} pos={[-0.17, 0.62, 0.222]} color={C.mint} cast={false} />
          </Pop>

          {/* contact: blazer navy, kemeja putih, dasi tangerine */}
          <Pop on={sec === 7}>
            <Box size={[0.17, 0.42, 0.03]} pos={[0, 0.58, 0.205]} color="#ffffff" cast={false} />
            <Box size={[0.1, 0.34, 0.035]} pos={[-0.115, 0.6, 0.212]} rot={[0, 0, -0.18]} color="#1d2740" cast={false} />
            <Box size={[0.1, 0.34, 0.035]} pos={[0.115, 0.6, 0.212]} rot={[0, 0, 0.18]} color="#1d2740" cast={false} />
            <Box size={[0.05, 0.3, 0.03]} pos={[0, 0.54, 0.228]} color={C.orange} cast={false} />
            <Box size={[0.07, 0.06, 0.04]} pos={[0, 0.7, 0.23]} color={C.orange} cast={false} />
            <Box size={[0.1, 0.09, 0.04]} pos={[-0.08, 0.8, 0.2]} rot={[0, 0, 0.7]} color="#ffffff" cast={false} />
            <Box size={[0.1, 0.09, 0.04]} pos={[0.08, 0.8, 0.2]} rot={[0, 0, -0.7]} color="#ffffff" cast={false} />
          </Pop>

          {/* leher */}
          <Box size={[0.17, 0.12, 0.17]} pos={[0, 0.82, 0]} color={SKIN_SHADE} cast={false} />

          {/* lengan: pivot di bahu */}
          <group ref={armR} position={[0.37, 0.74, 0]}>
            <Tint k="sleeveR" mats={mats} size={[0.15, 0.3, 0.15]} pos={[0, -0.15, 0]} color={OUTFITS[0].sleeve} radius={0.04} />
            <Pop on={sec === 5}>
              <Box size={[0.17, 0.05, 0.17]} pos={[0, -0.28, 0]} color="#fffaf0" cast={false} />
            </Pop>
            <Ball r={0.078} pos={[0, -0.35, 0]} color={SKIN} />
          </group>
          <group ref={armL} position={[-0.37, 0.74, 0]}>
            <Tint k="sleeveL" mats={mats} size={[0.15, 0.3, 0.15]} pos={[0, -0.15, 0]} color={OUTFITS[0].sleeve} radius={0.04} />
            <Pop on={sec === 5}>
              <Box size={[0.17, 0.05, 0.17]} pos={[0, -0.28, 0]} color="#fffaf0" cast={false} />
            </Pop>
            <Ball r={0.078} pos={[0, -0.35, 0]} color={SKIN} />
          </group>

          {/* properti tangan */}
          <group position={[0.28, 0.56, 0.44]}>
            {/* workbench: papan ESP32 */}
            <Pop on={sec === 1}>
              <group rotation={[-0.35, 0, 0]}>
                <Box size={[0.3, 0.025, 0.2]} color="#2f8f6b" cast={false} />
                <Box size={[0.1, 0.03, 0.08]} pos={[0.02, 0.025, 0]} color="#1b1a22" cast={false} />
                <Box size={[0.09, 0.03, 0.05]} pos={[-0.09, 0.025, 0.04]} color="#c9ced6" cast={false} />
                <mesh position={[0.11, 0.03, -0.06]}>
                  <sphereGeometry args={[0.018, 10, 8]} />
                  <meshStandardMaterial ref={led} color="#ff4d4d" emissive="#ff3b3b" emissiveIntensity={1} />
                </mesh>
              </group>
            </Pop>
            {/* design: stylus */}
            <Pop on={sec === 3}>
              <group rotation={[0, 0, -0.7]}>
                <Cyl r={0.018} h={0.4} color={C.sky} cast={false} />
                <Cyl r={0.018} h={0.1} pos={[0, -0.25, 0]} r2={0.003} color={C.orange} cast={false} />
              </group>
            </Pop>
            {/* skills: gulungan sertifikat */}
            <Pop on={sec === 6}>
              <group rotation={[0, 0, Math.PI / 2 - 0.3]}>
                <Cyl r={0.05} h={0.3} color={C.paper} cast={false} />
                <Cyl r={0.056} h={0.04} color="#e5484d" cast={false} />
              </group>
            </Pop>
            {/* contact: amplop */}
            <Pop on={sec === 7}>
              <group rotation={[-0.25, 0.2, 0.1]} scale={1.5}>
                <Box size={[0.32, 0.02, 0.22]} color={C.paper} cast={false} />
                <Box size={[0.2, 0.022, 0.012]} pos={[-0.045, 0.012, 0.025]} rot={[0, 0.5, 0]} color="#e0d4bf" cast={false} />
                <Box size={[0.2, 0.022, 0.012]} pos={[0.045, 0.012, 0.025]} rot={[0, -0.5, 0]} color="#e0d4bf" cast={false} />
                <Ball r={0.035} pos={[0, 0.03, -0.02]} color={C.pink} scale={[1, 0.5, 1]} cast={false} />
              </group>
            </Pop>
          </group>

          {/* photo: kamera di depan dada, dipegang dua tangan */}
          <group position={[0, 0.66, 0.46]}>
            <Pop on={sec === 2}>
              <Box size={[0.36, 0.2, 0.16]} color="#2b2a33" radius={0.03} />
              <Box size={[0.13, 0.06, 0.1]} pos={[-0.08, 0.12, 0]} color={C.grey} cast={false} />
              <Cyl r={0.075} h={0.1} pos={[0.02, 0, 0.12]} rot={[Math.PI / 2, 0, 0]} color="#14131a" />
              <Ball r={0.05} pos={[0.02, 0, 0.175]} color={C.sky} scale={[1, 1, 0.5]} cast={false} />
              <mesh position={[0.13, 0.1, 0.02]}>
                <boxGeometry args={[0.06, 0.04, 0.05]} />
                <meshStandardMaterial ref={flash} color="#ffffff" emissive="#ffffff" emissiveIntensity={0} />
              </mesh>
            </Pop>
          </group>

          {/* kepala: pivot di leher */}
          <group ref={head} position={[0, 0.86, 0]}>
            <Box size={[0.86, 0.74, 0.78]} pos={[0, 0.4, 0]} color={SKIN} radius={0.18} />
            {/* telinga */}
            <Box size={[0.08, 0.2, 0.13]} pos={[-0.46, 0.33, 0]} color={SKIN} radius={0.03} cast={false} />
            <Box size={[0.08, 0.2, 0.13]} pos={[0.46, 0.33, 0]} color={SKIN} radius={0.03} cast={false} />
            <Box size={[0.03, 0.1, 0.07]} pos={[-0.48, 0.33, 0]} color={SKIN_SHADE} cast={false} />
            <Box size={[0.03, 0.1, 0.07]} pos={[0.48, 0.33, 0]} color={SKIN_SHADE} cast={false} />

            {/* wajah */}
            <group ref={eyes}>
              <Eye x={-0.2} glintSide={1} />
              <Eye x={0.2} glintSide={1} />
            </group>
            <Box size={[0.17, 0.035, 0.045]} pos={[-0.2, 0.47, 0.395]} color={C.ink} cast={false} />
            <Box size={[0.17, 0.035, 0.045]} pos={[0.2, 0.47, 0.395]} color={C.ink} cast={false} />
            {/* alis: kiri miring turun, kanan lebih datar (kesan santai) */}
            <Box size={[0.18, 0.035, 0.04]} pos={[-0.2, 0.55, 0.4]} rot={[0, 0, 0.22]} color={C.ink} cast={false} />
            <Box size={[0.2, 0.035, 0.04]} pos={[0.2, 0.56, 0.4]} rot={[0, 0, 0.04]} color={C.ink} cast={false} />
            {/* senyum miring */}
            <Box size={[0.13, 0.03, 0.04]} pos={[-0.01, 0.17, 0.395]} color={C.ink} cast={false} />
            <Box size={[0.035, 0.05, 0.04]} pos={[0.085, 0.2, 0.395]} color={C.ink} cast={false} />

            {/* rambut */}
            <group visible={!hatOn}>
              <Box size={[0.96, 0.3, 0.9]} pos={[0, 0.82, -0.02]} color={HAIR} radius={0.12} />
              <Box size={[0.96, 0.72, 0.34]} pos={[0, 0.5, -0.31]} color={HAIR} radius={0.1} />
            </group>
            <group visible={!hatOn}>
              <Box size={[0.1, 0.42, 0.62]} pos={[-0.47, 0.6, -0.1]} color={HAIR} radius={0.03} cast={false} />
              <Box size={[0.1, 0.42, 0.62]} pos={[0.47, 0.6, -0.1]} color={HAIR} radius={0.03} cast={false} />
            </group>
            <Box size={[0.52, 0.12, 0.1]} pos={[-0.18, 0.69, 0.4]} rot={[0, 0, 0.05]} color={HAIR} cast={false} />
            <Box size={[0.34, 0.1, 0.1]} pos={[0.27, 0.7, 0.4]} rot={[0, 0, -0.08]} color={HAIR} cast={false} />
            <group visible={!hideSpikes}>
              <Box size={[0.28, 0.22, 0.34]} pos={[-0.3, 1.02, 0]} rot={[0, 0, 0.18]} color={HAIR} radius={0.04} />
              <Box size={[0.32, 0.26, 0.34]} pos={[0.02, 1.06, -0.05]} color={HAIR} radius={0.04} />
              <Box size={[0.28, 0.2, 0.34]} pos={[0.31, 0.99, 0.02]} rot={[0, 0, -0.22]} color={HAIR} radius={0.04} />
            </group>

            {/* kacamata hitam (telur paskah) */}
            <Pop on={shades}>
              <Box size={[0.8, 0.045, 0.05]} pos={[0, 0.4, 0.4]} color="#0c0b10" cast={false} />
              <Box size={[0.3, 0.17, 0.05]} pos={[-0.2, 0.36, 0.41]} color="#0c0b10" radius={0.03} cast={false} />
              <Box size={[0.3, 0.17, 0.05]} pos={[0.2, 0.36, 0.41]} color="#0c0b10" radius={0.03} cast={false} />
              <Box size={[0.08, 0.025, 0.02]} pos={[-0.28, 0.4, 0.44]} rot={[0, 0, 0.5]} color="#6ec1e4" cast={false} />
              <Box size={[0.08, 0.025, 0.02]} pos={[0.12, 0.4, 0.44]} rot={[0, 0, 0.5]} color="#6ec1e4" cast={false} />
            </Pop>

            {/* workbench: helm safety */}
            <Pop on={hatOn}>
              {/* helm sedikit terdongak ke belakang supaya wajah tetap terlihat dari sudut isometrik */}
              <group position={[0, 0.74, -0.04]} rotation={[-0.34, 0, 0]}>
                <mesh castShadow>
                  <sphereGeometry args={[0.6, 22, 14, 0, Math.PI * 2, 0, Math.PI / 2]} />
                  <meshStandardMaterial color={HAT} roughness={0.4} />
                </mesh>
                <Cyl r={0.68} h={0.04} pos={[0, 0, 0.03]} color="#e65f2b" />
                <Box size={[0.1, 0.05, 0.64]} pos={[0, 0.58, 0]} color="#e65f2b" cast={false} />
              </group>
            </Pop>

            {/* journey: topi wisuda */}
            <Pop on={capOn}>
              <Cyl r={0.34} h={0.2} pos={[0, 0.86, 0]} color="#1b1a22" seg={16} />
              <Box size={[0.95, 0.05, 0.95]} pos={[0, 1.0, 0]} rot={[0, 0.5, 0]} color="#1b1a22" cast={false} />
              <group rotation={[0, 0.5, 0]}>
                <Box size={[0.03, 0.03, 0.5]} pos={[0.2, 1.04, 0.22]} color={C.yellow} cast={false} />
                <Box size={[0.025, 0.28, 0.025]} pos={[0.2, 0.89, 0.47]} color={C.yellow} cast={false} />
                <Ball r={0.04} pos={[0.2, 0.74, 0.47]} color={C.yellow} cast={false} />
              </group>
            </Pop>

            {/* design: baret */}
            <Pop on={beretOn}>
              <group rotation={[0.05, 0, -0.18]} position={[0.04, 0, 0]}>
                <Ball r={0.5} pos={[0, 0.88, 0]} color={C.pink} scale={[1, 0.42, 1]} />
                <Cyl r={0.025} h={0.1} pos={[0, 1.1, 0]} color={C.pink} cast={false} />
              </group>
            </Pop>

            {/* bonus: headphone */}
            <Pop on={phonesOn}>
              <mesh position={[0, 0.4, 0]} castShadow>
                <torusGeometry args={[0.58, 0.04, 8, 28, Math.PI]} />
                <meshStandardMaterial color="#1b1a22" roughness={0.5} />
              </mesh>
              <Cyl r={0.17} h={0.13} pos={[-0.56, 0.4, 0]} rot={[0, 0, Math.PI / 2]} color={C.orange} />
              <Cyl r={0.17} h={0.13} pos={[0.56, 0.4, 0]} rot={[0, 0, Math.PI / 2]} color={C.orange} />
              <Cyl r={0.1} h={0.15} pos={[-0.58, 0.4, 0]} rot={[0, 0, Math.PI / 2]} color="#1b1a22" cast={false} />
              <Cyl r={0.1} h={0.15} pos={[0.58, 0.4, 0]} rot={[0, 0, Math.PI / 2]} color="#1b1a22" cast={false} />
            </Pop>

            {/* skills: kacamata bulat */}
            <Pop on={glassesOn}>
              <mesh position={[-0.2, 0.37, 0.41]}>
                <torusGeometry args={[0.13, 0.02, 8, 20]} />
                <meshStandardMaterial color="#1b1a22" />
              </mesh>
              <mesh position={[0.2, 0.37, 0.41]}>
                <torusGeometry args={[0.13, 0.02, 8, 20]} />
                <meshStandardMaterial color="#1b1a22" />
              </mesh>
              <Box size={[0.1, 0.02, 0.02]} pos={[0, 0.4, 0.41]} color="#1b1a22" cast={false} />
            </Pop>
          </group>
        </group>
      </group>

      {/* balon ucapan (HTML di atas kanvas, tidak menangkap pointer) */}
      <Html position={[0, 2.1, 0.2]} center zIndexRange={[20, 0]} style={{ pointerEvents: 'none' }}>
        {bubble && (
          <div key={bubble.id} className="mascot-bubble" aria-hidden>
            {bubble.text}
          </div>
        )}
      </Html>
    </>
  );
}

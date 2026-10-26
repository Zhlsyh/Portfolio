/** Ilustrasi isometrik statis: dipakai saat WebGL tidak tersedia, mode ringan, atau reduced-motion. */

const W = 56;
const H = 28;

function iso(x: number, y: number): [number, number] {
  return [(x - y) * (W / 2), (x + y) * (H / 2)];
}

function IsoBox({
  x,
  y,
  w = 1,
  d = 1,
  h = 20,
  z = 0,
  color,
}: {
  x: number;
  y: number;
  w?: number;
  d?: number;
  h?: number;
  z?: number;
  color: string;
}) {
  const p = (px: number, py: number, pz: number) => {
    const [sx, sy] = iso(px, py);
    return `${sx},${sy - pz}`;
  };
  const top = [p(x, y, z + h), p(x + w, y, z + h), p(x + w, y + d, z + h), p(x, y + d, z + h)].join(' ');
  const left = [p(x, y + d, z + h), p(x + w, y + d, z + h), p(x + w, y + d, z), p(x, y + d, z)].join(' ');
  const right = [p(x + w, y, z + h), p(x + w, y + d, z + h), p(x + w, y + d, z), p(x + w, y, z)].join(' ');
  return (
    <g stroke="#2b2230" strokeWidth="2" strokeLinejoin="round">
      <polygon points={left} fill={color} style={{ filter: 'brightness(0.86)' }} />
      <polygon points={right} fill={color} style={{ filter: 'brightness(0.74)' }} />
      <polygon points={top} fill={color} />
    </g>
  );
}

export default function StaticDiorama() {
  return (
    <svg
      viewBox="-230 -150 460 340"
      className="h-full w-full"
      role="img"
      aria-label="Ilustrasi diorama studio: meja elektronik, pojok foto, meja desain, dan kotak surat"
    >
      <g transform="translate(0,40)">
        <IsoBox x={-3} y={-3} w={6} d={6} h={14} z={-14} color="#f1dfbf" />
        <IsoBox x={-3} y={-3} w={2.8} d={2.8} h={4} color="#bfe8d4" />
        <IsoBox x={0.2} y={-3} w={2.8} d={2.8} h={4} color="#ffe1a0" />
        <IsoBox x={0.2} y={0.2} w={2.8} d={2.8} h={4} color="#bfe3f5" />
        <IsoBox x={-3} y={0.2} w={2.8} d={2.8} h={4} color="#ffd0dc" />

        {/* workbench */}
        <IsoBox x={-2.7} y={-2.7} w={2} d={1} h={22} z={4} color="#d9a066" />
        <IsoBox x={-2.3} y={-2.4} w={0.6} d={0.4} h={8} z={26} color="#ff7a45" />
        <IsoBox x={-1.4} y={-2.5} w={0.4} d={0.5} h={6} z={26} color="#22305c" />
        {/* photo */}
        <IsoBox x={1.2} y={-2.9} w={1.6} d={0.2} h={50} z={4} color="#ff9eb5" />
        <IsoBox x={1.6} y={-1.6} w={0.5} d={0.4} h={18} z={4} color="#2b2230" />
        <IsoBox x={1.55} y={-1.65} w={0.7} d={0.5} h={10} z={22} color="#3a3344" />
        {/* design */}
        <IsoBox x={0.5} y={0.6} w={2} d={1} h={20} z={4} color="#fffaf0" />
        <IsoBox x={1.2} y={0.7} w={0.9} d={0.1} h={26} z={24} color="#2b2230" />
        {/* contact */}
        <IsoBox x={-2.1} y={1.4} w={0.2} d={0.2} h={36} z={4} color="#b97f47" />
        <IsoBox x={-2.5} y={1.2} w={1.0} d={0.7} h={18} z={40} color="#6ec1e4" />
        {/* maskot */}
        <ellipse cx="0" cy="22" rx="22" ry="12" fill="#ff7a45" stroke="#2b2230" strokeWidth="2" />
        <rect x="-14" y="-12" width="28" height="36" rx="14" fill="#ffd24a" stroke="#2b2230" strokeWidth="2" />
        <path d="M-15 -4 a15 15 0 0 1 30 0 z" fill="#ff7a45" stroke="#2b2230" strokeWidth="2" />
        <circle cx="-5" cy="6" r="2.2" fill="#2b2230" />
        <circle cx="5" cy="6" r="2.2" fill="#2b2230" />
      </g>
    </svg>
  );
}

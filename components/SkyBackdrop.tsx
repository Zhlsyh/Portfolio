/** Langit siang (matahari + awan) dan malam (bulan + bintang). Berganti lewat [data-theme] di CSS. */

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rand = seeded(20262026);
const STARS = Array.from({ length: 80 }, () => ({
  left: rand() * 100,
  top: rand() * 92,
  size: 1 + rand() * 2.2,
  delay: rand() * 5,
  dur: 2.2 + rand() * 3.5,
}));

const CLOUDS = [
  { top: '12%', scale: 1, dur: 120, delay: -30, opacity: 0.95 },
  { top: '26%', scale: 0.7, dur: 170, delay: -110, opacity: 0.8 },
  { top: '6%', scale: 0.55, dur: 200, delay: -60, opacity: 0.7 },
];

export default function SkyBackdrop({ className = '' }: { className?: string }) {
  return (
    <div className={`sky ${className}`} aria-hidden>
      <div className="sky-layer sky-day">
        <div className="sun" />
        {CLOUDS.map((c, i) => (
          <span
            key={i}
            className="cloud"
            style={{
              top: c.top,
              opacity: c.opacity,
              scale: String(c.scale),
              animationDuration: `${c.dur}s`,
              animationDelay: `${c.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="sky-layer sky-night">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
            }}
          />
        ))}
        <span className="shooting-star" />
        <div className="moon" />
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';

interface IntroOverlayProps {
  phase: 'greeting' | 'parting' | 'done';
  onSkip: () => void;
  dark: boolean;
}

/**
 * Overlay intro awan pembuka:
 * - Menutupi layar dengan awan atmosferik lembut
 * - Sapaan teks "Halo, selamat datang", nama "Zulhelmi Syahtiar", dan bidang keahlian
 * - Tombol "Lewati Intro"
 * - Awan terbelah ke samping saat fase 'parting'
 */
export default function IntroOverlay({ phase, onSkip, dark }: IntroOverlayProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase !== 'greeting') return;

    // Listener tombol Escape untuk lewati intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onSkip();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Animasi progress bar pengisi durasi sapaan (~2.2s)
    const startTime = Date.now();
    const duration = 2200;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 25);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, [phase, onSkip]);

  if (phase === 'done') return null;

  const isParting = phase === 'parting';

  return (
    <aside
      aria-label="Animasi intro studio"
      className={`fixed inset-0 z-50 overflow-hidden transition-colors duration-700 ${
        isParting ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* Background Mist / Gradient Tengah */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          dark
            ? 'bg-gradient-to-b from-[#0a0f1f]/95 via-[#131b38]/90 to-[#0a0f1f]/95'
            : 'bg-gradient-to-b from-[#fdf8f0]/95 via-[#f6efe3]/90 to-[#fdf8f0]/95'
        } ${isParting ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Awan Kiri (Sliding to Left saat parting) */}
      <div
        className={`absolute -bottom-10 -left-24 top-0 w-[68vw] max-w-[54rem] transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isParting
            ? '-translate-x-[115%] scale-95 opacity-0'
            : 'translate-x-0 scale-100 opacity-100'
        }`}
      >
        <svg
          viewBox="0 0 800 900"
          className="h-full w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          preserveAspectRatio="none"
          fill="none"
        >
          <g fill={dark ? '#182247' : '#ffffff'} fillOpacity={dark ? 0.95 : 0.98}>
            <circle cx="280" cy="220" r="230" />
            <circle cx="460" cy="380" r="260" />
            <circle cx="240" cy="540" r="250" />
            <circle cx="480" cy="690" r="240" />
            <circle cx="210" cy="800" r="230" />
            <rect x="0" y="0" width="360" height="900" />
          </g>
          {/* Layer Puff Awan Sekunder untuk kedalaman (depth) */}
          <g fill={dark ? '#222f5f' : '#faeedb'} fillOpacity={dark ? 0.6 : 0.75}>
            <circle cx="410" cy="210" r="150" />
            <circle cx="560" cy="460" r="160" />
            <circle cx="400" cy="680" r="170" />
          </g>
        </svg>
      </div>

      {/* Awan Kanan (Sliding to Right saat parting) */}
      <div
        className={`absolute -bottom-10 -right-24 top-0 w-[68vw] max-w-[54rem] transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isParting
            ? 'translate-x-[115%] scale-95 opacity-0'
            : 'translate-x-0 scale-100 opacity-100'
        }`}
      >
        <svg
          viewBox="0 0 800 900"
          className="h-full w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          preserveAspectRatio="none"
          fill="none"
        >
          <g fill={dark ? '#182247' : '#ffffff'} fillOpacity={dark ? 0.95 : 0.98}>
            <circle cx="520" cy="220" r="230" />
            <circle cx="340" cy="380" r="260" />
            <circle cx="560" cy="540" r="250" />
            <circle cx="320" cy="690" r="240" />
            <circle cx="590" cy="800" r="230" />
            <rect x="440" y="0" width="360" height="900" />
          </g>
          {/* Layer Puff Awan Sekunder */}
          <g fill={dark ? '#222f5f' : '#faeedb'} fillOpacity={dark ? 0.6 : 0.75}>
            <circle cx="390" cy="210" r="150" />
            <circle cx="240" cy="460" r="160" />
            <circle cx="400" cy="680" r="170" />
          </g>
        </svg>
      </div>

      {/* Tombol Skip Intro di Pojok Kanan Atas */}
      <div
        className={`absolute right-4 top-4 z-20 transition-all duration-500 md:right-8 md:top-8 ${
          isParting ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <button
          type="button"
          onClick={onSkip}
          className="glass group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold shadow-[0_8px_20px_-6px_var(--glass-shadow)] transition-all hover:scale-105 active:scale-95"
          aria-label="Lewati animasi intro"
        >
          <span>Lewati Intro</span>
          <span
            className="grid h-5 w-5 place-items-center rounded-full bg-[var(--ink)] text-[var(--cream)] transition-transform group-hover:translate-x-0.5"
            aria-hidden
          >
            ➔
          </span>
        </button>
      </div>

      {/* Kartu Sapaan Tengah */}
      <div className="relative z-10 grid h-full w-full place-items-center p-6 text-center">
        <div
          className={`flex max-w-xl flex-col items-center space-y-5 transition-all duration-700 ${
            isParting
              ? '-translate-y-10 scale-95 opacity-0'
              : 'translate-y-0 scale-100 opacity-100'
          }`}
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--edge)] bg-[var(--surface-strong)] px-4 py-1.5 shadow-[0_4px_16px_-4px_var(--glass-shadow)]">
            <span className="h-2 w-2 animate-ping rounded-full bg-tangerine" />
            <span className="font-display text-xs font-extrabold uppercase tracking-widest text-tangerine">
              Selamat Datang · Studio Diorama
            </span>
          </div>

          {/* Heading Nama & Sapaan */}
          <div className="space-y-2">
            <p className="font-display text-base font-semibold text-[var(--ink-soft)] md:text-xl">
              Halo! Saya
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Zulhelmi{' '}
              <span className="text-tangerine">Syahtiar</span>
            </h1>
          </div>

          {/* Deskripsi Singkat */}
          <p className="max-w-md text-sm font-medium leading-relaxed text-[var(--ink-soft)] sm:text-base">
            Embedded &amp; IoT Engineer, Fotografer, dan Desainer Grafis.
          </p>

          {/* Progress Indicator */}
          <div className="flex w-48 flex-col items-center gap-1.5 pt-2">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--ink)]/10">
              <div
                className="h-full rounded-full bg-tangerine transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[0.7rem] font-bold text-[var(--ink-soft)]">
              Membuka studio...
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import FluidBackground from '@/components/FluidBackground';

interface HeroProps {
  onOpenResume: () => void;
  isDark: boolean;
}

export default function Hero({ onOpenResume, isDark }: HeroProps) {
  const { content } = useSiteData();
  const HERO = content.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const rotateZ = useTransform(scrollYProgress, [0, 1], [-1, -6]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      <FluidBackground isDark={isDark} />

      {/* Unified clean container */}
      <div className="relative max-w-5xl mx-auto w-full px-5 sm:px-8 md:px-10 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          {/* Kolom Teks Kiri */}
          <div className="md:col-span-7 min-w-0 flex flex-col gap-6">
            {/* Nama Besar */}
            <h1 className="font-display font-extrabold leading-[1.02] tracking-tight text-5xl sm:text-6xl md:text-7xl">
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-[var(--text)]"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {HERO.title1}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ color: 'var(--accent)' }}
                >
                  {HERO.title2}
                </motion.span>
              </span>
            </h1>

            {/* Sub-label orientasi cepat */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex items-center gap-2 font-mono-label text-xs sm:text-sm uppercase tracking-wider"
              style={{ color: 'var(--accent)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
              <span>Elektronika Industri • IoT • Otomasi & Kontrol</span>
            </motion.div>

            {/* Deskripsi ringkasan dari CV */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--text-dim)' }}
            >
              {HERO.description}
            </motion.p>

            {/* Tombol Aksi - Hierarki Primer & Sekunder yang Jelas */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                data-cursor="Kontak"
                className="btn-accent px-6 py-3.5 rounded-xl font-extrabold text-sm flex items-center gap-2 transition-transform hover:scale-[1.02] shadow-sm"
              >
                Hubungi Saya
                <span className="material-symbols-outlined text-base">send</span>
              </a>
              <a
                href="#projects"
                data-cursor="Karya"
                className="px-6 py-3.5 rounded-xl font-bold text-sm border flex items-center gap-2 transition-colors hover:bg-[var(--surface-strong)] hover:border-accent"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--text)' }}
              >
                Lihat Karya
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </a>
            </motion.div>
          </div>

          {/* Kolom Foto Kanan (Clean & modern frame) */}
          <div className="md:col-span-5 min-w-0 flex justify-center md:justify-end">
            <motion.div
              style={{
                rotateZ,
                y: cardY,
                opacity: fade,
                transformPerspective: 1200,
              }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[calc(100vw-3.5rem)] min-w-0 aspect-square sm:max-w-xs md:max-w-sm"
            >
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 shadow-xl group"
                style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpeg"
                  alt="Zulhelmi Syahtiar"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Strip 4 kapabilitas utama di bawah hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t pt-8"
          style={{ borderColor: 'var(--border)' }}
        >
          {HERO.badges.map((badge) => (
            <div key={badge.label} className="surface-card rounded-xl p-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-accent text-2xl mt-0.5 shrink-0" aria-hidden="true">
                {badge.icon}
              </span>
              <div className="min-w-0">
                <p className="font-mono-label text-[10px] uppercase truncate" style={{ color: 'var(--text-faint)' }}>
                  {badge.label}
                </p>
                <p className="text-sm font-bold mt-0.5 truncate">{badge.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

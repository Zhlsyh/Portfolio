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

  const rotateZ = useTransform(scrollYProgress, [0, 1], [-2, -16]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      <FluidBackground isDark={isDark} />

      <div className="relative max-w-7xl mx-auto w-full px-5 md:px-16 pt-32 pb-20">
        {/* Baris utama: teks kiri, foto kanan — susunan dipertahankan dari versi lama */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono-label uppercase"
                style={{ background: 'var(--accent-soft)', border: '1px solid var(--border-strong)', color: 'var(--accent)' }}
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                Available for Work & IoT Projects
              </div>
              <span className="font-mono-label text-xs uppercase" style={{ color: 'var(--text-faint)' }}>
                {HERO.eyebrow}
              </span>
            </motion.div>

            <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-[13vw] sm:text-[8vw] lg:text-[4.6vw]">
              {['Zulhelmi', 'Syahtiar.'].map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ color: i === 1 ? 'var(--accent)' : 'var(--text)' }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-base md:text-lg max-w-xl"
              style={{ color: 'var(--text-dim)' }}
            >
              {HERO.description}
            </motion.p>

            {/* Tiga tombol CTA — urutan & jumlah dipertahankan dari versi lama */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                data-cursor="Kontak"
                className="btn-accent px-7 py-3.5 rounded-full font-extrabold text-sm uppercase tracking-wide flex items-center gap-2 transition-transform hover:scale-[1.03]"
              >
                Hubungi Saya
                <span className="material-symbols-outlined text-base">send</span>
              </a>
              <button
                type="button"
                data-cursor="Unduh"
                onClick={onOpenResume}
                className="px-7 py-3.5 rounded-full font-extrabold text-sm uppercase tracking-wide border transition-colors hover:bg-[var(--surface)] flex items-center gap-2"
                style={{ borderColor: 'var(--border-strong)' }}
              >
                Unduh CV
                <span className="material-symbols-outlined text-base">download</span>
              </button>
              <a
                href="#projects"
                data-cursor="Karya"
                className="px-4 py-3.5 font-bold text-sm uppercase tracking-wide flex items-center gap-1.5 transition-colors hover:text-accent"
                style={{ color: 'var(--text-dim)' }}
              >
                Lihat Karya
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </motion.div>
          </div>

          {/* Frame foto kanan dengan badge & kutipan mengambang — dipertahankan dari versi lama */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={{
                rotateZ,
                y: cardY,
                opacity: fade,
                transformPerspective: 1200,
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm aspect-square"
            >
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden border shadow-2xl group"
                style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpeg"
                  alt="Zulhelmi Syahtiar"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>



              <div
                className="absolute -bottom-8 -left-6 md:-left-8 max-w-[260px] rounded-2xl px-5 py-4 shadow-2xl backdrop-blur-md"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)' }}
              >
                <p className="text-xs md:text-sm italic font-medium">
                  <span style={{ color: 'var(--accent)' }}>&ldquo;</span>
                  {HERO.quote}
                  <span style={{ color: 'var(--accent)' }}>&rdquo;</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bento badge kapabilitas — urutan tetap di bawah, seperti versi lama */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {HERO.badges.map((badge) => (
            <div
              key={badge.label}
              className="surface-card rounded-xl p-5 flex flex-col gap-2 group hover:border-accent transition-colors"
            >
              <span className="material-symbols-outlined text-accent text-2xl block group-hover:rotate-12 transition-transform">
                {badge.icon}
              </span>
              <p className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
                {badge.label}
              </p>
              <p className="text-sm font-bold">{badge.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

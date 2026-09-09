import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroScreenProps {
  onDone: () => void;
}

// Pecahan sapaan yang muncul berurutan sebelum layar terbuka ke landing page.
const GREETING_WORDS = ['Halo,', 'Saya', 'Zulhelmi', 'Syahtiar'];

export default function IntroScreen({ onDone }: IntroScreenProps) {
  const [phase, setPhase] = useState<'greeting' | 'exit' | 'done'>('greeting');

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('intro_seen')) {
      setPhase('done');
      onDone();
      return;
    }

    const t1 = setTimeout(() => setPhase('exit'), 1050);
    const t2 = setTimeout(() => {
      setPhase('done');
      onDone();
      try {
        sessionStorage.setItem('intro_seen', 'true');
      } catch {}
    }, 1700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: 'var(--bg)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.55 } }}
        >
          {/* Panel kiri & kanan yang membuka seperti tirai */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2"
            style={{ background: 'var(--bg-elevated)' }}
            animate={phase === 'exit' ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2"
            style={{ background: 'var(--bg-elevated)' }}
            animate={phase === 'exit' ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Titik aksen berdenyut di tengah, motif "sinyal menyala" */}
          <motion.div
            className="absolute w-24 h-24 rounded-full blur-3xl"
            style={{ background: 'var(--accent)' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.35, 0.2], scale: [0.6, 1.4, 1.2] }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-3 px-6 text-center"
            animate={phase === 'exit' ? { opacity: 0, y: -14 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl flex flex-wrap justify-center gap-x-3 gap-y-1">
              {GREETING_WORDS.map((word, i) => (
                <span key={word} className="overflow-hidden inline-block">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ color: i >= 2 ? 'var(--accent)' : 'var(--text)' }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

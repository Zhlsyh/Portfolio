import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface StickerItem {
  id: string;
  type: 'badge' | 'stamp' | 'tape' | 'camera';
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  bg: string;
  defaultX: number;
  defaultY: number;
  rotation: number;
}

const STICKERS: StickerItem[] = [
  {
    id: 'sticker-camera',
    type: 'camera',
    title: '35MM ANALOG',
    subtitle: 'Capture The Light',
    icon: 'photo_camera',
    color: '#0d1f18',
    bg: '#fdfbf7',
    defaultX: 30,
    defaultY: 280,
    rotation: -6,
  },
  {
    id: 'sticker-uno',
    type: 'badge',
    title: 'UNO REVERSE',
    subtitle: 'Think Outside The Box',
    icon: 'change_circle',
    color: '#06140f',
    bg: '#3fe8ab',
    defaultX: 35,
    defaultY: 420,
    rotation: 8,
  },
  {
    id: 'sticker-craft',
    type: 'stamp',
    title: 'PNJ ELECTRONICS',
    subtitle: 'Crafted with Precision',
    icon: 'verified',
    color: '#3fe8ab',
    bg: 'rgba(11, 23, 18, 0.92)',
    defaultX: 30,
    defaultY: 560,
    rotation: -4,
  },
];

export default function FloatingStickers() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    // Hanya aktifkan pada desktop yang memiliki pointer presisi (mouse)
    const isFine = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;
    setEnabled(isFine);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <div key={resetKey} className="fixed inset-0 pointer-events-none z-[45]">
            {STICKERS.map((s) => (
              <motion.div
                key={s.id}
                drag
                dragMomentum={false}
                initial={{ opacity: 0, scale: 0.8, x: s.defaultX, y: s.defaultY, rotate: s.rotation }}
                animate={{ opacity: 1, scale: 1, x: s.defaultX, y: s.defaultY, rotate: s.rotation }}
                exit={{ opacity: 0, scale: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  cursor: 'grab',
                  boxShadow: '0 20px 30px rgba(0,0,0,0.3)',
                }}
                whileDrag={{
                  scale: 1.18,
                  cursor: 'grabbing',
                  zIndex: 99,
                  boxShadow: '0 25px 40px rgba(0,0,0,0.4)',
                }}
                className="pointer-events-auto absolute p-2.5 px-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 select-none border border-black/10"
                style={{
                  background: s.bg,
                  color: s.color,
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: s.type === 'stamp' ? 'rgba(63, 232, 171, 0.15)' : 'rgba(0,0,0,0.06)',
                  }}
                >
                  <span className="material-symbols-outlined text-lg">{s.icon}</span>
                </div>
                <div className="leading-tight">
                  <p className="font-mono-label font-black text-[10px] uppercase tracking-wider">{s.title}</p>
                  <p className="text-[9px] opacity-75 font-medium">{s.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Tombol floating kecil kontrol stiker di pojok kanan bawah */}
      <div className="fixed bottom-6 right-6 z-[50] flex items-center gap-1.5">
        <button
          type="button"
          data-cursor="Stiker"
          onClick={() => setVisible((v) => !v)}
          className="surface-card px-3 py-1.5 rounded-full text-[10px] font-mono-label uppercase backdrop-blur-md flex items-center gap-1.5 hover:border-accent transition-all shadow-lg"
          style={{ color: 'var(--text-dim)' }}
          title="Tampilkan / Sembunyikan Stiker Meja Kerja"
        >
          <span className="material-symbols-outlined text-xs text-accent">
            {visible ? 'label' : 'label_off'}
          </span>
          Stiker {visible ? 'On' : 'Off'}
        </button>
        {visible && (
          <button
            type="button"
            data-cursor="Reset"
            onClick={() => setResetKey((k) => k + 1)}
            className="surface-card w-7 h-7 rounded-full text-[10px] flex items-center justify-center hover:border-accent transition-colors shadow-lg"
            style={{ color: 'var(--text-dim)' }}
            title="Kembalikan Posisi Stiker"
          >
            <span className="material-symbols-outlined text-xs">restart_alt</span>
          </button>
        )}
      </div>
    </>
  );
}

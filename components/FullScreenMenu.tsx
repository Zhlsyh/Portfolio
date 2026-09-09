import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';

interface FullScreenMenuProps {
  open: boolean;
  onClose: () => void;
}

const PREVIEWS: Record<string, string> = {
  '#home': '/profile.jpeg',
  '#experience': '/photos/RobotPenjagaTanaman.jpeg',
  '#skills': '/photos/TrainerMotorDC.jpeg',
  '#certifications': '/photos/WebDashboardMonitoringIoT.jpeg',
  '#contact': '/profile.jpeg',
};

export default function FullScreenMenu({ open, onClose }: FullScreenMenuProps) {
  const { content } = useSiteData();
  const NAV_ITEMS = content.nav;
  const SITE = content.site;
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  function handleNavigate(href: string) {
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: 'circle(0% at 95% 95%)' }}
          animate={{ clipPath: 'circle(150% at 95% 95%)' }}
          exit={{ clipPath: 'circle(0% at 95% 95%)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text)' }}
        >
          <div
            className="flex items-center justify-between px-6 md:px-10 py-5"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <span className="material-symbols-outlined text-accent">mail</span>
            <span className="font-bold tracking-wide font-mono-label">{SITE.initials}</span>
            <button
              type="button"
              data-cursor="Tutup"
              onClick={onClose}
              aria-label="Tutup menu"
              className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-[var(--surface)] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar px-6 md:px-14">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleNavigate(item.href)}
                data-cursor="Explore"
                className="menu-row relative flex items-center justify-between py-5 md:py-7 cursor-pointer group"
              >
                <span
                  className="font-mono-label text-xs w-10 shrink-0 transition-colors"
                  style={{ color: hovered === item.href ? 'var(--accent)' : 'var(--text-faint)' }}
                >
                  {item.index}
                </span>
                <h2
                  className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl flex-1 transition-colors"
                  style={{ color: hovered === item.href ? 'var(--accent)' : 'var(--text)' }}
                >
                  {item.label}
                </h2>

                <AnimatePresence>
                  {hovered === item.href && PREVIEWS[item.href] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                      animate={{ opacity: 1, scale: 1, rotate: -4 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="hidden md:block absolute right-24 top-1/2 -translate-y-1/2 w-24 h-24 rounded-xl overflow-hidden border-2 shadow-xl"
                      style={{ borderColor: 'var(--border-strong)' }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={PREVIEWS[item.href]} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <span
                  className="font-mono-label text-[10px] uppercase hidden sm:block"
                  style={{ color: 'var(--text-faint)' }}
                >
                  ( {item.tag} )
                </span>
              </motion.div>
            ))}
          </div>

          <div className="px-6 md:px-10 py-5 font-mono-label text-[10px]" style={{ color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} ZULHELMI SYAHTIAR · PNJ ELECTRONICS
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

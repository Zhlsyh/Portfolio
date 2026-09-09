import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
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
          style={{ background: '#eef3ea', color: '#0d1f18' }}
        >
          <div
            className="flex items-center justify-between px-6 md:px-10 py-5"
            style={{ borderBottom: '1px solid rgba(13,31,24,0.12)' }}
          >
            <span className="material-symbols-outlined">mail</span>
            <span className="font-bold tracking-wide">{SITE.initials}</span>
            <button
              type="button"
              data-cursor="Tutup"
              onClick={onClose}
              aria-label="Tutup menu"
              className="w-9 h-9 flex items-center justify-center"
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
                  style={{ color: hovered === item.href ? '#0f9d72' : '#0d1f18aa' }}
                >
                  {item.index}
                </span>
                <h2
                  className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl flex-1 transition-colors"
                  style={{ color: hovered === item.href ? '#0f9d72' : '#0d1f18' }}
                >
                  {item.label}
                </h2>

                <AnimatePresence>
                  {hovered === item.href && PREVIEWS[item.href] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                      animate={{ opacity: 1, scale: 1, rotate: -4 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="hidden md:block absolute right-24 top-1/2 -translate-y-1/2 w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-xl"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={PREVIEWS[item.href]} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <span
                  className="font-mono-label text-[10px] uppercase hidden sm:block"
                  style={{ color: '#0d1f1888' }}
                >
                  ( {item.tag} )
                </span>
              </motion.div>
            ))}
          </div>

          <div className="px-6 md:px-10 py-5 font-mono-label text-[10px]" style={{ color: '#0d1f1866' }}>
            © {new Date().getFullYear()} ZULHELMI SYAHTIAR — PNJ ELECTRONICS
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

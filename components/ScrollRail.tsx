import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';

export default function ScrollRail() {
  const { content } = useSiteData();
  const NAV_ITEMS = content.nav;
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { damping: 30, stiffness: 120 });
  const markerTop = useTransform(smooth, [0, 1], ['4%', '92%']);
  const [sectionLabel, setSectionLabel] = useState('INDEX');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isSmall = window.matchMedia('(max-width: 900px)').matches;
    setVisible(!isSmall);

    const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(
      Boolean
    ) as HTMLElement[];

    function onScroll() {
      let current = NAV_ITEMS[0];
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          current = NAV_ITEMS[i];
        }
      }
      setSectionLabel(current.tag);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [NAV_ITEMS]);

  if (!visible) return null;

  return (
    <div className="fixed right-6 top-0 h-screen w-16 z-30 pointer-events-none hidden lg:flex flex-col items-center justify-between py-8">
      <span
        className="font-mono-label text-[10px] uppercase rotate-90 origin-center whitespace-nowrap"
        style={{ color: 'var(--text-faint)' }}
      >
        {sectionLabel}
      </span>

      <div className="relative flex-1 w-px my-6" style={{ background: 'var(--border)' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="absolute -left-6 font-mono-label text-[9px]"
            style={{ top: `${i * 24}%`, color: 'var(--text-faint)' }}
          >
            {String(i * 900).padStart(4, '0')}
          </span>
        ))}

        <motion.div
          className="absolute -left-[3px] w-[7px] h-[7px] rotate-45"
          style={{ top: markerTop, background: 'var(--accent)' }}
        />
      </div>

      <span className="font-mono-label text-[10px]" style={{ color: 'var(--text-faint)' }}>
        {'</>'}
      </span>
    </div>
  );
}

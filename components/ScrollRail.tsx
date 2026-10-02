import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';
import { NAV_SECTION_HREFS } from '@/data/content';

export default function ScrollRail() {
  const { content } = useSiteData();
  const NAV_ITEMS = content.nav.filter((item) => NAV_SECTION_HREFS.includes(item.href));
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { damping: 30, stiffness: 120 });
  const markerTop = useTransform(smooth, [0, 1], ['4%', '92%']);
  const [sectionLabel, setSectionLabel] = useState('INDEX');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isSmall = window.matchMedia('(max-width: 900px)').matches;
    setVisible(!isSmall);

    const sections = NAV_ITEMS.map((item) => ({
      item,
      element: document.getElementById(item.href.slice(1)),
    })).filter((section): section is { item: (typeof NAV_ITEMS)[number]; element: HTMLElement } =>
      section.element instanceof HTMLElement
    );

    function onScroll() {
      let currentLabel = sections[0]?.item.tag ?? 'INDEX';
      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          currentLabel = section.item.tag;
        }
      }
      setSectionLabel(currentLabel);
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

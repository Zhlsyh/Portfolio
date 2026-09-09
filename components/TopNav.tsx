import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';

interface TopNavProps {
  onOpenMenu: () => void;
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function TopNav({ onOpenMenu, onOpenResume, isDark, onToggleTheme }: TopNavProps) {
  const { content } = useSiteData();
  const NAV_ITEMS = content.nav;
  const SITE = content.site;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(Boolean) as HTMLElement[];

    function onScroll() {
      setScrolled(window.scrollY > 12);
      let current = NAV_ITEMS[0].href;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.4) {
          current = NAV_ITEMS[i].href;
        }
      }
      setActive(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [NAV_ITEMS]);

  function handleNav(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 backdrop-blur-2xl transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-elevated)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 12px 30px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-7xl mx-auto h-20">
        <button
          type="button"
          data-cursor="Home"
          onClick={() => handleNav('#home')}
          className="font-display font-extrabold text-lg md:text-xl tracking-tight transition-opacity hover:opacity-80 flex items-center gap-2"
        >
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-mono-label"
            style={{ background: 'var(--accent)', color: 'var(--accent-contrast)' }}
          >
            {SITE.initials}
          </span>
          <span className="hidden sm:inline">{SITE.name.toUpperCase()}</span>
        </button>

        <div className="hidden lg:flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              data-cursor="Go"
              onClick={() => handleNav(item.href)}
              className="relative px-3.5 py-2 rounded-full transition-colors"
              style={{ color: active === item.href ? 'var(--accent)' : 'var(--text-dim)' }}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: 'var(--accent-soft)' }}
                  transition={{ type: 'spring', damping: 24, stiffness: 260 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:pl-5 lg:ml-2 lg:border-l" style={{ borderColor: 'var(--border)' }}>
          <button
            type="button"
            data-cursor="Tema"
            aria-label="Ganti tema"
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ border: '1px solid var(--border-strong)', background: 'var(--surface)' }}
          >
            <span className="material-symbols-outlined text-[19px]" style={{ color: 'var(--accent)' }}>
              {isDark ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          <button
            type="button"
            data-cursor="Unduh"
            onClick={onOpenResume}
            className="hidden sm:flex btn-accent px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wide"
          >
            Resume
          </button>

          <button
            type="button"
            data-cursor="Menu"
            aria-label="Buka menu"
            onClick={onOpenMenu}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: '1px solid var(--border-strong)', background: 'var(--surface)' }}
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

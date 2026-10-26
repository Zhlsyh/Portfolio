import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { NAV_SECTION_HREFS } from '@/data/content';

interface TopNavProps {
  onOpenMenu: () => void;
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function TopNav({ onOpenMenu, onOpenResume, isDark, onToggleTheme }: TopNavProps) {
  const { content } = useSiteData();
  const NAV_ITEMS = content.nav.filter((item) => NAV_SECTION_HREFS.includes(item.href));
  const SITE = content.site;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => ({
      href: item.href,
      element: document.getElementById(item.href.slice(1)),
    })).filter((item): item is { href: string; element: HTMLElement } => item.element instanceof HTMLElement);

    function onScroll() {
      setScrolled(window.scrollY > 12);
      let current = sections[0]?.href ?? '#home';
      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.4) {
          current = section.href;
        }
      }
      setActive(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [content.nav]);

  function handleNav(href: string) {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
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
      <div className="flex justify-between items-center px-5 sm:px-8 md:px-10 py-4 max-w-5xl mx-auto h-20">
        <button
          type="button"
          data-cursor="Home"
          onClick={() => handleNav('#home')}
          className="min-h-11 font-display font-extrabold text-lg md:text-xl tracking-tight transition-opacity hover:opacity-80 flex items-center"
        >
          <span>{SITE.name.toUpperCase()}</span>
        </button>

        <div className="hidden lg:flex items-center gap-1 font-bold text-xs">
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
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
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
            className="hidden sm:flex btn-accent px-5 py-2.5 rounded-xl font-bold text-xs"
          >
            Resume
          </button>

          <button
            type="button"
            data-cursor="Menu"
            aria-label="Buka menu"
            onClick={onOpenMenu}
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center"
            style={{ border: '1px solid var(--border-strong)', background: 'var(--surface)' }}
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

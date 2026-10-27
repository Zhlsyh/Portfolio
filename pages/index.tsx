import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import Nav, { SECTIONS } from '@/components/Nav';
import Sections from '@/components/Sections';
import ProjectModal, { type Project } from '@/components/ProjectModal';
import StaticDiorama from '@/components/StaticDiorama';
import SkyBackdrop from '@/components/SkyBackdrop';
import { useSectionProgress } from '@/hooks/useSectionProgress';
import { usePrefs } from '@/lib/prefs';
import { SECTION_LABELS } from '@/data/i18n';

const SceneCanvas = dynamic(() => import('@/components/scene/SceneCanvas'), { ssr: false });

type Mode = 'pending' | '3d' | 'static';
type Theme = 'light' | 'dark';

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

// Isi NEXT_PUBLIC_SITE_URL (mis. https://namadomain.com) saat build supaya og:image berupa URL absolut.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? '').replace(/\/$/, '');

export default function Home() {
  const { t, lang } = usePrefs();
  const progress = useRef(0);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<Mode>('pending');
  const [canToggle, setCanToggle] = useState(false);
  const [ready, setReady] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  useSectionProgress(
    SECTIONS.map((s) => s.id),
    progress,
    setActive,
  );

  useEffect(() => {
    // Tema sudah dipasang oleh skrip di <head>; sinkronkan ke state React.
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

    const webgl = hasWebGL();
    setCanToggle(webgl);
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('portfolio-3d');
    } catch {
      /* penyimpanan tidak tersedia */
    }
    const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    const weak =
      (nav.hardwareConcurrency && nav.hardwareConcurrency <= 2) ||
      (nav.deviceMemory && nav.deviceMemory <= 2) ||
      nav.connection?.saveData;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!webgl || stored === 'off') setMode('static');
    else if (stored === 'on') setMode('3d');
    else setMode(reduce || weak ? 'static' : '3d');
  }, []);

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const toggle = () => {
    const next: Mode = mode === '3d' ? 'static' : '3d';
    setMode(next);
    try {
      localStorage.setItem('portfolio-3d', next === '3d' ? 'on' : 'off');
    } catch {
      /* abaikan */
    }
  };

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('portfolio-theme', next);
    } catch {
      /* abaikan */
    }
  };

  // Favicon: avatar bangun di siang, tidur di malam (skrip di _document memasang nilai awalnya).
  useEffect(() => {
    const link = document.getElementById('app-icon') as HTMLLinkElement | null;
    if (link) link.href = theme === 'dark' ? '/icons/icon-48-sleep.png' : '/icons/icon-48-awake.png';
  }, [theme]);

  const handleReady = useCallback(() => setReady(true), []);

  const showScene = mode === '3d';
  const dark = theme === 'dark';

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="no-referrer" />
        <meta name="description" content={t.desc} />
        <meta name="author" content="Zulhelmi Syahtiar" />
        <meta name="theme-color" content={dark ? '#0a0f1f' : '#f6efe3'} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.desc} />
        <meta property="og:image" content={`${SITE_URL}/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/og.png`} />
      </Head>

      {/* langit desktop: tetap di belakang seluruh halaman */}
      <div className="fixed inset-0 -z-10 hidden md:block" aria-hidden>
        <SkyBackdrop />
      </div>

      <Nav
        active={active}
        onGo={go}
        is3d={showScene}
        canToggle={canToggle}
        onToggle={toggle}
        dark={dark}
        onToggleTheme={toggleTheme}
      />

      {/* Panggung 3D: menempel di atas pada mobile, memenuhi layar di belakang konten pada desktop */}
      <div
        aria-hidden
        className="sticky top-0 z-20 h-[42svh] overflow-hidden rounded-b-[1.75rem] border-b border-[var(--glass-border)] bg-[var(--stage)] shadow-[0_14px_30px_-18px_var(--glass-shadow)] md:fixed md:inset-0 md:z-0 md:h-auto md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:shadow-none"
      >
        <SkyBackdrop className="md:hidden" />
        <div
          className={`absolute inset-0 grid place-items-center p-6 transition-opacity duration-700 md:inset-y-0 md:left-auto md:right-0 md:w-[58%] ${
            showScene && ready ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <div className="static-dio h-full max-h-[34rem] w-full max-w-[36rem]">
            <StaticDiorama dark={dark} alt={t.staticAlt} />
          </div>
        </div>
        {showScene && (
          <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
            <SceneCanvas progress={progress} onSelect={go} onReady={handleReady} dark={dark} lang={lang} />
          </div>
        )}
        <span className="glass absolute bottom-3 left-3 !rounded-full px-3 py-1 text-xs font-bold md:hidden">
          {SECTION_LABELS[lang][active].label}
        </span>
      </div>

      <Sections onOpen={setProject} onGo={go} alternate={showScene} />
      <ProjectModal project={project} onClose={() => setProject(null)} />
      <noscript>
        <p style={{ padding: '1rem' }}>{t.noscript}</p>
      </noscript>
    </>
  );
}

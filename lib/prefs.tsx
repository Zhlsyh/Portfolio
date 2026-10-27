import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { CV_FILES, EN_MAP, UI, periodEn, type Audience, type Dict, type Lang } from '@/data/i18n';

interface Prefs {
  lang: Lang;
  setLang: (l: Lang) => void;
  audience: Audience;
  setAudience: (a: Audience) => void;
  t: Dict;
  /** Terjemahkan teks data (ID -> EN). Di bahasa Indonesia teks dikembalikan apa adanya. */
  tx: (s: string) => string;
  /** Terjemahkan periode ("Mei 2025 – Jul 2025"). */
  tp: (s: string) => string;
  cvHref: (a: Audience) => string;
}

const Ctx = createContext<Prefs | null>(null);

const LANG_KEY = 'portfolio-lang';
const AUD_KEY = 'portfolio-audience';

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* penyimpanan tidak tersedia */
  }
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('id');
  const [audience, setAudienceState] = useState<Audience>('general');

  // Sama seperti tema: state awal netral supaya HTML statis cocok, lalu disinkronkan di klien.
  useEffect(() => {
    const stored = read(LANG_KEY);
    if (stored === 'id' || stored === 'en') setLangState(stored);
    else {
      const nav = (navigator.language || 'id').toLowerCase();
      setLangState(nav.startsWith('id') || nav.startsWith('ms') ? 'id' : 'en');
    }
    const a = read(AUD_KEY);
    if (a === 'tech' || a === 'creative' || a === 'general') setAudienceState(a);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    write(LANG_KEY, l);
  }, []);
  const setAudience = useCallback((a: Audience) => {
    setAudienceState(a);
    write(AUD_KEY, a);
  }, []);

  const value = useMemo<Prefs>(
    () => ({
      lang,
      setLang,
      audience,
      setAudience,
      t: UI[lang],
      tx: (s) => (lang === 'en' ? EN_MAP[s] ?? s : s),
      tp: (s) => (lang === 'en' ? periodEn(s) : s),
      cvHref: (a) => CV_FILES[lang][a],
    }),
    [lang, audience, setLang, setAudience],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePrefs(): Prefs {
  const v = useContext(Ctx);
  if (!v) throw new Error('usePrefs harus dipakai di dalam PrefsProvider');
  return v;
}

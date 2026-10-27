import { usePrefs } from '@/lib/prefs';
import { SECTION_LABELS } from '@/data/i18n';

export const SECTIONS = [
  { id: 'home', label: 'Home', short: 'Home', color: '#ff7a45' },
  { id: 'workbench', label: 'Workbench', short: 'Bench', color: '#7fd1ae' },
  { id: 'photo', label: 'Photo Corner', short: 'Foto', color: '#ffd24a' },
  { id: 'design', label: 'Design Desk', short: 'Desain', color: '#6ec1e4' },
  { id: 'journey', label: 'Perjalanan', short: 'Jejak', color: '#ff9eb5' },
  { id: 'bonus', label: 'Bonus', short: 'Bonus', color: '#c8a8ff' },
  { id: 'skills', label: 'Keahlian', short: 'Skill', color: '#7fd1ae' },
  { id: 'contact', label: 'Kontak', short: 'Kontak', color: '#ff7a45' },
] as const;

interface NavProps {
  active: number;
  onGo: (id: string) => void;
  is3d: boolean;
  canToggle: boolean;
  onToggle: () => void;
  dark: boolean;
  onToggleTheme: () => void;
}

const pill =
  'glass !rounded-full shadow-[0_8px_24px_-10px_var(--glass-shadow)]';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="12" y1="2.5" x2="12" y2="5" transform={`rotate(${a} 12 12)`} />
      ))}
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="currentColor" />
    </svg>
  );
}

export default function Nav({ active, onGo, is3d, canToggle, onToggle, dark, onToggleTheme }: NavProps) {
  const { t, lang, setLang } = usePrefs();
  const labels = SECTION_LABELS[lang];
  return (
    <>
      {/* merek */}
      <button
        type="button"
        onClick={() => onGo('home')}
        aria-label={t.backTop}
        className={`${pill} fixed left-3 top-3 z-50 flex items-center gap-2 py-1.5 pl-1.5 pr-1.5 md:left-6 md:top-5 xl:pr-4`}
      >
        <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-[#2b2230] bg-sun">
          {/* avatar piksel: bangun di siang, tidur di malam */}
          <img
            src={dark ? '/avatar/helmi-head-sleep.png' : '/avatar/helmi-head-awake.png'}
            alt=""
            width={33}
            height={33}
            className="h-[30px] w-[30px] [image-rendering:pixelated]"
          />
        </span>
        {dark && (
          <span className="brand-zzz pointer-events-none absolute -right-1 -top-2 font-display text-[0.7rem] font-extrabold text-sun" aria-hidden>
            z
          </span>
        )}
        <span className="hidden font-display text-sm font-bold xl:inline">Zulhelmi Syahtiar</span>
      </button>

      {/* kontrol kanan: tema + 3D */}
      <div className="fixed right-3 top-3 z-50 flex items-center gap-2 md:right-6 md:top-5">
        <button
          type="button"
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          aria-label={t.langLabel}
          title={lang === 'id' ? 'English' : 'Bahasa Indonesia'}
          className={`${pill} flex h-11 items-center gap-1 px-3 text-xs font-extrabold`}
        >
          <span className={lang === 'id' ? '' : 'opacity-45'}>ID</span>
          <span className="opacity-40" aria-hidden>/</span>
          <span className={lang === 'en' ? '' : 'opacity-45'}>EN</span>
        </button>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-pressed={dark}
          aria-label={dark ? t.toDay : t.toNight}
          title={dark ? t.dayTitle : t.nightTitle}
          className={`${pill} grid h-11 w-11 place-items-center transition-colors ${dark ? 'text-sun' : 'text-tangerine'}`}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </button>
        {canToggle && (
          <button
            type="button"
            onClick={onToggle}
            aria-pressed={is3d}
            className={`${pill} flex h-11 items-center gap-2 px-3.5 text-xs font-bold`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full border border-edge ${is3d ? 'bg-mint' : 'bg-transparent'}`}
              aria-hidden
            />
            <span>{is3d ? t.on3d : t.lite}</span>
          </button>
        )}
      </div>

      {/* desktop lebar: pil di atas */}
      <nav
        aria-label={t.navLabel}
        className={`${pill} fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 items-center gap-0.5 p-1.5 xl:flex`}
      >
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onGo(s.id)}
            aria-current={active === i ? 'true' : undefined}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-bold transition-colors hover:bg-surface ${active === i ? 'text-on-accent' : ''}`}
            style={active === i ? { background: s.color } : undefined}
          >
            {labels[i].label}
          </button>
        ))}
      </nav>

      {/* mobile & tablet: bilah bawah dengan target sentuh standar >=44px */}
      <nav
        aria-label={t.navLabel}
        className={`${pill} fixed inset-x-3 bottom-3 z-50 flex items-center gap-1.5 overflow-x-auto p-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden xl:hidden`}
      >
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onGo(s.id)}
            aria-current={active === i ? 'true' : undefined}
            className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold transition-colors ${active === i ? 'text-on-accent' : 'text-ink-soft hover:bg-surface'}`}
            style={active === i ? { background: s.color } : undefined}
          >
            {labels[i].label}
          </button>
        ))}
      </nav>
    </>
  );
}

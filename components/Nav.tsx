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
  introActive?: boolean;
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

export default function Nav({ active, onGo, is3d, canToggle, onToggle, dark, onToggleTheme, introActive = false }: NavProps) {
  return (
    <>
      {/* merek: meluncur dari pinggir kiri */}
      <button
        type="button"
        onClick={() => onGo('home')}
        aria-label="Kembali ke atas"
        className={`${pill} fixed left-3 top-3 z-50 flex items-center gap-2 py-1.5 pl-1.5 pr-1.5 transition-all duration-700 ease-out md:left-6 md:top-5 xl:pr-4 ${
          introActive ? '-translate-x-32 opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
        }`}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#2b2230] bg-tangerine font-display text-sm font-extrabold text-on-accent">
          Z·S
        </span>
        <span className="hidden font-display text-sm font-bold xl:inline">Zulhelmi Syahtiar</span>
      </button>

      {/* kontrol kanan (tema + 3D): meluncur dari pinggir kanan */}
      <div
        className={`fixed right-3 top-3 z-50 flex items-center gap-2 transition-all duration-700 ease-out md:right-6 md:top-5 ${
          introActive ? 'translate-x-32 opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
        }`}
      >
        <button
          type="button"
          onClick={onToggleTheme}
          aria-pressed={dark}
          aria-label={dark ? 'Ganti ke mode siang' : 'Ganti ke mode malam'}
          title={dark ? 'Mode siang' : 'Mode malam'}
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
            <span>{is3d ? '3D aktif' : 'Mode ringan'}</span>
          </button>
        )}
      </div>

      {/* desktop lebar: pil di atas meluncur dari atas */}
      <nav
        aria-label="Navigasi utama"
        className={`${pill} fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 items-center gap-0.5 p-1.5 transition-all duration-700 delay-100 ease-out xl:flex ${
          introActive ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
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
            {s.label}
          </button>
        ))}
      </nav>

      {/* mobile & tablet: bilah bawah meluncur dari bawah */}
      <nav
        aria-label="Navigasi utama"
        className={`${pill} fixed inset-x-3 bottom-3 z-50 flex items-center gap-1.5 overflow-x-auto p-1.5 transition-all duration-700 delay-100 ease-out [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden xl:hidden ${
          introActive ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
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
            {s.label}
          </button>
        ))}
      </nav>
    </>
  );
}

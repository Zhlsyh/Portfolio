import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import HeroEditor from '@/components/admin/HeroEditor';
import StatsEditor from '@/components/admin/StatsEditor';
import ExperienceEditor from '@/components/admin/ExperienceEditor';
import OrgCardsEditor from '@/components/admin/OrgCardsEditor';
import CapabilitiesEditor from '@/components/admin/CapabilitiesEditor';
import CertificationsEditor from '@/components/admin/CertificationsEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import NavEditor from '@/components/admin/NavEditor';
import ProjectsEditor from '@/components/admin/ProjectsEditor';
import SeedPanel from '@/components/admin/SeedPanel';

const TABS = [
  { key: 'hero', label: 'Hero & Bio', icon: 'person' },
  { key: 'stats', label: 'Stats', icon: 'bar_chart' },
  { key: 'experience', label: 'Pengalaman', icon: 'work' },
  { key: 'org', label: 'Organisasi', icon: 'groups' },
  { key: 'capabilities', label: 'Kapabilitas', icon: 'psychology' },
  { key: 'projects', label: 'Proyek', icon: 'grid_view' },
  { key: 'certifications', label: 'Sertifikasi', icon: 'workspace_premium' },
  { key: 'contact', label: 'Kontak', icon: 'mail' },
  { key: 'nav', label: 'Menu', icon: 'menu' },
  { key: 'seed', label: 'Seed / Reset', icon: 'cloud_upload' },
] as const;

type TabKey = (typeof TABS)[number]['key'];

interface AdminShellProps {
  onLogout: () => void;
  userEmail: string | null;
}

export default function AdminShell({ onLogout, userEmail }: AdminShellProps) {
  const [tab, setTab] = useState<TabKey>('hero');
  const { isLive, loading } = useSiteData();

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Sidebar */}
      <aside
        className="w-64 shrink-0 hidden md:flex flex-col p-5 border-r"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-accent">admin_panel_settings</span>
          <h1 className="font-display font-extrabold text-lg">Admin</h1>
        </div>
        <p className="text-[11px] mb-6 truncate" style={{ color: 'var(--text-faint)' }}>
          {userEmail}
        </p>

        <nav className="flex-1 space-y-1">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              data-cursor={t.label}
              onClick={() => setTab(t.key)}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-bold transition-colors"
              style={{
                background: tab === t.key ? 'var(--accent-soft)' : 'transparent',
                color: tab === t.key ? 'var(--accent)' : 'var(--text-dim)',
              }}
            >
              <span className="material-symbols-outlined text-lg">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>

        <div className="pt-4 border-t space-y-3" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-1.5 text-[11px]" style={{ color: isLive ? 'var(--accent)' : '#f87171' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: isLive ? 'var(--accent)' : '#f87171' }} />
            {isLive ? 'Firebase terhubung' : 'Firebase belum aktif'}
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer" data-cursor="Buka" className="text-xs font-bold flex items-center gap-1.5 hover:text-accent">
            <span className="material-symbols-outlined text-base">open_in_new</span>
            Lihat situs
          </a>
          <button type="button" data-cursor="Keluar" onClick={onLogout} className="text-xs font-bold flex items-center gap-1.5 hover:text-accent">
            <span className="material-symbols-outlined text-base">logout</span>
            Keluar
          </button>
        </div>
      </aside>

      {/* Mobile tab bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex overflow-x-auto no-scrollbar border-t"
        style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}
      >
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            data-cursor={t.label}
            onClick={() => setTab(t.key)}
            className="shrink-0 flex flex-col items-center gap-0.5 px-4 py-2.5 text-[10px] font-bold"
            style={{ color: tab === t.key ? 'var(--accent)' : 'var(--text-faint)' }}
          >
            <span className="material-symbols-outlined text-lg">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="flex-1 p-5 md:p-10 pb-24 md:pb-10 max-w-4xl">
        {loading ? (
          <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
            Memuat data...
          </p>
        ) : (
          <>
            {tab === 'hero' && <HeroEditor />}
            {tab === 'stats' && <StatsEditor />}
            {tab === 'experience' && <ExperienceEditor />}
            {tab === 'org' && <OrgCardsEditor />}
            {tab === 'capabilities' && <CapabilitiesEditor />}
            {tab === 'projects' && <ProjectsEditor />}
            {tab === 'certifications' && <CertificationsEditor />}
            {tab === 'contact' && <ContactEditor />}
            {tab === 'nav' && <NavEditor />}
            {tab === 'seed' && <SeedPanel />}
          </>
        )}
      </main>
    </div>
  );
}

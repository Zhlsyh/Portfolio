import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';

interface OrgFlipCardProps {
  id: string;
  index: number;
  logo: string;
  role: string;
  period: string;
  responsibility: string;
  onOpen: () => void;
}

export default function OrgFlipCard({ id, index, logo, role, period, responsibility, onOpen }: OrgFlipCardProps) {
  const { projects } = useSiteData();
  const [flipped, setFlipped] = useState(false);
  const project = projects[id];
  const photoCount = project?.gallery?.length ?? 0;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`uno-flip-container group ${flipped ? 'is-flipped' : ''}`}
      data-cursor={flipped ? 'Kembali' : 'Flip'}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="uno-card-flipper">
        {/* FRONT */}
        <div className="uno-card-face">
          <div className="flex justify-between items-center mb-1">
            <div className="uno-corner text-xl">
              <span>{num}</span>
              <span className="material-symbols-outlined text-lg">smart_toy</span>
            </div>
          </div>

          <div className="uno-oval-themed my-2 py-3">
            <div
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 p-2 shadow-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform"
              style={{ borderColor: 'var(--accent)', background: 'var(--bg)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} alt={project?.title ?? role} className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            <div
              className="flex items-center justify-between text-[11px] md:text-xs font-extrabold px-2.5 py-1.5 rounded-xl border whitespace-nowrap overflow-hidden"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <span className="flex items-center gap-1" style={{ color: 'var(--text-faint)' }}>
                <span className="material-symbols-outlined text-sm text-accent">calendar_month</span>
                Periode:
              </span>
              <span style={{ color: 'var(--accent)' }}>{period}</span>
            </div>
            <div
              className="py-2 px-3 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
              style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-soft)', color: 'var(--accent)' }}
            >
              <span className="material-symbols-outlined text-sm">sync_alt</span>
              Klik untuk Flip
            </div>

            <div className="text-center pt-2.5 border-t" style={{ borderColor: 'var(--border)' }}>
              <h3 className="text-sm md:text-base uno-card-title leading-tight">{role}</h3>
              <p className="text-[11px] uno-card-subtitle uppercase tracking-wider mt-0.5">
                {project?.tags?.[0] ?? ''}
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <div className="uno-corner uno-corner-br text-xl">
              <span>{num}</span>
              <span className="material-symbols-outlined text-lg">smart_toy</span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="uno-card-face uno-card-back-face">
          <div className="flex justify-between items-center mb-1">
            <div className="uno-corner text-xl">
              <span>{num}</span>
              <span className="material-symbols-outlined text-lg">collections</span>
            </div>
            <span
              className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full"
              style={{ background: 'var(--accent)', color: 'var(--accent-contrast)' }}
            >
              Details
            </span>
          </div>

          <div className="space-y-2.5 my-auto py-1">
            <div className="p-2.5 rounded-xl space-y-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h4 className="text-xs font-extrabold flex items-center gap-1.5 border-b pb-1" style={{ borderColor: 'var(--border)' }}>
                <span className="material-symbols-outlined text-accent text-sm">badge</span>
                Tugas & Responsibilitas
              </h4>
              <p className="text-[11px] leading-relaxed font-medium" style={{ color: 'var(--text-dim)' }}>
                {responsibility}
              </p>
            </div>

            <div className="p-2.5 rounded-xl space-y-1.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between text-[11px] font-extrabold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-accent text-sm">photo_library</span>
                  Dokumentasi
                </span>
                <span
                  className="px-2 py-0.5 rounded-md font-extrabold"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--accent-soft)' }}
                >
                  {photoCount} Foto
                </span>
              </div>
              {project?.gallery && project.gallery.length > 0 && (
                <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                  {project.gallery.slice(0, 6).map((g) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={g.id}
                      src={g.url}
                      alt={g.title ?? ''}
                      className="w-9 h-9 rounded-md object-cover shrink-0"
                      style={{ border: '1px solid var(--border)' }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t" style={{ borderColor: 'var(--border-strong)' }}>
            <div className="flex gap-1.5">
              <button
                type="button"
                data-cursor="Buka"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
                className="flex-1 py-2 font-extrabold text-[11px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1"
                style={{ background: 'var(--accent)', color: 'var(--accent-contrast)' }}
              >
                <span className="material-symbols-outlined text-sm">zoom_in</span>
                Perbesar
              </button>
              {project?.docLink && (
                <a
                  href={project.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-2.5 py-2 font-extrabold text-[11px] rounded-xl flex items-center justify-center gap-1 transition-all"
                  style={{ background: 'var(--surface-strong)', border: '1px solid var(--border-strong)' }}
                  title="Buka Drive Dokumentasi"
                >
                  <span className="material-symbols-outlined text-sm">folder_open</span>
                  Drive
                </a>
              )}
            </div>
            <div className="text-center text-[10px] font-bold flex items-center justify-center gap-1" style={{ color: 'var(--text-faint)' }}>
              <span className="material-symbols-outlined text-xs">undo</span>
              Klik kartu untuk putar balik
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <div className="uno-corner uno-corner-br text-xl">
              <span>{num}</span>
              <span className="material-symbols-outlined text-lg">collections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

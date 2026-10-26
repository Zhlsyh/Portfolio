import { useEffect, useRef } from 'react';
import { PROJECTS_DATA } from '@/data/projects';
import SafeImg from './SafeImg';

export type Project = (typeof PROJECTS_DATA)[string];

const CATEGORY_LABEL: Record<string, string> = {
  engineering: 'Engineering',
  photography: 'Fotografi',
  design: 'Desain',
};

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;
  const gallery = (project.gallery ?? []).slice(0, 18);
  const hasMoreGallery = (project.gallery?.length ?? 0) > gallery.length;
  // Bersihkan teks tautan Drive dari deskripsi modal karena sudah disediakan tombol tersendiri.
  const description = project.description
    .replace(/\s*Link\s+(Google\s+)?Drive[^:]*:\s*https?:\/\/\S+/gi, '')
    .trim();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        className="pop-in glass-strong relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-b-none sm:rounded-b-3xl"
      >
        <div className="sticky top-3 z-10 flex h-0 justify-end pr-3">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup modal"
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#2b2230] bg-sun text-lg font-extrabold text-on-accent shadow-[0_2px_0_#2b2230]"
          >
            ×
          </button>
        </div>

        <div className="aspect-[16/9] w-full overflow-hidden border-b border-[var(--glass-border)] bg-cream">
          <SafeImg src={project.image} alt={project.title} className="h-full w-full object-cover" eager />
        </div>

        <div className="space-y-5 p-5 md:p-7">
          <div className="space-y-3">
            <span className="chip !text-on-accent" style={{ background: '#7fd1ae', borderColor: '#2b2230' }}>{CATEGORY_LABEL[project.category] ?? project.category}</span>
            <h2 className="text-2xl md:text-3xl">{project.title}</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[0.98rem] text-ink-soft">{description}</p>

          {project.specs.length > 0 && (
            <dl className="overflow-hidden rounded-2xl border border-[var(--glass-border)]">
              {project.specs.map((s) => (
                <div key={s.label} className="spec-row grid grid-cols-[8.5rem_1fr] gap-3 px-4 py-2.5 text-sm">
                  <dt className="font-bold">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.docLink && (
            <a href={project.docLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Buka tautan proyek <span aria-hidden>↗</span>
            </a>
          )}

          {gallery.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg">Galeri</h3>
              <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                {gallery.map((g) => (
                  <li key={g.id} className="aspect-square overflow-hidden rounded-xl border border-[var(--glass-border)] bg-cream">
                    <SafeImg src={g.url} alt={g.title ?? project.title} className="h-full w-full object-cover" />
                  </li>
                ))}
              </ul>
              {hasMoreGallery && project.docLink && (
                <p className="text-sm text-ink-soft">Foto selengkapnya ada di tautan proyek di atas.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

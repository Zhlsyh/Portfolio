import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const { projects } = useSiteData();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const project = projectId ? projects[projectId] : null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
          style={{ background: 'rgba(6, 14, 11, 0.75)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)' }}
          >
            <div className="aspect-[16/9] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <button
                type="button"
                data-cursor="Tutup"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
                style={{ background: 'rgba(0,0,0,0.4)', color: '#fff' }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <span
                className="absolute bottom-4 left-4 font-mono-label text-[10px] uppercase px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
              >
                {project.category}
              </span>
            </div>

            <div className="p-6 md:p-9">
              <h2 className="font-display font-extrabold text-2xl md:text-4xl">{project.title}</h2>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="surface-card px-3 py-1.5 rounded-lg text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm md:text-base" style={{ color: 'var(--text-dim)' }}>
                {project.description}
              </p>

              {project.specs?.length > 0 && (
                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="surface-card rounded-xl px-4 py-3">
                      <p className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
                        {spec.label}
                      </p>
                      <p className="font-bold text-sm mt-1">{spec.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {project.docLink && (
                <a
                  href={project.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Buka"
                  className="btn-accent inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-full font-extrabold text-sm uppercase tracking-wide"
                >
                  Kunjungi Tautan
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </a>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-9">
                  <p className="font-mono-label text-[10px] uppercase mb-3" style={{ color: 'var(--text-faint)' }}>
                    Galeri Dokumentasi ({project.gallery.length})
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                    {project.gallery.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        data-cursor="Zoom"
                        onClick={() => setLightbox(item.url)}
                        className="aspect-square rounded-lg overflow-hidden"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.url}
                          alt={item.title || project.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-6"
          style={{ background: 'rgba(0,0,0,0.9)' }}
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-lg object-contain" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

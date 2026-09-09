import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import type { ProjectData } from '@/data/projects';

interface PolaroidGalleryProps {
  projects: ProjectData[];
  onOpenProject: (id: string) => void;
}

const ROTATIONS = [-3, 2.5, -2, 3.5, -1.5, 2];

export default function PolaroidGallery({ projects, onOpenProject }: PolaroidGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [keyReset, setKeyReset] = useState(0);

  return (
    <div className="relative w-full">
      {/* Baris kontrol meja kerja */}
      <div className="flex items-center justify-between mb-6 px-1 text-xs">
        <div className="flex items-center gap-2" style={{ color: 'var(--text-faint)' }}>
          <span className="material-symbols-outlined text-accent text-base">pan_tool</span>
          <span className="font-mono-label uppercase text-[11px]">
            Meja Kerja Interaktif: Geser & tumpuk foto secara bebas
          </span>
        </div>
        <button
          type="button"
          data-cursor="Rapikan"
          onClick={() => setKeyReset((k) => k + 1)}
          className="font-mono-label text-[10px] uppercase px-3 py-1.5 rounded-full surface-card hover:border-accent transition-colors flex items-center gap-1.5"
          style={{ color: 'var(--text-dim)' }}
        >
          <span className="material-symbols-outlined text-xs">refresh</span>
          Rapikan Meja
        </button>
      </div>

      {/* Kanvas Meja Kerja Fotografi */}
      <div
        ref={containerRef}
        key={keyReset}
        className="relative w-full min-h-[580px] md:min-h-[640px] rounded-3xl p-6 md:p-12 overflow-hidden border flex flex-wrap items-center justify-center gap-8 md:gap-10 select-none"
        style={{
          background: 'radial-gradient(ellipse at center, var(--surface-strong) 0%, var(--bg-soft) 100%)',
          borderColor: 'var(--border-strong)',
        }}
      >
        {/* Tekstur grid halus meja studio */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--text-faint) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        {projects.map((project, idx) => {
          const rotation = ROTATIONS[idx % ROTATIONS.length];

          return (
            <motion.div
              key={project.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.12}
              whileDrag={{
                scale: 1.06,
                zIndex: 60,
                rotate: 0,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
              }}
              whileHover={{
                scale: 1.03,
                y: -6,
                zIndex: 40,
                boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.35)',
              }}
              initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
              animate={{ opacity: 1, scale: 1, rotate: rotation }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative w-64 sm:w-72 bg-white text-zinc-900 rounded-sm p-3.5 pb-6 shadow-xl cursor-grab active:cursor-grabbing border border-zinc-200 shrink-0"
              style={{
                filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.22))',
              }}
            >
              {/* Selotip Masking Tape di atas foto */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 z-20 pointer-events-none opacity-85"
                style={{
                  background: 'rgba(245, 235, 205, 0.75)',
                  border: '1px solid rgba(215, 200, 160, 0.5)',
                  transform: `translateX(-50%) rotate(${idx % 2 === 0 ? '-3deg' : '2.5deg'})`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                }}
              />

              {/* Bingkai foto square */}
              <div className="aspect-square w-full overflow-hidden bg-zinc-100 rounded-xs relative group/img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover/img:scale-105"
                />

                {/* Tombol intip / perbesar */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    data-cursor="Buka"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProject(project.id);
                    }}
                    className="px-3 py-1.5 bg-white text-zinc-900 font-bold text-xs rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    Detail Karya
                  </button>
                </div>
              </div>

              {/* Label Polaroid Tulisan Tangan / Analog */}
              <div className="mt-3.5 px-1 flex flex-col gap-1">
                <p className="font-display font-bold text-sm text-zinc-900 line-clamp-1 leading-tight">
                  {project.title}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-zinc-500 pt-1 border-t border-zinc-200">
                  <span>{project.category}</span>
                  <span>{project.tags[0] || 'Karya'}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

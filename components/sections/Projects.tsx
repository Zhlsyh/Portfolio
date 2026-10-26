import { motion, AnimatePresence } from 'motion/react';
import { useMemo, useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import SectionHeader from '@/components/SectionHeader';
import type { ProjectData } from '@/data/projects';

const TABS = [
  { key: 'engineering', label: 'Engineering', icon: 'memory' },
  { key: 'creative', label: 'Kreatif', icon: 'photo_camera' },
] as const;

type TabKey = (typeof TABS)[number]['key'];

interface ProjectsProps {
  onOpenProject: (id: string) => void;
}

export default function Projects({ onOpenProject }: ProjectsProps) {
  const { projects } = useSiteData();
  const [tab, setTab] = useState<TabKey>('engineering');

  const allProjects = useMemo(
    () => Object.values(projects).filter((p) => !p.id.startsWith('org-')),
    [projects]
  );

  const engineering = useMemo(() => allProjects.filter((p) => p.category === 'engineering'), [allProjects]);
  const creative = useMemo(
    () => allProjects.filter((p) => p.category === 'photography' || p.category === 'design'),
    [allProjects]
  );

  const active = tab === 'engineering' ? engineering : creative;

  return (
    <section id="projects">
      {/* Pita full-bleed: satu-satunya section dengan bidang blok terpisah,
          memecah ritme agar bagian berikutnya tidak menyambung sama persis */}
      <div
        className="border-y py-16 md:py-24"
        style={{ background: 'var(--bg-soft)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader index="03" title="Arsip Karya" subtitle="Proyek engineering dan karya kreatif terpilih" />

            {/* Tab kategori — segmented control dengan kontras tinggi */}
            <div className="flex items-center gap-3">
              <div
                className="flex gap-1.5 p-1.5 rounded-2xl border shadow-sm"
                style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-strong)' }}
              >
                {TABS.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    data-cursor="Pilih"
                    onClick={() => setTab(t.key)}
                    className={`relative isolate min-h-11 px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all duration-200 ${
                      tab === t.key
                        ? 'font-extrabold shadow-sm'
                        : 'font-bold hover:bg-[var(--surface-strong)]'
                    }`}
                    style={{
                      color: tab === t.key ? 'var(--accent-contrast)' : 'var(--text)',
                    }}
                  >
                    {tab === t.key && (
                      <motion.span
                        layoutId="project-tab-pill"
                        className="absolute inset-0 rounded-xl z-0"
                        style={{ background: 'var(--accent)' }}
                        transition={{ type: 'spring', damping: 24, stiffness: 260 }}
                      />
                    )}
                    <span className="material-symbols-outlined text-base relative z-10">{t.icon}</span>
                    <span className="relative z-10">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="font-mono-label text-[10px] uppercase mt-8 mb-6" style={{ color: 'var(--text-faint)' }}>
            {tab === 'engineering'
              ? 'IoT, mikrokontroler, sistem kontrol & otomasi'
              : 'Fotografi & desain grafis: dokumentasi hingga karya visual'}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
            >
              {active.length > 0 ? (
                active.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} onOpen={() => onOpenProject(project.id)} />
                ))
              ) : (
                <p role="status" className="text-sm" style={{ color: 'var(--text-dim)' }}>
                  Belum ada karya di kategori ini.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onOpen: () => void;
}

function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      data-cursor="Buka"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.06 }}
      whileHover={{ y: -8 }}
      className="text-left group surface-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-accent hover:shadow-xl"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        {project.image && !project.image.includes('images.unsplash.com') ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            role="img"
            aria-label="Foto proyek belum tersedia"
            className="w-full h-full flex items-center justify-center text-center p-4 text-sm"
            style={{ background: 'var(--surface-strong)', color: 'var(--text-dim)' }}
          >
            Foto proyek belum tersedia
          </div>
        )}
        <span
          className="absolute top-3 left-3 font-mono-label text-[10px] uppercase px-3 py-1 rounded-full border border-white/20 backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}
        >
          {project.category}
        </span>
        <div
          className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)' }}
        >
          <span className="text-white text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
            Lihat Spesifikasi & Detail
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
        <div>
          <h3 className="font-display font-bold text-base md:text-lg leading-snug group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono-label px-2.5 py-1 rounded-md"
              style={{ background: 'var(--surface-strong)', color: 'var(--text-dim)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

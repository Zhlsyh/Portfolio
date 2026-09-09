import { motion, AnimatePresence } from 'motion/react';
import { useMemo, useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import SectionHeader from '@/components/SectionHeader';
import type { ProjectData } from '@/data/projects';

const TABS = [
  { key: 'engineering', label: 'Engineering', icon: 'memory' },
  { key: 'creative', label: 'Creative', icon: 'photo_camera' },
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
    <section id="projects" className="max-w-7xl mx-auto px-5 md:px-16 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeader index="03" title="Arsip Karya" subtitle="Proyek engineering & karya kreatif terpilih" />

        {/* Tab kategori — dipertahankan dari struktur versi lama (Proyek Teknik vs Desain & Fotografi) */}
        <div className="flex gap-2 p-1 rounded-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              data-cursor="Pilih"
              onClick={() => setTab(t.key)}
              className="relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 transition-colors"
              style={{ color: tab === t.key ? 'var(--accent-contrast)' : 'var(--text-dim)' }}
            >
              {tab === t.key && (
                <motion.span
                  layoutId="project-tab-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: 'var(--accent)' }}
                  transition={{ type: 'spring', damping: 24, stiffness: 260 }}
                />
              )}
              <span className="material-symbols-outlined text-base">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <p className="font-mono-label text-[10px] uppercase mt-8 mb-6" style={{ color: 'var(--text-faint)' }}>
        {tab === 'engineering'
          ? 'IoT, mikrokontroler, sistem kontrol & otomasi'
          : 'Fotografi & desain grafis — dokumentasi hingga karya visual'}
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
          {active.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={() => onOpenProject(project.id)} />
          ))}
        </motion.div>
      </AnimatePresence>
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
      whileHover={{ y: -6 }}
      className="text-left group surface-card rounded-2xl overflow-hidden flex flex-col transition-colors hover:border-accent"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className="absolute top-3 left-3 font-mono-label text-[10px] uppercase px-2.5 py-1 rounded-full backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
        >
          {project.category}
        </span>
        <div
          className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)' }}
        >
          <span className="text-white text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
            Lihat Detail
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display font-extrabold text-base leading-snug group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
          {project.tags.slice(0, 3).join(' · ')}
        </p>
      </div>
    </motion.button>
  );
}

import { motion } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';
import SectionHeader from '@/components/SectionHeader';
import OrgFlipCard from '@/components/OrgFlipCard';

interface ExperienceProps {
  onOpenProject: (id: string) => void;
}

export default function Experience({ onOpenProject }: ExperienceProps) {
  const { content } = useSiteData();
  const EXPERIENCE = content.experience;
  const ORG_CARDS = content.orgCards;

  return (
    <section id="experience" className="max-w-7xl mx-auto px-5 md:px-16 py-24 md:py-32">
      <SectionHeader index="02" title="Rekam Jejak" subtitle="Pengalaman kerja & magang industri" />

      <div className="mt-14">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="border-t py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="md:col-span-3">
              <span className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--accent)' }}>
                {exp.tag}
              </span>
              <p className="font-mono-label text-[11px] mt-2" style={{ color: 'var(--text-faint)' }}>
                {exp.period}
              </p>
              <p className="font-mono-label text-[11px]" style={{ color: 'var(--text-faint)' }}>
                {exp.location}
              </p>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-display font-extrabold text-2xl md:text-4xl">{exp.title}</h3>
              <p className="mt-1.5 font-bold" style={{ color: 'var(--text-dim)' }}>
                {exp.org}
              </p>
              <ul className="mt-5 space-y-2.5">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm md:text-[15px]" style={{ color: 'var(--text-dim)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="font-mono-label text-[10px] uppercase mb-2" style={{ color: 'var(--text-faint)' }}>
                  {exp.skillsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="surface-card px-3 py-1.5 rounded-lg text-xs font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Organisasi & Kepanitiaan — kartu 3D flip, dipertahankan dari versi lama */}
      <div className="mt-16 border-t pt-10" style={{ borderColor: 'var(--border)' }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-3xl">style</span>
              Organisasi & Kepanitiaan
            </h3>
            <p className="text-xs md:text-sm mt-1.5" style={{ color: 'var(--text-faint)' }}>
              Klik kartu untuk animasi 3D flip & lihat dokumentasi kegiatan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORG_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <OrgFlipCard
                id={card.id}
                index={i}
                logo={card.logo}
                role={card.role}
                period={card.period}
                responsibility={card.responsibility}
                onOpen={() => onOpenProject(card.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

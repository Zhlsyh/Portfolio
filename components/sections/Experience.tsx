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
    <section id="experience" className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-28">
      <SectionHeader index="02" title="Rekam Jejak" subtitle="Pengalaman kerja dan magang industri" />

      <div className="mt-14">
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
            >
              {/* Left column: Tag, Period, Location */}
              <div className="md:col-span-3 md:text-right md:pr-2">
                <span
                  className="font-mono-label text-[10px] uppercase px-2.5 py-1 rounded border inline-block"
                  style={{ color: 'var(--accent)', borderColor: 'var(--border)', background: 'var(--surface)' }}
                >
                  {exp.tag}
                </span>
                <p className="font-display font-bold text-lg md:text-xl mt-2" style={{ color: 'var(--text)' }}>
                  {exp.period}
                </p>
                <p className="font-mono-label text-xs mt-1" style={{ color: 'var(--text-faint)' }}>
                  {exp.location}
                </p>
              </div>

              {/* Right column with timeline spine and experience card */}
              <div className="md:col-span-9 relative pl-7 sm:pl-9 border-l-2 border-dashed border-[var(--border-strong)]">
                {/* Timeline node dot centered on the spine */}
                <div
                  className="absolute -left-[9px] top-3 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-125 z-10"
                  style={{
                    borderColor: 'var(--accent)',
                    background: 'var(--bg)',
                    boxShadow: '0 0 0 4px var(--accent-soft)',
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                </div>

                <div className="surface-card rounded-2xl p-6 md:p-8 hover:border-accent transition-colors">
                  <h3 className="font-display font-bold text-2xl md:text-3xl">{exp.title}</h3>
                  <p className="mt-1 font-bold text-sm md:text-base" style={{ color: 'var(--accent)' }}>
                    {exp.org}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm md:text-[15px]" style={{ color: 'var(--text-dim)' }}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="font-mono-label text-[10px] uppercase mb-2.5" style={{ color: 'var(--text-faint)' }}>
                      {exp.skillsLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="chip-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {EXPERIENCE.length === 0 && (
          <p role="status" className="border-t py-8 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
            Belum ada informasi pengalaman.
          </p>
        )}
      </div>

      {/* Organisasi & Kepanitiaan — kartu 3D flip, dipertahankan dari versi lama */}
      <div className="mt-16 border-t pt-10" style={{ borderColor: 'var(--border)' }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-3xl">style</span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl">
                Organisasi & Kepanitiaan
              </h3>
            </div>
            <p className="text-xs md:text-sm mt-1.5" style={{ color: 'var(--text-faint)' }}>
              Klik kartu untuk animasi 3D flip bolak-balik & lihat dokumentasi kegiatan.
            </p>
          </div>
        </div>

        {ORG_CARDS.length > 0 ? (
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
        ) : (
          <p role="status" className="text-sm" style={{ color: 'var(--text-dim)' }}>
            Belum ada kegiatan organisasi.
          </p>
        )}
      </div>
    </section>
  );
}

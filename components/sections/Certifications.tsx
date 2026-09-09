import { motion } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';
import SectionHeader from '@/components/SectionHeader';

export default function Certifications() {
  const { content } = useSiteData();
  const CERTIFICATIONS = content.certifications;

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-5 md:px-16 py-24 md:py-32">
      <SectionHeader index="05" title="Lisensi" subtitle="Sertifikasi kompetensi resmi BNSP" />

      <div className="mt-12 max-w-3xl space-y-5">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="surface-card rounded-2xl p-7 md:p-9"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span
                className="font-mono-label text-[10px] uppercase px-3 py-1.5 rounded-full"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                {cert.badge}
              </span>
              <span className="font-mono-label text-[10px]" style={{ color: 'var(--text-faint)' }}>
                {cert.period}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl md:text-3xl mt-5">{cert.title}</h3>
            <p className="mt-1 text-sm font-bold" style={{ color: 'var(--accent)' }}>
              {cert.issuer}
            </p>
            <p className="mt-4 text-sm md:text-base" style={{ color: 'var(--text-dim)' }}>
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {cert.tags.map((tag) => (
                <span key={tag} className="border rounded-lg px-3 py-1.5 text-xs font-bold" style={{ borderColor: 'var(--border-strong)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-mono-label text-[10px] mt-6 pt-5 border-t" style={{ color: 'var(--text-faint)', borderColor: 'var(--border)' }}>
              No. Reg: {cert.regNo}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

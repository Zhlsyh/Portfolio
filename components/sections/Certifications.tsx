import { motion } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';
import SectionHeader from '@/components/SectionHeader';

export default function Certifications() {
  const { content } = useSiteData();
  const CERTIFICATIONS = content.certifications;

  return (
    <section id="certifications" className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-24">
      <SectionHeader index="05" title="Lisensi" subtitle="Sertifikasi kompetensi, pelatihan dan bahasa resmi" />

      {/* Grid 4 sertifikasi resmi dari CV */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="flex flex-col"
          >
            <div className="surface-card rounded-2xl p-7 md:p-9 h-full flex flex-col transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span
                  className="font-mono-label text-[10px] uppercase px-3 py-1.5 rounded-md"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  {cert.badge}
                </span>
                <span className="font-mono-label text-[10px]" style={{ color: 'var(--text-faint)' }}>
                  {cert.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl mt-5">{cert.title}</h3>
              <p className="mt-1 text-sm font-bold" style={{ color: 'var(--accent)' }}>
                {cert.issuer}
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {cert.tags.map((tag) => (
                  <span key={tag} className="border rounded-lg px-3 py-1.5 text-xs font-bold" style={{ borderColor: 'var(--border-strong)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between flex-wrap gap-2 mt-auto pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                <p className="font-mono-label text-[10px]" style={{ color: 'var(--text-faint)' }}>
                  No. Reg: {cert.regNo}
                </p>
                <span className="flex items-center gap-1 font-mono-label text-[10px] font-bold" style={{ color: 'var(--accent)' }}>
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Terverifikasi Resmi
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        {CERTIFICATIONS.length === 0 && (
          <p role="status" className="text-sm" style={{ color: 'var(--text-dim)' }}>
            Belum ada sertifikasi yang ditampilkan.
          </p>
        )}
      </div>
    </section>
  );
}

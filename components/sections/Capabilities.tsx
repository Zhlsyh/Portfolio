import { motion } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';
import SectionHeader from '@/components/SectionHeader';

export default function Capabilities() {
  const { content } = useSiteData();
  const CAPABILITIES = content.capabilities;

  return (
    <section id="skills" className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-28">
      <SectionHeader index="04" title="Kapabilitas" subtitle="Keahlian teknis, software dan kreatif" />

      <div className="mt-14">
        {CAPABILITIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="border-t py-9 md:py-11 grid grid-cols-1 md:grid-cols-12 gap-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="md:col-span-1 flex md:block items-center gap-3">
              <span className="font-mono-label text-sm px-2 py-0.5 rounded border border-[var(--border)]" style={{ color: 'var(--accent)', background: 'var(--surface)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="material-symbols-outlined text-accent md:hidden">{cat.icon}</span>
            </div>

            <div className="md:col-span-4 flex items-start gap-4">
              <span className="material-symbols-outlined text-accent text-3xl hidden md:block">
                {cat.icon}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl">{cat.title}</h3>
                <p className="mt-1 text-xs md:text-sm" style={{ color: 'var(--text-faint)' }}>
                  {cat.subtitle}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="surface-card rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md group cursor-default"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 p-1.5 transition-colors group-hover:border-accent"
                    style={{
                      background: 'var(--surface-strong)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {item.iconType === 'material' ? (
                      <span className="material-symbols-outlined text-accent text-lg transition-transform group-hover:scale-110">{item.icons[0]}</span>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.icons[0]}
                        alt={item.name}
                        className="w-5 h-5 object-contain shrink-0 transition-transform group-hover:scale-110"
                      />
                    )}
                  </div>
                  <p className="font-bold text-xs sm:text-sm leading-snug transition-colors group-hover:text-accent" style={{ color: 'var(--text)' }}>
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        {CAPABILITIES.length === 0 && (
          <p role="status" className="border-t py-8 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
            Belum ada data kapabilitas.
          </p>
        )}
      </div>
    </section>
  );
}

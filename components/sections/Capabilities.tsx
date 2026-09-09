import { motion } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';
import SectionHeader from '@/components/SectionHeader';

export default function Capabilities() {
  const { content } = useSiteData();
  const CAPABILITIES = content.capabilities;

  return (
    <section id="skills" className="max-w-7xl mx-auto px-5 md:px-16 py-24 md:py-32">
      <SectionHeader index="04" title="Kapabilitas" subtitle="Keahlian teknis, software & kreatif" />

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
              <span className="font-mono-label text-sm" style={{ color: 'var(--text-faint)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="material-symbols-outlined text-accent md:hidden">{cat.icon}</span>
            </div>

            <div className="md:col-span-4 flex items-start gap-4">
              <span className="material-symbols-outlined text-accent text-3xl hidden md:block">
                {cat.icon}
              </span>
              <div>
                <h3 className="font-display font-extrabold text-xl md:text-2xl">{cat.title}</h3>
                <p className="mt-1 text-xs md:text-sm" style={{ color: 'var(--text-faint)' }}>
                  {cat.subtitle}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-3">
              {cat.items.map((item) => (
                <div key={item.name} className="surface-card rounded-lg px-4 py-3 flex items-center gap-3">
                  <div
                    className="h-9 rounded-md flex items-center justify-center shrink-0 gap-1 px-1.5"
                    style={{
                      background: 'var(--surface-strong)',
                      border: '1px solid var(--border)',
                      minWidth: '2.25rem',
                    }}
                  >
                    {item.iconType === 'material' ? (
                      <span className="material-symbols-outlined text-accent text-lg">{item.icons[0]}</span>
                    ) : (
                      item.icons.map((src) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={src}
                          src={src}
                          alt=""
                          className={item.icons.length > 1 ? 'w-5 h-5 object-contain shrink-0' : 'w-7 h-7 object-contain shrink-0'}
                        />
                      ))
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

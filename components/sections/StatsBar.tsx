import { motion } from 'motion/react';
import { useSiteData } from '@/context/SiteDataContext';

export default function StatsBar() {
  const { content } = useSiteData();
  const STATS = content.stats;

  return (
    <div
      className="max-w-7xl mx-auto px-5 md:px-16 py-6 flex flex-wrap gap-x-10 gap-y-3 justify-between border-t border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="font-mono-label text-[11px] md:text-xs uppercase"
          style={{ color: 'var(--text-faint)' }}
        >
          <span style={{ color: 'var(--accent)' }}>{stat.value}</span> · {stat.label}
        </motion.div>
      ))}
    </div>
  );
}

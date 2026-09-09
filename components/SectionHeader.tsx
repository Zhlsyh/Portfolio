interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-mono-label text-sm mt-2" style={{ color: 'var(--accent)' }}>
        {index}
      </span>
      <div>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl">{title}</h2>
        <p className="mt-2 text-sm md:text-base" style={{ color: 'var(--text-faint)' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 md:mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span
          className="font-mono-label text-xs uppercase px-2.5 py-0.5 rounded border"
          style={{ color: 'var(--accent)', borderColor: 'var(--border)', background: 'var(--surface)' }}
        >
          {index}
        </span>
        <span className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--border-strong)' }} />
      </div>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-sm sm:text-base max-w-xl" style={{ color: 'var(--text-dim)' }}>
        {subtitle}
      </p>
    </div>
  );
}

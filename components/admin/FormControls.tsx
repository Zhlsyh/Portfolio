import { ReactNode } from 'react';

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono-label text-[10px] uppercase block" style={{ color: 'var(--text-faint)' }}>
        {label}
      </label>
      {children}
      {hint && (
        <p className="text-[11px]" style={{ color: 'var(--text-faint)' }}>
          {hint}
        </p>
      )}
    </div>
  );
}

const inputClass =
  'w-full bg-transparent border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors';

export function TextInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`${inputClass} ${className || ''}`}
      style={{ borderColor: 'var(--border-strong)' }}
    />
  );
}

export function TextArea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputClass} resize-y ${className || ''}`}
      style={{ borderColor: 'var(--border-strong)' }}
    />
  );
}

export function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputClass}
      style={{ borderColor: 'var(--border-strong)' }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function SectionCard({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <div className="surface-card rounded-2xl p-6 md:p-7">
      <h2 className="font-display font-extrabold text-xl">{title}</h2>
      {description && (
        <p className="text-xs mt-1 mb-5" style={{ color: 'var(--text-faint)' }}>
          {description}
        </p>
      )}
      <div className={description ? '' : 'mt-5'}>{children}</div>
    </div>
  );
}

export function SaveBar({
  onSave,
  saving,
  savedAt,
}: {
  onSave: () => void;
  saving: boolean;
  savedAt: number | null;
}) {
  return (
    <div className="flex items-center gap-3 sticky bottom-4 z-10">
      <button
        type="button"
        data-cursor="Simpan"
        onClick={onSave}
        disabled={saving}
        className="btn-accent px-6 py-3 rounded-full font-extrabold text-sm uppercase tracking-wide disabled:opacity-60 shadow-xl"
      >
        {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
      </button>
      {savedAt && !saving && (
        <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>
          Tersimpan {new Date(savedAt).toLocaleTimeString('id-ID')}
        </span>
      )}
    </div>
  );
}

export function IconButton({ onClick, icon, label, danger }: { onClick: () => void; icon: string; label: string; danger?: boolean }) {
  return (
    <button
      type="button"
      data-cursor={label || undefined}
      onClick={onClick}
      title={label}
      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0"
      style={{
        background: danger ? 'rgba(248,113,113,0.12)' : 'var(--surface-strong)',
        color: danger ? '#f87171' : 'var(--text-dim)',
      }}
    >
      <span className="material-symbols-outlined text-base">{icon}</span>
    </button>
  );
}

export function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      data-cursor={label}
      onClick={onClick}
      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors hover:border-accent hover:text-accent"
      style={{ borderColor: 'var(--border-strong)', color: 'var(--text-dim)' }}
    >
      <span className="material-symbols-outlined text-base">add</span>
      {label}
    </button>
  );
}

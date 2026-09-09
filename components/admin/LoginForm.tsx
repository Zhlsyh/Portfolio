import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await onLogin(email, password);
    } catch (err) {
      setError(err instanceof Error ? mapError(err.message) : 'Login gagal.');
    } finally {
      setLoading(false);
    }
  }

  function mapError(message: string) {
    if (message.includes('invalid-credential') || message.includes('wrong-password') || message.includes('user-not-found')) {
      return 'Email atau password salah.';
    }
    if (message.includes('too-many-requests')) {
      return 'Terlalu banyak percobaan. Coba lagi beberapa saat lagi.';
    }
    return message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-sm surface-card rounded-2xl p-8"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-accent">admin_panel_settings</span>
          <h1 className="font-display font-extrabold text-xl">Admin Dashboard</h1>
        </div>
        <p className="text-xs mb-6" style={{ color: 'var(--text-faint)' }}>
          Masuk untuk mengelola konten portofolio.
        </p>

        <div className="space-y-4">
          <div>
            <label className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1.5 bg-transparent border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
              style={{ borderColor: 'var(--border-strong)' }}
              placeholder="admin@email.com"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1.5 bg-transparent border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
              style={{ borderColor: 'var(--border-strong)' }}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 text-xs font-bold" style={{ color: '#f87171' }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          data-cursor="Masuk"
          disabled={loading}
          className="btn-accent w-full mt-6 py-3 rounded-full font-extrabold text-sm uppercase tracking-wide disabled:opacity-60"
        >
          {loading ? 'Memeriksa...' : 'Masuk'}
        </button>
      </motion.form>
    </div>
  );
}

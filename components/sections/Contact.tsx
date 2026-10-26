import { motion } from 'motion/react';
import { FormEvent, useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { content } = useSiteData();
  const CONTACT = content.contact;
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 2) {
      setStatus('error');
      setFeedback('Nama terlalu pendek. Mohon isi nama lengkap Anda.');
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus('error');
      setFeedback('Format email tidak valid. Mohon periksa kembali.');
      return;
    }
    if (message.length < 10) {
      setStatus('error');
      setFeedback('Pesan terlalu pendek. Mohon tulis minimal 10 karakter.');
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus('error');
      setFeedback('Form belum aktif saat ini. Silakan hubungi lewat tombol "Salin Email" di bawah.');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Pesan baru dari ${name} lewat Portfolio`,
          from_name: name,
          name,
          email,
          message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        form.reset();
        setStatus('success');
        setFeedback('Pesan berhasil dikirim! Saya akan segera menghubungi Anda.');
      } else {
        setStatus('error');
        setFeedback(result.message || 'Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch {
      setStatus('error');
      setFeedback('Gagal mengirim pesan. Periksa koneksi internet Anda.');
    }
  }

  function copyEmail() {
    navigator.clipboard.writeText(CONTACT.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" className="relative pt-16 md:pt-24">
      {/* Banner statis kolaborasi (diam, tidak berjalan) */}
      <div className="py-8 md:py-10 border-y text-center overflow-hidden" style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)' }}>
        <p className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight" style={{ color: 'var(--text)' }}>
          MARI BERKOLABORASI
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono-label text-xs uppercase px-2.5 py-0.5 rounded border border-[var(--border)]" style={{ color: 'var(--accent)', background: 'var(--surface)' }}>
              06 // KONTAK
            </span>
            <span className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--border-strong)' }} />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-2 tracking-tight">Hubungi Saya</h2>
          <p className="mt-4 max-w-md text-sm md:text-base" style={{ color: 'var(--text-dim)' }}>
            {CONTACT.description}
          </p>

          <div className="mt-8 space-y-3">
            <div className="surface-card rounded-2xl p-5 hover:border-accent transition-colors">
              <p className="font-mono-label text-[10px] uppercase mb-1" style={{ color: 'var(--text-faint)' }}>
                Email Langsung
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-display font-bold text-lg sm:text-xl hover:text-accent wavy-link break-all transition-colors"
                >
                  {CONTACT.email}
                </a>
                <button
                  type="button"
                  data-cursor="Salin"
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono-label flex items-center gap-1.5 hover:bg-[var(--surface-strong)] transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="material-symbols-outlined text-sm text-accent">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  {copied ? 'Tersalin!' : 'Salin'}
                </button>
              </div>
            </div>

            <a
              href="https://wa.me/6283894469333"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card rounded-xl p-4 flex items-center justify-between gap-3 hover:border-accent transition-colors block"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">call</span>
                <div>
                  <p className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
                    Telepon & WhatsApp
                  </p>
                  <p className="font-bold mt-0.5">0838-9446-9333</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-sm text-accent">arrow_outward</span>
            </a>

            <div className="surface-card rounded-xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">location_on</span>
              <div>
                <p className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
                  Lokasi Domisili
                </p>
                <p className="font-bold mt-0.5">{CONTACT.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="font-mono-label text-[10px] uppercase mb-3" style={{ color: 'var(--text-faint)' }}>
              Media Sosial
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {CONTACT.socials
                .filter(
                  (s) =>
                    !s.label?.toLowerCase().includes('mediocreation') &&
                    !s.label?.toLowerCase().includes('personal brand') &&
                    !s.handle?.toLowerCase().includes('mediocreation') &&
                    !s.href?.toLowerCase().includes('mediocreation')
                )
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor={social.label}
                    className="surface-card rounded-xl px-4 py-3 flex flex-col hover:border-accent transition-colors"
                  >
                    <span className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
                      {social.label}
                    </span>
                    <span className="font-bold text-sm mt-0.5">{social.handle}</span>
                  </a>
                ))}
              {CONTACT.socials.length === 0 && (
                <p role="status" className="col-span-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                  Tautan media sosial belum tersedia.
                </p>
              )}
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-card rounded-2xl p-7 md:p-9 space-y-5"
        >
          <div>
            <label htmlFor="contact-name" className="font-mono-label text-[10px] uppercase block" style={{ color: 'var(--text-faint)' }}>
              Nama
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full mt-2 bg-transparent border rounded-xl px-4 py-3 outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent transition-colors"
              style={{ borderColor: 'var(--border-strong)' }}
              placeholder="Nama lengkap Anda"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="font-mono-label text-[10px] uppercase block" style={{ color: 'var(--text-faint)' }}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full mt-2 bg-transparent border rounded-xl px-4 py-3 outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent transition-colors"
              style={{ borderColor: 'var(--border-strong)' }}
              placeholder="email@contoh.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="font-mono-label text-[10px] uppercase block" style={{ color: 'var(--text-faint)' }}>
              Pesan
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="w-full mt-2 bg-transparent border rounded-xl px-4 py-3 outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent transition-colors resize-none"
              style={{ borderColor: 'var(--border-strong)' }}
              placeholder="Tulis pesan Anda di sini..."
            />
          </div>

          <button
            type="submit"
            data-cursor="Kirim"
            disabled={status === 'sending'}
            className="btn-accent w-full py-3.5 rounded-xl font-extrabold text-sm disabled:opacity-60 transition-transform hover:scale-[1.01] shadow-sm"
          >
            {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
          </button>

          {feedback && (
            <p
              className="text-sm font-bold text-center"
              style={{ color: status === 'success' ? 'var(--accent)' : 'var(--error)' }}
            >
              {feedback}
            </p>
          )}
        </motion.form>
      </div>

      <div
        className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-8 flex items-center justify-between gap-4 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <span className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()} Zulhelmi Syahtiar
        </span>
        <a
          href="#home"
          data-cursor="Naik"
          className="min-h-11 flex items-center gap-1.5 font-mono-label text-[10px] uppercase hover:text-accent transition-colors"
          style={{ color: 'var(--text-faint)' }}
        >
          Kembali ke Atas
          <span className="material-symbols-outlined text-sm">arrow_upward</span>
        </a>
      </div>
    </section>
  );
}

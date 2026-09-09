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
    <section id="contact" className="relative pt-24 md:pt-32">
      {/* Marquee besar */}
      <div className="overflow-hidden py-4 border-y" style={{ borderColor: 'var(--border)' }}>
        <div className="marquee-track">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="font-display font-extrabold text-4xl md:text-7xl px-6 whitespace-nowrap"
                  style={{ color: i % 2 === 0 ? 'var(--text)' : 'var(--accent)' }}
                >
                  {i % 2 === 0 ? 'TERBUKA UNTUK PELUANG KERJA & PROYEK •' : 'MARI BERKOLABORASI •'}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <span className="font-mono-label text-xs uppercase" style={{ color: 'var(--accent)' }}>
            06 // KONTAK & KOLABORASI
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl mt-4">Hubungi Saya</h2>
          <p className="mt-4 max-w-md text-sm md:text-base" style={{ color: 'var(--text-dim)' }}>
            {CONTACT.description}
          </p>

          <div className="mt-8 space-y-3">
            <button
              type="button"
              data-cursor="Salin"
              onClick={copyEmail}
              className="w-full text-left surface-card rounded-xl p-4 flex items-center justify-between gap-3 hover:border-accent transition-colors"
            >
              <div>
                <p className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--text-faint)' }}>
                  Email Direct
                </p>
                <p className="font-bold mt-0.5">{CONTACT.email}</p>
              </div>
              <span className="material-symbols-outlined text-accent">
                {copied ? 'check' : 'content_copy'}
              </span>
            </button>

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
              {CONTACT.socials.map((social) => (
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
              className="w-full mt-2 bg-transparent border rounded-lg px-4 py-3 outline-none focus:border-accent transition-colors"
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
              className="w-full mt-2 bg-transparent border rounded-lg px-4 py-3 outline-none focus:border-accent transition-colors"
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
              className="w-full mt-2 bg-transparent border rounded-lg px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
              style={{ borderColor: 'var(--border-strong)' }}
              placeholder="Tulis pesan Anda di sini..."
            />
          </div>

          <button
            type="submit"
            data-cursor="Kirim"
            disabled={status === 'sending'}
            className="btn-accent w-full py-3.5 rounded-full font-extrabold text-sm uppercase tracking-wide disabled:opacity-60"
          >
            {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
          </button>

          {feedback && (
            <p
              className="text-sm font-bold text-center"
              style={{ color: status === 'success' ? 'var(--accent)' : '#f87171' }}
            >
              {feedback}
            </p>
          )}
        </motion.form>
      </div>

      <div
        className="max-w-7xl mx-auto px-5 md:px-16 py-6 flex items-center justify-between border-t font-mono-label text-[10px] uppercase"
        style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}
      >
        <span>© {new Date().getFullYear()} Zulhelmi Syahtiar</span>
        <a href="#home" data-cursor="Naik" className="flex items-center gap-1.5 hover:text-accent transition-colors">
          Kembali ke Atas
          <span className="material-symbols-outlined text-sm">arrow_upward</span>
        </a>
      </div>
    </section>
  );
}

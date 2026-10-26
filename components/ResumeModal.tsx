import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useDialogFocus } from '@/hooks/useDialogFocus';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const CV_CATEGORIES = [
  {
    icon: 'developer_board',
    tag: 'Rekomendasi Teknik',
    title: 'CV Rekayasa & IoT (Technical)',
    desc: 'Spesialisasi sistem proteksi listrik gardu induk PLN, mikrokontroler ESP32/PLC, kendali PID/Fuzzy, dan IoT.',
    files: {
      id: '/CV_Zulhelmi_Syahtiar_Teknik_ID.pdf',
      en: '/CV_Zulhelmi_Syahtiar_Technical_EN.pdf',
    },
  },
  {
    icon: 'photo_camera',
    tag: 'Media & Desain',
    title: 'CV Media Kreatif (Creative)',
    desc: 'Fokus pada desain grafis, produksi konten media sosial, fotografi profesional, dan manajemen aset visual.',
    files: {
      id: '/CV_Zulhelmi_Syahtiar_Kreatif_ID.pdf',
      en: '/CV_Zulhelmi_Syahtiar_Creative_EN.pdf',
    },
  },
  {
    icon: 'description',
    tag: 'Lengkap',
    title: 'CV Umum (General Summary)',
    desc: 'Ringkasan komprehensif seluruh rekam jejak akademik, kepanitiaan organisasi, dan kemampuan multidisiplin.',
    files: {
      id: '/CV_Zulhelmi_Syahtiar_Umum_ID.pdf',
      en: '/CV_Zulhelmi_Syahtiar_General_EN.pdf',
    },
  },
];

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useDialogFocus(open, dialogRef, onClose);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-dialog-title"
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
          style={{ background: 'rgba(6, 14, 11, 0.75)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-6 sm:p-8"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="resume-dialog-title" className="font-display font-bold text-2xl tracking-tight">
                  Pilih & Unduh CV
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-faint)' }}>
                  Pilih kurasi CV yang sesuai dengan kebutuhan kualifikasi dan bahasa Anda.
                </p>
              </div>
              <button
                type="button"
                data-cursor="Tutup"
                onClick={onClose}
                aria-label="Tutup"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[var(--surface-strong)] transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="mt-6 space-y-3.5">
              {CV_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="surface-card rounded-2xl p-4 sm:p-5 border transition-all duration-200 hover:border-accent"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'var(--surface-strong)', border: '1px solid var(--border)' }}
                    >
                      <span className="material-symbols-outlined text-accent text-xl">{cat.icon}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="font-mono-label text-[9px] uppercase px-2 py-0.5 rounded border"
                          style={{
                            color: 'var(--accent)',
                            borderColor: 'var(--border-strong)',
                            background: 'var(--surface)',
                          }}
                        >
                          {cat.tag}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base mt-1" style={{ color: 'var(--text)' }}>
                        {cat.title}
                      </h4>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-3.5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <span className="font-mono-label text-[10px] uppercase text-[var(--text-faint)] mr-1">
                      Pilihan Berkas:
                    </span>
                    <a
                      href={cat.files.id}
                      download
                      data-cursor="Unduh ID"
                      className="px-3 py-1.5 rounded-lg border text-xs font-bold font-mono-label flex items-center gap-1.5 transition-colors hover:border-accent hover:bg-[var(--surface-strong)]"
                      style={{ borderColor: 'var(--border-strong)', color: 'var(--text)' }}
                    >
                      <span className="material-symbols-outlined text-sm text-accent">download</span>
                      Bahasa ID
                    </a>
                    <a
                      href={cat.files.en}
                      download
                      data-cursor="Unduh EN"
                      className="px-3 py-1.5 rounded-lg border text-xs font-bold font-mono-label flex items-center gap-1.5 transition-colors hover:border-accent hover:bg-[var(--surface-strong)]"
                      style={{ borderColor: 'var(--border-strong)', color: 'var(--text)' }}
                    >
                      <span className="material-symbols-outlined text-sm text-accent">download</span>
                      English EN
                    </a>
                    <a
                      href={cat.files.id}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="Lihat"
                      title="Buka pratinjau dokumen di tab baru"
                      className="ml-auto px-2.5 py-1.5 rounded-lg border text-xs font-mono-label flex items-center gap-1 transition-colors hover:text-accent hover:border-accent"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      <span className="hidden sm:inline">Pratinjau</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

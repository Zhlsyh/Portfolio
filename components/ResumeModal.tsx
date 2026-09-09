import { AnimatePresence, motion } from 'motion/react';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const CV_OPTIONS = [
  {
    label: 'Bahasa Indonesia',
    file: '/CV_Zulhelmi_Syahtiar_ID.pdf',
    desc: 'Versi standar untuk lamaran kerja dalam negeri',
  },
  {
    label: 'English Version',
    file: '/CV_Zulhelmi_Syahtiar_EN.pdf',
    desc: 'Standard version for international applications',
  },
  {
    label: 'Creative Layout',
    file: '/CV_Zulhelmi_Syahtiar_Creative.pdf',
    desc: 'Layout visual untuk portofolio kreatif',
  },
];

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
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
            className="w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-7 md:p-9"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)' }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display font-extrabold text-2xl">Unduh CV</h3>
              <button
                type="button"
                data-cursor="Tutup"
                onClick={onClose}
                aria-label="Tutup"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--surface)]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {CV_OPTIONS.map((opt, i) => (
                <a
                  key={opt.file}
                  href={opt.file}
                  download
                  data-cursor="Unduh"
                  className="surface-card rounded-xl p-4 flex items-center justify-between gap-4 hover:border-accent transition-colors"
                >
                  <div>
                    <p className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--accent)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="font-bold mt-0.5">{opt.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>
                      {opt.desc}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-accent">download</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

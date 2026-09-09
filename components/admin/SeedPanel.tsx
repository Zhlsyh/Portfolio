import { useEffect, useState } from 'react';
import { checkFirestoreHasData, seedFirestoreWithDefaults } from '@/lib/adminData';
import { SectionCard } from '@/components/admin/FormControls';

export default function SeedPanel() {
  const [hasData, setHasData] = useState<boolean | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    checkFirestoreHasData()
      .then(setHasData)
      .catch(() => setHasData(false));
  }, []);

  async function handleSeed(force: boolean) {
    if (force && !confirm('Ini akan MENIMPA semua data proyek & konten di Firestore dengan data bawaan. Lanjutkan?')) {
      return;
    }
    setSeeding(true);
    setMessage('');
    try {
      await seedFirestoreWithDefaults();
      setMessage('Berhasil! Data bawaan sudah ditulis ke Firestore.');
      setHasData(true);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Gagal seed data.');
    } finally {
      setSeeding(false);
    }
  }

  return (
    <SectionCard
      title="Seed / Reset Data"
      description="Tulis data bawaan (yang sudah ada di kode) ke Firestore. Dipakai sekali di awal setup, atau kalau ingin mengembalikan semua konten ke kondisi default."
    >
      {hasData === null ? (
        <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
          Memeriksa status Firestore...
        </p>
      ) : hasData ? (
        <div className="space-y-3">
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
            <span className="material-symbols-outlined text-base">check_circle</span>
            Firestore sudah berisi data.
          </p>
          <button
            type="button"
            data-cursor="Reset"
            onClick={() => handleSeed(true)}
            disabled={seeding}
            className="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wide border disabled:opacity-60"
            style={{ borderColor: '#f87171', color: '#f87171' }}
          >
            {seeding ? 'Memproses...' : 'Reset ke Data Default'}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            Firestore masih kosong. Klik tombol di bawah untuk mengisi data awal dari kode (konten & semua proyek yang sudah ada).
          </p>
          <button
            type="button"
            data-cursor="Seed"
            onClick={() => handleSeed(false)}
            disabled={seeding}
            className="btn-accent px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wide disabled:opacity-60"
          >
            {seeding ? 'Memproses...' : 'Seed Data Awal'}
          </button>
        </div>
      )}

      {message && (
        <p className="text-xs font-bold mt-3" style={{ color: 'var(--accent)' }}>
          {message}
        </p>
      )}
    </SectionCard>
  );
}

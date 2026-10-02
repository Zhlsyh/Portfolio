import { useState } from 'react';

export function useSaveFeedback() {
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [error, setError] = useState('');

  async function save(action: () => Promise<void>) {
    setSaving(true);
    setSavedAt(null);
    setError('');
    try {
      await action();
      setSavedAt(Date.now());
    } catch {
      setError('Perubahan gagal disimpan. Periksa koneksi Firebase, lalu coba lagi.');
    } finally {
      setSaving(false);
    }
  }

  return { saving, savedAt, error, setError, save };
}
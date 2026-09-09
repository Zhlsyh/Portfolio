import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { AddButton, Field, IconButton, SaveBar, SectionCard, TextArea, TextInput } from '@/components/admin/FormControls';
import type { OrgCard } from '@/types/content';

export default function OrgCardsEditor() {
  const { content, projects } = useSiteData();
  const [cards, setCards] = useState(content.orgCards);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  function update(i: number, patch: Partial<OrgCard>) {
    setCards(cards.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, orgCards: cards });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  const projectOptions = Object.keys(projects).filter((id) => id.startsWith('org-'));

  return (
    <div className="space-y-6">
      <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
        Kartu flip di bawah bagian Rekam Jejak. Kolom <strong>ID Proyek</strong> menghubungkan kartu ini ke data proyek
        (dokumentasi/foto & link Drive) yang dikelola di tab <strong>Proyek</strong>.
      </p>

      {cards.map((card, i) => (
        <SectionCard key={i} title={`Kartu Organisasi ${i + 1}`}>
          <div className="space-y-4">
            <div className="flex justify-end -mt-2">
              <IconButton onClick={() => setCards(cards.filter((_, idx) => idx !== i))} icon="delete" label="Hapus kartu ini" danger />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="ID Proyek (harus cocok dengan tab Proyek)" hint={`Tersedia: ${projectOptions.join(', ') || '(belum ada)'}`}>
                <TextInput value={card.id} onChange={(e) => update(i, { id: e.target.value })} />
              </Field>
              <Field label="Logo (path gambar)">
                <TextInput value={card.logo} onChange={(e) => update(i, { logo: e.target.value })} />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Peran / Jabatan">
                <TextInput value={card.role} onChange={(e) => update(i, { role: e.target.value })} />
              </Field>
              <Field label="Periode">
                <TextInput value={card.period} onChange={(e) => update(i, { period: e.target.value })} />
              </Field>
            </div>
            <Field label="Tugas & Responsibilitas">
              <TextArea rows={3} value={card.responsibility} onChange={(e) => update(i, { responsibility: e.target.value })} />
            </Field>
          </div>
        </SectionCard>
      ))}

      <AddButton
        onClick={() =>
          setCards([
            ...cards,
            { id: `org-${cards.length + 1}`, logo: '/logos/organisasi/', role: 'Peran', period: 'Periode', responsibility: 'Deskripsi tugas.' },
          ])
        }
        label="Tambah Kartu Organisasi"
      />

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

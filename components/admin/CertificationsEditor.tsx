import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { AddButton, Field, IconButton, SaveBar, SectionCard, TextArea, TextInput } from '@/components/admin/FormControls';
import type { Certification } from '@/types/content';

const EMPTY: Certification = {
  badge: 'Official Certification',
  period: '2025 \u2013 2028',
  title: 'Judul Sertifikasi',
  issuer: 'Lembaga Penerbit',
  description: 'Deskripsi sertifikasi.',
  tags: ['Tag A', 'Tag B'],
  regNo: 'REG-0000',
};

export default function CertificationsEditor() {
  const { content } = useSiteData();
  const [items, setItems] = useState(content.certifications);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  function update(i: number, patch: Partial<Certification>) {
    setItems(items.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, certifications: items });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {items.map((cert, i) => (
        <SectionCard key={i} title={`Sertifikasi ${i + 1}`}>
          <div className="space-y-4">
            <div className="flex justify-end -mt-2">
              <IconButton onClick={() => setItems(items.filter((_, idx) => idx !== i))} icon="delete" label="Hapus" danger />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Badge (teks kecil hijau)">
                <TextInput value={cert.badge} onChange={(e) => update(i, { badge: e.target.value })} />
              </Field>
              <Field label="Periode berlaku">
                <TextInput value={cert.period} onChange={(e) => update(i, { period: e.target.value })} />
              </Field>
            </div>
            <Field label="Judul sertifikasi">
              <TextInput value={cert.title} onChange={(e) => update(i, { title: e.target.value })} />
            </Field>
            <Field label="Penerbit / Lembaga">
              <TextInput value={cert.issuer} onChange={(e) => update(i, { issuer: e.target.value })} />
            </Field>
            <Field label="Deskripsi">
              <TextArea rows={3} value={cert.description} onChange={(e) => update(i, { description: e.target.value })} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Tags (pisahkan koma)">
                <TextInput
                  value={cert.tags.join(', ')}
                  onChange={(e) => update(i, { tags: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                />
              </Field>
              <Field label="No. Registrasi">
                <TextInput value={cert.regNo} onChange={(e) => update(i, { regNo: e.target.value })} />
              </Field>
            </div>
          </div>
        </SectionCard>
      ))}

      <AddButton onClick={() => setItems([...items, { ...EMPTY }])} label="Tambah Sertifikasi" />

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

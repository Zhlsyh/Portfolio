import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { AddButton, Field, IconButton, SaveBar, SectionCard, TextArea, TextInput } from '@/components/admin/FormControls';
import type { ExperienceItem } from '@/types/content';

const EMPTY: ExperienceItem = {
  tag: 'Kategori',
  title: 'Judul Posisi',
  org: 'Nama Organisasi',
  period: 'Bulan Tahun \u2013 Bulan Tahun',
  location: 'Kota',
  points: ['Poin pencapaian pertama.'],
  skillsLabel: 'Keahlian Terpakai',
  skills: ['Skill A', 'Skill B'],
};

export default function ExperienceEditor() {
  const { content } = useSiteData();
  const [items, setItems] = useState(content.experience);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  function update(i: number, patch: Partial<ExperienceItem>) {
    setItems(items.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, experience: items });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {items.map((exp, i) => (
        <SectionCard key={i} title={`Pengalaman ${i + 1}`}>
          <div className="space-y-4">
            <div className="flex justify-end -mt-2">
              <IconButton onClick={() => setItems(items.filter((_, idx) => idx !== i))} icon="delete" label="Hapus pengalaman ini" danger />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Tag kategori">
                <TextInput value={exp.tag} onChange={(e) => update(i, { tag: e.target.value })} />
              </Field>
              <Field label="Periode">
                <TextInput value={exp.period} onChange={(e) => update(i, { period: e.target.value })} />
              </Field>
            </div>
            <Field label="Judul posisi">
              <TextInput value={exp.title} onChange={(e) => update(i, { title: e.target.value })} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Organisasi / Perusahaan">
                <TextInput value={exp.org} onChange={(e) => update(i, { org: e.target.value })} />
              </Field>
              <Field label="Lokasi">
                <TextInput value={exp.location} onChange={(e) => update(i, { location: e.target.value })} />
              </Field>
            </div>
            <Field label="Poin-poin (satu baris = satu poin)">
              <TextArea
                rows={4}
                value={exp.points.join('\n')}
                onChange={(e) => update(i, { points: e.target.value.split('\n').filter(Boolean) })}
              />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Label skill">
                <TextInput value={exp.skillsLabel} onChange={(e) => update(i, { skillsLabel: e.target.value })} />
              </Field>
              <Field label="Skill (pisahkan koma)">
                <TextInput
                  value={exp.skills.join(', ')}
                  onChange={(e) => update(i, { skills: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                />
              </Field>
            </div>
          </div>
        </SectionCard>
      ))}

      <AddButton onClick={() => setItems([...items, { ...EMPTY }])} label="Tambah Pengalaman" />

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { AddButton, Field, IconButton, SaveBar, SectionCard, TextArea, TextInput } from '@/components/admin/FormControls';
import type { HeroBadge } from '@/types/content';

export default function HeroEditor() {
  const { content } = useSiteData();
  const [hero, setHero] = useState(content.hero);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  function updateBadge(i: number, patch: Partial<HeroBadge>) {
    setHero((h) => ({ ...h, badges: h.badges.map((b, idx) => (idx === i ? { ...b, ...patch } : b)) }));
  }

  function addBadge() {
    setHero((h) => ({ ...h, badges: [...h.badges, { icon: 'star', label: 'Label Baru', value: 'Value' }] }));
  }

  function removeBadge(i: number) {
    setHero((h) => ({ ...h, badges: h.badges.filter((_, idx) => idx !== i) }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, hero });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <SectionCard title="Hero" description="Bagian paling atas halaman — nama, tagline, dan deskripsi singkat.">
        <div className="space-y-4">
          <Field label="Eyebrow (teks kecil di atas nama)">
            <TextInput value={hero.eyebrow} onChange={(e) => setHero({ ...hero, eyebrow: e.target.value })} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Nama depan (baris 1)">
              <TextInput value={hero.title1} onChange={(e) => setHero({ ...hero, title1: e.target.value })} />
            </Field>
            <Field label="Nama belakang (baris 2, warna aksen)">
              <TextInput value={hero.title2} onChange={(e) => setHero({ ...hero, title2: e.target.value })} />
            </Field>
          </div>
          <Field label="Deskripsi singkat">
            <TextArea rows={4} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
          </Field>
          <Field label="Quote (di kartu foto)">
            <TextInput value={hero.quote} onChange={(e) => setHero({ ...hero, quote: e.target.value })} />
          </Field>
        </div>
      </SectionCard>

      <SectionCard title="Badge Kapabilitas" description="4 kartu kecil di bawah Hero (ikon Material Symbols, label, value).">
        <div className="space-y-3">
          {hero.badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 surface-card rounded-xl p-3">
              <TextInput
                value={badge.icon}
                onChange={(e) => updateBadge(i, { icon: e.target.value })}
                placeholder="material icon"
                className="w-32 shrink-0"
              />
              <TextInput value={badge.label} onChange={(e) => updateBadge(i, { label: e.target.value })} placeholder="Label" />
              <TextInput value={badge.value} onChange={(e) => updateBadge(i, { value: e.target.value })} placeholder="Value" />
              <IconButton onClick={() => removeBadge(i)} icon="delete" label="Hapus badge" danger />
            </div>
          ))}
          <AddButton onClick={addBadge} label="Tambah Badge" />
        </div>
      </SectionCard>

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

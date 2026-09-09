import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { AddButton, Field, IconButton, SaveBar, SectionCard, TextArea, TextInput } from '@/components/admin/FormControls';
import type { SocialLink } from '@/types/content';

export default function ContactEditor() {
  const { content } = useSiteData();
  const [contact, setContact] = useState(content.contact);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  function updateSocial(i: number, patch: Partial<SocialLink>) {
    setContact((c) => ({ ...c, socials: c.socials.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, contact });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <SectionCard title="Info Kontak">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Email">
              <TextInput value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            </Field>
            <Field label="Lokasi">
              <TextInput value={contact.location} onChange={(e) => setContact({ ...contact, location: e.target.value })} />
            </Field>
          </div>
          <Field label="Deskripsi ajakan kontak">
            <TextArea rows={3} value={contact.description} onChange={(e) => setContact({ ...contact, description: e.target.value })} />
          </Field>
        </div>
      </SectionCard>

      <SectionCard title="Media Sosial">
        <div className="space-y-3">
          {contact.socials.map((s, i) => (
            <div key={i} className="flex items-center gap-2 surface-card rounded-xl p-3">
              <TextInput value={s.label} onChange={(e) => updateSocial(i, { label: e.target.value })} placeholder="Label" />
              <TextInput value={s.handle} onChange={(e) => updateSocial(i, { handle: e.target.value })} placeholder="@handle" />
              <TextInput value={s.href} onChange={(e) => updateSocial(i, { href: e.target.value })} placeholder="https://..." />
              <IconButton
                onClick={() => setContact({ ...contact, socials: contact.socials.filter((_, idx) => idx !== i) })}
                icon="delete"
                label="Hapus"
                danger
              />
            </div>
          ))}
          <AddButton
            onClick={() => setContact({ ...contact, socials: [...contact.socials, { label: 'Platform', handle: '@handle', href: 'https://' }] })}
            label="Tambah Sosial Media"
          />
        </div>
      </SectionCard>

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

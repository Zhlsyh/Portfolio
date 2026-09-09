import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { SaveBar, SectionCard, TextInput } from '@/components/admin/FormControls';
import type { NavItem } from '@/types/content';

export default function NavEditor() {
  const { content } = useSiteData();
  const [items, setItems] = useState(content.nav);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  function update(i: number, patch: Partial<NavItem>) {
    setItems(items.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, nav: items });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <SectionCard
        title="Menu Navigasi"
        description="⚠️ Kolom 'href' harus persis sama dengan id section di halaman (contoh: #home, #projects). Salah ketik bisa membuat menu tidak berfungsi."
      >
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 surface-card rounded-xl p-3">
              <TextInput value={item.index} onChange={(e) => update(i, { index: e.target.value })} placeholder="01" />
              <TextInput value={item.label} onChange={(e) => update(i, { label: e.target.value })} placeholder="Label" />
              <TextInput value={item.tag} onChange={(e) => update(i, { tag: e.target.value })} placeholder="TAG" />
              <TextInput value={item.href} onChange={(e) => update(i, { href: e.target.value })} placeholder="#section-id" />
            </div>
          ))}
        </div>
      </SectionCard>

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

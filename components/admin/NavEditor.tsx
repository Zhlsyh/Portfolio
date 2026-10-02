import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { SaveBar, SectionCard, Select, TextInput } from '@/components/admin/FormControls';
import { NAV_SECTION_HREFS } from '@/data/content';
import { useSaveFeedback } from '@/hooks/useSaveFeedback';
import type { NavItem } from '@/types/content';

export default function NavEditor() {
  const { content } = useSiteData();
  const [items, setItems] = useState(content.nav);
  const { saving, savedAt, error, setError, save } = useSaveFeedback();

  function update(i: number, patch: Partial<NavItem>) {
    setItems(items.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  }

  function handleSave() {
    if (items.some((item) => !NAV_SECTION_HREFS.includes(item.href))) {
      setError('Pilih tujuan navigasi yang tersedia.');
      return;
    }

    void save(() => saveSiteContent({ ...content, nav: items }));
  }

  return (
    <div className="space-y-6">
      <SectionCard
        title="Menu Navigasi"
        description="Pilih section yang tersedia untuk setiap item menu."
      >
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 surface-card rounded-xl p-3">
              <TextInput aria-label={`Nomor menu ${i + 1}`} value={item.index} onChange={(e) => update(i, { index: e.target.value })} placeholder="01" />
              <TextInput aria-label={`Label menu ${i + 1}`} value={item.label} onChange={(e) => update(i, { label: e.target.value })} placeholder="Label" />
              <TextInput aria-label={`Tag menu ${i + 1}`} value={item.tag} onChange={(e) => update(i, { tag: e.target.value })} placeholder="TAG" />
              <Select
                aria-label={`Tujuan menu ${i + 1}`}
                value={item.href}
                onChange={(href) => update(i, { href })}
                options={NAV_SECTION_HREFS.map((href) => ({ value: href, label: href.slice(1) }))}
              />
            </div>
          ))}
        </div>
      </SectionCard>

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} error={error} />
    </div>
  );
}

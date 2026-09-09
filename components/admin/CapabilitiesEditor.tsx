import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import {
  AddButton,
  Field,
  IconButton,
  SaveBar,
  Select,
  SectionCard,
  TextInput,
} from '@/components/admin/FormControls';
import type { CapabilityCategory, CapabilityItem } from '@/types/content';

const EMPTY_ITEM: CapabilityItem = { name: 'Nama Skill', detail: 'Deskripsi singkat', iconType: 'material', icons: ['star'] };

export default function CapabilitiesEditor() {
  const { content } = useSiteData();
  const [categories, setCategories] = useState(content.capabilities);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  function updateCategory(ci: number, patch: Partial<CapabilityCategory>) {
    setCategories(categories.map((c, idx) => (idx === ci ? { ...c, ...patch } : c)));
  }

  function updateItem(ci: number, ii: number, patch: Partial<CapabilityItem>) {
    setCategories(
      categories.map((c, idx) =>
        idx === ci ? { ...c, items: c.items.map((it, iidx) => (iidx === ii ? { ...it, ...patch } : it)) } : c
      )
    );
  }

  function removeItem(ci: number, ii: number) {
    setCategories(categories.map((c, idx) => (idx === ci ? { ...c, items: c.items.filter((_, iidx) => iidx !== ii) } : c)));
  }

  function addItem(ci: number) {
    setCategories(categories.map((c, idx) => (idx === ci ? { ...c, items: [...c.items, { ...EMPTY_ITEM }] } : c)));
  }

  function removeCategory(ci: number) {
    setCategories(categories.filter((_, idx) => idx !== ci));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, capabilities: categories });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {categories.map((cat, ci) => (
        <SectionCard key={ci} title={`Kategori ${ci + 1}`}>
          <div className="space-y-4">
            <div className="flex justify-end -mt-2">
              <IconButton onClick={() => removeCategory(ci)} icon="delete" label="Hapus kategori ini" danger />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Field label="Icon kategori (material)">
                <TextInput value={cat.icon} onChange={(e) => updateCategory(ci, { icon: e.target.value })} />
              </Field>
              <Field label="Judul kategori">
                <TextInput value={cat.title} onChange={(e) => updateCategory(ci, { title: e.target.value })} />
              </Field>
              <Field label="Subjudul">
                <TextInput value={cat.subtitle} onChange={(e) => updateCategory(ci, { subtitle: e.target.value })} />
              </Field>
            </div>

            <div className="space-y-2.5 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="font-mono-label text-[10px] uppercase pt-2" style={{ color: 'var(--text-faint)' }}>
                Item skill
              </p>
              {cat.items.map((item, ii) => (
                <div key={ii} className="surface-card rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <TextInput value={item.name} onChange={(e) => updateItem(ci, ii, { name: e.target.value })} placeholder="Nama" />
                    <IconButton onClick={() => removeItem(ci, ii)} icon="delete" label="Hapus item" danger />
                  </div>
                  <TextInput
                    value={item.detail}
                    onChange={(e) => updateItem(ci, ii, { detail: e.target.value })}
                    placeholder="Detail singkat"
                  />
                  <div className="flex items-center gap-2">
                    <Select
                      value={item.iconType}
                      onChange={(v) => updateItem(ci, ii, { iconType: v as 'material' | 'image' })}
                      options={[
                        { value: 'material', label: 'Material Icon' },
                        { value: 'image', label: 'Gambar Logo' },
                      ]}
                    />
                    <TextInput
                      value={item.icons.join(', ')}
                      onChange={(e) => updateItem(ci, ii, { icons: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                      placeholder={item.iconType === 'material' ? 'nama material icon' : 'url1.svg, url2.svg'}
                    />
                  </div>
                </div>
              ))}
              <AddButton onClick={() => addItem(ci)} label="Tambah Item" />
            </div>
          </div>
        </SectionCard>
      ))}

      <AddButton
        onClick={() =>
          setCategories([
            ...categories,
            { icon: 'category', title: 'Kategori Baru', subtitle: 'Deskripsi kategori', items: [{ ...EMPTY_ITEM }] },
          ])
        }
        label="Tambah Kategori"
      />

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

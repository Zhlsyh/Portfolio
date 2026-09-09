import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { AddButton, IconButton, SaveBar, SectionCard, TextInput } from '@/components/admin/FormControls';

export default function StatsEditor() {
  const { content } = useSiteData();
  const [stats, setStats] = useState(content.stats);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  async function handleSave() {
    setSaving(true);
    try {
      await saveSiteContent({ ...content, stats });
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <SectionCard title="Stats Bar" description="Tiga angka ringkas di bawah Hero, format mono all-caps.">
        <div className="space-y-3">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-2 surface-card rounded-xl p-3">
              <TextInput
                value={s.value}
                onChange={(e) => setStats(stats.map((x, idx) => (idx === i ? { ...x, value: e.target.value } : x)))}
                placeholder="IPK_3.55"
              />
              <TextInput
                value={s.label}
                onChange={(e) => setStats(stats.map((x, idx) => (idx === i ? { ...x, label: e.target.value } : x)))}
                placeholder="LULUS_D3_ELEKTRONIKA"
              />
              <IconButton onClick={() => setStats(stats.filter((_, idx) => idx !== i))} icon="delete" label="Hapus" danger />
            </div>
          ))}
          <AddButton onClick={() => setStats([...stats, { value: 'VALUE', label: 'LABEL' }])} label="Tambah Stat" />
        </div>
      </SectionCard>

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} />
    </div>
  );
}

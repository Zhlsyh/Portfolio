import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveSiteContent } from '@/lib/adminData';
import { useSaveFeedback } from '@/hooks/useSaveFeedback';
import { AddButton, IconButton, SaveBar, SectionCard, TextInput } from '@/components/admin/FormControls';

export default function StatsEditor() {
  const { content } = useSiteData();
  const [stats, setStats] = useState(content.stats);
  const { saving, savedAt, error, save } = useSaveFeedback();

  function handleSave() {
    void save(() => saveSiteContent({ ...content, stats }));
  }

  return (
    <div className="space-y-6">
      <SectionCard title="Statistik" description="Data ringkas opsional di bawah Hero.">
        <div className="space-y-3">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-2 surface-card rounded-xl p-3">
              <TextInput
                aria-label={`Nilai statistik ${i + 1}`}
                value={s.value}
                onChange={(e) => setStats(stats.map((x, idx) => (idx === i ? { ...x, value: e.target.value } : x)))}
                placeholder="IPK_3.55"
              />
              <TextInput
                aria-label={`Label statistik ${i + 1}`}
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

      <SaveBar onSave={handleSave} saving={saving} savedAt={savedAt} error={error} />
    </div>
  );
}

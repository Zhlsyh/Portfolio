import { useState } from 'react';
import { useSiteData } from '@/context/SiteDataContext';
import { saveProject, deleteProject } from '@/lib/adminData';
import { AddButton, Field, IconButton, Select, SectionCard, TextArea, TextInput } from '@/components/admin/FormControls';
import type { ProjectData } from '@/data/projects';

function emptyProject(id: string): ProjectData {
  return {
    id,
    category: 'engineering',
    title: 'Judul Proyek Baru',
    image: '/photos/',
    tags: ['Tag A'],
    description: 'Deskripsi proyek.',
    specs: [{ label: 'Label', value: 'Value' }],
    docLink: '',
    gallery: [],
  };
}

export default function ProjectsEditor() {
  const { projects } = useSiteData();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draft, setDraft] = useState<ProjectData | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [error, setError] = useState('');

  const ids = Object.keys(projects).sort();

  function selectProject(id: string) {
    setSelectedId(id);
    setDraft({ ...projects[id], specs: [...projects[id].specs], tags: [...projects[id].tags], gallery: [...(projects[id].gallery || [])] });
    setSavedAt(null);
    setError('');
  }

  function startNew() {
    const newId = `project-${Date.now()}`;
    setSelectedId(newId);
    setDraft(emptyProject(newId));
    setSavedAt(null);
    setError('');
  }

  async function handleSave() {
    if (!draft) return;
    if (!draft.id.trim()) {
      setError('ID proyek tidak boleh kosong.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await saveProject(draft);
      setSelectedId(draft.id);
      setSavedAt(Date.now());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal menyimpan.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm(`Hapus proyek "${projects[id]?.title}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    await deleteProject(id);
    if (selectedId === id) {
      setSelectedId(null);
      setDraft(null);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
      {/* List proyek */}
      <div className="surface-card rounded-2xl p-4 h-fit lg:sticky lg:top-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-sm">Daftar Proyek ({ids.length})</h3>
        </div>
        <div className="space-y-1.5 max-h-[60vh] overflow-y-auto no-scrollbar">
          {ids.map((id) => (
            <button
              key={id}
              type="button"
              data-cursor="Pilih"
              onClick={() => selectProject(id)}
              className="w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between gap-2 transition-colors"
              style={{
                background: selectedId === id ? 'var(--accent-soft)' : 'transparent',
                color: selectedId === id ? 'var(--accent)' : 'var(--text-dim)',
              }}
            >
              <span className="truncate font-bold">{projects[id].title}</span>
              <IconButton onClick={() => handleDelete(id)} icon="delete" label="Hapus" danger />
            </button>
          ))}
        </div>
        <AddButton onClick={startNew} label="Proyek Baru" />
      </div>

      {/* Form detail */}
      <div>
        {!draft ? (
          <div className="surface-card rounded-2xl p-10 text-center" style={{ color: 'var(--text-faint)' }}>
            Pilih proyek di kiri untuk mengedit, atau buat proyek baru.
          </div>
        ) : (
          <SectionCard title={selectedId && projects[selectedId] ? 'Edit Proyek' : 'Proyek Baru'}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="ID (unik, dipakai di URL & mapping)">
                  <TextInput value={draft.id} onChange={(e) => setDraft({ ...draft, id: e.target.value })} />
                </Field>
                <Field label="Kategori">
                  <Select
                    value={draft.category}
                    onChange={(v) => setDraft({ ...draft, category: v as ProjectData['category'] })}
                    options={[
                      { value: 'engineering', label: 'Engineering' },
                      { value: 'photography', label: 'Fotografi' },
                      { value: 'design', label: 'Desain' },
                    ]}
                  />
                </Field>
              </div>
              <Field label="Judul">
                <TextInput value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
              </Field>
              <Field label="Gambar utama (path/URL)">
                <TextInput value={draft.image} onChange={(e) => setDraft({ ...draft, image: e.target.value })} />
              </Field>
              <Field label="Tags (pisahkan koma)">
                <TextInput
                  value={draft.tags.join(', ')}
                  onChange={(e) => setDraft({ ...draft, tags: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                />
              </Field>
              <Field label="Deskripsi">
                <TextArea rows={4} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
              </Field>
              <Field label="Link dokumen/demo (opsional)">
                <TextInput value={draft.docLink || ''} onChange={(e) => setDraft({ ...draft, docLink: e.target.value })} />
              </Field>

              {/* Specs */}
              <div className="pt-2 border-t space-y-2.5" style={{ borderColor: 'var(--border)' }}>
                <p className="font-mono-label text-[10px] uppercase pt-2" style={{ color: 'var(--text-faint)' }}>
                  Spesifikasi
                </p>
                {draft.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <TextInput
                      value={spec.label}
                      onChange={(e) =>
                        setDraft({ ...draft, specs: draft.specs.map((s, idx) => (idx === i ? { ...s, label: e.target.value } : s)) })
                      }
                      placeholder="Label"
                    />
                    <TextInput
                      value={spec.value}
                      onChange={(e) =>
                        setDraft({ ...draft, specs: draft.specs.map((s, idx) => (idx === i ? { ...s, value: e.target.value } : s)) })
                      }
                      placeholder="Value"
                    />
                    <IconButton
                      onClick={() => setDraft({ ...draft, specs: draft.specs.filter((_, idx) => idx !== i) })}
                      icon="delete"
                      label="Hapus"
                      danger
                    />
                  </div>
                ))}
                <AddButton
                  onClick={() => setDraft({ ...draft, specs: [...draft.specs, { label: 'Label', value: 'Value' }] })}
                  label="Tambah Spesifikasi"
                />
              </div>

              {/* Gallery */}
              <div className="pt-2 border-t space-y-2.5" style={{ borderColor: 'var(--border)' }}>
                <p className="font-mono-label text-[10px] uppercase pt-2" style={{ color: 'var(--text-faint)' }}>
                  Galeri Dokumentasi ({(draft.gallery || []).length} foto)
                </p>
                <div className="max-h-64 overflow-y-auto no-scrollbar space-y-2">
                  {(draft.gallery || []).map((item, i) => (
                    <div key={item.id || i} className="flex items-center gap-2">
                      <TextInput
                        value={item.url}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            gallery: (draft.gallery || []).map((g, idx) => (idx === i ? { ...g, url: e.target.value } : g)),
                          })
                        }
                        placeholder="URL gambar"
                      />
                      <IconButton
                        onClick={() => setDraft({ ...draft, gallery: (draft.gallery || []).filter((_, idx) => idx !== i) })}
                        icon="delete"
                        label="Hapus"
                        danger
                      />
                    </div>
                  ))}
                </div>
                <AddButton
                  onClick={() =>
                    setDraft({
                      ...draft,
                      gallery: [...(draft.gallery || []), { id: `g-${Date.now()}`, url: 'https://' }],
                    })
                  }
                  label="Tambah Foto Galeri"
                />
              </div>

              {error && (
                <p className="text-xs font-bold" style={{ color: '#f87171' }}>
                  {error}
                </p>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  data-cursor="Simpan"
                  onClick={handleSave}
                  disabled={saving}
                  className="btn-accent px-6 py-3 rounded-full font-extrabold text-sm uppercase tracking-wide disabled:opacity-60"
                >
                  {saving ? 'Menyimpan...' : 'Simpan Proyek'}
                </button>
                {savedAt && !saving && (
                  <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>
                    Tersimpan {new Date(savedAt).toLocaleTimeString('id-ID')}
                  </span>
                )}
              </div>
            </div>
          </SectionCard>
        )}
      </div>
    </div>
  );
}

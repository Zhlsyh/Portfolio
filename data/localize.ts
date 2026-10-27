import { EN_MAP, PROJECT_EN, type Lang } from './i18n';
import type { Project } from '@/components/ProjectModal';

/** Tampilan proyek sesuai bahasa. Data asli (ID) tidak diubah; versi EN ditimpa dari kamus. */
export function localizeProject(p: Project, lang: Lang): Project {
  if (lang === 'id') return p;
  const en = PROJECT_EN[p.id];
  const tr = (s: string) => EN_MAP[s] ?? s;
  return {
    ...p,
    title: en?.title ?? p.title,
    description: en?.description ?? p.description,
    tags: p.tags.map(tr),
    specs: p.specs.map((s) => ({ label: tr(s.label), value: tr(s.value) })),
  };
}

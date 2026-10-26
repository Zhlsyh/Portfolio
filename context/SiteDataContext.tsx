import { collection, doc, onSnapshot } from 'firebase/firestore';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { DEFAULT_CONTENT } from '@/data/content';
import { PROJECTS_DATA } from '@/data/projects';
import type { ProjectsMap, SiteContent } from '@/types/content';

interface SiteDataValue {
  content: SiteContent;
  projects: ProjectsMap;
  loading: boolean;
  isLive: boolean;
  error: string | null;
}

const SiteDataContext = createContext<SiteDataValue>({
  content: DEFAULT_CONTENT as SiteContent,
  projects: PROJECTS_DATA,
  loading: false,
  isLive: false,
  error: null,
});

export function SiteDataProvider({ children }: { children: ReactNode }) {
  // Gunakan data kode lokal (data/content.ts & data/projects.ts) sebagai prioritas utama
  // agar perubahan kurasi CV langsung tampil dan tidak tertimpa data usang dari Firestore.
  const preferLocal = process.env.NEXT_PUBLIC_PREFER_LOCAL_DATA !== 'false';
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT as SiteContent);
  const [projects, setProjects] = useState<ProjectsMap>(PROJECTS_DATA);
  const [loading, setLoading] = useState<boolean>(!preferLocal && isFirebaseConfigured);
  const [loadErrors, setLoadErrors] = useState({ content: false, projects: false });

  useEffect(() => {
    if (!db || preferLocal) {
      setLoading(false);
      return;
    }

    let contentLoaded = false;
    let projectsLoaded = false;
    const maybeStopLoading = () => {
      if (contentLoaded && projectsLoaded) setLoading(false);
    };

    const unsubContent = onSnapshot(
      doc(db, 'content', 'main'),
      (snap) => {
        setLoadErrors((current) => ({ ...current, content: false }));
        if (snap.exists()) {
          setContent(snap.data() as SiteContent);
        }
        contentLoaded = true;
        maybeStopLoading();
      },
      () => {
        setLoadErrors((current) => ({ ...current, content: true }));
        contentLoaded = true;
        maybeStopLoading();
      }
    );

    const unsubProjects = onSnapshot(
      collection(db, 'projects'),
      (snap) => {
        setLoadErrors((current) => ({ ...current, projects: false }));
        if (!snap.empty) {
          const map: ProjectsMap = {};
          snap.forEach((d) => {
            map[d.id] = d.data() as ProjectsMap[string];
          });
          setProjects(map);
        }
        projectsLoaded = true;
        maybeStopLoading();
      },
      () => {
        setLoadErrors((current) => ({ ...current, projects: true }));
        projectsLoaded = true;
        maybeStopLoading();
      }
    );

    return () => {
      unsubContent();
      unsubProjects();
    };
  }, []);

  return (
    <SiteDataContext.Provider
      value={{
        content,
        projects,
        loading,
        isLive: isFirebaseConfigured,
        error: loadErrors.content || loadErrors.projects ? 'Firebase gagal memuat sebagian data. Konten lokal tetap ditampilkan.' : null,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}

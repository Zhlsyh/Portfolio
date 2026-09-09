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
}

const SiteDataContext = createContext<SiteDataValue>({
  content: DEFAULT_CONTENT as SiteContent,
  projects: PROJECTS_DATA,
  loading: false,
  isLive: false,
});

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT as SiteContent);
  const [projects, setProjects] = useState<ProjectsMap>(PROJECTS_DATA);
  const [loading, setLoading] = useState<boolean>(isFirebaseConfigured);

  useEffect(() => {
    if (!db) {
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
        if (snap.exists()) {
          setContent(snap.data() as SiteContent);
        }
        contentLoaded = true;
        maybeStopLoading();
      },
      () => {
        contentLoaded = true;
        maybeStopLoading();
      }
    );

    const unsubProjects = onSnapshot(
      collection(db, 'projects'),
      (snap) => {
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
    <SiteDataContext.Provider value={{ content, projects, loading, isLive: isFirebaseConfigured }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}

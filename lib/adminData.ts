import { collection, doc, getDocs, setDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DEFAULT_CONTENT } from '@/data/content';
import { PROJECTS_DATA } from '@/data/projects';
import type { ProjectData } from '@/data/projects';
import type { SiteContent } from '@/types/content';

function requireDb() {
  if (!db) {
    throw new Error('Firebase belum dikonfigurasi. Lengkapi env NEXT_PUBLIC_FIREBASE_* lalu deploy ulang.');
  }
  return db;
}

/** Simpan seluruh objek konten situs (overwrite penuh dokumen content/main). */
export async function saveSiteContent(content: SiteContent) {
  const database = requireDb();
  await setDoc(doc(database, 'content', 'main'), content);
}

/** Simpan/perbarui satu proyek. Dipakai untuk tambah baru maupun edit. */
export async function saveProject(project: ProjectData) {
  const database = requireDb();
  await setDoc(doc(database, 'projects', project.id), project);
}

/** Hapus satu proyek dari Firestore. */
export async function deleteProject(id: string) {
  const database = requireDb();
  await deleteDoc(doc(database, 'projects', id));
}

/**
 * Tulis data bawaan (data/content.ts & data/projects.ts) ke Firestore.
 * Dipakai sekali di awal setup, atau kalau admin ingin "reset ke default".
 */
export async function seedFirestoreWithDefaults() {
  const database = requireDb();
  const batch = writeBatch(database);

  batch.set(doc(database, 'content', 'main'), DEFAULT_CONTENT as SiteContent);
  Object.values(PROJECTS_DATA).forEach((project) => {
    batch.set(doc(database, 'projects', project.id), project);
  });

  await batch.commit();
}

/** Cek apakah koleksi projects & dokumen content sudah pernah di-seed. */
export async function checkFirestoreHasData(): Promise<boolean> {
  const database = requireDb();
  const snap = await getDocs(collection(database, 'projects'));
  return !snap.empty;
}

import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, writeBatch, type WriteBatch } from 'firebase/firestore';
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
  const existingProjects = await getDocs(collection(database, 'projects'));
  const defaultProjectIds = new Set(Object.keys(PROJECTS_DATA));
  let batch = writeBatch(database);
  let writeCount = 0;

  async function addWrite(write: (currentBatch: WriteBatch) => void) {
    write(batch);
    writeCount += 1;
    if (writeCount === 500) {
      await batch.commit();
      batch = writeBatch(database);
      writeCount = 0;
    }
  }

  for (const project of existingProjects.docs) {
    if (!defaultProjectIds.has(project.id)) {
      await addWrite((currentBatch) => currentBatch.delete(project.ref));
    }
  }

  for (const project of Object.values(PROJECTS_DATA)) {
    await addWrite((currentBatch) => currentBatch.set(doc(database, 'projects', project.id), project));
  }

  await addWrite((currentBatch) => currentBatch.set(doc(database, 'content', 'main'), DEFAULT_CONTENT as SiteContent));
  if (writeCount > 0) await batch.commit();

  await batch.commit();
}

/** Cek apakah koleksi projects & dokumen content sudah pernah di-seed. */
export async function checkFirestoreHasData(): Promise<boolean> {
  const database = requireDb();
  const [projects, content] = await Promise.all([
    getDocs(collection(database, 'projects')),
    getDoc(doc(database, 'content', 'main')),
  ]);
  return !projects.empty || content.exists();
}

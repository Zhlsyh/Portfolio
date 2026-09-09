import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth, isFirebaseConfigured } from '@/lib/firebase';

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!auth) {
      setChecking(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
    return () => unsub();
  }, []);

  async function login(email: string, password: string) {
    if (!auth) {
      throw new Error('Firebase belum dikonfigurasi.');
    }
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    if (!auth) return;
    await signOut(auth);
  }

  return { user, checking, login, logout, isFirebaseConfigured };
}

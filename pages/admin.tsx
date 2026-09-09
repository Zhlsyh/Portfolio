import Head from 'next/head';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import LoginForm from '@/components/admin/LoginForm';
import AdminShell from '@/components/admin/AdminShell';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';

export default function AdminPage() {
  const { user, checking, login, logout, isFirebaseConfigured } = useAdminAuth();

  return (
    <>
      <Head>
        <title>Admin — Zulhelmi Syahtiar</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <GrainOverlay />
      <CustomCursor />

      {!isFirebaseConfigured ? (
        <div className="min-h-screen flex items-center justify-center px-6 text-center" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <div className="max-w-md">
            <span className="material-symbols-outlined text-4xl text-accent mb-3 block">local_fire_department</span>
            <h1 className="font-display font-extrabold text-xl mb-2">Firebase Belum Dikonfigurasi</h1>
            <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
              Lengkapi environment variable <code>NEXT_PUBLIC_FIREBASE_*</code> di file <code>.env.local</code>, lalu build ulang
              & deploy. Lihat <code>ADMIN_SETUP.md</code> untuk panduan lengkap.
            </p>
          </div>
        </div>
      ) : checking ? (
        <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)', color: 'var(--text-faint)' }}>
          <p className="text-sm">Memeriksa sesi...</p>
        </div>
      ) : !user ? (
        <LoginForm onLogin={login} />
      ) : (
        <AdminShell onLogout={logout} userEmail={user.email} />
      )}
    </>
  );
}

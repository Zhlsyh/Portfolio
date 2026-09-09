# Panduan Setup Admin Dashboard (Firebase CMS)

Portofolio ini punya dashboard admin di `/admin` yang memakai **Firebase** (Firestore +
Authentication) sebagai backend. Begitu setup selesai, kamu bisa mengubah semua konten
(bio, pengalaman, skill, proyek, sertifikasi, kontak) langsung dari browser — perubahan
**langsung tampil ke semua pengunjung** tanpa perlu build/deploy ulang.

Kalau env Firebase belum diisi, situs tetap jalan normal (pakai data bawaan di kode), dan
halaman `/admin` akan menampilkan pesan "Firebase Belum Dikonfigurasi".

---

## 1. Buat Project Firebase

1. Buka [console.firebase.google.com](https://console.firebase.google.com), klik **Add project**.
2. Ikuti wizard-nya (nama bebas, Google Analytics boleh dimatikan — tidak dibutuhkan).

## 2. Aktifkan Firestore Database

1. Di sidebar, buka **Build > Firestore Database** -> **Create database**.
2. Pilih **Start in production mode** (kita akan pasang rules sendiri di bawah).
3. Pilih lokasi server (misal `asia-southeast2` / Jakarta biar cepat).

## 3. Aktifkan Authentication

1. Di sidebar, buka **Build > Authentication** -> **Get started**.
2. Di tab **Sign-in method**, aktifkan provider **Email/Password**.
3. Di tab **Users**, klik **Add user** -> isi email & password kamu sendiri.
   Ini akan jadi akun login admin. **Cukup satu akun** — dashboard ini didesain untuk
   single-admin (kamu sendiri), bukan multi-user.

## 4. Pasang Firestore Security Rules

Di **Firestore Database > Rules**, ganti isinya dengan:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Siapa saja boleh baca (supaya situs publik bisa menampilkan konten)
    // Hanya admin yang login (akun yang kamu buat di langkah 3) yang boleh menulis.
    match /content/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /projects/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Klik **Publish**.

## 5. Ambil Config & Isi Environment Variable

1. Di **Project Settings** (ikon gerigi di sidebar) > tab **General**, scroll ke
   **Your apps** -> klik ikon **Web** (`</>`) untuk mendaftarkan web app baru (nama bebas).
2. Firebase akan menampilkan objek `firebaseConfig` — salin nilai-nilainya.
3. Copy `.env.local.example` jadi `.env.local`, lalu isi:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx
```

> Nilai-nilai ini **aman** ditaruh di frontend (bukan rahasia) — keamanan sebenarnya
> dijaga oleh Firestore Security Rules di langkah 4, bukan dengan menyembunyikan config ini.

## 6. Build & Deploy

```
npm install
npm run build
```

Upload folder `out/` ke hosting kamu seperti biasa (Vercel, Netlify, GitHub Pages, dst).
Pastikan environment variable di atas juga diisi di dashboard hosting-mu (kalau build
dilakukan di server hosting, bukan cuma lokal).

## 7. Seed Data Awal

1. Buka `https://domainmu.com/admin`, login pakai akun yang dibuat di langkah 3.
2. Masuk ke tab **Seed / Reset**.
3. Klik **Seed Data Awal** — ini menyalin semua data yang sudah ada di kode (bio,
   pengalaman, skill, proyek, dst) ke Firestore, sekali saja.

Setelah ini, situs publik otomatis membaca dari Firestore. Setiap kali kamu edit &
simpan lewat `/admin`, perubahan langsung tampil ke semua pengunjung.

---

## Cara Pakai Sehari-hari

- Buka `/admin`, login.
- Pilih tab section yang mau diubah (Hero, Pengalaman, Proyek, dll).
- Edit, klik **Simpan Perubahan**.
- Selesai — tidak perlu sentuh kode atau redeploy lagi untuk update konten teks/data.

**Kapan kamu masih perlu redeploy (edit kode)?**
Hanya kalau mau mengubah *layout/desain* halaman (bukan isi kontennya), menambah
section baru, atau mengubah logika situs. Untuk update konten sehari-hari (nambah
proyek, ubah bio, update skill, dll), semuanya lewat `/admin`.

## Reset ke Data Default

Kalau suatu saat data di Firestore berantakan atau ingin kembali ke kondisi awal, buka
`/admin` -> tab **Seed / Reset** -> **Reset ke Data Default**. Ini akan **menimpa** semua
data di Firestore dengan data bawaan yang ada di kode (`data/content.ts` &
`data/projects.ts`).

## Troubleshooting

- **"Firebase Belum Dikonfigurasi"** di `/admin` -> env `NEXT_PUBLIC_FIREBASE_*` belum
  diisi lengkap, atau belum ter-build ulang setelah diisi.
- **Login gagal "Email atau password salah"** -> pastikan akun sudah dibuat di
  Firebase Console > Authentication > Users (langkah 3), bukan asal ketik email.
- **Perubahan di admin tidak muncul di situs publik** -> cek koneksi internet, cek
  Firestore Rules sudah ter-publish (langkah 4), dan cek console browser (F12) untuk
  pesan error permission-denied.

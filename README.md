# Zulhelmi Syahtiar

Portfolio personal untuk pengalaman di elektronika industri, proyek IoT dan sistem kontrol, serta karya fotografi dan desain.

## Stack

- Next.js 15 dengan Pages Router dan React 19
- TypeScript
- Tailwind CSS 4 dan CSS variables
- Motion untuk transisi dan animasi
- Firebase Authentication dan Firestore untuk CMS
- Web3Forms untuk form kontak

## Fitur

- Bagian pengalaman, proyek, kapabilitas, sertifikasi, dan kontak
- Detail proyek dengan galeri gambar
- Tema gelap dan terang
- Form kontak dengan validasi dan status pengiriman
- Halaman `/admin` untuk mengelola konten setelah Firebase dikonfigurasi

## Struktur Proyek

```text
Portfolio-main/
├── lib/
│   ├── adminData.ts
│   └── firebase.ts
├── components/
│   ├── admin/
│   └── sections/
├── pages/
│   ├── _app.tsx
│   ├── admin.tsx
│   └── index.tsx
├── data/
├── context/
├── public/
│   ├── photos/
│   ├── logos/
│   └── CV_Zulhelmi_Syahtiar_*.pdf
├── styles/
│   └── globals.css
└── package.json
```

## Menjalankan Secara Lokal

### 1. Clone Repository & Install Dependensi
```bash
git clone https://github.com/Zhlsyh/Portfolio.git
cd Portfolio
npm install
```

### 2. Konfigurasi Environment Variable (Form Kontak Web3Forms)
Buat file `.env.local` di root direktori:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```
*(Dapatkan Access Key gratis di [Web3Forms](https://web3forms.com) dengan memasukkan email Anda).*

### 3. Jalankan Server Dev
```bash
npm run dev
```
Buka browser dan akses **`http://localhost:3000`**.

### 4. Build untuk Production
```bash
npm run build
npm run start
```

---

Setup Firebase untuk CMS dijelaskan di [ADMIN_SETUP.md](ADMIN_SETUP.md).
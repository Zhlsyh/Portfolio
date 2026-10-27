# Portofolio Zulhelmi Syahtiar: Diorama Studio

Next.js (Pages Router) + Tailwind v4 + React Three Fiber. Satu diorama 3D, kamera berpindah antar pojok saat scroll.

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # hasil statis di folder out/ (siap Vercel / Firebase Hosting)
```

## Fitur tambahan (v2)
- Mode siang/malam: tombol matahari/bulan di kanan atas, pilihan tersimpan, default mengikuti sistem. Malam: bulan, bintang, bintang jatuh, lampu hangat di tiap pojok. Siang: matahari dan awan.
- Panel konten berbahan kaca buram (`.glass` di `styles/globals.css`).
- Section Perjalanan (pendidikan + organisasi) dan Bonus (hobi + Spotify). Datanya di `data/journey.ts`.
- Pemutar piringan hitam di tengah diorama. Untuk menampilkan pemutar Spotify, isi `SPOTIFY.embedPath` di `data/journey.ts` (contoh `playlist/ID_PLAYLIST`).

## Fitur tambahan (v3)
- Maskot Helmi low-poly (`components/scene/Mascot.tsx`): hoodie biru di Home dan outfit + properti berganti tiap section, kedip, kepala ikut kursor, tidur saat malam, sapaan lewat balon ucapan.
- Logo dan favicon memakai avatar piksel (siang bangun, malam tidur). Ikon ada di `public/icons/`, pratinjau tautan di `public/og.png`.
- Toggle ID/EN (kamus di `data/i18n.ts`) dan pilihan jalur di hero yang mengganti CV (Teknik/Kreatif/Umum).
- Isi `NEXT_PUBLIC_SITE_URL` saat build agar `og:image` absolut, contoh: `NEXT_PUBLIC_SITE_URL=https://namadomain.com npm run build`.

## Struktur
- `data/content.ts`, `data/projects.ts`: konten (dari web lama, belum diubah). Edit di sini untuk mengganti teks/proyek.
- `components/Sections.tsx`: panel konten tiap section (Home, Workbench, Photo Corner, Design Desk, Keahlian, Kontak).
- `components/scene/`: scene 3D. `Workbench`, `PhotoCorner`, `DesignDesk`, `ContactCorner`, `Center` = tiap pojok; `CameraRig.tsx` = posisi kamera per section (`KEYS`).
- `hooks/useSectionProgress.ts`: mengubah posisi scroll menjadi indeks kamera.
- `components/StaticDiorama.tsx`: ilustrasi cadangan (tanpa WebGL / mode ringan / reduced motion).
- `public/cv/CV_Zulhelmi_Syahtiar_Umum.pdf`: CV Umum (ID) terbaru. Enam CV lain ada di `public/`; pemetaannya di `CV_FILES` (`data/i18n.ts`).

## Perilaku responsif
- Desktop: kanvas penuh di belakang, panel konten bergantian kiri/kanan, kamera digeser agar objek tidak tertutup panel.
- Mobile: kanvas menempel di atas (42% tinggi layar), konten mengalir di bawahnya, navigasi di bilah bawah.
- Otomatis memakai ilustrasi statis bila WebGL tidak ada, prefers-reduced-motion aktif, RAM/CPU rendah, atau Data Saver menyala. Pengunjung bisa menukar lewat tombol di kanan atas.

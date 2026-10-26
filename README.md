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

## Struktur
- `data/content.ts`, `data/projects.ts`: konten (dari web lama, belum diubah). Edit di sini untuk mengganti teks/proyek.
- `components/Sections.tsx`: panel konten tiap section (Home, Workbench, Photo Corner, Design Desk, Keahlian, Kontak).
- `components/scene/`: scene 3D. `Workbench`, `PhotoCorner`, `DesignDesk`, `ContactCorner`, `Center` = tiap pojok; `CameraRig.tsx` = posisi kamera per section (`KEYS`).
- `hooks/useSectionProgress.ts`: mengubah posisi scroll menjadi indeks kamera.
- `components/StaticDiorama.tsx`: ilustrasi cadangan (tanpa WebGL / mode ringan / reduced motion).
- `public/cv/CV_Zulhelmi_Syahtiar_Umum.pdf`: CV terbaru yang ditautkan tombol "Unduh CV".

## Perilaku responsif
- Desktop: kanvas penuh di belakang, panel konten bergantian kiri/kanan, kamera digeser agar objek tidak tertutup panel.
- Mobile: kanvas menempel di atas (42% tinggi layar), konten mengalir di bawahnya, navigasi di bilah bawah.
- Otomatis memakai ilustrasi statis bila WebGL tidak ada, prefers-reduced-motion aktif, RAM/CPU rendah, atau Data Saver menyala. Pengunjung bisa menukar lewat tombol di kanan atas.

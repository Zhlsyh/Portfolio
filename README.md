# Zulhelmi Syahtiar — Portfolio (Next.js)

Hasil migrasi dari project Vite + vanilla TypeScript ke **Next.js 15 (Pages Router)**.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Struktur project

```
pages/
  _app.tsx          -> wrapper global, import CSS
  _document.tsx      -> <html>, <body>, font Google (setara <head> di index.html lama)
  index.tsx           -> halaman utama, render markup + jalankan initPortfolio()
lib/
  initPortfolio.ts    -> hasil adaptasi src/main.ts (logic navigasi, filter, modal, dst)
  enhancements.ts      -> lapisan animasi & interaktivitas tambahan (lihat di bawah)
  portfolioBodyHtml.ts -> markup <body> asli disimpan sebagai string
styles/
  globals.css          -> hasil copy src/index.css (Tailwind v4 + custom classes)
public/                -> semua asset gambar (sama seperti sebelumnya)
```

## Fitur animasi & interaktivitas tambahan (`lib/enhancements.ts`)

Dipisah dari `initPortfolio.ts` supaya logic hasil migrasi tetap 1:1 dan tidak
diobok-obok. Semua ini murni menambah lapisan visual di atas markup & logic
yang sudah ada:

| Fitur | Lokasi |
|---|---|
| Scroll progress bar tipis di top viewport | `setupScrollProgressBar()` |
| Reveal per-karakter nama di hero saat load | `setupHeroCharReveal()` |
| Badge "memory" di hero-frame: float halus (ganti `animate-pulse`) | `setupHeroBadgeFloat()` |
| Tag teknologi di kartu proyek/galeri: stagger fade-in saat scroll | `setupTagStaggerReveal()` |
| Modal: scale + fade in setiap dibuka | CSS murni, `globals.css` bagian 5 |
| Nav item: garis bawah tumbuh saat hover | CSS murni, `globals.css` bagian 6 |
| Theme toggle: putaran singkat saat diklik | `setupThemeToggleSpin()` |
| Tombol "Unduh CV": spinner singkat sebelum window print terbuka | `setupCvDownloadFeedback()` |
| Toast: easing lebih "spring"/memantul | CSS murni, `globals.css` bagian 9 |
| Ripple effect di semua tombol `.btn-press` | `setupRippleEffect()` |
| Skeleton shimmer untuk gambar (termasuk galeri modal yang dirender belakangan) | `setupImageSkeletonLoading()` |
| Underline "menggambar" di bawah judul tiap section saat scroll | `setupSectionHeadingUnderline()` |
| Easter egg: Konami Code -> confetti pixel jatuh + toast | `setupKonamiEasterEgg()` |

Catatan: efek hover tilt 3D di hero-frame, spotlight cursor mengikuti mouse,
dan glow radial saat hover kartu (`.project-card`, `.gallery-card`) **sudah
ada sebelumnya** di `initPortfolio.ts` / `globals.css` (fungsi
`setupInteractiveEffects()`), jadi tidak diduplikasi di `enhancements.ts`.

Semua animasi menghormati `prefers-reduced-motion` untuk beberapa efek utama
(hero reveal, badge float, aurora, confetti) — dinonaktifkan otomatis kalau
pengguna mengaktifkan pengaturan "reduce motion" di OS/browser mereka.

## Light mode: palet baru (gradient hijau-biru lembut)

Sebelumnya light mode di project ini sebenarnya bukan "light theme" — dari
1780 baris markup asli, cuma 9 elemen yang punya override `dark:` khusus.
Semua teks (`text-white`) dan card (`bg-slate-900`, `glass-card`) tetap sama
persis di kedua mode; yang berubah cuma background body dari navy gelap
jadi biru solid pekat (`#256CFF`).

Sekarang light mode punya sistem warnanya sendiri, ditulis sebagai lapisan
override terpusat di `styles/globals.css` (bagian **LIGHT MODE COLOR
SYSTEM**), bukan dengan mengedit ratusan class satu per satu di markup:

- **Background body**: gradient lembut `#EAF8DC -> #DFF1E8 -> #DCEBFB`
  (hijau pastel ke biru pastel), ganti dari biru solid `#256CFF`.
- **Teks**: semua varian `text-white` / `text-white/NN` di-override jadi
  tinta gelap `#0f172a` dengan opacity yang sama, supaya tetap terbaca di
  atas background terang.
- **Card & panel** (`bg-white/5`, `/10`, `/15`, `.glass-card`,
  `.glass-panel`): opacity putihnya dinaikkan supaya kartu tetap terlihat
  sebagai "frosted glass" melayang di atas gradient, bukan menghilang.
- **Border**: varian `border-white/NN` diganti jadi border gelap tipis
  (`rgba(15,23,42,...)`) supaya tetap kelihatan di background terang.
- **Aurora blob**: opacity di light mode diturunkan dari 85-90% ke 20-25%
  (empat elemen di `lib/portfolioBodyHtml.ts`) supaya tidak terlalu ramai/
  clash dengan background gradient yang sekarang lebih lembut. Warna &
  opacity dark mode-nya tidak disentuh sama sekali.
- **Modal, toast, badge foto** (`bg-slate-900`, `bg-black/NN`) sengaja
  **tidak diubah** — elemen-elemen ini selalu tampil sebagai overlay gelap
  di kedua mode (pola UI yang umum & tetap enak dilihat), jadi risikonya
  rendah untuk dibiarkan.

Semua perubahan discope di bawah selector `html:not(.dark)`, jadi dark mode
sama sekali tidak tersentuh/berubah.

## Form Kontak: sekarang benar-benar mengirim pesan

**Sebelumnya form kontak di section "Hubungi Saya" itu palsu** — klik
"Kirim Pesan" cuma menjalankan `preventDefault()` + menampilkan toast sukses,
tapi datanya tidak pernah benar-benar terkirim ke mana pun. Kalau ada
recruiter mengisi form itu, pesannya hilang begitu saja tanpa kamu tahu.

Sekarang form terhubung ke **[Web3Forms](https://web3forms.com)** — layanan
gratis (250 submit/bulan) yang meneruskan isi form langsung ke email kamu,
tanpa perlu bikin backend/server sendiri.

### Cara mengaktifkan (wajib dilakukan, ±2 menit, gratis, tanpa akun)

1. Buka https://web3forms.com
2. Masukkan email kamu (`helmi2591@gmail.com`), klik **"Create Access Key"**
3. Access key akan langsung dikirim ke email tersebut
4. Copy `.env.example` jadi `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
5. Buka `.env.local`, isi:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=isi-access-key-di-sini
   ```
6. Restart `npm run dev` (atau redeploy kalau sudah production)

Kalau env var ini belum diisi, form akan otomatis menampilkan pesan jujur
("Form belum aktif saat ini...") alih-alih pura-pura berhasil seperti
sebelumnya — jadi tidak akan ada lagi pesan yang hilang diam-diam.

### Yang juga ditambahkan di form ini

- **Validasi**: nama minimal 2 karakter, format email dicek, pesan minimal
  10 karakter — muncul di kotak feedback bawah form kalau tidak valid.
- **Loading state**: tombol "Kirim Pesan" berubah jadi spinner + "Mengirim..."
  selagi request berjalan, supaya jelas prosesnya belum selesai.
- **Feedback sukses vs gagal**: kotak `#contact-toast` di bawah form
  sekarang punya 2 gaya — hijau untuk sukses, merah untuk gagal (misal
  koneksi terputus atau server Web3Forms bermasalah) — bukan cuma satu
  gaya sukses yang selalu tampil seperti sebelumnya.
- Logic ada di `setupContactForm()` dalam `lib/initPortfolio.ts`.

**Penting saat deploy ke Vercel/hosting lain**: jangan lupa tambahkan
environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` di dashboard hosting-nya
juga (env var di `.env.local` cuma untuk lokal, tidak ikut ter-deploy).

## Round 2: perbaikan ikutan, identitas visual, layout & tipografi

### Perbaikan ikutan dari light mode
- **Scrollbar** track sebelumnya hardcoded gelap (`#11131b`), sekarang punya
  varian terang di light mode (`scrollbar-color` + `::-webkit-scrollbar-track`).
- **Cursor spotlight** (glow yang mengikuti mouse) opacity-nya dinaikkan
  khusus di light mode supaya tetap terasa, tidak "tenggelam" di background
  terang.

### Identitas visual bertema Elektronika Industri
- **Pola sirkuit PCB** (garis + titik solder, opacity sangat tipis ~5-6%)
  dipasang sebagai layer dekoratif di section Pengalaman, Keahlian, dan
  Sertifikasi — di-inject via JS (`setupPcbPatternLayers()`), bukan gambar,
  jadi ringan.
- **Nomor urut section** ("01 — Pengalaman", "02 — Proyek", dst) muncul di
  atas tiap judul section (`setupSectionIndexBadges()`).
- **Garis timeline pengalaman kerja** diubah jadi putus-putus (dashed),
  memberi kesan jalur PCB, murni lewat CSS tanpa ubah markup.

### Layout & hierarki visual
- **Kartu proyek Tugas Akhir** (Trainer Motor DC) otomatis dibuat lebih
  lebar (`md:col-span-2`) dibanding kartu proyek lain di grid yang sama,
  supaya lebih menonjol sebagai proyek unggulan (`setupFeaturedProjectCard()`).
- **Floating quick-contact bubble** di pojok kanan bawah — klik untuk
  expand pilihan Email/LinkedIn/GitHub, supaya recruiter bisa menghubungi
  tanpa perlu scroll ke section Kontak (`setupQuickContactFab()`).
- Tombol "Unduh CV" dapat aksen dekoratif kecil ala sudut kertas terlipat.
- **Tidak dikerjakan**: bento/masonry grid untuk galeri foto sengaja
  dilewati — struktur galeri saat ini pakai crop seragam (`h-64
  object-cover`) yang terhubung ke logic filter & lightbox JS; mengubahnya
  jadi masonry perlu restrukturisasi cukup besar dengan risiko mematahkan
  fitur filter/lightbox. Kalau tetap mau, sebaiknya dikerjakan terpisah
  dengan pengujian lebih menyeluruh. CV thumbnail asli (gambar preview
  halaman 1) juga dilewati karena butuh proses render dokumen yang di luar
  kemampuan sandbox ini — sebagai gantinya cuma ditambah aksen dekoratif.

### Tipografi & skala visual
- Font kedua **Space Grotesk** dipasang khusus untuk semua heading `h1`
  (body text tetap Plus Jakarta Sans), memberi kontras hierarki yang lebih
  jelas antara judul besar dan teks biasa.
- `line-height` paragraf dilonggarkan (1.7) supaya teks panjang (deskripsi
  proyek) lebih nyaman dibaca.
- Angka IPK (3.55/4.00) ditonjolkan otomatis dengan gaya angka besar+warna
  aksen, dicari & dibungkus lewat teks berjalan (`setupStatHighlight()`),
  bukan dengan mengedit HTML manual di 2 tempat berbeda.

## Catatan penting soal pendekatan migrasi

Project asli ini **bukan React** walau dependency React tercantum di `package.json` —
isinya HTML statis (`index.html`) + manipulasi DOM manual (`src/main.ts`, pakai
`document.getElementById`, `querySelectorAll`, dst).

Sesuai keputusan migrasi, logic-nya **tetap vanilla DOM manipulation**, tidak
ditulis ulang jadi komponen React dengan `useState`/props. Yang berubah hanya
"pembungkusnya":

1. Markup `<body>...</body>` dari `index.html` disimpan apa adanya sebagai string di
   `lib/portfolioBodyHtml.ts`, lalu di-render lewat `dangerouslySetInnerHTML` di
   `pages/index.tsx`. Ini disengaja supaya seluruh `id`/`class` yang dipakai ratusan
   kali di logic JS tetap sama persis — sudah diverifikasi 1:1 (109 id asli, tidak
   ada yang hilang/berubah).
2. `src/main.ts` dipindah ke `lib/initPortfolio.ts`. Perubahan utama:
   - Listener `document.addEventListener('DOMContentLoaded', ...)` diubah jadi
     fungsi `export function initPortfolio()`, dipanggil dari `useEffect` di
     `pages/index.tsx` (client-side only, setelah komponen ter-mount).
   - Dua `document.addEventListener('click', ...)` yang sebelumnya ada di
     top-level module (jalan otomatis saat file di-import) dibungkus jadi fungsi
     (`setupDeleteFolderListener`, `setupDeleteAlbumPhotoListener`) supaya tidak
     error saat Next.js mencoba server-side render modul ini.
   - Ditambahkan guard `isPortfolioInitialized` supaya listener tidak
     terdaftar dobel (React Strict Mode di development memanggil `useEffect`
     dua kali).
3. `GEMINI_API_KEY` / Express server di project asli adalah sisa boilerplate
   template AI Studio yang tidak pernah benar-benar dipakai di kode — sudah
   dihapus dari `package.json`.

## Sudah divalidasi

- `npm run build` sukses tanpa error TypeScript.
- Server production (`npm run start`) diuji: halaman utama (200), semua asset
  gambar publik (profile.jpeg, foto proyek, logo software) (200), CSS
  ter-generate dan berisi class custom (`.bg-primary`, dst) dengan benar.
- Seluruh `id` di markup HTML asli cocok 100% dengan hasil render Next.js.

## Yang perlu dites manual oleh kamu

Karena sandbox ini tidak punya akses browser (Playwright gagal install karena
jaringan terbatas), tolong cek manual setelah `npm run dev`:
- Navigasi tab (Beranda/Proyek/dst) & scroll spy
- Filter proyek & filter foto
- Modal (buka galeri, lightbox gambar, buat folder custom, upload foto via
  Google Drive link)
- Toggle dark/light theme
- Tombol download CV (PDF)
- Form kontak
- Animasi scroll (pakai library `motion`)

Kalau ada bagian yang berperilaku beda dari versi Vite, kasih tahu saya —
biasanya itu soal timing (misal script pihak ketiga yang butuh delay ekstra
di Next.js) dan biasanya cepat diperbaiki.
#   P o r t f o l i o  
 
# ⚡ Zulhelmi Syahtiar — Personal Portfolio (Next.js 15 + Framer Motion)

Portofolio web modern, responsif, dan interaktif milik **Zulhelmi Syahtiar** — *Fresh Graduate D3 Elektronika Industri Politeknik Negeri Jakarta (PNJ)* dengan IPK **3.55 / 4.00**. 

Website ini dirancang khusus untuk menampilkan keahlian di bidang **Sistem Kontrol (PID & Fuzzy Logic), IoT & Mikrokontroler (ESP32), Otomasi Industri (PLC), Visualisasi 3D Digital Twin (Three.js)**, serta karya di bidang **Fotografi dan Desain Grafis**.

---

## 🛠️ Teknologi & Stack yang Digunakan

* **Framework Utama:** [Next.js 15](https://nextjs.org/) (Pages Router) & [React 19](https://react.dev/)
* **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)
* **Engine Animasi:** [Framer Motion / Motion](https://motion.dev/) (Spring physics, scroll animations, stagger reveals, modal transitions)
* **Styling & Desain:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens (Aurora Gradients, Glassmorphism, Dual Theme System)
* **Tipografi & Ikon:** Google Fonts (*Plus Jakarta Sans* & *Space Grotesk*) & *Google Material Symbols Outlined*
* **Form Integrasi:** [Web3Forms API](https://web3forms.com/) (Direct contact submission to email without custom backend)
* **SEO & Social Sharing:** OpenGraph (LinkedIn/FB), Twitter Cards, Canonical Tags, dan Schema.org JSON-LD Structured Data

---

## 🌟 Fitur Utama & Interaktivitas

### 1. 🎬 Animasi Halus & High-Performance (Framer Motion)
* **Hero Character Reveal:** Nama *"Zulhelmi Syahtiar."* beranimasi per-karakter dengan *stagger* dan rotasi halus.
* **Industrial Badge Float:** Aksen badge *memory chip* beranimasi melayang secara kontinu menggunakan *spring physics*.
* **Staggered In-View Reveal:** Kartu pengalaman, proyek, galeri foto, keahlian, dan sertifikasi muncul bertahap saat di-scroll.
* **Framer Motion Modals:** Pengalaman membuka modal (*Detail Proyek, Unduh Resume, Lightbox Gambar, Buat Folder, & Upload Foto*) dilengkapi efek *scale-up (0.88 ➔ 1.0)*, *y-translate*, dan *fade* yang halus.
* **Progress Bar Keahlian & Underline Section:** Meter keahlian dan garis bawah judul section digambar secara dinamis saat masuk viewport.
* **Floating Quick Contact FAB:** Bubble kontak cepat di pojok layar dengan animasi ekspansi item & rotasi ikon.

### 2. 🎛️ Identitas Visual Elektronika Industri
* **Pola Sirkuit PCB:** Layer dekoratif pola sirkuit PCB tipis di background section *Experience*, *Skills*, dan *Certifications*.
* **Bintang Proyek (Featured Card):** Kartu Tugas Akhir (*Trainer Motor DC*) otomatis dibuat lebih menonjol di grid proyek.
* **Section Index Badges:** Penomoran industri (`01 — Pengalaman`, `02 — Proyek`, dst.) di atas setiap judul section.

### 3. 📄 Resume CV Downloader Grid
* Modal resume menyediakan 3 pilihan berkas CV profesional yang siap diunduh (*Versi Bahasa Indonesia, Bahasa Inggris, dan Versi Kreatif*) lengkap dengan fitur cetak PDF langsung.

### 4. 🌗 Sistem Tema Gelap & Terang (Dual Mode)
* **Mode Gelap (Default):** Mengusung estetika *cyberpunk/industrial* dengan background aurora navy pekat dan aksen hijau-biru elektrik.
* **Mode Terang:** Latar belakang aurora gradient pastel lembut (`#EAF8DC ➔ #DFF1E8 ➔ #DCEBFB`) dengan teks tinta gelap beraksesibilitas tinggi.

### 5. 📬 Form Kontak Terhubung (Web3Forms API)
* Mengirimkan pesan pengirim langsung ke email pribadi `helmi2591@gmail.com` secara real-time tanpa reload halaman, dilengkapi validasi input dan *loading spinner state*.

---

## 📁 Struktur Direktori Proyek

```text
zulhelmi-portfolio-nextjs/
├── lib/
│   ├── initPortfolio.ts       # Logika DOM utama, event handling modal, filter, & animasi Framer Motion
│   ├── enhancements.ts        # Layer animasi tambahan (PCB pattern, FAB, hero reveal, scroll bar)
│   └── portfolioBodyHtml.ts   # Markup HTML struktur portofolio
├── pages/
│   ├── _app.tsx               # Wrapper global Next.js & import CSS
│   ├── _document.tsx          # Konfigurasi HTML, font Google, & Material Symbols
│   └── index.tsx              # Halaman utama (Render HTML + OpenGraph SEO & JSON-LD)
├── public/
│   ├── photos/                # Dokumentasi proyek (Trainer Motor DC, Robot IoT, Dashboard)
│   ├── Photo and design project/ # Galeri foto & karya visual
│   ├── logos/                 # Logo software & keahlian (AutoCAD, Proteus, Multisim, dll)
│   ├── CV_Zulhelmi_Syahtiar_*.pdf # Berkas PDF Resume CV (ID, EN, Creative)
│   └── profile.jpeg           # Foto profil utama
├── styles/
│   └── globals.css            # Custom CSS token, glassmorphism, & Light Mode system
├── package.json               # Dependensi proyek (motion, next, react, tailwindcss)
├── tsconfig.json              # Konfigurasi TypeScript
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Secara Lokal

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

## 📝 Lisensi & Hak Cipta
Dikembangkan oleh **Zulhelmi Syahtiar** © 2026. Hak cipta dilindungi undang-undang.
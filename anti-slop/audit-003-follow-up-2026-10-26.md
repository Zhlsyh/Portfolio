# Anti-Slop Audit 003 Follow-Up

Tanggal: 2026-10-26
Mode: AFTER (Perbaikan Seluruh Temuan yang Disetujui Pengguna)

Pengguna menyetujui seluruh temuan (Poin 1 s/d 12) dari [Audit 003](audit-003-2026-10-26.md), ditambah dua permintaan khusus:
1. Menghilangkan seluruh kemiringan visual (teks stiker/eyebrow dan kartu hover diluruskan, tidak miring).
2. Menghapus dekorasi garis bawah (*underline* SVG) pada nama "Syahtiar".

---

## Ringkasan Perbaikan yang Diterapkan

### 1. Indikator Fokus Keyboard & Kontras Mode Siang (Poin 1 — R-25, R-32)
- **File:** `styles/globals.css`
- **Tindakan:** Mengganti warna `:focus-visible` dari hardcoded kuning `#ffd24a` menjadi variabel `--focus-ring`. Di mode siang, cincin fokus menggunakan warna kontras tinggi `#ff7a45` (kontras rasio >4.5:1), dan di mode malam tetap menggunakan `#ffd24a` (kontras rasio 10:1).

### 2. Focus Trap pada Modal Proyek (Poin 2 — R-32)
- **File:** `components/ProjectModal.tsx`
- **Tindakan:** Menambahkan `dialogRef` dan *keyboard focus containment loop*. Ketika pengguna menekan `Tab` pada elemen fokus terakhir di modal, fokus kembali melingkar ke tombol tutup (×), dan ketika menekan `Shift+Tab` pada tombol tutup, fokus beralih ke elemen fokus terbawah. Fokus keyboard tidak lagi bocor ke halaman belakang.

### 3. Pembersihan URL Placeholder Dummy Google Drive (Poin 3 — R-24, R-26, R-38)
- **File:** `data/projects.ts` & `components/ProjectModal.tsx`
- **Tindakan:** Menghapus entri dummy `docLink: 'https://drive.google.com/'` pada proyek `eng-2`, `eng-4`, `eng-5`, `eng-6`, `eng-7`, dan `des-1`. Di `ProjectModal.tsx`, logika pembanding string statis `&& project.docLink !== 'https://drive.google.com/'` dibersihkan menjadi evaluasi langsung `{project.docLink && (...)`.

### 4. Perbaikan Pembersih Tautan Deskripsi Proyek (Poin 4 — R-38, R-16)
- **File:** `components/ProjectModal.tsx` & `data/projects.ts`
- **Tindakan:** Memperbaiki regex di `ProjectModal.tsx` menjadi `replace(/\s*Link\s+(Google\s+)?Drive[^:]*:\s*https?:\/\/\S+/gi, '')` serta membersihkan teks tautan mentah langsung dari sumber data `des-4` dan `des-fraction` di `data/projects.ts`. URL panjang Google Drive tidak lagi bocor ke paragraf deskripsi.

### 5. Penataan Hierarki Permukaan & Reduksi Glassmorphism (Poin 5 — R-10)
- **File:** `styles/globals.css`
- **Tindakan:** Mengubah latar belakang `.glass-card` menjadi warna permukaan semi-opak solid `--surface-strong` (`#fffdf7` di siang hari dan `#1d2646` di malam hari) tanpa blur ganda. Hal ini membatasi pemakaian glassmorphism hanya pada panel panggung utama dan modal, meningkatkan ketegasan kontras teks di atas kartu serta meringankan beban rendering GPU.

### 6. Target Sentuh & Tipografi Navigasi Mobile (Poin 6 — R-03)
- **File:** `components/Nav.tsx`
- **Tindakan:** Mengubah bilah navigasi bawah mobile (`xl:hidden`) dari 8 tombol padat menjadi navigasi horizontal scrollable yang halus (`[scrollbar-width:none]`). Tiap tombol navigasi sekarang memiliki target sentuh standar `min-h-[44px]` dengan padding `px-3.5 py-2` dan ukuran font `text-xs font-bold` (12px) dengan label lengkap yang mudah dibaca dan anti salah tekan.

### 7. Refinement Copywriting Hero (Poin 7 — R-02, R-16)
- **File:** `components/Sections.tsx`
- **Tindakan:** Menghapus frasa personifikasi klise *"Perangkat yang berpikir, visual yang bercerita"* dan menggantinya dengan pernyataan kompetensi terukur:
  > *"Embedded & IoT engineer yang juga memotret dan mendesain. Merancang sistem kontrol cerdas dan IoT dengan kendali presisi, didukung dokumentasi visual yang terarah."*

### 8. Penyesuaian Klaim Pengantar Keahlian (Poin 8 — C-5, R-36)
- **File:** `components/Sections.tsx`
- **Tindakan:** Menghilangkan klaim mutlak *"Semuanya terpakai di proyek di atas"* dan menggantinya dengan:
  > *"Ringkasan tools dan bukti belajar yang saya terapkan dalam perkuliahan, magang industri, dan proyek mandiri."*

### 9. Diferensiasi Radius Bentuk Sistem Desain (Poin 9 — R-11)
- **File:** `styles/globals.css`
- **Tindakan:** Mengubah radius chip metadata/tag (`.chip`) menjadi sudut terstruktur `border-radius: 0.625rem` (10px). Radius 999px (pill/stadium) dipertahankan khusus untuk tombol aksi interaktif (`.btn`), menciptakan perbedaan bahasa visual yang jelas antara tombol dan label informasi.

### 10. Normalisasi Tanda Hubung Istilah Majemuk (Poin 10 — R-02)
- **File:** `data/journey.ts`
- **Tindakan:** Mengganti tanda hubung berspasi `Dual – Control PID – Fuzzy` menjadi istilah majemuk baku `Dual-Control PID-Fuzzy`.

### 11. Pembersihan Konstanta Legacy CMS (Poin 11 — C-2 hygiene)
- **File:** `data/content.ts`
- **Tindakan:** Menghapus konstanta `NAV_ITEMS`, `NAV_SECTION_HREFS`, `HERO`, `STATS`, dan `DEFAULT_CONTENT` yang sudah tidak lagi dipakai oleh komponen portofolio baru.

### 12. Variasi Ritme Eyebrow Antarseksi (Poin 12 — R-05)
- **File:** `components/Sections.tsx`
- **Tindakan:** Memvariasikan eyebrow seksi Perjalanan ("Rekam Jejak"), Bonus ("Aktivitas Personal"), dan Keahlian ("Kapabilitas") sehingga alur narasi tidak monoton mengulang kata "Pojok XX".

### 13. Pelurusan Teks Miring & Penghapusan Underline (Permintaan Khusus Pengguna)
- **File:** `styles/globals.css` & `components/Sections.tsx`
- **Tindakan:**
  - Menghapus `transform: rotate(-2deg)` pada kelas `.eyebrow` sehingga badge "Fresh graduate · D3 Elektronika Industri PNJ" dan eyebrow lainnya tampil lurus (*straight/unrotated*).
  - Menghapus kemiringan kartu `rotate(-0.4deg)` pada `.card-lift:hover`.
  - Menghapus elemen `<svg>` garis lengkung bawah pada nama "Syahtiar" di seksi Hero, menyisakan teks nama yang bersih dan tegas.

---

## Verifikasi Akhir
- **Type Checking & Linting:** Lulus tanpa error.
- **Produksi Statis (`npm run build`):** Selesai dalam 2.1 detik, mengekspor semua route secara statis (`out/index.html` dan `out/404.html`).
- **Server Dev:** Berjalan aktif di `http://localhost:3000`.

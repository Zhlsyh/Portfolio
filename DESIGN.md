# DESIGN.md: Portofolio Zulhelmi Syahtiar (Diorama Studio)

Dokumen ini menjelaskan konsep, sistem desain, dan aturan interaksi situs. Nilai di sini mengikuti kode (`styles/globals.css`, `components/`, `data/`). Kalau mengubah desain, ubah kodenya lalu perbarui dokumen ini.

## 1. Konsep

**Diorama Studio**: satu ruang kerja miniatur melayang di atas platform, dilihat dari sudut isometrik. Pengunjung "berkeliling" dengan scroll. Kamera berpindah antar pojok, dan tiap pojok adalah satu bagian portofolio.

- **Nada:** hangat, playful, modern. Bukan dashboard teknis.
- **Pesan utama:** engineer embedded/IoT yang juga memotret dan mendesain. Dua sisi itu hadir dalam satu ruangan.
- **Prinsip:** satu "momen wow" (diorama 3D), sisanya bersih dan cepat dibaca. Rekruter harus menemukan proyek, pengalaman, dan kontak dalam 30 sampai 60 detik.
- **Konten selalu dari CV.** Teks di `data/content.ts`, `data/projects.ts`, dan `data/journey.ts`.

## 2. Struktur dan alur

| # | Section (id) | Pojok 3D | Isi | Sisi panel (desktop) |
|---|---|---|---|---|
| 0 | `home` | Overview seluruh diorama | Nama, positioning, CTA "Keliling studio" dan "Unduh CV" | Kiri |
| 1 | `workbench` | Meja elektronik | Magang PLN, proyek engineering | Kiri |
| 2 | `photo` | Tripod, softbox, polaroid | Freelance fotografi, proyek foto | Kanan |
| 3 | `design` | Meja desain, easel | Proyek desain grafis | Kiri |
| 4 | `journey` | Tengah, maskot dan papan nama | Pendidikan (PNJ, SMAN 64), organisasi dan kepanitiaan | Kanan |
| 5 | `bonus` | Pemutar piringan hitam | Hobi (Photography, Design), playlist Spotify | Kiri |
| 6 | `skills` | Overview lebar | Keahlian dan sertifikasi | Kiri |
| 7 | `contact` | Kotak surat | Email, salin email, WhatsApp, CV, sosial | Kanan |

- Urutan section, urutan `KEYS` di `components/scene/CameraRig.tsx`, dan urutan `SECTIONS` di `components/Nav.tsx` **harus sama**.
- Klik objek 3D (meja, tripod, meja desain, kotak surat) melompat ke section-nya. Klik maskot membuatnya melompat.
- Proyek dibuka sebagai modal studi kasus (deskripsi, spesifikasi, tautan, galeri), bukan halaman baru.

## 3. Tema: siang dan malam

Diatur lewat atribut `data-theme="light|dark"` di `<html>`. Skrip kecil di `pages/_document.tsx` memasangnya sebelum cat pertama (tanpa kedip). Urutan: pilihan tersimpan (`localStorage: portfolio-theme`), lalu `prefers-color-scheme`.

| Aspek | Siang (light) | Malam (dark) |
|---|---|---|
| Langit | Gradien biru muda ke krem, matahari berputar-ray, 3 awan melayang | Gradien navy `#060917` ke `#17204a`, 80 bintang berkedip, bintang jatuh, bulan dengan kawah |
| Cahaya scene | Matahari hangat, bayangan lembut | Cahaya bulan kebiruan, 5 lampu hangat menyala di pojok |
| Panel | Kaca krem | Kaca navy |
| Transisi | Langit cross-fade 0,9 detik, cahaya 3D ikut mengalir halus (damp) | sama |

### Token warna

Aksen sama di kedua tema. Permukaan dan teks berubah.

| Token | Light | Dark | Dipakai untuk |
|---|---|---|---|
| `--cream` | `#f6efe3` | `#0a0f1f` | Latar halaman |
| `--paper` | `#fffaf0` | `#141b33` | Permukaan dasar |
| `--ink` | `#2b2230` | `#f3ead9` | Teks utama |
| `--ink-soft` | `#5d5266` | `#b4b2cb` | Teks sekunder |
| `--edge` | `#2b2230` | `rgba(255,255,255,.34)` | Garis dan bayangan tombol |
| `--glass` | `rgba(255,251,242,.62)` | `rgba(15,21,44,.58)` | Panel utama |
| `--glass-strong` | `rgba(255,251,242,.9)` | `rgba(15,21,44,.9)` | Modal |
| `--surface` | `rgba(255,255,255,.62)` | `rgba(255,255,255,.07)` | Kartu dalam panel, chip |

Aksen (tetap): tangerine `#ff7a45` (CTA, brand), sun `#ffd24a`, sky `#6ec1e4`, mint `#7fd1ae`, blush `#ff9eb5`, ungu muda `#c8a8ff` (hanya untuk penanda section Bonus).

- **Teks di atas warna aksen selalu `--on-accent` (`#2b2230`)**, apa pun temanya.
- Tiap section punya warna penanda: Home tangerine, Workbench mint, Photo sun, Design sky, Perjalanan blush, Bonus ungu muda, Keahlian mint, Kontak tangerine. Dipakai di pil navigasi aktif dan label (eyebrow) section.

## 4. Tipografi

- **Judul:** Bricolage Grotesque 700/800, `letter-spacing: -0.02em`, `line-height: 1.05`. Ukuran: H1 hero 2,6rem (mobile) sampai 4,2rem (desktop), H2 section 2,25rem sampai 3rem.
- **Isi:** DM Sans 400 sampai 700, `line-height: 1.55`.
- **Eyebrow:** judul font, huruf kapital, 0,8rem, pil berwarna dengan garis `#2b2230` 2px dan rotasi -2 derajat (kesan stiker).
- **Monospace:** hanya untuk nomor kredensial sertifikat.
- Font dimuat dari Google Fonts; fallback `ui-rounded`, `system-ui`.

## 5. Komponen

**Kaca (`.glass`)**: panel konten utama. `backdrop-filter: blur(20px) saturate(1.5)`, border 1px `--glass-border`, radius 1,75rem, bayangan lembut. Ada fallback latar solid bila `backdrop-filter` tidak didukung. Panel di desktop lebar `min(36rem, 46vw)`.

**Kartu (`.glass-card`)**: kartu di dalam panel (proyek, pendidikan, organisasi, sertifikat). Radius 1,25rem. Hover (`.card-lift`): naik 4px dan miring -0,4 derajat.

**Chip (`.chip`)**: pil kecil untuk tag dan keahlian, border 1px, teks 0,78rem.

**Tombol (`.btn`)**: pil dengan garis dan bayangan keras 3px (`0 3px 0 var(--edge)`) yang terasa "ditekan". Hover naik 2px, aktif turun 3px. `.btn-primary` memakai tangerine.

**Navigasi**
- Desktop (≥1280px): pil kaca di tengah atas, 8 item, item aktif berwarna sesuai section.
- Di bawah 1280px: bilah bawah mengambang berisi 8 item singkat (Home, Bench, Foto, Desain, Jejak, Bonus, Skill, Kontak).
- Kiri atas: merek "Z·S". Kanan atas: tombol tema (matahari/bulan) dan tombol "3D aktif / Mode ringan".

**Modal proyek**: `glass-strong`, bottom-sheet di mobile dan tengah di desktop. Tutup lewat tombol ×, klik latar, atau Esc. Fokus pindah ke tombol tutup, scroll halaman dikunci.

**Organisasi**: `<details>` bawaan browser, item pertama terbuka.

## 6. Scene 3D

Teknologi: React Three Fiber, drei, Three.js. Semua objek low-poly buatan kode (tanpa file model), jadi ringan.

- **Platform:** tiga lapis kotak membulat, empat ubin pastel (mint, kuning, biru, pink), bayangan lembut di bawah agar terasa melayang.
- **Objek hidup:** motor DC berputar, LED berkedip, drone mengambang dan rotornya berputar, layar monitor desain bergonta-ganti karya tiap 2,6 detik, kamera sesekali flash, polaroid bergoyang, bendera kotak surat melambai, amplop melayang, piringan hitam berputar dengan not musik, maskot mengikuti kamera.
- **Maskot:** kapsul kuning berhelm safety oranye (nod ke dunia industri). Ukuran tetap konsisten di semua section dan selalu mengikuti orientasi kamera.
- **Cahaya:** satu cahaya arah dengan bayangan lembut, cahaya langit (hemisphere), cahaya isi, dan lima lampu titik untuk malam.
- **Kamera:** posisi tiap section di `KEYS` (posisi, target, geser horizontal). Berpindah halus (`damp`) mengikuti progres scroll. Di desktop kamera sedikit bergeser mengikuti pointer. Di layar sempit kamera mundur sampai +50% supaya satu pojok tetap utuh.
- **Geser horizontal desktop (`ox`):** objek digeser ±16 sampai 20% lebar layar menjauhi panel, sehingga panel dan objek tidak saling menutupi.

## 7. Responsif

| | Desktop (≥768px) | Mobile (<768px) |
|---|---|---|
| Kanvas 3D | Penuh layar, di belakang konten | Menempel di atas, tinggi 42svh, sudut bawah membulat |
| Konten | Panel kiri/kanan bergantian | Satu kolom penuh di bawah kanvas |
| Penanda section | Pil nav di atas | Label section di pojok kiri bawah kanvas, nav di bawah |
| Pixel ratio | Maks 2 | Maks 1,5 |
| Titik pindah kamera | Tengah layar | Tepat di bawah kanvas |

Aturan tambahan: tidak ada scroll horizontal di lebar 390px (diuji). Grid dalam panel memakai `minmax(0, 1fr)` agar teks panjang tidak melebarkan halaman.

## 8. Gerak dan aksesibilitas

- Animasi CSS: kemunculan modal (0,5 detik), pantulan petunjuk scroll, awan, bintang, matahari. Semuanya dimatikan oleh `prefers-reduced-motion`.
- **Fallback tanpa 3D:** ilustrasi isometrik SVG (`StaticDiorama`) dipakai bila WebGL tidak ada, `prefers-reduced-motion` aktif, RAM ≤2GB, CPU ≤2 inti, atau Data Saver menyala. Pengunjung bisa menukarnya sendiri lewat tombol "3D aktif / Mode ringan" (tersimpan di `portfolio-3d`). Dalam mode ini semua panel di kiri.
- Kanvas `aria-hidden`; seluruh konten tetap terbaca tanpa WebGL.
- Fokus keyboard terlihat (outline kuning 3px). Tombol tema dan 3D memakai `aria-pressed`. Navigasi memakai `aria-current`.
- Kontras: teks di atas aksen selalu gelap (`--on-accent`). Panel kaca dibuat cukup pekat (62%) agar teks terbaca di atas scene.
- Gambar yang gagal dimuat (misalnya tautan Google Drive) diganti pola garis netral oleh `SafeImg`, bukan ikon rusak.

## 9. Performa

- JS awal halaman ±135 kB; scene 3D dimuat belakangan (`dynamic import`, tanpa SSR).
- `PerformanceMonitor` menurunkan pixel ratio ke 1 bila frame rate turun.
- Foto hobi dikecilkan (≤140 KB per file). Galeri proyek memakai `loading="lazy"` dan dibatasi 18 foto di modal.
- Tekstur layar dan papan dibuat dari kanvas 2D saat runtime, tanpa file gambar.

## 10. Cara mengubah

| Mau mengubah | Ubah di |
|---|---|
| Teks, proyek, sertifikat, kontak | `data/content.ts`, `data/projects.ts` |
| Pendidikan, organisasi, hobi, Spotify | `data/journey.ts` (`SPOTIFY.embedPath` untuk playlist) |
| Warna dan tampilan kaca | variabel di `styles/globals.css` |
| Susunan section | `components/Sections.tsx` (+ `Nav.tsx` dan `CameraRig.tsx` bila urutan berubah) |
| Sudut kamera tiap section | `KEYS` di `components/scene/CameraRig.tsx` |
| Objek 3D | `components/scene/*` (satu berkas per pojok) |
| Langit siang/malam | `components/SkyBackdrop.tsx` dan blok "langit" di `globals.css` |

## 11. Belum dikerjakan

- Form kontak (Web3Forms) dan panel admin Firebase dari web lama belum dibawa.
- Dua tema yang berbeda total dari desain lama (mode gelap/terang lama) sudah digantikan oleh tema siang/malam di atas.
- Model 3D yang lebih detail (Blender/GLB) bisa menggantikan objek buatan kode satu per satu bila diinginkan.

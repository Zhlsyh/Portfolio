// Data proyek — diekstrak apa adanya dari lib/initPortfolio.ts (sumber asli)
// supaya tidak ada perubahan/kesalahan data saat migrasi ke komponen baru.

// Project Data Dictionary
interface ProjectGalleryItem {
  id: string;
  url: string;
  title?: string;
  isUploaded?: boolean;
}

interface ProjectData {
  id: string;
  category: 'engineering' | 'photography' | 'design';
  title: string;
  image: string;
  tags: string[];
  description: string;
  specs: { label: string; value: string }[];
  docLink?: string;
  gallery?: ProjectGalleryItem[];
}


export const PROJECTS_DATA: Record<string, ProjectData> = {
  'org-1': {
    id: 'org-1',
    category: 'photography',
    title: 'Dokumentasi Kepanitiaan - Pengurus Kominfo KSM PSYCHOROBOTIC PNJ',
    image: 'https://lh3.googleusercontent.com/d/1w_kaziZ18lbYLXAEVpJb4Wo2EFo8CWpr',
    tags: ['KSM PSYCHOROBOTIC PNJ', 'Dokumentasi Kepanitiaan', 'Kominfo', 'Organisasi'],
    description: 'Dokumentasi & rekam jejak kegiatan organisasi sebagai Pengurus Departemen Kominfo KSM PSYCHOROBOTIC PNJ (Mar 2025 – Des 2025). Link Drive Kegiatan Organisasi: https://drive.google.com/drive/folders/1L7wmquEDKf4nRoSc6MMLJCwLFjsdq5wO?usp=sharing',
    docLink: 'https://drive.google.com/drive/folders/1L7wmquEDKf4nRoSc6MMLJCwLFjsdq5wO?usp=sharing',
    specs: [
      { label: 'Organisasi', value: 'KSM PSYCHOROBOTIC PNJ' },
      { label: 'Kategori', value: 'Dokumentasi Kepanitiaan & Organisasi' },
      { label: 'Jabatan', value: 'Pengurus Departemen Kominfo' },
      { label: 'Periode Kerja', value: 'Maret 2025 – Desember 2025' }
    ],
    gallery: [
      { id: 'psy-org-1', url: 'https://lh3.googleusercontent.com/d/1w_kaziZ18lbYLXAEVpJb4Wo2EFo8CWpr', title: 'Kegiatan Psychorobotic (1)' },
      { id: 'psy-org-2', url: 'https://lh3.googleusercontent.com/d/1TaIdYZflExV0a0uEFNbnMrIciOuTMoDM', title: 'Kegiatan Psychorobotic (2)' },
      { id: 'psy-org-3', url: 'https://lh3.googleusercontent.com/d/1boNjLXuVBGx9gZYrOqnQvTMirifrO1TM', title: 'Kegiatan Psychorobotic (3)' },
      { id: 'psy-org-4', url: 'https://lh3.googleusercontent.com/d/19KwKXEGIsswKDuWOYi_j82eFFbHThXwq', title: 'Kegiatan Psychorobotic (4)' },
      { id: 'psy-org-5', url: 'https://lh3.googleusercontent.com/d/1wMM0M12U1Br8GtsH-tBWInRgHGcy0SzY', title: 'Kegiatan Psychorobotic (5)' },
      { id: 'psy-org-6', url: 'https://lh3.googleusercontent.com/d/11tMocZGJtJQLtRdMqNWFuvIMU2vd86nk', title: 'Kegiatan Psychorobotic (6)' },
      { id: 'psy-org-7', url: 'https://lh3.googleusercontent.com/d/1jcEXpTvbbhvp7S-bi_Jy9nvzQaEs2xlr', title: 'Kegiatan Psychorobotic (7)' },
      { id: 'psy-org-8', url: 'https://lh3.googleusercontent.com/d/16weg_KBT0FdiTf6dYMiHzV0HvavAe7MN', title: 'Kegiatan Psychorobotic (8)' },
      { id: 'psy-org-9', url: 'https://lh3.googleusercontent.com/d/1RVzVreoDT4fNSnwP-CKtD_-ImHJ4Nn1g', title: 'Kegiatan Psychorobotic (9)' },
      { id: 'psy-org-10', url: 'https://lh3.googleusercontent.com/d/1_LGhoOjokouwQabBHrnJHefwwiJQFQpx', title: 'Kegiatan Psychorobotic (10)' },
      { id: 'psy-org-11', url: 'https://lh3.googleusercontent.com/d/18PnNj6Kg7PQ59llU6WefotSfKEZn3V1s', title: 'Kegiatan Psychorobotic (11)' },
      { id: 'psy-org-12', url: 'https://lh3.googleusercontent.com/d/1CnqviRLeTFtyNYdaOzLeO4cRgGmOlNVL', title: 'Kegiatan Psychorobotic (12)' },
      { id: 'psy-org-13', url: 'https://lh3.googleusercontent.com/d/1lyQ__nmMBhrNnbjzu7mKH0DHNKqOO7TD', title: 'Kegiatan Psychorobotic (13)' },
      { id: 'psy-org-14', url: 'https://lh3.googleusercontent.com/d/1-J1q2BUKXs0Vb-YkZaCrwOYoBHj5P78p', title: 'Kegiatan Psychorobotic (14)' },
      { id: 'psy-org-15', url: 'https://lh3.googleusercontent.com/d/1DtI3cE9SN0Kgfi4iOJ_stsb0cUcSu_uv', title: 'Kegiatan Psychorobotic (15)' },
      { id: 'psy-org-16', url: 'https://lh3.googleusercontent.com/d/1zcp5x5qf-mH2xQOxO9mll-WCPxHXeMmv', title: 'Kegiatan Psychorobotic (16)' },
      { id: 'psy-org-17', url: 'https://lh3.googleusercontent.com/d/1TVLQyqoS4BCxwbUUJtPpko7Rflh2oIfY', title: 'Kegiatan Psychorobotic (17)' },
      { id: 'psy-org-18', url: 'https://lh3.googleusercontent.com/d/1VisJlvXkItEaQ81JZYVmSu2yW9WF134o', title: 'Kegiatan Psychorobotic (18)' },
      { id: 'psy-org-19', url: 'https://lh3.googleusercontent.com/d/1c_AtrQQSNXubWCslfc5xQWrYaSkB6Qbp', title: 'Kegiatan Psychorobotic (19)' },
      { id: 'psy-org-20', url: 'https://lh3.googleusercontent.com/d/1h0dskxCaH9Rc9XwtfTgK-UBEf4K8L9jh', title: 'Kegiatan Psychorobotic (20)' },
      { id: 'psy-org-21', url: 'https://lh3.googleusercontent.com/d/1x5mV2dGaEvxZqcWAa2MZq1wbwyXCufND', title: 'Kegiatan Psychorobotic (21)' },
      { id: 'psy-org-22', url: 'https://lh3.googleusercontent.com/d/1NwPyZArshSRbvSHOMowx4-ehCFplfMDe', title: 'Kegiatan Psychorobotic (22)' },
      { id: 'psy-org-23', url: 'https://lh3.googleusercontent.com/d/1ZvwrPpaQK9FjT1pFos_9HNKP0Qo9vuzT', title: 'Kegiatan Psychorobotic (23)' }
    ]
  },
  'org-2': {
    id: 'org-2',
    category: 'design',
    title: 'Divisi Media Kreatif - E-TIME 2025 PNJ (Nasional)',
    image: 'https://lh3.googleusercontent.com/d/1ouemp7TUIyFgSiB_f37Uvo-2Xzrii5WU',
    tags: ['E-TIME 2025 PNJ', 'Media Kreatif', 'Poster Nasional', 'Aftermovie'],
    description: 'Dokumentasi kegiatan Divisi Media Kreatif E-TIME 2025 PNJ (Mei 2025 – Jul 2025). Membuat aset visual lomba elektro tingkat nasional, poster publikasi, feeds, merchandise, e-certificate, serta produksi video aftermovie. Link Drive Dokumentasi: https://drive.google.com/drive/folders/1Ey0C8256-w9zl5obaREwBN4M5WdKO19V?usp=sharing',
    specs: [
      { label: 'Acara', value: 'E-TIME 2025 Politeknik Negeri Jakarta' },
      { label: 'Jabatan', value: 'Divisi Media Kreatif' },
      { label: 'Skala Acara', value: 'Perlombaan Nasional' },
      { label: 'Deliverable', value: 'Aset Visual, Poster, Feed, Certificate & Video' }
    ],
    gallery: [
      { id: 'etime-1', url: 'https://lh3.googleusercontent.com/d/1ouemp7TUIyFgSiB_f37Uvo-2Xzrii5WU', title: 'E-TIME 2025 (IMG_9983)' },
      { id: 'etime-2', url: 'https://lh3.googleusercontent.com/d/1eu1u2Eb8qkzBX5bvn5xG00R2jcTVPcgB', title: 'E-TIME 2025 (2)' },
      { id: 'etime-3', url: 'https://lh3.googleusercontent.com/d/19TS0zIBKyauUzifiJm0Y_AZlmz1B_epy', title: 'E-TIME 2025 (3)' },
      { id: 'etime-4', url: 'https://lh3.googleusercontent.com/d/1W8s8UrXPvtbUVEabAhc0F7mBxU95HjKx', title: 'E-TIME 2025 (4)' },
      { id: 'etime-5', url: 'https://lh3.googleusercontent.com/d/165jOZ9cJzBvRVH6xF1N_Fj6MpvAByy2i', title: 'E-TIME 2025 (5)' },
      { id: 'etime-6', url: 'https://lh3.googleusercontent.com/d/1nLVwQqpicyqef8yS9NNs9Q0rGgfsQl_Q', title: 'E-TIME 2025 (6)' },
      { id: 'etime-7', url: 'https://lh3.googleusercontent.com/d/1grv2jpd0um0DSUzhvcV8XJGv2f-LmSpy', title: 'E-TIME 2025 (7)' },
      { id: 'etime-8', url: 'https://lh3.googleusercontent.com/d/1Cr3GxrtR3FuwDXsYVhvPS2aN29felH-M', title: 'E-TIME 2025 (8)' },
      { id: 'etime-9', url: 'https://lh3.googleusercontent.com/d/1YjfSdfIFIEkMIm6gQz1fqFQygKMyfo3D', title: 'E-TIME 2025 (9)' }
    ]
  },
  'org-3': {
    id: 'org-3',
    category: 'photography',
    title: 'Divisi Publikasi & Dokum - Olahraga Elektro 2024 HME PNJ',
    image: 'https://lh3.googleusercontent.com/d/1rUCMYisoBsSywGcY0bcp_4vc1pMA_UIv',
    tags: ['Olahraga Elektro 2024', 'Publikasi & Dokum', 'HME PNJ', 'Photobooth'],
    description: 'Dokumentasi & liputan resmi Olahraga Elektro 2024 HME PNJ (Apr 2024 – Ags 2024). Meliputi liputan foto pertandingan, pengelolaan Instagram @OE_PNJ, serta mengoperasikan Studio Photobooth penutupan acara.',
    docLink: 'https://drive.google.com/drive/folders/1_K4NnYPc7GIIF6zW7Eea02amxWheghou',
    specs: [
      { label: 'Kegiatan', value: 'Olahraga Elektro 2024 HME PNJ' },
      { label: 'Jabatan', value: 'Divisi Publikasi & Dokumentasi' },
      { label: 'Periode', value: 'April 2024 – Agustus 2024' },
      { label: 'Cakupan Foto', value: 'Match Action, Supporter & Photobooth Studio' }
    ],
    gallery: [
      { id: 'org3-1', url: 'https://lh3.googleusercontent.com/d/1rUCMYisoBsSywGcY0bcp_4vc1pMA_UIv', title: 'Dokumentasi Olahraga Elektro 2024 (1)' },
      { id: 'org3-2', url: 'https://lh3.googleusercontent.com/d/1JGu60xF1d_JSKb-z_9ygwuD6q6q5NPFK', title: 'Dokumentasi Olahraga Elektro 2024 (2)' },
      { id: 'org3-3', url: 'https://lh3.googleusercontent.com/d/1MV8FFHsFjq8hJbbVEZFOhQWe9XpZrM3n', title: 'Dokumentasi Olahraga Elektro 2024 (3)' },
      { id: 'org3-4', url: 'https://lh3.googleusercontent.com/d/1ZbVcerWVUwW9DDAGn9Y9Nu9wwlp813-s', title: 'Dokumentasi Olahraga Elektro 2024 (4)' }
    ]
  },
  'org-4': {
    id: 'org-4',
    category: 'design',
    title: 'Dokumentasi Kepanitiaan - Divisi PDD Fraction 2024 (Wisuda TE PNJ)',
    image: 'https://lh3.googleusercontent.com/d/1MLZmwJyVrF5j24ZOzERTEM4hjISuHK9C',
    tags: ['Fraction 2024', 'Dokumentasi Kepanitiaan', 'Wisuda TE PNJ', 'Divisi PDD'],
    description: 'Dokumentasi kegiatan Divisi Publikasi, Dokumentasi & Desain Fraction 2024 (Ags 2024 – Okt 2024). Mengelola publikasi media sosial, dokumentasi foto & video wisuda jurusan Teknik Elektro PNJ, serta perancangan aset visual & layout dekorasi acara. Link Drive Dokumentasi: https://drive.google.com/drive/folders/16ANdl0vBs7JVwluv6RIOTcAb1tsw5KO4?usp=sharing',
    docLink: 'https://drive.google.com/drive/folders/16ANdl0vBs7JVwluv6RIOTcAb1tsw5KO4?usp=sharing',
    specs: [
      { label: 'Acara', value: 'Fraction 2024 - Wisuda TE PNJ' },
      { label: 'Kategori', value: 'Dokumentasi Kepanitiaan & Organisasi' },
      { label: 'Jabatan', value: 'Divisi PDD (Publikasi, Dokum & Desain)' },
      { label: 'Periode', value: 'Agustus 2024 – Oktober 2024' }
    ],
    gallery: [
      { id: 'frac-1', url: 'https://lh3.googleusercontent.com/d/1Bsk0__0HmfW_Cuu5tIMJPMEFLEUQ0w0h', title: 'Fraction 2024 (1)' },
      { id: 'frac-2', url: 'https://lh3.googleusercontent.com/d/1bpAzZNTG6hKj42paPb4sj41qRKK4ZcAX', title: 'Fraction 2024 (2)' },
      { id: 'frac-3', url: 'https://lh3.googleusercontent.com/d/1tccZs891qGc-bjLtGpxJStWUzbgwCBKn', title: 'Fraction 2024 (3)' },
      { id: 'frac-4', url: 'https://lh3.googleusercontent.com/d/1MLZmwJyVrF5j24ZOzERTEM4hjISuHK9C', title: 'Fraction 2024 (4)' },
      { id: 'frac-5', url: 'https://lh3.googleusercontent.com/d/1bqEOIPYpjWZKYuW082-RQ8AWJeCgNEyk', title: 'Fraction 2024 (5)' },
      { id: 'frac-6', url: 'https://lh3.googleusercontent.com/d/1GzxUWfh64gf206mXSKNCSq12OYhFYYT2', title: 'Fraction 2024 (6)' },
      { id: 'frac-7', url: 'https://lh3.googleusercontent.com/d/1tJ0AckNYZz6N8pI2CgdrIvi7JEKlSZOY', title: 'Fraction 2024 (7)' },
      { id: 'frac-8', url: 'https://lh3.googleusercontent.com/d/1A7xKvAntvM2cf9kaC48EV6CUjfPkvGaM', title: 'Fraction 2024 (8)' },
      { id: 'frac-9', url: 'https://lh3.googleusercontent.com/d/1oXgQWJNS0u0bzKGElBv3u4VRgK5iP6Vl', title: 'Fraction 2024 (9)' },
      { id: 'frac-10', url: 'https://lh3.googleusercontent.com/d/1gSx7nPWWRZFiuP-TR1j029pHN6ueYKix', title: 'Fraction 2024 (10)' },
      { id: 'frac-11', url: 'https://lh3.googleusercontent.com/d/1WnfnBIDSEp0G5K3B61tzO_AaeMchOqDm', title: 'Fraction 2024 (11)' },
      { id: 'frac-12', url: 'https://lh3.googleusercontent.com/d/1TPuLORZic7EJ9TDeCdQeMdortV-rn5Z7', title: 'Fraction 2024 (12)' },
      { id: 'frac-13', url: 'https://lh3.googleusercontent.com/d/1nEKb_pTsBrZwEzKE2mc554IFmh0Zot5T', title: 'Fraction 2024 (13)' },
      { id: 'frac-14', url: 'https://lh3.googleusercontent.com/d/1bND4HJLFDSTqagqM9uM2SGQnUExfZhem', title: 'Fraction 2024 (14)' },
      { id: 'frac-15', url: 'https://lh3.googleusercontent.com/d/1Bu49Es0Cg2MNbaDRnItR6yKvLK273WCm', title: 'Fraction 2024 (15)' },
      { id: 'frac-16', url: 'https://lh3.googleusercontent.com/d/1PeJx2EpXtvjw3m7_2HEuP-n6fECbXvA9', title: 'Fraction 2024 (16)' },
      { id: 'frac-17', url: 'https://lh3.googleusercontent.com/d/1nhi-jyervZxsoJGsPGKSmp5ornY7hL1P', title: 'Fraction 2024 (17)' },
      { id: 'frac-18', url: 'https://lh3.googleusercontent.com/d/1TRNtdf8cata1lVOuWRTy2UwI7l9Ofiy_', title: 'Fraction 2024 (18)' },
      { id: 'frac-19', url: 'https://lh3.googleusercontent.com/d/1CFdx1uK1oXpl91Ank-BejJ569w3HaY8Q', title: 'Fraction 2024 (19)' }
    ]
  },
  'eng-numa': {
    id: 'eng-numa',
    category: 'engineering',
    title: 'Numa Space - Virtual Study Room & Realtime Matchmaking',
    image: '/logos/Numa.png',
    tags: ['WebRTC', 'Socket.IO', 'React & Vite', 'Vercel & Railway', 'Fullstack'],
    description: 'Platform ruang belajar virtual (Virtual Study Room) dan matchmaking teman belajar secara realtime. Memungkinkan interaksi video/audio P2P via WebRTC, komunikasi chat Socket.IO, sistem kode akses private room, serta integrasi Pomodoro Timer untuk produktivitas. Live Web Application: http://numaspace.vercel.app/',
    docLink: 'http://numaspace.vercel.app/',
    specs: [
      { label: 'Frontend App', value: 'React / Vite & Tailwind CSS (Vercel)' },
      { label: 'Backend Server', value: 'Node.js & Socket.IO (Railway)' },
      { label: 'Protokol Realtime', value: 'WebRTC P2P Video/Audio Chat' },
      { label: 'Live Platform', value: 'numaspace.vercel.app' }
    ]
  },
  'eng-1': {
    id: 'eng-1',
    category: 'engineering',
    title: 'Trainer Kit Kendali Motor DC Dual (PID & Fuzzy)',
    image: '/photos/TrainerMotorDC.jpeg',
    tags: ['ESP32', 'PID & Fuzzy', 'Digital Twin 3D', 'Firebase'],
    description: 'Tugas Akhir D3 Elektronika Industri PNJ - Trainer kit kendali presisi motor DC dual-control dengan algoritma PID dan Fuzzy Logic berbasis ESP32. Dilengkapi antarmuka web monitoring (HTML/CSS/JS) serta visualisasi Digital Twin 3D interaktif Three.js r160 yang tersinkronisasi via Firebase Realtime Database. Web Live Demo: https://trainermotordc.web.app/',
    docLink: 'https://trainermotordc.web.app/',
    specs: [
      { label: 'Mikrokontroler', value: 'ESP32 Dual-Core' },
      { label: 'Algoritma Kontrol', value: 'PID & Fuzzy Logic Controller' },
      { label: 'Visualisasi 3D', value: 'Three.js Digital Twin' },
      { label: 'Web Application', value: 'trainermotordc.web.app' }
    ]
  },
  'eng-2': {
    id: 'eng-2',
    category: 'engineering',
    title: 'IoT Plant Guardian Robot (Psychorobotic)',
    image: '/photos/RobotPenjagaTanaman.jpeg',
    tags: ['ESP32-C3', 'DHT11', 'Soil Sensor', 'IoT'],
    description: 'Proyek KSM Psychorobotic PNJ - Robot monitoring penjaga tanaman menggunakan ESP32-C3, sensor suhu & kelembaban udara DHT11, serta sensor kelembaban tanah untuk pemantauan kondisi lingkungan tanaman secara otomatis berbasis IoT.',
    docLink: 'https://drive.google.com/',
    specs: [
      { label: 'Prosesor', value: 'ESP32-C3 RISC-V' },
      { label: 'Sensor Terpasang', value: 'DHT11 + Soil Moisture' },
      { label: 'Konektivitas', value: 'Wi-Fi Telemetry IoT' },
      { label: 'Aplikasi', value: 'Automation & Plant Guard' }
    ]
  },
  'eng-3': {
    id: 'eng-3',
    category: 'engineering',
    title: 'Web Dashboard & MySQL Telemetry IoT',
    image: '/photos/WebDashboardMonitoringIoT.jpeg',
    tags: ['MySQL', 'Web Dashboard', 'Sensor IoT', 'Data Logging'],
    description: 'Dashboard web interaktif untuk pemantauan parameter lingkungan (suhu, kelembaban udara, dan kelembaban tanah) secara realtime terintegrasi dengan database MySQL untuk pencatatan dan penyimpanan data log sensor historis.',
    docLink: 'https://drive.google.com/drive/folders/1prb4NeVaktvjzNK4zYtoHbZbykCMB_Ab',
    specs: [
      { label: 'Database Engine', value: 'MySQL' },
      { label: 'Web Tech', value: 'HTML/CSS/JS + REST API' },
      { label: 'Parameter Log', value: 'Suhu & Kelembaban Tanah' },
      { label: 'Fitur Sistem', value: 'Data Logging & Sensor Table Log' }
    ]
  },
  'eng-4': {
    id: 'eng-4',
    category: 'engineering',
    title: 'Modul Praktikum Gerbang Logika Digital',
    image: '/photos/trainerlogic/TrainerKitLogic.jpeg',
    tags: ['Elektronika Digital', 'IC Logic', 'Mux/Demux', 'BCD'],
    description: 'Perancangan trainer kit gerbang logika untuk pembelajaran Elektronika Digital. Dilengkapi gerbang dasar AND, OR, NOT, NAND, NOR, XOR, Full Adder, Multiplexer, Demultiplexer, Flip-flop, Dekoder BCD ke 7-Segment, dan LED indikator.',
    docLink: 'https://drive.google.com/',
    specs: [
      { label: 'Komponen Utama', value: 'IC Seri 74xx Logic Gates' },
      { label: 'Fitur Trainer', value: 'Full Adder, Mux/Demux, BCD' },
      { label: 'Display Output', value: '7-Segment & LED Indicators' },
      { label: 'Kategori', value: 'Hardware Praktikum Digital' }
    ],
    gallery: [
      { id: 'tl-1', url: '/photos/trainerlogic/TrainerKitLogic.jpeg', title: 'Trainer Kit Gerbang Logika Utama' },
      { id: 'tl-2', url: '/photos/trainerlogic/doc-trainerlogic1.jpeg', title: 'Dokumentasi Trainer Kit Logic 1' },
      { id: 'tl-3', url: '/photos/trainerlogic/doc-trainerlogic2.jpeg', title: 'Dokumentasi Trainer Kit Logic 2' },
      { id: 'tl-4', url: '/photos/trainerlogic/doc-trainerlogic3.jpeg', title: 'Dokumentasi Trainer Kit Logic 3' }
    ]
  },
  'eng-5': {
    id: 'eng-5',
    category: 'engineering',
    title: 'Catu Daya Stabil 9V IC 7809',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
    tags: ['Hardware', 'Regulator IC 7809', 'Power Supply'],
    description: 'Perancangan dan fabrikasi rangkaian catu daya (power supply) teregulasi menggunakan IC 7809 dengan keluaran tegangan stabil 9V DC untuk memasok daya rangkaian elektronik dan mikrokontroler.',
    docLink: 'https://drive.google.com/',
    specs: [
      { label: 'Regulator IC', value: 'LM7809 (Output 9V DC)' },
      { label: 'Proteksi', value: 'Filter Kapasitor & Dioda' },
      { label: 'Arus Maksimal', value: '1 Ampere' },
      { label: 'Fungsi', value: 'Power Supply Mikrokontroler' }
    ]
  },
  'photo-1': {
    id: 'photo-1',
    category: 'photography',
    title: 'Fotografi Kelulusan Akademik & Sidang',
    image: 'https://lh3.googleusercontent.com/d/1c6klqm9QzQ3gJ-NAtOzd37U2gGVh1sIB',
    tags: ['Graduation', 'Directing & Shooting', 'Lightroom'],
    description: 'Layanan fotografi profesional independen untuk momen selebrasi kelulusan akademik dan pasca-sidang di Jabodetabek, mencakup pengarahan gaya, pencahayaan, dan retouching warna di Adobe Lightroom. Link Drive Dokumentasi Sidang: https://drive.google.com/drive/folders/1A---nDTJjDlIS5n6iwMQCFZBpsjGsuNK?usp=sharing',
    docLink: 'https://drive.google.com/drive/folders/1A---nDTJjDlIS5n6iwMQCFZBpsjGsuNK?usp=sharing',
    specs: [
      { label: 'Kategori', value: 'Portret Kelulusan / Sidang' },
      { label: 'Perangkat', value: 'Kamera Profesional & Lensa Prime' },
      { label: 'Proses Edit', value: 'Retouching Adobe Lightroom' },
      { label: 'Area Layanan', value: 'Jabodetabek (2023 - Sekarang)' }
    ],
    gallery: [
      { id: 'grad-1', url: 'https://lh3.googleusercontent.com/d/1c6klqm9QzQ3gJ-NAtOzd37U2gGVh1sIB', title: 'Dokumentasi Fotografi Sidang (1)' },
      { id: 'grad-2', url: 'https://lh3.googleusercontent.com/d/1Lt9RjEnecibGu1f4x4lHBlIH7GDQGcgk', title: 'Dokumentasi Fotografi Sidang (2)' },
      { id: 'grad-3', url: 'https://lh3.googleusercontent.com/d/1LNnOzLENLQVFo1AMR007o97EKddWpZ9Y', title: 'Dokumentasi Fotografi Sidang (3)' },
      { id: 'grad-4', url: 'https://lh3.googleusercontent.com/d/16gSm9ntDO4XodFXB2InOjWoMC87QMltS', title: 'Dokumentasi Fotografi Sidang (4)' },
      { id: 'grad-5', url: 'https://lh3.googleusercontent.com/d/1mB_udm2hYtmA9Zlmk41pKqjX3d7x0POz', title: 'Dokumentasi Fotografi Sidang (5)' },
      { id: 'grad-6', url: 'https://lh3.googleusercontent.com/d/1CgZ05K_GmuhUj2ac55a_2qMwzz1tkpsc', title: 'Dokumentasi Fotografi Sidang (6)' },
      { id: 'grad-7', url: 'https://lh3.googleusercontent.com/d/1H7KQDZ9XFhsaAtgWPVT1i2fuG7QQYpjP', title: 'Dokumentasi Fotografi Sidang (7)' },
      { id: 'grad-8', url: 'https://lh3.googleusercontent.com/d/1BbPmLgTFcjsw0jOUvJPtOpIlp38-BIu5', title: 'Dokumentasi Fotografi Sidang (8)' },
      { id: 'grad-9', url: 'https://lh3.googleusercontent.com/d/194z9FOJd5hLY3Aln-5tXBTWRSuAlen55', title: 'Dokumentasi Fotografi Sidang (9)' },
      { id: 'grad-10', url: 'https://lh3.googleusercontent.com/d/1t56IsvG9x2XZY9GSEy1P9VDA1OHZ3lSk', title: 'Dokumentasi Fotografi Sidang (10)' },
      { id: 'grad-11', url: 'https://lh3.googleusercontent.com/d/1kxk8GT08T5OHiiXrMBJSk_T5eDMqK9hJ', title: 'Dokumentasi Fotografi Sidang (11)' },
      { id: 'grad-12', url: 'https://lh3.googleusercontent.com/d/1IcIhs0Zy-FwKv8qIwHbF-EOrdxlrzUVY', title: 'Dokumentasi Fotografi Sidang (12)' },
      { id: 'grad-13', url: 'https://lh3.googleusercontent.com/d/1_rJgK377-ythaf8ru-AyvGeVZmC2EXiv', title: 'Dokumentasi Fotografi Sidang (13)' },
      { id: 'grad-14', url: 'https://lh3.googleusercontent.com/d/1pnTeGC-AInxI_OvuG4qiAW1Ua6-3M40d', title: 'Dokumentasi Fotografi Sidang (14)' },
      { id: 'grad-15', url: 'https://lh3.googleusercontent.com/d/1sF108Pbyu7fhMGUJMaxpxjGwuLCfBYNP', title: 'Dokumentasi Fotografi Sidang (15)' },
      { id: 'grad-16', url: 'https://lh3.googleusercontent.com/d/1hACAmK7FsxYy48aIPsiuVTcG0sfPToRn', title: 'Dokumentasi Fotografi Sidang (16)' },
      { id: 'grad-17', url: 'https://lh3.googleusercontent.com/d/1XVYkELP2y2Po27-0b0NLkN1F-VXFN1fD', title: 'Dokumentasi Fotografi Sidang (17)' }
    ]
  },
  'photo-2': {
    id: 'photo-2',
    category: 'design',
    title: 'Aset & Media Kreatif E-TIME 2025 PNJ',
    image: 'https://lh3.googleusercontent.com/d/1ouemp7TUIyFgSiB_f37Uvo-2Xzrii5WU',
    tags: ['E-TIME 2025', 'Media Kreatif', 'Aset Editing', 'Desain Visual'],
    description: 'Perancangan dan editing aset visual digital, poster perlombaan nasional, feed sosial media, serta kebutuhan desain media kreatif E-TIME 2025 Politeknik Negeri Jakarta. Link Drive Dokumentasi: https://drive.google.com/drive/folders/1Ey0C8256-w9zl5obaREwBN4M5WdKO19V?usp=sharing',
    docLink: 'https://drive.google.com/drive/folders/1Ey0C8256-w9zl5obaREwBN4M5WdKO19V?usp=sharing',
    specs: [
      { label: 'Acara', value: 'E-TIME 2025 PNJ' },
      { label: 'Peran', value: 'Divisi Media Kreatif' },
      { label: 'Cakupan Kerja', value: 'Editing Aset Visual, Poster & Content' },
      { label: 'Software', value: 'Photoshop, Illustrator, Canva, ibis Paint X' }
    ],
    gallery: [
      { id: 'etime-1', url: 'https://lh3.googleusercontent.com/d/1ouemp7TUIyFgSiB_f37Uvo-2Xzrii5WU', title: 'E-TIME 2025 (IMG_9983)' },
      { id: 'etime-2', url: 'https://lh3.googleusercontent.com/d/1eu1u2Eb8qkzBX5bvn5xG00R2jcTVPcgB', title: 'E-TIME 2025 (2)' },
      { id: 'etime-3', url: 'https://lh3.googleusercontent.com/d/19TS0zIBKyauUzifiJm0Y_AZlmz1B_epy', title: 'E-TIME 2025 (3)' },
      { id: 'etime-4', url: 'https://lh3.googleusercontent.com/d/1W8s8UrXPvtbUVEabAhc0F7mBxU95HjKx', title: 'E-TIME 2025 (4)' },
      { id: 'etime-5', url: 'https://lh3.googleusercontent.com/d/165jOZ9cJzBvRVH6xF1N_Fj6MpvAByy2i', title: 'E-TIME 2025 (5)' },
      { id: 'etime-6', url: 'https://lh3.googleusercontent.com/d/1nLVwQqpicyqef8yS9NNs9Q0rGgfsQl_Q', title: 'E-TIME 2025 (6)' },
      { id: 'etime-7', url: 'https://lh3.googleusercontent.com/d/1grv2jpd0um0DSUzhvcV8XJGv2f-LmSpy', title: 'E-TIME 2025 (7)' },
      { id: 'etime-8', url: 'https://lh3.googleusercontent.com/d/1Cr3GxrtR3FuwDXsYVhvPS2aN29felH-M', title: 'E-TIME 2025 (8)' },
      { id: 'etime-9', url: 'https://lh3.googleusercontent.com/d/1YjfSdfIFIEkMIm6gQz1fqFQygKMyfo3D', title: 'E-TIME 2025 (9)' }
    ]
  },
  'photo-3': {
    id: 'photo-3',
    category: 'photography',
    title: 'Foto Personal Project (Photo Hunting)',
    image: 'https://lh3.googleusercontent.com/d/1DFz1tFy7qs8rEpCjQ7-7rRwoB1IPTuxs',
    tags: ['Personal Project', 'Photo Hunting', 'Street & Landscape'],
    description: 'Koleksi karya fotografi personal yang ditangkap saat aktivitas photo hunting, mengeksplorasi sudut pandang street photography, human interest, serta keindahan arsitektur dan alam. Link Drive Dokumentasi: https://drive.google.com/drive/folders/1IDeKgqffv8_cJXW2UXnLcF49iYMDUiLU?usp=sharing',
    docLink: 'https://drive.google.com/drive/folders/1IDeKgqffv8_cJXW2UXnLcF49iYMDUiLU?usp=sharing',
    specs: [
      { label: 'Kategori', value: 'Personal Project / Hunting' },
      { label: 'Genre', value: 'Street, Human Interest & Landscape' },
      { label: 'Peralatan', value: 'Kamera Mirrorless & Lensa Prime/Zoom' },
      { label: 'Pengolahan', value: 'Adobe Lightroom Color Grading' }
    ],
    gallery: [
      { id: 'hunt-1', url: 'https://lh3.googleusercontent.com/d/1DFz1tFy7qs8rEpCjQ7-7rRwoB1IPTuxs', title: 'Photo Hunting (1)' },
      { id: 'hunt-2', url: 'https://lh3.googleusercontent.com/d/1zwhqdpQMg6O-_zGumYiM8ba8pWIrRCmk', title: 'Photo Hunting (2)' },
      { id: 'hunt-3', url: 'https://lh3.googleusercontent.com/d/1h4j6hirBBxOGG4CfGWXO-IeRCqHfH3W_', title: 'Photo Hunting (3)' },
      { id: 'hunt-4', url: 'https://lh3.googleusercontent.com/d/1WG210WM6-aMtGTg9se86CU0DWr_6O3iq', title: 'Photo Hunting (4)' },
      { id: 'hunt-5', url: 'https://lh3.googleusercontent.com/d/1rqxqWpjJRkZM4RDfRU5HQ4Nm1awvd7fT', title: 'Photo Hunting (5)' },
      { id: 'hunt-6', url: 'https://lh3.googleusercontent.com/d/16UHHvxDiJyin2Z2FD-3SfHHYbv6KdmZz', title: 'Photo Hunting (6)' },
      { id: 'hunt-7', url: 'https://lh3.googleusercontent.com/d/13QbgFHiT8G8d2uRcXmNW1nFj-Grj9JPU', title: 'Photo Hunting (7)' },
      { id: 'hunt-8', url: 'https://lh3.googleusercontent.com/d/1PZy0k1AJwjlVlZeMl_9OoLXYNEhst8Hb', title: 'Photo Hunting (8)' },
      { id: 'hunt-9', url: 'https://lh3.googleusercontent.com/d/1mOEFpBEXXa2SSwd4A75oXdjU0bdfxFWk', title: 'Photo Hunting (9)' },
      { id: 'hunt-10', url: 'https://lh3.googleusercontent.com/d/1Y40sw5LwSPXeGKCoAGntNsprQcMs3847', title: 'Photo Hunting (10)' },
      { id: 'hunt-11', url: 'https://lh3.googleusercontent.com/d/13Yitqo8ZC65Oi82xOS38lQAvNr5nYbsO', title: 'Photo Hunting (11)' },
      { id: 'hunt-12', url: 'https://lh3.googleusercontent.com/d/1ocCI0vuMCtYIWDKInM-ZbiY4GHiVa4hF', title: 'Photo Hunting (12)' },
      { id: 'hunt-13', url: 'https://lh3.googleusercontent.com/d/1m54BH4azkVFcxRsLQawlagtGo2eF5GSe', title: 'Photo Hunting (13)' },
      { id: 'hunt-14', url: 'https://lh3.googleusercontent.com/d/1CrDTn2fCKpHJyF4czU_j6q0YghRgiY4I', title: 'Photo Hunting (14)' },
      { id: 'hunt-15', url: 'https://lh3.googleusercontent.com/d/16fRDZm091nDVz2zaSBalRedEurG9PIgi', title: 'Photo Hunting (15)' },
      { id: 'hunt-16', url: 'https://lh3.googleusercontent.com/d/11srCaEx9eo8tzkc2_5koSpHfKzbQVbdA', title: 'Photo Hunting (16)' },
      { id: 'hunt-17', url: 'https://lh3.googleusercontent.com/d/1yEOEjqJXAmzYT5cay3kya1v9HUIfiYd2', title: 'Photo Hunting (17)' },
      { id: 'hunt-18', url: 'https://lh3.googleusercontent.com/d/1OpdIFFAvMPEQy1O0XO6VYS0PWHy9gRYS', title: 'Photo Hunting (18)' },
      { id: 'hunt-19', url: 'https://lh3.googleusercontent.com/d/1zefHsNcFfuXNTzC41z4UiUNZ3Tqd6-cB', title: 'Photo Hunting (19)' },
      { id: 'hunt-20', url: 'https://lh3.googleusercontent.com/d/15SgFGdShR9b1cx_uAd4uQbjXiOs8fuJd', title: 'Photo Hunting (20)' },
      { id: 'hunt-21', url: 'https://lh3.googleusercontent.com/d/1emET9mtoar3AqmkHtKyrd0I5vRWz-8AF', title: 'Photo Hunting (21)' },
      { id: 'hunt-22', url: 'https://lh3.googleusercontent.com/d/1nfZH0zCyb6BPKlpdznE2iic-CuPWcZrX', title: 'Photo Hunting (22)' },
      { id: 'hunt-23', url: 'https://lh3.googleusercontent.com/d/1oNgkpMmXbbD1DN_GutTgWr46tag7iCoJ', title: 'Photo Hunting (23)' },
      { id: 'hunt-24', url: 'https://lh3.googleusercontent.com/d/1HL8WQvlVND_YPEY_C2bJDgmhJCkbyLsp', title: 'Photo Hunting (24)' },
      { id: 'hunt-25', url: 'https://lh3.googleusercontent.com/d/1iPrM2Li7aqi-LFZINl0oG7nZs64uvg-X', title: 'Photo Hunting (25)' },
      { id: 'hunt-26', url: 'https://lh3.googleusercontent.com/d/12yxLWcE6x-E5WPb0YRIxJsovzsZKAd0p', title: 'Photo Hunting (26)' },
      { id: 'hunt-27', url: 'https://lh3.googleusercontent.com/d/1LoHAMAF2CnmtZkTFqPwBOeG6HPsGJj52', title: 'Photo Hunting (27)' },
      { id: 'hunt-28', url: 'https://lh3.googleusercontent.com/d/1uoJi5VLxODxl1naNeCIY89BL9c1ZDUOn', title: 'Photo Hunting (28)' },
      { id: 'hunt-29', url: 'https://lh3.googleusercontent.com/d/1c-3bzk6gu_6v8pPbuWKq-fMj4-LXVE5a', title: 'Photo Hunting (29)' },
      { id: 'hunt-30', url: 'https://lh3.googleusercontent.com/d/1kEjj1GSDqClmHMCSJzhGfRlsUzPapm2D', title: 'Photo Hunting (30)' },
      { id: 'hunt-31', url: 'https://lh3.googleusercontent.com/d/1sSbALta4C5ToWQuradxIJz3UKHkgdGR5', title: 'Photo Hunting (31)' },
      { id: 'hunt-32', url: 'https://lh3.googleusercontent.com/d/14gVx9DhBHw5gNQ73RimxQx2NbzS6CIwS', title: 'Photo Hunting (32)' },
      { id: 'hunt-33', url: 'https://lh3.googleusercontent.com/d/1y3I09uxWesphsH2mWEUGM_s4DdTKY-d-', title: 'Photo Hunting (33)' },
      { id: 'hunt-34', url: 'https://lh3.googleusercontent.com/d/1Cz5J6PV2XTXyNBzUckTRaZXONxhK356_', title: 'Photo Hunting (34)' },
      { id: 'hunt-35', url: 'https://lh3.googleusercontent.com/d/1oeDgjMa485Xlc0_MtTv1TfKwuOmNxy3s', title: 'Photo Hunting (35)' },
      { id: 'hunt-36', url: 'https://lh3.googleusercontent.com/d/1t7M5yIegbIoQgPUJUhzqrZXbAFh_2q5Z', title: 'Photo Hunting (36)' },
      { id: 'hunt-37', url: 'https://lh3.googleusercontent.com/d/1SvnsrHgaTmfLJqukXhnYC77himDhRV3K', title: 'Photo Hunting (37)' },
      { id: 'hunt-38', url: 'https://lh3.googleusercontent.com/d/1W3403M4Y_3VBX2o4H97G2ZN8FgZCZMzH', title: 'Photo Hunting (38)' },
      { id: 'hunt-39', url: 'https://lh3.googleusercontent.com/d/1CTFSER_bt_tsZyoq2Ou0fGfWgVOMvCDT', title: 'Photo Hunting (39)' },
      { id: 'hunt-40', url: 'https://lh3.googleusercontent.com/d/1UzOIJdLzLjKmeuhvbCeKhBe0mpkjaEtg', title: 'Photo Hunting (40)' },
      { id: 'hunt-41', url: 'https://lh3.googleusercontent.com/d/1nAyGOMzBbCd7jQk9CoEntpnf_C-8upuB', title: 'Photo Hunting (41)' },
      { id: 'hunt-42', url: 'https://lh3.googleusercontent.com/d/15YvxgjgfmSQgzCHBc82SD-7GVI6nzEK1', title: 'Photo Hunting (42)' },
      { id: 'hunt-43', url: 'https://lh3.googleusercontent.com/d/1ckq5ALG1dgWQRGkdFte8qtEzoItuE6Kn', title: 'Photo Hunting (43)' },
      { id: 'hunt-44', url: 'https://lh3.googleusercontent.com/d/1hFSEosPAI2XbkvVOOpzRXTo6CrnFWQjs', title: 'Photo Hunting (44)' },
      { id: 'hunt-45', url: 'https://lh3.googleusercontent.com/d/1xnsa6abUQ3TO41psGqSlSfJ6xlnYU-K6', title: 'Photo Hunting (45)' },
      { id: 'hunt-46', url: 'https://lh3.googleusercontent.com/d/1ElFeDLcYccfHpnRaaMDPxBDKskQi3cUr', title: 'Photo Hunting (46)' },
      { id: 'hunt-47', url: 'https://lh3.googleusercontent.com/d/1vEHcQRyJQx-r__SCKWkpzr4lgrVVC2dm', title: 'Photo Hunting (47)' },
      { id: 'hunt-48', url: 'https://lh3.googleusercontent.com/d/1jGZRpgdDk_i0hX4As86n0lC3fyCNGe2V', title: 'Photo Hunting (48)' }
    ]
  },
  'photo-4': {
    id: 'photo-4',
    category: 'photography',
    title: 'Dokumentasi Olahraga Elektro 2024 (OE PNJ)',
    image: 'https://lh3.googleusercontent.com/d/1rUCMYisoBsSywGcY0bcp_4vc1pMA_UIv',
    tags: ['Olahraga Elektro 2024', 'Dokumentasi Event', 'HME PNJ'],
    description: 'Dokumentasi fotografi resmi rangkaian acara Olahraga Elektro 2024 HME PNJ, meliput aksi pertandingan, antusiasme supporter, serta momen seremonial penutupan.',
    docLink: 'https://drive.google.com/drive/folders/1_K4NnYPc7GIIF6zW7Eea02amxWheghou',
    specs: [
      { label: 'Kegiatan', value: 'Olahraga Elektro 2024 (OE PNJ)' },
      { label: 'Peran', value: 'Divisi Publikasi & Dokumentasi' },
      { label: 'Cakupan Foto', value: 'Liputan Match, Supporter & Awarding' },
      { label: 'Lokasi', value: 'Gedung & Lapangan Olahraga PNJ' }
    ],
    gallery: [
      { id: 'oe-1', url: 'https://lh3.googleusercontent.com/d/1rUCMYisoBsSywGcY0bcp_4vc1pMA_UIv', title: 'Olahraga Elektro 2024 (1)' },
      { id: 'oe-2', url: 'https://lh3.googleusercontent.com/d/1JGu60xF1d_JSKb-z_9ygwuD6q6q5NPFK', title: 'Olahraga Elektro 2024 (10)' },
      { id: 'oe-3', url: 'https://lh3.googleusercontent.com/d/1MV8FFHsFjq8hJbbVEZFOhQWe9XpZrM3n', title: 'Olahraga Elektro 2024 (11)' },
      { id: 'oe-4', url: 'https://lh3.googleusercontent.com/d/1ZbVcerWVUwW9DDAGn9Y9Nu9wwlp813-s', title: 'Olahraga Elektro 2024 (12)' },
      { id: 'oe-5', url: 'https://lh3.googleusercontent.com/d/1ojbjuJ8uEqbZLvHNeTte0IuUFYfxIeF_', title: 'Olahraga Elektro 2024 (13)' },
      { id: 'oe-6', url: 'https://lh3.googleusercontent.com/d/1GlX3zv1lLbgicpVCjOiYhorsRki6LgMg', title: 'Olahraga Elektro 2024 (14)' },
      { id: 'oe-7', url: 'https://lh3.googleusercontent.com/d/1IkuEVRaNsNwhOA0IVwbmCmo8Oc9PeBr-', title: 'Olahraga Elektro 2024 (15)' },
      { id: 'oe-8', url: 'https://lh3.googleusercontent.com/d/1KfjKkKW5uxXCENNCHVBAKILR04UCuQWI', title: 'Olahraga Elektro 2024 (16)' },
      { id: 'oe-9', url: 'https://lh3.googleusercontent.com/d/1n9rXImHdhDHmAVzjsySaNYFzQalCt2Wd', title: 'Olahraga Elektro 2024 (17)' },
      { id: 'oe-10', url: 'https://lh3.googleusercontent.com/d/1fKZaSe9zHebrPN2OdVd_lidSoLIepE5f', title: 'Olahraga Elektro 2024 (18)' },
      { id: 'oe-11', url: 'https://lh3.googleusercontent.com/d/13I-adn0OUxwruPM7JqwWkHDBSgA4aWgD', title: 'Olahraga Elektro 2024 (19)' },
      { id: 'oe-12', url: 'https://lh3.googleusercontent.com/d/1XEacDRExdLAhSeZMC-02L0oxrk2YPj4B', title: 'Olahraga Elektro 2024 (2)' },
      { id: 'oe-13', url: 'https://lh3.googleusercontent.com/d/1_Ypl_YUOsglquRO8YEfPtWsxM5z2AHh6', title: 'Olahraga Elektro 2024 (20)' },
      { id: 'oe-14', url: 'https://lh3.googleusercontent.com/d/13U0Cuw6n6ppyfKgCbDW1brzHiFZGQM3N', title: 'Olahraga Elektro 2024 (21)' },
      { id: 'oe-15', url: 'https://lh3.googleusercontent.com/d/1HZ2l-2OtnCnMi2u_2gyfbRvpnKyyTQoo', title: 'Olahraga Elektro 2024 (22)' },
      { id: 'oe-16', url: 'https://lh3.googleusercontent.com/d/1o3yvejdnPFvAa_32z2bKSL121r-nnYOb', title: 'Olahraga Elektro 2024 (23)' },
      { id: 'oe-17', url: 'https://lh3.googleusercontent.com/d/16Rxf0LzdKYY7PK02x5iyV5wD7sa3I9k2', title: 'Olahraga Elektro 2024 (24)' },
      { id: 'oe-18', url: 'https://lh3.googleusercontent.com/d/17uzucgBs9PuEfBdoNdYsFqt6P_yDN-yL', title: 'Olahraga Elektro 2024 (25)' },
      { id: 'oe-19', url: 'https://lh3.googleusercontent.com/d/1uMZxl7g48utK4yz3v_qBazKR0xKd6GTc', title: 'Olahraga Elektro 2024 (26)' },
      { id: 'oe-20', url: 'https://lh3.googleusercontent.com/d/1QHSS1YahIk5_ShBeJ-3ssMZduJBzz9o5', title: 'Olahraga Elektro 2024 (27)' },
      { id: 'oe-21', url: 'https://lh3.googleusercontent.com/d/1pGoyBIT0ewRG5q1VashUkfvaMDO8YRcP', title: 'Olahraga Elektro 2024 (28)' },
      { id: 'oe-22', url: 'https://lh3.googleusercontent.com/d/1xoQbZldfYOILdtao9q0CYFmJId9S7Odi', title: 'Olahraga Elektro 2024 (29)' },
      { id: 'oe-23', url: 'https://lh3.googleusercontent.com/d/1_xZiOhiSPrdWvGUCRJH2i56BUmCnbgEx', title: 'Olahraga Elektro 2024 (3)' },
      { id: 'oe-24', url: 'https://lh3.googleusercontent.com/d/16HkAGelTxpAgtOsDxkW92gPCqziN0dPY', title: 'Olahraga Elektro 2024 (30)' },
      { id: 'oe-25', url: 'https://lh3.googleusercontent.com/d/1hfTZv3ZITjz59iK2us-LJubkbG99q_gw', title: 'Olahraga Elektro 2024 (31)' },
      { id: 'oe-26', url: 'https://lh3.googleusercontent.com/d/1YrBlaAhakGopXe5scDuVESqAe52QgpI3', title: 'Olahraga Elektro 2024 (32)' },
      { id: 'oe-27', url: 'https://lh3.googleusercontent.com/d/1c4ce8g14DTyS7Us7VnefrhOiYFbHpYx5', title: 'Olahraga Elektro 2024 (33)' },
      { id: 'oe-28', url: 'https://lh3.googleusercontent.com/d/1aS2B9-HRCe1Zmo4aHEDoXnVHr3jWAuKN', title: 'Olahraga Elektro 2024 (34)' },
      { id: 'oe-29', url: 'https://lh3.googleusercontent.com/d/1rineTj9qmtk2AlJiYz_IcK2eqqz9w_6y', title: 'Olahraga Elektro 2024 (35)' },
      { id: 'oe-30', url: 'https://lh3.googleusercontent.com/d/19ZfSbkDmUyuWkalhn5BJYcOENWF9FpKP', title: 'Olahraga Elektro 2024 (36)' },
      { id: 'oe-31', url: 'https://lh3.googleusercontent.com/d/1hNOJ7NbJwZtPlS2vZpf6sFKzZ4V5b9d2', title: 'Olahraga Elektro 2024 (37)' },
      { id: 'oe-32', url: 'https://lh3.googleusercontent.com/d/11bSep17RCAi7yOUvBYEEu0z9OX1b02_f', title: 'Olahraga Elektro 2024 (38)' },
      { id: 'oe-33', url: 'https://lh3.googleusercontent.com/d/1QwxfpSpB4WtdT0AR38dws0o415j-VGeX', title: 'Olahraga Elektro 2024 (39)' },
      { id: 'oe-34', url: 'https://lh3.googleusercontent.com/d/1I6-LDTbf6OB0IL4Atok63XXcaeOQwW0n', title: 'Olahraga Elektro 2024 (4)' },
      { id: 'oe-35', url: 'https://lh3.googleusercontent.com/d/1EhTcskAazBhBb3PrBIxVKlkY5jzkBCn_', title: 'Olahraga Elektro 2024 (40)' },
      { id: 'oe-36', url: 'https://lh3.googleusercontent.com/d/1DHKRTWVL3EK1shcNf18sBtl0cfa1PmmY', title: 'Olahraga Elektro 2024 (41)' },
      { id: 'oe-37', url: 'https://lh3.googleusercontent.com/d/1UagCVkt_EFHE4v7tCtmc7MtZkgbul8QY', title: 'Olahraga Elektro 2024 (42)' },
      { id: 'oe-38', url: 'https://lh3.googleusercontent.com/d/1hbBVP0mwo2LIkRR3mxvDfljRpcB5RCc1', title: 'Olahraga Elektro 2024 (43)' },
      { id: 'oe-39', url: 'https://lh3.googleusercontent.com/d/1FtfDUktCrJp0ZH0rsDu8mvYMJkiJ0UwL', title: 'Olahraga Elektro 2024 (44)' },
      { id: 'oe-40', url: 'https://lh3.googleusercontent.com/d/1jAtwpsO_Eme_d4ZxBJo-wdYBTNzKXoqp', title: 'Olahraga Elektro 2024 (45)' },
      { id: 'oe-41', url: 'https://lh3.googleusercontent.com/d/1h45GZTeqyPHjK9UR4raR6nl8Q5KiEQBF', title: 'Olahraga Elektro 2024 (46)' },
      { id: 'oe-42', url: 'https://lh3.googleusercontent.com/d/1GmHiDHGEaHKiCFVqLWgX26EUMoV3my1m', title: 'Olahraga Elektro 2024 (47)' },
      { id: 'oe-43', url: 'https://lh3.googleusercontent.com/d/1dl3O_zt7ua3LKsu2XNW24FRSSgF7GgCY', title: 'Olahraga Elektro 2024 (48)' },
      { id: 'oe-44', url: 'https://lh3.googleusercontent.com/d/1U-IUjLZdHd7BFsbszIdRpGwu8t2-mKEN', title: 'Olahraga Elektro 2024 (49)' },
      { id: 'oe-45', url: 'https://lh3.googleusercontent.com/d/1RfYKrfpFDA9Jy59dWa-x0CYHdRsg1VbL', title: 'Olahraga Elektro 2024 (5)' },
      { id: 'oe-46', url: 'https://lh3.googleusercontent.com/d/1bi0dGT41tSoqF-U5GYqGaLKGoCQc0kZo', title: 'Olahraga Elektro 2024 (50)' },
      { id: 'oe-47', url: 'https://lh3.googleusercontent.com/d/1fhxHKTghsj0pyo8NBJrn2W31t0lHRTfi', title: 'Olahraga Elektro 2024 (51)' },
      { id: 'oe-48', url: 'https://lh3.googleusercontent.com/d/1c95OOWnPVs9ZXq20bm3W_VUJfmm0P7HP', title: 'Olahraga Elektro 2024 (52)' },
      { id: 'oe-49', url: 'https://lh3.googleusercontent.com/d/1ujb7ipGzEoIwPugI_9TMTWR3drD-WBP1', title: 'Olahraga Elektro 2024 (53)' },
      { id: 'oe-50', url: 'https://lh3.googleusercontent.com/d/1cWMNptxmf2PWZt-dZ0iKNtageXjYMbwJ', title: 'Olahraga Elektro 2024 (54)' },
      { id: 'oe-51', url: 'https://lh3.googleusercontent.com/d/1bq99xVdQjVZvZH6qWWlJYyk-ilKKXQUJ', title: 'Olahraga Elektro 2024 (55)' },
      { id: 'oe-52', url: 'https://lh3.googleusercontent.com/d/1TAaMFKbYb0ii8A4uxfkXDp_WH4nSDzM3', title: 'Olahraga Elektro 2024 (56)' },
      { id: 'oe-53', url: 'https://lh3.googleusercontent.com/d/1qPGg8qIKOHZd6_R3vb8iVWVz_i0NM5aE', title: 'Olahraga Elektro 2024 (57)' },
      { id: 'oe-54', url: 'https://lh3.googleusercontent.com/d/1r9Mli2E8EdG4VUTwmijXXaYjn9DjBdpp', title: 'Olahraga Elektro 2024 (58)' },
      { id: 'oe-55', url: 'https://lh3.googleusercontent.com/d/1X3DqFWukxe18-gg2Uu86BUh7mypv7Dft', title: 'Olahraga Elektro 2024 (59)' },
      { id: 'oe-56', url: 'https://lh3.googleusercontent.com/d/1AXb-2AYsS0FEKtRkwFqZKe2Hbp1qKITU', title: 'Olahraga Elektro 2024 (6)' },
      { id: 'oe-57', url: 'https://lh3.googleusercontent.com/d/1Q2Oodi6XEMkH_fyVUM7a2cLUTBu_kjn_', title: 'Olahraga Elektro 2024 (60)' },
      { id: 'oe-58', url: 'https://lh3.googleusercontent.com/d/12mqKa1x1RZ65-mX8jurFObMfa19sMY3n', title: 'Olahraga Elektro 2024 (61)' },
      { id: 'oe-59', url: 'https://lh3.googleusercontent.com/d/1lkTzRcdDQRj1Zs0F_kawp3QzVP44OM5a', title: 'Olahraga Elektro 2024 (62)' },
      { id: 'oe-60', url: 'https://lh3.googleusercontent.com/d/1ArBntbp1_UpqKLDb1do5D0WDkmNRqAEE', title: 'Olahraga Elektro 2024 (63)' },
      { id: 'oe-61', url: 'https://lh3.googleusercontent.com/d/1CMj_y-gtlA603NaR6OGfWBLOVtd_mt5m', title: 'Olahraga Elektro 2024 (64)' },
      { id: 'oe-62', url: 'https://lh3.googleusercontent.com/d/1l_kIzKYrEmEjU1iC0cqxpucq2xAvlwN8', title: 'Olahraga Elektro 2024 (65)' },
      { id: 'oe-63', url: 'https://lh3.googleusercontent.com/d/1h6u6UY_ddn061Bm6xoAA2l1WDGCOIYQV', title: 'Olahraga Elektro 2024 (66)' },
      { id: 'oe-64', url: 'https://lh3.googleusercontent.com/d/16YyFZjw4QqZgNJS8xoVV5zc2JORw5RVB', title: 'Olahraga Elektro 2024 (67)' },
      { id: 'oe-65', url: 'https://lh3.googleusercontent.com/d/1RXVadQ0_OJgIc-7MSiL7N7GmqxWGTlr8', title: 'Olahraga Elektro 2024 (68)' },
      { id: 'oe-66', url: 'https://lh3.googleusercontent.com/d/11VpOIa8ecjs1quuaI8QuDGoaWzikjD71', title: 'Olahraga Elektro 2024 (69)' },
      { id: 'oe-67', url: 'https://lh3.googleusercontent.com/d/1jfYbAXLSUH79aklnmQJ3SFaQYm1f6TEj', title: 'Olahraga Elektro 2024 (7)' },
      { id: 'oe-68', url: 'https://lh3.googleusercontent.com/d/1wB6CDclPm9NQzkVlAYYfrX6WwGBuLH8b', title: 'Olahraga Elektro 2024 (70)' },
      { id: 'oe-69', url: 'https://lh3.googleusercontent.com/d/1r1lEKmvWXjZIHDjDjbHhbLNj0vfNhEa6', title: 'Olahraga Elektro 2024 (71)' },
      { id: 'oe-70', url: 'https://lh3.googleusercontent.com/d/10PZXhMHwN3n6S3cfb7VzrL5OeN7crAp-', title: 'Olahraga Elektro 2024 (72)' },
      { id: 'oe-71', url: 'https://lh3.googleusercontent.com/d/1JegWxBVBJdA-pYKMXH-tpz4FIpMDJIPf', title: 'Olahraga Elektro 2024 (73)' },
      { id: 'oe-72', url: 'https://lh3.googleusercontent.com/d/1v2Ej2SIsSQYcC7zrKciqT3Bl8rZUU1Om', title: 'Olahraga Elektro 2024 (74)' },
      { id: 'oe-73', url: 'https://lh3.googleusercontent.com/d/1l7_QIGnToX8mK2tCYZu_htIRFnnHVTAh', title: 'Olahraga Elektro 2024 (75)' },
      { id: 'oe-74', url: 'https://lh3.googleusercontent.com/d/1elnPJ3j4Dk7zm7A0AkhJBSrQ42qq1PvH', title: 'Olahraga Elektro 2024 (76)' },
      { id: 'oe-75', url: 'https://lh3.googleusercontent.com/d/1nJb6CzaMQmJYUGybspWZ2_AFYOo-VnpV', title: 'Olahraga Elektro 2024 (77)' },
      { id: 'oe-76', url: 'https://lh3.googleusercontent.com/d/1lZFnYbEpIqvTsBFZzWigUV3jhXOVfF91', title: 'Olahraga Elektro 2024 (78)' },
      { id: 'oe-77', url: 'https://lh3.googleusercontent.com/d/1e3tzmaPS6jpTJ2lkbSSQ--l6ulAHktUV', title: 'Olahraga Elektro 2024 (79)' },
      { id: 'oe-78', url: 'https://lh3.googleusercontent.com/d/106B4caXcCqbqa0w0VH9DI4ioiXf1kC5i', title: 'Olahraga Elektro 2024 (8)' },
      { id: 'oe-79', url: 'https://lh3.googleusercontent.com/d/1j58WELr4QwewfS22P-25rK0rzFM4INkX', title: 'Olahraga Elektro 2024 (80)' },
      { id: 'oe-80', url: 'https://lh3.googleusercontent.com/d/12RzC2GOS1afQ4j7-xb7E9Ea882FrigSw', title: 'Olahraga Elektro 2024 (81)' },
      { id: 'oe-81', url: 'https://lh3.googleusercontent.com/d/19s-mMxh1N493PmcOqau4KUsuDm4k37sx', title: 'Olahraga Elektro 2024 (82)' },
      { id: 'oe-82', url: 'https://lh3.googleusercontent.com/d/1Sx4ENJKrm7k58pUnjCLGwzXosZ4USrta', title: 'Olahraga Elektro 2024 (83)' },
      { id: 'oe-83', url: 'https://lh3.googleusercontent.com/d/1KKhf8Foem3__pZy1mdLWlIL1Ox9IQ-qZ', title: 'Olahraga Elektro 2024 (84)' },
      { id: 'oe-84', url: 'https://lh3.googleusercontent.com/d/1z1CocyKllqrkGvUtrb2_7OgWkm3OMBvs', title: 'Olahraga Elektro 2024 (9)' },
      { id: 'oe-85', url: 'https://lh3.googleusercontent.com/d/1AjD33SbeOqOGMl2E6DlM16J4UM5MctSn', title: 'Olahraga Elektro 2024 (PUBBBB)' }
    ]
  },
  'des-1': {
    id: 'des-1',
    category: 'design',
    title: 'Desain Banner Cetak Kelulusan Kustom',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    tags: ['Banner Cetak', 'Canva', 'Photoshop', 'Klien Freelance'],
    description: 'Pembuatan desain visual banner cetak khusus (custom banner) untuk acara selebrasi kelulusan akademik klien dengan komposisi warna kontras dan siap cetak.',
    docLink: 'https://drive.google.com/',
    specs: [
      { label: 'Format Output', value: 'Cetak Baliho / Spanduk CMYK' },
      { label: 'Software', value: 'Adobe Photoshop & Canva' },
      { label: 'Deliverable', value: 'File Siap Cetak Res Tinggi' },
      { label: 'Tahun Proyek', value: '2025 - 2026' }
    ],
    gallery: []
  },
  'des-4': {
    id: 'des-4',
    category: 'design',
    title: 'Portofolio Desain Grafis & Visual Psychorobotic',
    image: 'https://lh3.googleusercontent.com/d/1plTaT3xwKsPDfDs4d19fmbw6TzNmwKbH',
    tags: ['Psychorobotic PNJ', 'Kominfo', 'Desain Grafis', 'Feeds & Poster'],
    description: 'Perancangan dan pengelolaan materi visual digital, infografis robotika, template postingan Instagram, serta publikasi informasi untuk Kominfo KST Psychorobotic PNJ. Link Google Drive Portofolio Desain: https://drive.google.com/drive/folders/1MW-zqLVDPw4Wtqc5LLOj4cOjHaEPR4eq?usp=sharing',
    docLink: 'https://drive.google.com/drive/folders/1MW-zqLVDPw4Wtqc5LLOj4cOjHaEPR4eq?usp=sharing',
    specs: [
      { label: 'Organisasi', value: 'KSM Psychorobotic PNJ' },
      { label: 'Kategori Portofolio', value: 'Desain Grafis & Media Visual' },
      { label: 'Penyimpanan Drive', value: 'Google Drive Portfolio Link' },
      { label: 'Software Terpakai', value: 'Canva, Photoshop & ibis Paint X' }
    ],
    gallery: [
      { id: 'psy-des-1', url: 'https://lh3.googleusercontent.com/d/1R0dPo_eToychuTPxsE6P_EcRGbSLLbmQ', title: 'Psychorobotic (1)' },
      { id: 'psy-des-2', url: 'https://lh3.googleusercontent.com/d/1uDVOKgflYKX2b6JUWmz8mtUIa-wMCoIt', title: 'Psychorobotic (2)' },
      { id: 'psy-des-3', url: 'https://lh3.googleusercontent.com/d/1oW9mF0yA8uGP7g-o8zBv3Kbg1cykSOwS', title: 'Psychorobotic (3)' },
      { id: 'psy-des-4', url: 'https://lh3.googleusercontent.com/d/1wh6YDL4NcJgwywuHYGXyfHKEeJesNZcu', title: 'Psychorobotic (4)' },
      { id: 'psy-des-5', url: 'https://lh3.googleusercontent.com/d/1DzAOsnTXiVIqBkO3CzJDeDsk_VAGcBrS', title: 'Psychorobotic (5)' },
      { id: 'psy-des-6', url: 'https://lh3.googleusercontent.com/d/1oL8KwlmxUcMJD5FDA0fHbWeh5o9NugTm', title: 'Psychorobotic (6)' },
      { id: 'psy-des-7', url: 'https://lh3.googleusercontent.com/d/13lzl6sGEWtQe0J7ORlPlWoZv0mq5hHyk', title: 'Psychorobotic (7)' },
      { id: 'psy-des-8', url: 'https://lh3.googleusercontent.com/d/1FdeJ-ZiD2neGesSaLrKqeZ-wQpGitkin', title: 'Psychorobotic (8)' },
      { id: 'psy-des-9', url: 'https://lh3.googleusercontent.com/d/1RcREZ7y5p2llyLVn8F-7CZT8PD445t7T', title: 'Psychorobotic (9)' },
      { id: 'psy-des-10', url: 'https://lh3.googleusercontent.com/d/1wd8R52u3oIa5ji1jK8HqgFp3VxCdaY14', title: 'Psychorobotic (10)' },
      { id: 'psy-des-11', url: 'https://lh3.googleusercontent.com/d/1fBpoA6xOdVp9Z5ixYza_udAZ9OuAR61V', title: 'Psychorobotic (11)' },
      { id: 'psy-des-12', url: 'https://lh3.googleusercontent.com/d/1plTaT3xwKsPDfDs4d19fmbw6TzNmwKbH', title: 'Psychorobotic (12)' },
      { id: 'psy-des-13', url: 'https://lh3.googleusercontent.com/d/1lVfHRNn0RSjyAVC-2uH-gShs-ZXOY7JI', title: 'Psychorobotic (13)' },
      { id: 'psy-des-14', url: 'https://lh3.googleusercontent.com/d/1nGthU9c_bss6mNDapgZ_Sh3k3nT8CnKa', title: 'Psychorobotic (14)' },
      { id: 'psy-des-15', url: 'https://lh3.googleusercontent.com/d/1HTIaZzd2E3FlszFB15oYzcgC9TX-aRd5', title: 'Psychorobotic (15)' },
      { id: 'psy-des-16', url: 'https://lh3.googleusercontent.com/d/1ZzvgIGp5cXNfcQVfyhJZrsfKh4YELN6n', title: 'Psychorobotic (16)' },
      { id: 'psy-des-17', url: 'https://lh3.googleusercontent.com/d/1KGZ1X4bLgGFoOKJ-yG67BsQwGpM5Tx40', title: 'Psychorobotic (17)' },
      { id: 'psy-des-18', url: 'https://lh3.googleusercontent.com/d/1FnwZmK_cQtUxOI5uebmv3l1FxcBkPtAV', title: 'Psychorobotic (18)' },
      { id: 'psy-des-19', url: 'https://lh3.googleusercontent.com/d/1QzxnN599e8KHaMsLLZi3AYHQOIyoBgMk', title: 'Psychorobotic (19)' },
      { id: 'psy-des-20', url: 'https://lh3.googleusercontent.com/d/1jv11-cPIO7f8pGEArBo1EnGkMNL4ZBDE', title: 'Psychorobotic (20)' },
      { id: 'psy-des-21', url: 'https://lh3.googleusercontent.com/d/13AFl_Y2zGarfLSl1s528lsfTVJNbh_Mc', title: 'Psychorobotic (21)' },
      { id: 'psy-des-22', url: 'https://lh3.googleusercontent.com/d/1MZu1vXu1pUDOHAIhXK3Bwm0cenwHj8cd', title: 'Psychorobotic (22)' },
      { id: 'psy-des-23', url: 'https://lh3.googleusercontent.com/d/1Q132Mrd0uLdaws9rHOPdtXzEXSujUZAx', title: 'Psychorobotic (23)' },
      { id: 'psy-des-24', url: 'https://lh3.googleusercontent.com/d/1bzzvR4TLrHFJ8h8BQvKJDcIIcPZej3_d', title: 'Psychorobotic (24)' },
      { id: 'psy-des-25', url: 'https://lh3.googleusercontent.com/d/1SpuIE-CYxvsS6JRWG2mxDdqzWAe4Pgc5', title: 'Psychorobotic (25)' },
      { id: 'psy-des-26', url: 'https://lh3.googleusercontent.com/d/1oy9onFrYlOM5CWhJz92-GJ9b9_z9guD_', title: 'Psychorobotic (26)' },
      { id: 'psy-des-27', url: 'https://lh3.googleusercontent.com/d/16zcqULJpEEEhrN1ZcPENkAIAVWkQkrbH', title: 'Psychorobotic (27)' },
      { id: 'psy-des-28', url: 'https://lh3.googleusercontent.com/d/1RoRvmCYv4GQ9dIF0sxqYhdDprAqm4fwT', title: 'Psychorobotic (28)' },
      { id: 'psy-des-29', url: 'https://lh3.googleusercontent.com/d/1FoT36rSr2GuhRDRnr2DzoiFU9ymKICQ4', title: 'Psychorobotic (29)' },
      { id: 'psy-des-30', url: 'https://lh3.googleusercontent.com/d/1CnB2IOWuSTaKyAPzPtdr19gdWsUT_mEQ', title: 'Psychorobotic (30)' },
      { id: 'psy-des-31', url: 'https://lh3.googleusercontent.com/d/14OMA3TzNsvUTpkKutYxx-61ZLPyZh5cM', title: 'Psychorobotic (31)' }
    ]
  },
  'des-fraction': {
    id: 'des-fraction',
    category: 'design',
    title: 'Fraction 2024 (Wisuda TE PNJ)',
    image: 'https://lh3.googleusercontent.com/d/1MLZmwJyVrF5j24ZOzERTEM4hjISuHK9C',
    tags: ['Fraction 2024', 'Desain Grafis', 'Wisuda TE PNJ'],
    description: 'Portofolio karya desain grafis, dan dokumentasi Fraction 2024. Link Google Drive Portofolio Desain: https://drive.google.com/drive/folders/16ANdl0vBs7JVwluv6RIOTcAb1tsw5KO4?usp=sharing',
    docLink: 'https://drive.google.com/drive/folders/16ANdl0vBs7JVwluv6RIOTcAb1tsw5KO4?usp=sharing',
    specs: [
      { label: 'Proyek Acara', value: 'Fraction 2024 - Wisuda TE PNJ' },
      { label: 'Kategori Portofolio', value: 'Desain Grafis & Media Visual' },
      { label: 'Penyimpanan Drive', value: 'Google Drive Portfolio Link' },
      { label: 'Software Terpakai', value: 'Photoshop, Canva & Illustrator' }
    ],
    gallery: [
      { id: 'frac-des-1', url: 'https://lh3.googleusercontent.com/d/1Bsk0__0HmfW_Cuu5tIMJPMEFLEUQ0w0h', title: 'Fraction 2024 (1)' },
      { id: 'frac-des-2', url: 'https://lh3.googleusercontent.com/d/1bpAzZNTG6hKj42paPb4sj41qRKK4ZcAX', title: 'Fraction 2024 (2)' },
      { id: 'frac-des-3', url: 'https://lh3.googleusercontent.com/d/1tccZs891qGc-bjLtGpxJStWUzbgwCBKn', title: 'Fraction 2024 (3)' },
      { id: 'frac-des-4', url: 'https://lh3.googleusercontent.com/d/1MLZmwJyVrF5j24ZOzERTEM4hjISuHK9C', title: 'Fraction 2024 (4)' },
      { id: 'frac-des-5', url: 'https://lh3.googleusercontent.com/d/1bqEOIPYpjWZKYuW082-RQ8AWJeCgNEyk', title: 'Fraction 2024 (5)' },
      { id: 'frac-des-6', url: 'https://lh3.googleusercontent.com/d/1GzxUWfh64gf206mXSKNCSq12OYhFYYT2', title: 'Fraction 2024 (6)' },
      { id: 'frac-des-7', url: 'https://lh3.googleusercontent.com/d/1tJ0AckNYZz6N8pI2CgdrIvi7JEKlSZOY', title: 'Fraction 2024 (7)' },
      { id: 'frac-des-8', url: 'https://lh3.googleusercontent.com/d/1A7xKvAntvM2cf9kaC48EV6CUjfPkvGaM', title: 'Fraction 2024 (8)' },
      { id: 'frac-des-9', url: 'https://lh3.googleusercontent.com/d/1oXgQWJNS0u0bzKGElBv3u4VRgK5iP6Vl', title: 'Fraction 2024 (9)' },
      { id: 'frac-des-10', url: 'https://lh3.googleusercontent.com/d/1gSx7nPWWRZFiuP-TR1j029pHN6ueYKix', title: 'Fraction 2024 (10)' },
      { id: 'frac-des-11', url: 'https://lh3.googleusercontent.com/d/1WnfnBIDSEp0G5K3B61tzO_AaeMchOqDm', title: 'Fraction 2024 (11)' },
      { id: 'frac-des-12', url: 'https://lh3.googleusercontent.com/d/1TPuLORZic7EJ9TDeCdQeMdortV-rn5Z7', title: 'Fraction 2024 (12)' },
      { id: 'frac-des-13', url: 'https://lh3.googleusercontent.com/d/1nEKb_pTsBrZwEzKE2mc554IFmh0Zot5T', title: 'Fraction 2024 (13)' },
      { id: 'frac-des-14', url: 'https://lh3.googleusercontent.com/d/1bND4HJLFDSTqagqM9uM2SGQnUExfZhem', title: 'Fraction 2024 (14)' },
      { id: 'frac-des-15', url: 'https://lh3.googleusercontent.com/d/1Bu49Es0Cg2MNbaDRnItR6yKvLK273WCm', title: 'Fraction 2024 (15)' },
      { id: 'frac-des-16', url: 'https://lh3.googleusercontent.com/d/1PeJx2EpXtvjw3m7_2HEuP-n6fECbXvA9', title: 'Fraction 2024 (16)' },
      { id: 'frac-des-17', url: 'https://lh3.googleusercontent.com/d/1nhi-jyervZxsoJGsPGKSmp5ornY7hL1P', title: 'Fraction 2024 (17)' },
      { id: 'frac-des-18', url: 'https://lh3.googleusercontent.com/d/1TRNtdf8cata1lVOuWRTy2UwI7l9Ofiy_', title: 'Fraction 2024 (18)' },
      { id: 'frac-des-19', url: 'https://lh3.googleusercontent.com/d/1CFdx1uK1oXpl91Ank-BejJ569w3HaY8Q', title: 'Fraction 2024 (19)' }
    ]
  }
};

export const PROJECT_ORDER = Object.keys(PROJECTS_DATA);
export type { ProjectData, ProjectGalleryItem };

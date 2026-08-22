import { inView, animate, stagger, scroll } from 'motion';

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

const PROJECTS_DATA: Record<string, ProjectData> = {
  'org-1': {
    id: 'org-1',
    category: 'photography',
    title: 'Pengurus Departemen Kominfo - KSM PSYCHOROBOTIC PNJ',
    image: '/photos/RobotPenjagaTanaman.jpeg',
    tags: ['KSM PSYCHOROBOTIC PNJ', 'Kominfo', 'Media Visual', 'Dokumentasi'],
    description: 'Dokumentasi & rekam jejak sebagai Pengurus Departemen Kominfo KSM PSYCHOROBOTIC PNJ (Mar 2025 – Des 2025). Mengelola media komunikasi visual organisasi, merancang template feeds Instagram, poster kegiatan, serta dokumentasi karya & lomba robotika.',
    specs: [
      { label: 'Organisasi', value: 'KSM PSYCHOROBOTIC PNJ' },
      { label: 'Jabatan', value: 'Pengurus Departemen Kominfo' },
      { label: 'Periode Kerja', value: 'Maret 2025 – Desember 2025' },
      { label: 'Tanggung Jawab', value: 'Branding Visual, Content Feeds, & Dokum Robotika' }
    ],
    gallery: [
      { id: 'org1-1', url: '/photos/RobotPenjagaTanaman.jpeg', title: 'Dokumentasi Karya Robot Penjaga Tanaman Psychorobotic' },
      { id: 'org1-2', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', title: 'Desain Feeds & Media Visual Kominfo' }
    ]
  },
  'org-2': {
    id: 'org-2',
    category: 'design',
    title: 'Divisi Media Kreatif - E-TIME 2025 PNJ (Nasional)',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['E-TIME 2025 PNJ', 'Media Kreatif', 'Poster Nasional', 'Aftermovie'],
    description: 'Dokumentasi kegiatan Divisi Media Kreatif E-TIME 2025 PNJ (Mei 2025 – Jul 2025). Membuat aset visual lomba elektro tingkat nasional, poster publikasi, feeds, merchandise, e-certificate, serta produksi video aftermovie.',
    specs: [
      { label: 'Acara', value: 'E-TIME 2025 Politeknik Negeri Jakarta' },
      { label: 'Jabatan', value: 'Divisi Media Kreatif' },
      { label: 'Skala Acara', value: 'Perlombaan Nasional' },
      { label: 'Deliverable', value: 'Aset Visual, Poster, Feed, Certificate & Video' }
    ],
    gallery: [
      { id: 'org2-1', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', title: 'Dokumentasi Aset Media Kreatif E-TIME 2025' },
      { id: 'org2-2', url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80', title: 'Desain Poster & Layout Lomba E-TIME' }
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
    title: 'Divisi PDD - Fraction 2024 (Wisuda Teknik Elektro PNJ)',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    tags: ['Fraction 2024', 'Wisuda TE PNJ', 'Divisi PDD', 'Layout & Video'],
    description: 'Dokumentasi kegiatan Divisi Publikasi, Dokumentasi & Desain Fraction 2024 (Ags 2024 – Okt 2024). Mengelola publikasi media sosial, dokumentasi foto & video wisuda jurusan Teknik Elektro PNJ, serta perancangan aset visual & layout dekorasi acara.',
    specs: [
      { label: 'Acara', value: 'Fraction 2024 - Wisuda TE PNJ' },
      { label: 'Jabatan', value: 'Divisi PDD (Publikasi, Dokum & Desain)' },
      { label: 'Periode', value: 'Agustus 2024 – Oktober 2024' },
      { label: 'Aktivitas', value: 'Foto/Video Wisuda, Social Media & Banner Layout' }
    ],
    gallery: [
      { id: 'org4-1', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', title: 'Dokumentasi Momen Wisuda Fraction 2024' },
      { id: 'org4-2', url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80', title: 'Perancangan Banner & Visual Layout Wisuda' }
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
    image: '/Photo and design project/graduation photo/1000187779.jpg.jpeg',
    tags: ['Graduation', 'Directing & Shooting', 'Lightroom'],
    description: 'Layanan fotografi profesional independen untuk momen selebrasi kelulusan akademik dan pasca-sidang di Jabodetabek, mencakup pengarahan gaya, pencahayaan, dan retouching warna di Adobe Lightroom.',
    docLink: 'https://drive.google.com/',
    specs: [
      { label: 'Kategori', value: 'Portret Kelulusan / Sidang' },
      { label: 'Perangkat', value: 'Kamera Profesional & Lensa Prime' },
      { label: 'Proses Edit', value: 'Retouching Adobe Lightroom' },
      { label: 'Area Layanan', value: 'Jabodetabek (2023 - Sekarang)' }
    ],
    gallery: [
      { id: 'grad-1', url: '/Photo and design project/graduation photo/1000187779.jpg.jpeg', title: 'Dokumentasi Fotografi Kelulusan Akademik 1' },
      { id: 'grad-2', url: '/Photo and design project/graduation photo/1000199045.jpg.jpeg', title: 'Dokumentasi Fotografi Kelulusan Akademik 2' },
      { id: 'grad-3', url: '/Photo and design project/graduation photo/1000199300.jpg.jpeg', title: 'Dokumentasi Fotografi Kelulusan Akademik 3' },
      { id: 'grad-4', url: '/Photo and design project/graduation photo/1000199564.jpg.jpeg', title: 'Dokumentasi Fotografi Kelulusan Akademik 4' }
    ]
  },
  'photo-2': {
    id: 'photo-2',
    category: 'design',
    title: 'Aset & Media Kreatif E-TIME 2025 PNJ',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['E-TIME 2025', 'Media Kreatif', 'Aset Editing', 'Desain Visual'],
    description: 'Perancangan dan editing aset visual digital, poster perlombaan nasional, feed sosial media, serta kebutuhan desain media kreatif E-TIME 2025 Politeknik Negeri Jakarta.',
    docLink: 'https://drive.google.com/',
    specs: [
      { label: 'Acara', value: 'E-TIME 2025 PNJ' },
      { label: 'Peran', value: 'Divisi Media Kreatif' },
      { label: 'Cakupan Kerja', value: 'Editing Aset Visual, Poster & Content' },
      { label: 'Software', value: 'Photoshop, Illustrator, Canva, ibis Paint X' }
    ],
    gallery: []
  },
  'photo-3': {
    id: 'photo-3',
    category: 'photography',
    title: 'Foto Personal Project (Photo Hunting)',
    image: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
    tags: ['Personal Project', 'Photo Hunting', 'Street & Landscape'],
    description: 'Koleksi karya fotografi personal yang ditangkap saat aktivitas photo hunting, mengeksplorasi sudut pandang street photography, human interest, serta keindahan arsitektur dan alam.',
    docLink: 'https://drive.google.com/',
    specs: [
      { label: 'Kategori', value: 'Personal Project / Hunting' },
      { label: 'Genre', value: 'Street, Human Interest & Landscape' },
      { label: 'Peralatan', value: 'Kamera Mirrorless & Lensa Prime/Zoom' },
      { label: 'Pengolahan', value: 'Adobe Lightroom Color Grading' }
    ],
    gallery: []
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
    title: 'Kominfo Psychorobotic - Feeds & Konten Digital',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Kominfo', 'Psychorobotic PNJ', 'Feeds & Desain'],
    description: 'Perancangan dan pengelolaan materi visual digital, infografis robotika, template postingan Instagram, serta publikasi informasi untuk Kominfo KST Psychorobotic PNJ.',
    docLink: 'https://www.instagram.com/psychorobotic_pnj/',
    specs: [
      { label: 'Organisasi', value: 'KST Psychorobotic PNJ' },
      { label: 'Divisi', value: 'Komunikasi & Informasi (Kominfo)' },
      { label: 'Output Design', value: 'Feeds, Stories, Poster & Infografis' },
      { label: 'Software', value: 'Canva, Photoshop, ibis Paint X' }
    ],
    gallery: []
  }
};

// Helper Toast Notification (Framer Motion)
function showToast(title: string, message: string, icon: string = 'check_circle') {
  const toast = document.getElementById('custom-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMessage = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastTitle || !toastMessage || !toastIcon) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toastIcon.textContent = icon;

  toast.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
  animate(
    toast,
    { opacity: [0, 1], y: [-16, 0], scale: [0.92, 1] } as any,
    { duration: 0.35, ease: [0.16, 1, 0.3, 1] } as any
  );

  setTimeout(() => {
    animate(
      toast,
      { opacity: [1, 0], y: [0, -12], scale: [1, 0.94] } as any,
      { duration: 0.25, ease: [0.16, 1, 0.3, 1] } as any
    ).finished.then(() => {
      toast.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
    });
  }, 3500);
}

// Global Framer Motion Modal Animations
export function animateModalOpen(modal: HTMLElement | null) {
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.style.opacity = '0';
  const backdrop = modal;
  const dialog = (modal.firstElementChild as HTMLElement) || modal;

  animate(backdrop, { opacity: [0, 1] } as any, { duration: 0.25, ease: 'easeOut' } as any);
  if (dialog && dialog !== backdrop) {
    animate(
      dialog,
      { opacity: [0, 1], scale: [0.88, 1], y: [24, 0] } as any,
      { duration: 0.38, ease: [0.16, 1, 0.3, 1] } as any
    );
  }
  document.body.style.overflow = 'hidden';
}

export function animateModalClose(modal: HTMLElement | null, callback?: () => void) {
  if (!modal) return;
  const dialog = (modal.firstElementChild as HTMLElement) || modal;

  if (dialog && dialog !== modal) {
    animate(
      dialog,
      { opacity: [1, 0], scale: [1, 0.92], y: [0, 12] } as any,
      { duration: 0.2, ease: [0.16, 1, 0.3, 1] } as any
    );
  }

  animate(modal, { opacity: [1, 0] } as any, { duration: 0.2, ease: 'easeIn' } as any).finished.then(() => {
    modal.classList.add('hidden');
    modal.style.opacity = '';
    if (dialog && dialog !== modal) {
      dialog.style.opacity = '';
      dialog.style.transform = '';
    }
    document.body.style.overflow = '';
    if (callback) callback();
  });
}

// Initialize Application Logic
// Dipanggil dari useEffect di pages/index.tsx (client-side only), menggantikan
// listener 'DOMContentLoaded' versi Vite karena di Next.js komponen sudah pasti
// ter-mount ke DOM saat useEffect berjalan.
let isPortfolioInitialized = false;

export function initPortfolio() {
  // Guard supaya listener tidak didaftarkan dua kali (mis. React StrictMode
  // memanggil useEffect dua kali di development).
  if (isPortfolioInitialized) return;
  isPortfolioInitialized = true;

  setupNavigation();
  setupFilters();
  setupPhotoFilters();
  setupCreateFolderManager();
  setupDeleteFolderListener();
  setupPhotoGalleryUploadManager();
  setupDeleteAlbumPhotoListener();
  setupModals();
  setupImageLightboxModal();
  setupContactForm();
  setupInteractiveEffects();
  setupThemeToggle();
  setupScrollSpy();
  setupScrollAnimations();
  setupBackToTop();

  // Initial renders for Custom Folders & Upload Dropdown
  renderCustomFolderCards();
  populateUploadAlbumDropdown();
}

// 1. Smooth Navigation & Section Scrolling
function setupNavigation() {
  const navButtons = document.querySelectorAll<HTMLElement>('[data-tab]');
  const mobileMenu = document.getElementById('mobile-menu');

  function scrollToSection(tabId: string) {
    const targetSection = document.getElementById(`section-${tabId}`) || document.getElementById(tabId);
    if (targetSection) {
      const headerOffset = 80;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Close mobile menu if open
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }

  // Attach click listeners to all tab buttons
  navButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.getAttribute('data-tab');
      if (tabId) scrollToSection(tabId);
    });
  });

  // Brand button goes to home
  const brandBtn = document.getElementById('nav-brand');
  brandBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('home');
  });

  // Mobile menu trigger toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  mobileToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });
}

// 2. ScrollSpy for Active Navigation Link Highlighting
function setupScrollSpy() {
  const sections = ['home', 'experience', 'projects', 'certifications', 'design-photo', 'skills', 'contact'];
  const navLinks = document.querySelectorAll('.nav-btn, .mobile-nav-btn');

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 150;

    let currentSection = 'home';
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = sectionId;
        }
      }
    });

    navLinks.forEach((link) => {
      const tabAttr = link.getAttribute('data-tab');
      if (tabAttr === currentSection) {
        link.classList.add('active-nav-link');
      } else {
        link.classList.remove('active-nav-link');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

// 3. Project Category Filters & Search in Projects Section
function setupFilters() {
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.project-filter-btn');
  const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
  const categoryBlocks = document.querySelectorAll<HTMLElement>('.project-category-block');
  const searchInput = document.getElementById('project-search-input') as HTMLInputElement;

  let activeFilter = 'all';
  let searchQuery = '';

  function applyProjectFiltering() {
    let matchCount = 0;
    const visibleCards: HTMLElement[] = [];

    projectCards.forEach((card) => {
      const categories = (card.getAttribute('data-category') || '').toLowerCase().split(' ');
      const searchData = (card.getAttribute('data-search') || '').toLowerCase() + ' ' + (card.textContent || '').toLowerCase();

      const matchesCat = activeFilter === 'all' || categories.includes(activeFilter.toLowerCase());
      const matchesSearch = !searchQuery || searchData.includes(searchQuery.toLowerCase());

      if (matchesCat && matchesSearch) {
        card.classList.remove('hidden');
        visibleCards.push(card);
        matchCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (visibleCards.length > 0) {
      animate(
        visibleCards,
        { opacity: [0, 1], scale: [0.92, 1], y: [20, 0] } as any,
        { duration: 0.45, delay: stagger(0.04), ease: [0.16, 1, 0.3, 1] } as any
      );
    }

    categoryBlocks.forEach((block) => {
      const visibleCardsInBlock = block.querySelectorAll('.project-card:not(.hidden)');
      if (visibleCardsInBlock.length > 0) {
        block.classList.remove('hidden');
      } else {
        block.classList.add('hidden');
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.getAttribute('data-filter') || 'all';

      // Button click scale pulse
      animate(btn, { scale: [0.92, 1.06, 1] } as any, { duration: 0.3, ease: [0.16, 1, 0.3, 1] } as any);

      // Update filter button styles
      filterBtns.forEach((b) => {
        b.classList.remove('bg-secondary', 'text-black', 'font-extrabold', 'shadow-lg');
        b.classList.add('bg-white/10', 'text-white/80', 'hover:bg-white/20', 'hover:text-white', 'border', 'border-white/15');
      });
      btn.classList.remove('bg-white/10', 'text-white/80', 'hover:bg-white/20', 'hover:text-white', 'border', 'border-white/15');
      btn.classList.add('bg-secondary', 'text-black', 'font-extrabold', 'shadow-lg');

      applyProjectFiltering();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value.trim();
    applyProjectFiltering();
  });
}

// 3b. Photo & Design Gallery Category Filters & Upload Manager
interface UploadedGalleryItem {
  id: string;
  title: string;
  category: 'graduation' | 'event' | 'banner' | 'feeds';
  categoryLabel: string;
  description: string;
  imageSrc: string;
  timestamp: number;
}

function setupPhotoFilters() {
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.photo-filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-photo-filter');

      filterBtns.forEach((b) => {
        b.classList.remove('bg-secondary', 'text-black', 'font-extrabold', 'shadow-lg');
        b.classList.add('bg-white/10', 'text-white/80', 'hover:bg-white/20', 'hover:text-white', 'border', 'border-white/15');
      });
      btn.classList.remove('bg-white/10', 'text-white/80', 'hover:bg-white/20', 'hover:text-white', 'border', 'border-white/15');
      btn.classList.add('bg-secondary', 'text-black', 'font-extrabold', 'shadow-lg');

      const allGalleryCards = document.querySelectorAll<HTMLElement>('.gallery-card');
      let visibleIdx = 0;
      allGalleryCards.forEach((card) => {
        const isUserUpload = card.classList.contains('user-upload-card');
        const cat = card.getAttribute('data-photo-cat');
        
        let matches = false;
        if (filter === 'all') {
          matches = true;
        } else if (isUserUpload && cat === filter) {
          matches = true;
        } else if (!isUserUpload && card.classList.contains(`photo-cat-${filter}`)) {
          matches = true;
        }

        if (matches) {
          card.classList.remove('hidden');
          animate(
            card,
            { opacity: [0, 1], scale: [0.92, 1], y: [20, 0] } as any,
            { duration: 0.35, delay: visibleIdx * 0.04, ease: [0.16, 1, 0.3, 1] } as any
          );
          visibleIdx++;
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Custom Folder Data & Storage Engine
interface CustomFolder {
  id: string;
  name: string;
  category: 'graduation' | 'event' | 'banner' | 'feeds';
  description: string;
  coverUrl: string;
  createdAt: number;
}

const CUSTOM_FOLDERS_STORAGE_KEY = 'helmi_custom_folders';

function getCustomFolders(): CustomFolder[] {
  try {
    const saved = localStorage.getItem(CUSTOM_FOLDERS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCustomFolders(folders: CustomFolder[]) {
  try {
    localStorage.setItem(CUSTOM_FOLDERS_STORAGE_KEY, JSON.stringify(folders));
  } catch (err) {
    console.warn('Gagal menyimpan custom folders:', err);
  }
}

function getCategoryLabel(catKey: string): string {
  const labels: Record<string, string> = {
    graduation: 'Fotografi Kelulusan',
    event: 'Dokumentasi Event',
    banner: 'Desain Banner & Cetak',
    feeds: 'Feeds & Instagram'
  };
  return labels[catKey] || 'Media Kreatif';
}

function getFolderData(folderId: string): ProjectData | null {
  if (PROJECTS_DATA[folderId]) {
    return PROJECTS_DATA[folderId];
  }

  const customFolders = getCustomFolders();
  const folder = customFolders.find((f) => f.id === folderId);
  if (folder) {
    return {
      id: folder.id,
      category: 'photography',
      title: folder.name,
      tags: [getCategoryLabel(folder.category), 'Folder Kustom'],
      image: folder.coverUrl,
      description: folder.description || 'Folder album foto kustom buatan pengguna.',
      specs: [
        { label: 'Kategori Folder', value: getCategoryLabel(folder.category) },
        { label: 'Tipe Album', value: 'Folder Foto Kustom' },
        { label: 'Tanggal Dibuat', value: new Date(folder.createdAt).toLocaleDateString('id-ID') }
      ],
      gallery: []
    };
  }
  return null;
}

function populateUploadAlbumDropdown() {
  const albumSelect = document.getElementById('upload-album-id') as HTMLSelectElement;
  if (!albumSelect) return;

  const currentVal = albumSelect.value;
  albumSelect.innerHTML = `
    <optgroup label="🎴 Kartu Pengalaman Organisasi & Kepanitiaan">
      <option value="org-1">🔴 UNO Card: Pengurus Kominfo - KSM PSYCHOROBOTIC PNJ</option>
      <option value="org-2">🟡 UNO Card: Divisi Media Kreatif - E-TIME 2025 PNJ</option>
      <option value="org-3">🟢 UNO Card: Divisi Publikasi & Dokum - Olahraga Elektro 2024</option>
      <option value="org-4">⚫ UNO Card: Divisi PDD - Fraction 2024 Wisuda PNJ</option>
    </optgroup>
    <optgroup label="🖼️ Galeri Foto & Desain">
      <option value="photo-1">📷 Card: Fotografi Kelulusan Akademik & Sidang</option>
      <option value="photo-2">🎨 Card: Aset & Media Kreatif E-TIME 2025 PNJ</option>
      <option value="des-1">🖼️ Card: Desain Banner Cetak Kelulusan Kustom</option>
      <option value="photo-3">📸 Card: Foto Personal Project (Photo Hunting)</option>
      <option value="des-4">📱 Card: Kominfo Psychorobotic - Feeds & Konten</option>
      <option value="photo-4">⚽ Card: Dokumentasi Olahraga Elektro 2024 (OE PNJ)</option>
    </optgroup>
  `;

  const customFolders = getCustomFolders();
  if (customFolders.length > 0) {
    const optGroup = document.createElement('optgroup');
    optGroup.label = '📁 Folder Album Buatan Anda';
    customFolders.forEach((f) => {
      const opt = document.createElement('option');
      opt.value = f.id;
      opt.textContent = `📁 Folder: ${f.name}`;
      optGroup.appendChild(opt);
    });
    albumSelect.appendChild(optGroup);
  }

  if (currentVal && Array.from(albumSelect.options).some((o) => o.value === currentVal)) {
    albumSelect.value = currentVal;
  }
}

function renderCustomFolderCards() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  // Remove existing user custom folder cards before re-rendering
  galleryGrid.querySelectorAll('.user-custom-folder-card').forEach((el) => el.remove());

  const customFolders = getCustomFolders();
  customFolders.forEach((folder) => {
    const photos = getCardAlbumPhotos(folder.id);
    const catClass = `photo-cat-${folder.category}`;

    const folderCard = document.createElement('div');
    folderCard.className = `gallery-card user-custom-folder-card ${catClass} glass-card rounded-2xl overflow-hidden group border border-secondary/50 hover:border-secondary transition-all duration-300 flex flex-col shadow-xl relative`;
    folderCard.setAttribute('data-folder-id', folder.id);

    const displayThumbs = photos.slice(0, 4);
    const thumbsHtml = displayThumbs
      .map(
        (p) => `
        <div class="w-10 h-10 rounded-md overflow-hidden border border-white/20 shrink-0 bg-black/40">
          <img src="${p.url}" alt="${p.title || 'Preview'}" referrerpolicy="no-referrer" class="w-full h-full object-cover">
        </div>
      `
      )
      .join('');

    folderCard.innerHTML = `
      <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="${folder.id}">
        <img src="${folder.coverUrl}" alt="${folder.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
          <div class="flex items-center justify-between">
            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">folder</span>
              <span>${getCategoryLabel(folder.category)}</span>
            </span>
            <span id="card-badge-${folder.id}" class="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
              ${photos.length} Foto
            </span>
          </div>
          <div>
            <div class="flex items-center gap-1.5 mb-1 text-secondary">
              <span class="material-symbols-outlined text-lg">folder_open</span>
              <span class="text-xs font-bold uppercase tracking-wider">Folder Album Foto</span>
            </div>
            <h3 class="text-xl font-extrabold text-white group-hover:text-secondary transition-colors">${folder.name}</h3>
          </div>
        </div>
        <button type="button" data-delete-folder-id="${folder.id}" class="delete-folder-btn absolute top-3 right-3 bg-red-600/90 text-white p-1.5 rounded-full hover:bg-red-700 transition-all text-xs font-bold shadow-md z-20" title="Hapus Folder Ini">
          <span class="material-symbols-outlined text-sm">delete</span>
        </button>
      </div>

      <div class="p-5 flex-grow flex flex-col justify-between gap-4">
        <p class="text-white/80 text-sm leading-relaxed line-clamp-2">${folder.description || 'Folder album foto kustom.'}</p>
        
        <div class="space-y-3 pt-2 border-t border-white/10">
          <div class="flex items-center justify-between text-xs text-white/60">
            <span class="font-semibold">Pratinjau Foto Album:</span>
            <span class="text-secondary font-bold">${photos.length} item</span>
          </div>
          <div id="card-thumbnails-${folder.id}" class="flex items-center gap-1.5 overflow-x-auto pb-1">
            ${thumbsHtml || '<span class="text-xs text-white/40 italic">Belum ada foto</span>'}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 pt-1">
          <button data-project-id="${folder.id}" class="open-project-modal-btn py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-sm">folder_open</span>
            <span>Buka Folder</span>
          </button>
          <button data-target-album="${folder.id}" class="open-upload-modal-btn py-2.5 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-sm">add_photo_alternate</span>
            <span>+ Foto</span>
          </button>
        </div>
      </div>
    `;

    galleryGrid.prepend(folderCard);
  });
}

// Listener for Deleting Custom User Folders
function setupDeleteFolderListener() {
  document.addEventListener('click', (e) => {
    const deleteFolderBtn = (e.target as HTMLElement).closest<HTMLElement>('.delete-folder-btn');
    if (deleteFolderBtn) {
      e.stopPropagation();
      const folderId = deleteFolderBtn.getAttribute('data-delete-folder-id');
      if (folderId && confirm('Apakah Anda yakin ingin menghapus folder album ini? Semua foto di dalamnya akan ikut terhapus.')) {
        let folders = getCustomFolders();
        folders = folders.filter((f) => f.id !== folderId);
        saveCustomFolders(folders);

        localStorage.removeItem('helmi_album_photos_' + folderId);

        renderCustomFolderCards();
        populateUploadAlbumDropdown();
        showToast('Folder Dihapus', 'Folder album foto telah berhasil dihapus.', 'delete');
      }
    }
  });
}

// Setup Create Folder Manager Modal
function setupCreateFolderManager() {
  const folderModal = document.getElementById('create-folder-modal');
  const openFolderBtn = document.getElementById('open-create-folder-modal-btn');
  const closeFolderBtn = document.getElementById('close-folder-modal-btn');
  const cancelFolderBtn = document.getElementById('cancel-folder-btn');
  const folderForm = document.getElementById('create-folder-form') as HTMLFormElement;

  const dropzone = document.getElementById('folder-cover-dropzone');
  const fileInput = document.getElementById('folder-cover-file-input') as HTMLInputElement;
  const previewContainer = document.getElementById('folder-cover-preview-container');
  const previewImg = document.getElementById('folder-cover-preview-img') as HTMLImageElement;
  const removeCoverBtn = document.getElementById('remove-folder-cover-btn');

  let selectedCoverUrl: string | null = null;

  function openModal() {
    animateModalOpen(folderModal);
  }

  function closeModal() {
    animateModalClose(folderModal, resetForm);
  }

  function resetForm() {
    folderForm?.reset();
    selectedCoverUrl = null;
    previewContainer?.classList.add('hidden');
    dropzone?.classList.remove('hidden');
    if (fileInput) fileInput.value = '';
  }

  openFolderBtn?.addEventListener('click', openModal);
  closeFolderBtn?.addEventListener('click', closeModal);
  cancelFolderBtn?.addEventListener('click', closeModal);

  folderModal?.addEventListener('click', (e) => {
    if (e.target === folderModal) closeModal();
  });

  dropzone?.addEventListener('click', () => fileInput?.click());

  dropzone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('border-secondary', 'bg-white/10');
  });

  dropzone?.addEventListener('dragleave', () => {
    dropzone.classList.remove('border-secondary', 'bg-white/10');
  });

  dropzone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('border-secondary', 'bg-white/10');
    if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
      handleCoverSelected(e.dataTransfer.files[0]);
    }
  });

  fileInput?.addEventListener('change', () => {
    if (fileInput.files && fileInput.files[0]) {
      handleCoverSelected(fileInput.files[0]);
    }
  });

  removeCoverBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    selectedCoverUrl = null;
    previewContainer?.classList.add('hidden');
    dropzone?.classList.remove('hidden');
    if (fileInput) fileInput.value = '';
  });

  function handleCoverSelected(file: File) {
    if (!file.type.startsWith('image/')) {
      showToast('Format Salah', 'Harap pilih file berformat gambar (JPG, PNG, WEBP).', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      selectedCoverUrl = e.target?.result as string;
      if (previewImg && previewContainer && dropzone) {
        previewImg.src = selectedCoverUrl;
        previewContainer.classList.remove('hidden');
        dropzone.classList.add('hidden');
      }
    };
    reader.readAsDataURL(file);
  }

  folderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('folder-name') as HTMLInputElement).value.trim();
    const category = (document.getElementById('folder-category') as HTMLSelectElement).value as any;
    const description = (document.getElementById('folder-desc') as HTMLTextAreaElement).value.trim();

    const defaultCovers: Record<string, string> = {
      graduation: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      event: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      banner: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      feeds: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    };

    const newFolder: CustomFolder = {
      id: 'custom-folder-' + Date.now(),
      name,
      category,
      description,
      coverUrl: selectedCoverUrl || defaultCovers[category] || defaultCovers.graduation,
      createdAt: Date.now()
    };

    const folders = getCustomFolders();
    folders.unshift(newFolder);
    saveCustomFolders(folders);

    renderCustomFolderCards();
    populateUploadAlbumDropdown();

    closeModal();
    showToast('Folder Berhasil Dibuat!', `Folder "${name}" telah ditambahkan ke galeri.`, 'create_new_folder');
  });
}

// Card Album Photo Helper Logic
let currentOpenProjectId: string | null = null;

function getCardAlbumPhotos(albumId: string): ProjectGalleryItem[] {
  const baseGallery = PROJECTS_DATA[albumId]?.gallery || [];
  try {
    const saved = localStorage.getItem('helmi_album_photos_' + albumId);
    const userUploaded: ProjectGalleryItem[] = saved ? JSON.parse(saved) : [];
    return [...baseGallery, ...userUploaded];
  } catch {
    return [...baseGallery];
  }
}

function saveCardAlbumUserPhotos(albumId: string, userPhotos: ProjectGalleryItem[]) {
  try {
    localStorage.setItem('helmi_album_photos_' + albumId, JSON.stringify(userPhotos));
  } catch (err) {
    console.warn('Gagal menyimpan album foto ke localStorage:', err);
  }
}

function getUserUploadedAlbumPhotos(albumId: string): ProjectGalleryItem[] {
  try {
    const saved = localStorage.getItem('helmi_album_photos_' + albumId);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function renderCardMainPagePreviews(albumId: string) {
  const photos = getCardAlbumPhotos(albumId);
  const badgeEl = document.getElementById(`card-badge-${albumId}`);
  const thumbStrip = document.getElementById(`card-thumbnails-${albumId}`);

  if (badgeEl) {
    badgeEl.textContent = `${photos.length} Foto`;
  }

  if (thumbStrip) {
    thumbStrip.innerHTML = '';
    const displayPhotos = photos.slice(0, 4);
    displayPhotos.forEach((p) => {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'w-10 h-10 rounded-md overflow-hidden border border-white/20 shrink-0 bg-black/40';
      imgContainer.innerHTML = `<img src="${p.url}" alt="${p.title || 'Preview'}" referrerpolicy="no-referrer" class="w-full h-full object-cover">`;
      thumbStrip.appendChild(imgContainer);
    });
  }
}

function renderModalGalleryGrid(albumId: string) {
  const galleryGrid = document.getElementById('modal-gallery-grid');
  const countBadge = document.getElementById('modal-gallery-count');
  if (!galleryGrid) return;

  const photos = getCardAlbumPhotos(albumId);

  if (countBadge) {
    countBadge.textContent = `${photos.length} Foto`;
  }

  galleryGrid.innerHTML = '';

  if (photos.length === 0) {
    galleryGrid.innerHTML = `
      <div class="col-span-full py-8 text-center text-white/50 text-sm italic">
        Belum ada foto dalam album card ini. Klik "Tambah Foto" di atas untuk menambahkan.
      </div>
    `;
    return;
  }

  photos.forEach((photo) => {
    const card = document.createElement('div');
    card.className = 'relative group rounded-xl overflow-hidden border border-white/15 bg-black/40 h-28 cursor-pointer open-lightbox-btn transition-all hover:border-secondary shadow-md';
    card.setAttribute('data-img', photo.url);
    card.setAttribute('data-title', photo.title || 'Hasil Foto Portofolio');

    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.title || 'Gallery'}" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
      <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center gap-1">
        <span class="material-symbols-outlined text-secondary text-2xl">zoom_in</span>
        <span class="text-[10px] font-bold text-white line-clamp-1 leading-tight">${photo.title || 'Perbesar Foto'}</span>
      </div>
      ${
        photo.isUploaded
          ? `
        <button type="button" data-delete-photo-id="${photo.id}" data-album-id="${albumId}" class="delete-album-photo-btn absolute top-1.5 right-1.5 bg-red-600/90 text-white p-1 rounded-full hover:bg-red-700 transition-all text-xs font-bold shadow-lg z-20" title="Hapus foto ini dari album">
          <span class="material-symbols-outlined text-xs">close</span>
        </button>
      `
          : ''
      }
    `;

    galleryGrid.appendChild(card);
  });
}

// Global Listener for Deleting Photos inside Modal Album Grid
function setupDeleteAlbumPhotoListener() {
  document.addEventListener('click', (e) => {
    const deleteBtn = (e.target as HTMLElement).closest<HTMLElement>('.delete-album-photo-btn');
    if (deleteBtn) {
      e.stopPropagation();
      const photoId = deleteBtn.getAttribute('data-delete-photo-id');
      const albumId = deleteBtn.getAttribute('data-album-id');

      if (photoId && albumId && confirm('Apakah Anda yakin ingin menghapus foto ini dari album card?')) {
        let userPhotos = getUserUploadedAlbumPhotos(albumId);
        userPhotos = userPhotos.filter((p) => p.id !== photoId);
        saveCardAlbumUserPhotos(albumId, userPhotos);

        renderCardMainPagePreviews(albumId);
        renderModalGalleryGrid(albumId);
        showToast('Foto Dihapus', 'Foto berhasil dihapus dari album card ini.', 'delete');
      }
    }
  });
}

// Helper to parse Google Drive links or direct image URLs (including Folder Links)
async function extractGoogleDriveDirectUrls(text: string): Promise<string[]> {
  if (!text) return [];
  const lines = text.split(/[\n,;\s]+/).map((s) => s.trim()).filter(Boolean);
  const results: string[] = [];

  for (const line of lines) {
    // Check if line is a Google Drive folder link
    const folderMatch = line.match(/(?:folders\/|embeddedfolderview\?id=)([a-zA-Z0-9_-]{25,})/i);
    if (folderMatch && folderMatch[1]) {
      const folderId = folderMatch[1];
      try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://drive.google.com/embeddedfolderview?id=' + folderId)}`;
        const res = await fetch(proxyUrl);
        if (res.ok) {
          const html = await res.text();
          const fileRegex = /(?:file\/d\/|id=|\/d\/)([a-zA-Z0-9_-]{25,})/g;
          let match;
          const foundIds = new Set<string>();
          while ((match = fileRegex.exec(html)) !== null) {
            if (match[1] && match[1] !== folderId && match[1].length >= 25) {
              foundIds.add(match[1]);
            }
          }
          foundIds.forEach((id) => {
            results.push(`https://lh3.googleusercontent.com/d/${id}`);
          });
        }
      } catch (err) {
        console.warn('Gagal mengambil isi folder Drive via proxy:', err);
      }
    } else {
      // Match Google Drive file ID from various sharing formats
      const driveRegex = /(?:file\/d\/|id=|\/d\/|d=)([a-zA-Z0-9_-]{25,})/i;
      const match = line.match(driveRegex);
      if (match && match[1]) {
        const fileId = match[1];
        results.push(`https://lh3.googleusercontent.com/d/${fileId}`);
      } else if (line.startsWith('http://') || line.startsWith('https://') || line.startsWith('data:image/')) {
        results.push(line);
      }
    }
  }

  return results;
}

// 3. Upload Modal & Manager Logic (Google Drive Method Only)
function setupPhotoGalleryUploadManager() {
  const uploadModal = document.getElementById('upload-modal');
  const openUploadBtns = document.querySelectorAll('.open-upload-modal-btn');
  const closeUploadBtn = document.getElementById('close-upload-modal-btn');
  const cancelUploadBtn = document.getElementById('cancel-upload-btn');

  const uploadForm = document.getElementById('upload-gallery-form') as HTMLFormElement;
  const previewContainer = document.getElementById('upload-preview-container');
  const previewImg = document.getElementById('upload-preview-img') as HTMLImageElement;
  const removePreviewBtn = document.getElementById('remove-preview-btn');
  const albumSelect = document.getElementById('upload-album-id') as HTMLSelectElement;

  const gdriveUrlInput = document.getElementById('gdrive-url-input') as HTMLTextAreaElement;
  const btnParseGdrive = document.getElementById('btn-parse-gdrive');
  const multiBadge = document.getElementById('gdrive-multi-badge');
  const statusSuccess = document.getElementById('gdrive-status-success');
  const statusWarning = document.getElementById('gdrive-status-warning');

  let parsedGdriveUrls: string[] = [];
  let isFallbackAttempted = false;

  if (previewImg) {
    previewImg.setAttribute('referrerpolicy', 'no-referrer');

    previewImg.addEventListener('load', () => {
      if (statusSuccess) statusSuccess.classList.remove('hidden');
      if (statusWarning) statusWarning.classList.add('hidden');
    });

    previewImg.addEventListener('error', () => {
      // If lh3 URL failed, attempt thumbnail fallback URL
      if (!isFallbackAttempted && previewImg.src.includes('lh3.googleusercontent.com/d/')) {
        const fileId = previewImg.src.split('/d/')[1];
        if (fileId) {
          isFallbackAttempted = true;
          previewImg.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
          return;
        }
      }
      if (statusSuccess) statusSuccess.classList.add('hidden');
      if (statusWarning) statusWarning.classList.remove('hidden');
    });
  }

  async function handleGdriveUrlParsing() {
    if (!gdriveUrlInput || !gdriveUrlInput.value.trim()) {
      parsedGdriveUrls = [];
      if (previewContainer) previewContainer.classList.add('hidden');
      if (multiBadge) multiBadge.classList.add('hidden');
      if (statusSuccess) statusSuccess.classList.add('hidden');
      if (statusWarning) statusWarning.classList.add('hidden');
      return;
    }

    if (multiBadge) {
      multiBadge.textContent = `Memeriksa link & mendeteksi isi folder...`;
      multiBadge.classList.remove('hidden');
    }

    const urls = await extractGoogleDriveDirectUrls(gdriveUrlInput.value);
    parsedGdriveUrls = urls;
    isFallbackAttempted = false;

    if (urls.length > 0) {
      if (previewImg && previewContainer) {
        previewImg.src = urls[0];
        previewContainer.classList.remove('hidden');
      }
      if (multiBadge) {
        if (urls.length > 1) {
          multiBadge.textContent = `Terdeteksi ${urls.length} Foto (Folder/Multi-link siap ditambahkan)`;
          multiBadge.classList.remove('hidden');
        } else {
          multiBadge.textContent = `Terdeteksi 1 Link Foto Google Drive`;
          multiBadge.classList.remove('hidden');
        }
      }
    } else {
      if (previewContainer) previewContainer.classList.add('hidden');
      if (multiBadge) multiBadge.classList.add('hidden');
      if (statusSuccess) statusSuccess.classList.add('hidden');
      if (statusWarning) statusWarning.classList.add('hidden');
    }
  }

  let parseDebounceTimer: NodeJS.Timeout | null = null;
  const triggerDebouncedParsing = () => {
    if (parseDebounceTimer) clearTimeout(parseDebounceTimer);
    parseDebounceTimer = setTimeout(handleGdriveUrlParsing, 400);
  };

  gdriveUrlInput?.addEventListener('input', triggerDebouncedParsing);
  gdriveUrlInput?.addEventListener('paste', () => setTimeout(handleGdriveUrlParsing, 100));
  btnParseGdrive?.addEventListener('click', async () => {
    await handleGdriveUrlParsing();
    if (parsedGdriveUrls.length > 0) {
      showToast('Link Google Drive Ditemukan', `${parsedGdriveUrls.length} foto siap ditambahkan.`, 'check_circle');
    } else {
      showToast('Link Tidak Valid', 'Pastikan Anda menempelkan link Google Drive yang valid.', 'warning');
    }
  });

  function openModal(targetAlbumId?: string) {
    if (uploadModal) {
      populateUploadAlbumDropdown();
      animateModalOpen(uploadModal);
      if (targetAlbumId && albumSelect) {
        albumSelect.value = targetAlbumId;
      }
    }
  }

  function closeModal() {
    if (uploadModal) {
      animateModalClose(uploadModal, resetForm);
    }
  }

  function resetForm() {
    if (uploadForm) uploadForm.reset();
    parsedGdriveUrls = [];
    isFallbackAttempted = false;
    previewContainer?.classList.add('hidden');
    multiBadge?.classList.add('hidden');
    if (statusSuccess) statusSuccess.classList.add('hidden');
    if (statusWarning) statusWarning.classList.add('hidden');
  }

  openUploadBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetAlbum = btn.getAttribute('data-target-album');
      openModal(targetAlbum || undefined);
    });
  });

  closeUploadBtn?.addEventListener('click', closeModal);
  cancelUploadBtn?.addEventListener('click', closeModal);

  uploadModal?.addEventListener('click', (e) => {
    if (e.target === uploadModal) closeModal();
  });

  removePreviewBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    parsedGdriveUrls = [];
    isFallbackAttempted = false;
    if (gdriveUrlInput) gdriveUrlInput.value = '';
    previewContainer?.classList.add('hidden');
    multiBadge?.classList.add('hidden');
    if (statusSuccess) statusSuccess.classList.add('hidden');
    if (statusWarning) statusWarning.classList.add('hidden');
  });

  uploadForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titleInput = (document.getElementById('upload-title') as HTMLInputElement).value.trim();
    const albumId = albumSelect ? albumSelect.value : 'photo-1';
    const albumTitle = PROJECTS_DATA[albumId]?.title || 'Card Album';

    await handleGdriveUrlParsing();
    if (parsedGdriveUrls.length === 0) {
      showToast('Tempelkan Link Google Drive', 'Harap masukkan link foto atau folder Google Drive yang valid.', 'warning');
      return;
    }

    const photosToAdd: ProjectGalleryItem[] = [];
    parsedGdriveUrls.forEach((url, idx) => {
      photosToAdd.push({
        id: 'gdrive-upload-' + Date.now() + '-' + idx,
        url: url,
        title: parsedGdriveUrls.length > 1 ? `${titleInput || 'Foto Google Drive'} (${idx + 1})` : (titleInput || 'Foto Google Drive'),
        isUploaded: true
      });
    });

    const currentUploaded = getUserUploadedAlbumPhotos(albumId);
    currentUploaded.push(...photosToAdd);
    saveCardAlbumUserPhotos(albumId, currentUploaded);

    // Refresh main page card thumbnail strip & badge
    renderCardMainPagePreviews(albumId);

    // If modal for this card is open, refresh modal gallery grid
    if (currentOpenProjectId === albumId) {
      renderModalGalleryGrid(albumId);
    }

    closeModal();
    showToast(
      'Foto Berhasil Ditambahkan!',
      `${photosToAdd.length} foto dari Google Drive telah ditambahkan ke ${albumTitle}.`,
      'check_circle'
    );
  });

  // Attach listener to "Tambah Foto ke Card Ini" button inside Project Modal
  const modalAddPhotoBtn = document.getElementById('modal-add-photo-btn');
  modalAddPhotoBtn?.addEventListener('click', () => {
    if (currentOpenProjectId) {
      openModal(currentOpenProjectId);
    } else {
      openModal();
    }
  });

  // Initial render for all main page card thumbnail strips
  const galleryCardIds = ['org-1', 'org-2', 'org-3', 'org-4', 'photo-1', 'photo-2', 'photo-3', 'photo-4', 'des-1', 'des-4'];
  galleryCardIds.forEach((id) => renderCardMainPagePreviews(id));

  // Attach 3D Flip Card click listeners to UNO Organization cards
  const flipContainers = document.querySelectorAll('.uno-flip-container');
  flipContainers.forEach((container) => {
    container.addEventListener('click', (e) => {
      // Don't toggle flip if user clicked directly on the modal trigger button
      const target = e.target as HTMLElement;
      if (target.closest('.open-project-modal-btn')) {
        return;
      }
      container.classList.toggle('is-flipped');
    });
  });
}

// Image Lightbox Modal logic
function setupImageLightboxModal() {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image') as HTMLImageElement;
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('close-image-modal');

  function openLightbox(src: string, caption: string) {
    if (!modal || !modalImg) return;
    modalImg.setAttribute('referrerpolicy', 'no-referrer');
    modalImg.src = src;
    modalImg.onerror = () => {
      if (src.includes('lh3.googleusercontent.com/d/')) {
        const fileId = src.split('/d/')[1];
        if (fileId) {
          modalImg.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
        }
      }
    };
    if (modalCaption) modalCaption.textContent = caption;
    animateModalOpen(modal);
    animate(
      modalImg,
      { opacity: [0.3, 1], scale: [0.9, 1] } as any,
      { duration: 0.35, ease: [0.16, 1, 0.3, 1] } as any
    );
  }

  function closeLightbox() {
    if (!modal) return;
    animateModalClose(modal);
  }

  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>('.open-lightbox-btn, .cert-modal-trigger, .gallery-preview-trigger');
    if (trigger) {
      const src = trigger.getAttribute('data-img') || trigger.getAttribute('data-preview-img') || trigger.getAttribute('data-img-src');
      const caption = trigger.getAttribute('data-title') || trigger.getAttribute('data-preview-caption') || trigger.getAttribute('data-img-title') || '';
      if (src) openLightbox(src, caption);
    }
  });

  closeBtn?.addEventListener('click', closeLightbox);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });
}

// 4. Modals Handling (Project Modal & Resume Modal)
function setupModals() {
  // Project Detail Modal
  const projectModal = document.getElementById('project-modal');
  const closeProjectBtn = document.getElementById('close-project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const modalImg = document.getElementById('modal-project-img') as HTMLImageElement;
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalTags = document.getElementById('modal-project-tags');
  const modalSpecs = document.getElementById('modal-project-specs');
  const modalDocLink = document.getElementById('modal-project-doclink') as HTMLAnchorElement;

  function openProjectModal(projectId: string) {
    const data = getFolderData(projectId);
    if (!data || !projectModal) return;

    if (modalImg) modalImg.src = data.image;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.description;

    if (modalDocLink) {
      if (data.docLink) {
        modalDocLink.href = data.docLink;
        modalDocLink.style.display = 'inline-flex';
        if (data.docLink.includes('trainermotordc.web.app')) {
          modalDocLink.innerHTML = `
            <span class="material-symbols-outlined text-[20px]">language</span>
            <span>Buka Web App Live Demo (trainermotordc.web.app)</span>
            <span class="material-symbols-outlined text-[18px]">open_in_new</span>
          `;
        } else {
          modalDocLink.innerHTML = `
            <span class="material-symbols-outlined text-[20px]">folder_open</span>
            <span>Link Dokumentasi / Web</span>
            <span class="material-symbols-outlined text-[18px]">open_in_new</span>
          `;
        }
      } else {
        modalDocLink.style.display = 'none';
      }
    }

    // Render tags
    if (modalTags) {
      modalTags.innerHTML = data.tags
        .map(
          (t) =>
            `<span class="px-3 py-1 bg-secondary text-black font-extrabold text-xs uppercase rounded-md shadow-sm">${t}</span>`
        )
        .join('');
    }

    // Render specs
    if (modalSpecs) {
      modalSpecs.innerHTML = data.specs
        .map(
          (s) => `
          <div class="modal-spec-card p-3.5 rounded-xl border flex flex-col justify-center transition-colors">
            <span class="modal-spec-label text-xs uppercase font-extrabold tracking-wider">${s.label}</span>
            <span class="modal-spec-value text-sm font-bold mt-1">${s.value}</span>
          </div>
        `
        )
        .join('');
    }

    currentOpenProjectId = projectId;
    const gallerySection = document.getElementById('modal-gallery-section');
    const galleryTitle = document.getElementById('modal-gallery-title');

    if (galleryTitle) {
      if (data.category === 'engineering') {
        galleryTitle.textContent = 'Dokumentasi Projek';
      } else {
        galleryTitle.textContent = 'Galeri Hasil Foto & Karya Visual';
      }
    }

    if (data.category === 'photography' || data.category === 'design' || data.gallery) {
      if (gallerySection) gallerySection.style.display = 'block';
      renderModalGalleryGrid(projectId);
    } else {
      if (gallerySection) gallerySection.style.display = 'none';
    }

    animateModalOpen(projectModal);
  }

  function closeProjectModal() {
    if (projectModal) {
      animateModalClose(projectModal, () => {
        currentOpenProjectId = null;
      });
    }
  }

  // Attach listener to all "Detail Proyek" buttons
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.open-project-modal-btn');
    if (target) {
      const projectId = target.getAttribute('data-project-id');
      if (projectId) openProjectModal(projectId);
    }
  });

  closeProjectBtn?.addEventListener('click', closeProjectModal);
  modalCloseBtn?.addEventListener('click', closeProjectModal);
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // Resume Modal
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = [
    document.getElementById('open-resume-btn'),
    document.getElementById('hero-resume-btn'),
    document.getElementById('mobile-resume-btn')
  ];
  const closeResumeBtn = document.getElementById('close-resume-modal');
  const downloadResumeBtn = document.getElementById('download-resume-file');
  const downloadPdfBtn = document.getElementById('download-pdf-btn');

  function openResume() {
    if (resumeModal) {
      animateModalOpen(resumeModal);
    }
  }

  function closeResume() {
    if (resumeModal) {
      animateModalClose(resumeModal);
    }
  }

  openResumeBtns.forEach((btn) => btn?.addEventListener('click', openResume));
  closeResumeBtn?.addEventListener('click', closeResume);
  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResume();
  });

  // Download PDF Resume feature
  downloadPdfBtn?.addEventListener('click', () => {
    downloadPDFCV();
  });

  // Download TXT Resume feature
  downloadResumeBtn?.addEventListener('click', () => {
    const resumeText = `
===================================================================
                  CURRICULUM VITAE - ZULHELMI SYAHTIAR
===================================================================
Email     : helmi2591@gmail.com
Lokasi    : Jakarta Timur, Indonesia
IPK       : 3.55 / 4.00 (D3 Elektronika Industri - PNJ)
LinkedIn  : https://www.linkedin.com/in/zulhelmisyahtiar/
GitHub    : https://github.com/Zhlsyh/
Instagram : https://www.instagram.com/zhlsyh

-------------------------------------------------------------------
1. RINGKASAN PROFIL
-------------------------------------------------------------------
Fresh Graduate Jurusan Teknik Elektro, Program Studi D3 Elektronika 
Industri. Memiliki minat kuat di bidang Internet of Things (IoT), 
mikroprosesor, sistem kontrol, pemrograman web, serta memiliki 
ketertarikan di bidang desain dan fotografi. Terbiasa mengerjakan proyek 
berbasis mikrokontroler dan pengembangan sistem otomasi sederhana. 
Bersemangat untuk terus belajar, berinovasi, dan menerapkan teknologi 
terbaru dalam dunia industri.

-------------------------------------------------------------------
2. PENDIDIKAN
-------------------------------------------------------------------
* Politeknik Negeri Jakarta (PNJ) | Ags 2023 - 2026
  Program Studi: D3 Elektronika Industri (IPK: 3.55 / 4.00)
  Tugas Akhir : Trainer Kit Kendali Motor DC Dual - Control PID - Fuzzy 
                Berbasis ESP32 Dan Visualisasi Digital Twin 3D Three.js
  Aktivitas   : Asisten Dosen Pengabdian Masyarakat (Green House Solar Panel),
                Pengurus KSM PSYCHOROBOTIC PNJ, Panitia E-TIME 2025.

* SMAN 64 Jakarta | Jun 2019 - Jun 2022
  Jurusan MIPA

-------------------------------------------------------------------
3. PENGALAMAN KERJA & MAGANG
-------------------------------------------------------------------
* Magang Pemeliharaan Proteksi (HAR PRO) | PT PLN (Persero) ULTG Petukangan
  Periode: Jul 2025 - Nov 2025
  - Pengujian dan pemeliharaan relai proteksi Gardu Induk (OCR, GFR, 
    Differential, Distance Relay, OVR/UVR, Buchholz, Thermal Overload).
  - Berpartisipasi dalam pengujian Battery Capacity Test (BCT) daya cadangan.
  - Pengujian migrasi transformator gardu induk 150kV & panel incoming.

* Freelance Graphic Designer & Photographer | Klien Independen Jabodetabek
  Periode: Mar 2023 - Sekarang
  - Sesi fotografi kelulusan akademik & pasca-sidang (directing & Lightroom).
  - Desain banner cetak kustom perayaan kelulusan & media sosial organisasi.

-------------------------------------------------------------------
4. PROYEK UNGGULAN & PORTOFOLIO TEKNIS
-------------------------------------------------------------------
* Trainer Kit Motor DC Dual ESP32 (Tugas Akhir PNJ)
  Aplikasi kendali kecepatan/posisi motor DC dual independen dengan PID + 
  Fuzzy Logic, telemetri Firebase DB, dan visualisasi 3D Three.js real-time.
  Link Web App: https://trainermotordc.web.app/

* Psychorobotic Plant Guardian (ESP32-C3)
  Robot monitoring kelembaban tanah dan kondisi lingkungan dengan DHT11, 
  ESP32-C3, serta transmisi data telemetri wireless.

* Web Dashboard Telemetry IoT (MySQL & Data Logging)
  Dashboard monitoring sensor lingkungan, logging data otomatis ke database MySQL, 
  serta antarmuka tabel data log sensor.

* Modul Practical Trainer Gerbang Logika Digital
  Modul praktikum teknik digital untuk pengujian IC 74xx, Full Adder, 
  Multiplexer, Flip-Flop, dan BCD Decoder.

-------------------------------------------------------------------
5. KEAHLIAN & TOOLS
-------------------------------------------------------------------
- IoT & Mikrokontroler: ESP32, Arduino, Raspberry Pi, Sensor Telemetri, Firebase, MySQL, MQTT
- Otomasi & Kontrol  : PID Controller, Fuzzy Logic, PLC Schneider, SCADA Vijeo Citect, Relai Proteksi PLN
- Pemrograman & Web  : C/C++, Python, HTML5, CSS3, JavaScript, Three.js 3D, AutoCAD, Proteus, NI Multisim
- Desain & Media     : Adobe Lightroom, Adobe Photoshop, Canva, CapCut, ibis Paint X, Fotografi Studio

-------------------------------------------------------------------
6. PENGALAMAN ORGANISASI & KEPANITIAAN
-------------------------------------------------------------------
* KSM PSYCHOROBOTIC PNJ - Pengurus Departemen Kominfo (Mar 2025 - Des 2025)
* E-TIME 2025 PNJ - Divisi Media Kreatif (Mei 2025 - Jul 2025)
* Fraction 2024 (Wisuda Teknik Elektro PNJ 2024) - Divisi PDD (Publikasi, Dokumentasi & Desain) (2024)
* Olahraga Elektro 2024 PNJ - Divisi Publikasi & Dokumentasi (Apr 2024 - Ags 2024)
* Kuliah Umum EC-IKI PNJ 2024 - Divisi Media (Nov 2024)

-------------------------------------------------------------------
7. SERTIFIKASI & LISENSI
-------------------------------------------------------------------
* Sertifikat Kompetensi Teknisi Instrumentasi - LSP PNJ / Badan Nasional Sertifikasi Profesi (BNSP) (2025 - 2028)
===================================================================
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Zulhelmi_Syahtiar_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
    showToast('CV Berhasil Diunduh', 'File Zulhelmi_Syahtiar_CV.txt telah diunduh.', 'download_done');
  });
}

// PDF CV Printer / Generator
function downloadPDFCV() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    showToast('Izinkan Popup', 'Harap izinkan popup browser untuk mengunduh PDF CV.', 'warning');
    return;
  }

  const cvHtml = `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Zulhelmi Syahtiar - Curriculum Vitae</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; line-height: 1.5; padding: 36px; background: #ffffff; }
      .header { border-bottom: 2.5px solid #0e7b97; padding-bottom: 12px; margin-bottom: 16px; }
      .name { font-size: 26px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: -0.5px; }
      .subtitle { font-size: 13px; font-weight: 700; color: #0e7b97; margin-top: 2px; }
      .contact-info { font-size: 10.5px; color: #475569; margin-top: 6px; font-weight: 600; display: flex; flex-wrap: wrap; gap: 10px; }
      .section-title { font-size: 12.5px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 3px; margin-top: 14px; margin-bottom: 8px; }
      p, li { font-size: 10.5px; color: #334155; line-height: 1.55; }
      ul { padding-left: 16px; margin-top: 3px; }
      li { margin-bottom: 2px; }
      .job-header { display: flex; justify-content: space-between; align-items: baseline; font-weight: 700; font-size: 11.5px; color: #0f172a; }
      .job-company { font-weight: 700; color: #0e7b97; font-size: 10.5px; margin-bottom: 3px; }
      .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      .card { background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 10px; border-radius: 6px; }
      .card-title { font-weight: 700; font-size: 11px; color: #0f172a; }
      .card-subtitle { font-weight: 600; font-size: 10px; color: #0e7b97; }
      .card-desc { font-size: 10px; color: #475569; margin-top: 2px; }
      @media print {
        body { padding: 0; }
        .no-print { display: none; }
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="name">Zulhelmi Syahtiar</div>
      <div class="subtitle">Fresh Graduate D3 Elektronika Industri - Politeknik Negeri Jakarta (IPK 3.55)</div>
      <div class="contact-info">
        <span>Email: helmi2591@gmail.com</span>
        <span>| Lokasi: Jakarta Timur</span>
        <span>| LinkedIn: linkedin.com/in/zulhelmisyahtiar</span>
        <span>| GitHub: github.com/Zhlsyh</span>
      </div>
    </div>

    <div class="section-title">Ringkasan Profil</div>
    <p>Fresh Graduate Jurusan Teknik Elektro, Program Studi D3 Elektronika Industri. Memiliki minat kuat di bidang Internet of Things (IoT), mikroprosesor, sistem kontrol, pemrograman web, serta memiliki ketertarikan di bidang desain dan fotografi. Terbiasa mengerjakan proyek berbasis mikrokontroler dan pengembangan sistem otomasi sederhana. Bersemangat untuk terus belajar, berinovasi, dan menerapkan teknologi terbaru dalam dunia industri.</p>

    <div class="section-title">Pendidikan</div>
    <div class="job-header">
      <span>Politeknik Negeri Jakarta (PNJ)</span>
      <span>Ags 2023 - 2026</span>
    </div>
    <div class="job-company">D3 Elektronika Industri | IPK: 3.55 / 4.00</div>
    <p><b>Tugas Akhir:</b> Trainer Kit Kendali Motor DC Dual – Control PID – Fuzzy Berbasis ESP32 Dan Visualisasi Digital Twin 3D Three.js.</p>

    <div class="section-title">Pengalaman Kerja & Magang</div>
    <div style="margin-bottom: 8px;">
      <div class="job-header">
        <span>PT PLN (Persero) ULTG Petukangan</span>
        <span>Jul 2025 - Nov 2025</span>
      </div>
      <div class="job-company">Magang Pemeliharaan Proteksi (HAR PRO)</div>
      <ul>
        <li>Pemeliharaan dan pengujian relai proteksi Gardu Induk (OCR, GFR, Differential, Distance Relay, OVR/UVR, Buchholz, Thermal Overload).</li>
        <li>Pengujian Battery Capacity Test (BCT) daya cadangan gardu induk & pengujian migrasi transformator 150kV.</li>
      </ul>
    </div>

    <div style="margin-bottom: 8px;">
      <div class="job-header">
        <span>Freelance Graphic Designer & Photographer</span>
        <span>Mar 2023 - Sekarang</span>
      </div>
      <div class="job-company">Klien Independen - Jabodetabek</div>
      <ul>
        <li>Sesi fotografi kelulusan akademik & pasca-sidang (directing, shooting, Lightroom color grading).</li>
        <li>Desain banner cetak kustom dan feeds Instagram organisasi/komunitas.</li>
      </ul>
    </div>

    <div class="section-title">Proyek Unggulan & Portofolio Teknis</div>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Trainer Kit Motor DC Dual ESP32</div>
        <div class="card-subtitle">Control PID + Fuzzy + Digital Twin 3D</div>
        <div class="card-desc">Tugas Akhir PNJ: Kendali kecepatan/posisi motor DC dual independen dengan telemetri Firebase & Three.js 3D. (Web: https://trainermotordc.web.app/)</div>
      </div>
      <div class="card">
        <div class="card-title">Psychorobotic Plant Guardian</div>
        <div class="card-subtitle">Robot Monitoring IoT Tanaman (ESP32-C3)</div>
        <div class="card-desc">Robot kelembaban tanah & suhu lingkungan DHT11 dengan transmisi data telemetri wireless.</div>
      </div>
      <div class="card">
        <div class="card-title">Web Dashboard Telemetry IoT</div>
        <div class="card-subtitle">Real-time Web App (MySQL & Data Logging)</div>
        <div class="card-desc">Monitoring sensor lingkungan, logging data otomatis ke database MySQL & antarmuka tabel log sensor.</div>
      </div>
      <div class="card">
        <div class="card-title">Practical Trainer Gerbang Logika</div>
        <div class="card-subtitle">Hardware Trainer IC Digital 74xx</div>
        <div class="card-desc">Modul praktikum teknik digital untuk IC 74xx, Full Adder, Multiplexer, Flip-Flop, & BCD Decoder.</div>
      </div>
    </div>

    <div class="section-title">Keahlian & Kompetensi Teknis</div>
    <p style="margin-bottom: 3px;"><b>IoT & Mikrokontroler:</b> ESP32, Arduino, Raspberry Pi, Sensor Telemetri, Firebase, MySQL, MQTT</p>
    <p style="margin-bottom: 3px;"><b>Otomasi & Sistem Kontrol:</b> PID Controller, Fuzzy Logic, PLC Schneider, SCADA Vijeo Citect, Relai Proteksi PLN</p>
    <p style="margin-bottom: 3px;"><b>Pemrograman & Software:</b> C/C++, Python, HTML/CSS/JavaScript, Three.js 3D, AutoCAD, Proteus, NI Multisim</p>
    <p><b>Desain & Media:</b> Adobe Lightroom, Adobe Photoshop, Canva, CapCut, ibis Paint X, Studio Photography</p>

    <div class="section-title">Pengalaman Organisasi</div>
    <ul>
      <li><b>KSM PSYCHOROBOTIC PNJ:</b> Pengurus Departemen Kominfo (Mar 2025 - Des 2025)</li>
      <li><b>E-TIME 2025 PNJ:</b> Divisi Media Kreatif (Mei 2025 - Jul 2025)</li>
      <li><b>Olahraga Elektro 2024 PNJ:</b> Divisi Publikasi & Dokumentasi (Apr 2024 - Ags 2024)</li>
    </ul>

    <div class="section-title">Sertifikasi & Lisensi</div>
    <ul>
      <li>Sertifikat Kompetensi Teknisi Instrumentasi - LSP PNJ / Badan Nasional Sertifikasi Profesi (BNSP) (2025 - 2028)</li>
    </ul>

    <script>
      window.onload = function() {
        setTimeout(function() {
          window.print();
        }, 300);
      };
    </script>
  </body>
  </html>
  `;

  printWindow.document.write(cvHtml);
  printWindow.document.close();
  showToast('Menyiapkan PDF CV', 'Halaman cetak / PDF CV telah dibuka.', 'picture_as_pdf');
}

// 5. Contact Form Submission
function setupContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const copyBtn = document.getElementById('copy-email-btn');
  const shareBtn = document.getElementById('share-btn');
  const emailText = document.getElementById('email-text');

  // Web3Forms: layanan gratis untuk mengirim submit form langsung ke email
  // tanpa perlu backend sendiri. Access key didaftarkan lewat env var supaya
  // tidak hardcode di source code. Lihat README.md bagian "Form Kontak"
  // untuk cara mendapatkan key-nya (gratis, ~2 menit, tanpa perlu akun).
  const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name') as HTMLInputElement | null;
    const emailInput = document.getElementById('contact-email') as HTMLInputElement | null;
    const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement | null;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;

    const name = nameInput?.value.trim() ?? '';
    const email = emailInput?.value.trim() ?? '';
    const message = messageInput?.value.trim() ?? '';

    // --- Validasi sederhana sebelum mengirim ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 2) {
      showContactFeedback(false, 'Nama terlalu pendek. Mohon isi nama lengkap Anda.');
      nameInput?.focus();
      return;
    }
    if (!emailRegex.test(email)) {
      showContactFeedback(false, 'Format email tidak valid. Mohon periksa kembali.');
      emailInput?.focus();
      return;
    }
    if (message.length < 10) {
      showContactFeedback(false, 'Pesan terlalu pendek. Mohon tulis minimal 10 karakter.');
      messageInput?.focus();
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      // Belum dikonfigurasi oleh pemilik portfolio (lihat README.md).
      // Tetap kasih tahu pengunjung apa adanya, jangan pura-pura berhasil.
      showContactFeedback(
        false,
        'Form belum aktif saat ini. Silakan hubungi lewat tombol "Salin Email" di bawah.'
      );
      return;
    }

    const originalBtnHTML = submitBtn?.innerHTML ?? '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="btn-loading-spinner"></span><span>Mengirim...</span>`;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Pesan baru dari ${name} lewat Portfolio`,
          from_name: name,
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        showContactFeedback(true, 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda.');
      } else {
        showContactFeedback(false, result.message || 'Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch {
      showContactFeedback(false, 'Gagal mengirim pesan. Periksa koneksi internet Anda.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    }
  });

  // Tampilkan feedback di kotak #contact-toast (bukan #custom-toast global)
  // supaya konteksnya jelas menempel di bawah form, dengan gaya beda untuk
  // sukses (hijau) vs gagal (merah).
  function showContactFeedback(success: boolean, message: string) {
    const contactToast = document.getElementById('contact-toast');
    if (!contactToast) return;

    contactToast.classList.remove('hidden', 'bg-secondary', 'bg-red-500', 'text-black', 'text-white', 'border-black', 'border-red-900');
    contactToast.classList.add(
      success ? 'bg-secondary' : 'bg-red-500',
      success ? 'text-black' : 'text-white',
      success ? 'border-black' : 'border-red-900'
    );

    const icon = contactToast.querySelector('.material-symbols-outlined');
    const text = contactToast.querySelector('span:last-child');
    if (icon) icon.textContent = success ? 'check_circle' : 'error';
    if (text) text.textContent = message;

    window.clearTimeout((contactToast as any)._hideTimeout);
    (contactToast as any)._hideTimeout = window.setTimeout(() => {
      contactToast.classList.add('hidden');
    }, 6000);
  }

  // Copy Email Button
  copyBtn?.addEventListener('click', () => {
    const email = emailText?.textContent || 'helmi2591@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email Tersalin', email, 'content_copy');
    });
  });

  // Share Button
  shareBtn?.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'Zulhelmi Syahtiar - Portfolio',
        text: 'Portofolio Zulhelmi Syahtiar - Fresh Graduate D3 Elektronika Industri PNJ',
        url: window.location.href,
      }).then(() => {
        showToast('Berhasil Bagikan', 'Tautan portofolio berhasil dibagikan.', 'share');
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Tautan Tersalin', 'URL Portofolio tersalin ke clipboard!', 'content_copy');
      });
    }
  });
}

// 6. Interactive Visual Effects (3D Tilt & Spotlight Hover Tracking)
function setupInteractiveEffects() {
  // A. Hero Frame 3D Parallax Tilt
  const heroFrame = document.getElementById('hero-frame');
  if (heroFrame) {
    heroFrame.addEventListener('mousemove', (e) => {
      const rect = heroFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      heroFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroFrame.addEventListener('mouseleave', () => {
      animate(
        heroFrame,
        { transform: 'perspective(1000px) rotateZ(-2deg) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' } as any,
        { duration: 0.4, ease: [0.16, 1, 0.3, 1] } as any
      );
    });
  }

  // B. Card Spotlight Tracking Light (--mouse-x and --mouse-y CSS Variables) & 3D Tilt on Hover
  const cardElements = document.querySelectorAll<HTMLElement>(
    '.glass-card, .glass-panel, .gallery-card, .project-card, .spotlight-card'
  );

  cardElements.forEach((card) => {
    if (card.id === 'hero-frame') return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Gentle 3D Tilt Effect
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      if (!card.classList.contains('no-tilt')) {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      if (!card.classList.contains('no-tilt')) {
        animate(
          card,
          { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)' } as any,
          { duration: 0.4, ease: [0.16, 1, 0.3, 1] } as any
        );
      }
    });
  });

  // C. Ambient Floating Cursor Spotlight Aura (Desktop Only)
  if (window.matchMedia('(pointer: fine)').matches) {
    let cursorSpotlight = document.getElementById('cursor-spotlight');
    if (!cursorSpotlight) {
      cursorSpotlight = document.createElement('div');
      cursorSpotlight.id = 'cursor-spotlight';
      document.body.appendChild(cursorSpotlight);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorSpotlight?.classList.add('cursor-active');
    });

    window.addEventListener('mouseleave', () => {
      cursorSpotlight?.classList.remove('cursor-active');
    });

    // Smooth Animation Loop for Cursor Spotlight Easing
    function animateCursor() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (cursorSpotlight) {
        cursorSpotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Expand Cursor Spotlight on Interactive Hover
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button, a, input, select, textarea, .glass-card, .gallery-card, .project-card, [role="button"]')
      ) {
        cursorSpotlight?.classList.add('cursor-hover');
      } else {
        cursorSpotlight?.classList.remove('cursor-hover');
      }
    });
  }
}

// 7. Theme Toggle (Dark / Light Mode)
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  function setTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (lightIcon) {
        lightIcon.classList.remove('hidden');
        lightIcon.style.display = 'inline-block';
      }
      if (darkIcon) {
        darkIcon.classList.add('hidden');
        darkIcon.style.display = 'none';
      }
      themeToggle?.setAttribute('title', 'Beralih ke Mode Terang (Light Mode)');
      themeToggle?.setAttribute('aria-label', 'Beralih ke Mode Terang');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      if (darkIcon) {
        darkIcon.classList.remove('hidden');
        darkIcon.style.display = 'inline-block';
      }
      if (lightIcon) {
        lightIcon.classList.add('hidden');
        lightIcon.style.display = 'none';
      }
      themeToggle?.setAttribute('title', 'Beralih ke Mode Gelap (Dark Mode)');
      themeToggle?.setAttribute('aria-label', 'Beralih ke Mode Gelap');
      localStorage.setItem('theme', 'light');
    }
  }

  // Check saved theme or default to dark mode
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    setTheme(false);
  } else {
    setTheme(true);
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(!isDark);
    animate(
      themeToggle,
      { rotate: [0, 360], scale: [0.85, 1.1, 1] } as any,
      { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any
    );
  });
}

// 8. Framer Motion Scroll Animations (motion / inView, animate & stagger)
function setupScrollAnimations() {
  // Section Headers & Titles Animation
  const headers = document.querySelectorAll<HTMLElement>('section > header, section > div > header');
  headers.forEach((header) => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(36px) scale(0.96)';

    inView(header, () => {
      animate(
        header,
        { opacity: [0, 1], y: [36, 0], scale: [0.96, 1] } as any,
        { duration: 0.7, ease: [0.16, 1, 0.3, 1] } as any
      );
    });
  });

  // Staggered Cards Animation for Grids & Timeline Containers
  const cardContainers = document.querySelectorAll<HTMLElement>(
    '#experience > div, #projects .grid, #design-photo .grid, #skills .grid, #certifications .grid, #contact .grid, section .max-w-7xl.grid'
  );

  cardContainers.forEach((container) => {
    const cards = container.querySelectorAll<HTMLElement>('.glass-panel, .glass-card, .photo-item, .project-card, .gallery-card');
    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(36px) scale(0.94)';
    });

    inView(container, () => {
      animate(
        cards,
        { opacity: [0, 1], y: [36, 0], scale: [0.94, 1] } as any,
        { duration: 0.6, delay: stagger(0.07, { startDelay: 0.05 }), ease: [0.16, 1, 0.3, 1] } as any
      );
    });
  });

  // Standalone Glass Elements and Hero Frame
  const standaloneElements = document.querySelectorAll<HTMLElement>(
    '#hero-frame, .glass-panel:not([style*="opacity"]), .glass-card:not([style*="opacity"])'
  );

  standaloneElements.forEach((el) => {
    if (!el.style.opacity) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';

      inView(el, () => {
        animate(
          el,
          { opacity: [0, 1], y: [24, 0] } as any,
          { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as any
        );
      });
    }
  });

  // Skill Meters Progress Bars Animation via Framer Motion
  const skillSection = document.getElementById('skills');
  if (skillSection) {
    inView(skillSection, () => {
      const meters = skillSection.querySelectorAll<HTMLElement>('[class*="h-2.5"] > div, [class*="bg-secondary"]');
      meters.forEach((meter, idx) => {
        const targetWidth = meter.style.width;
        if (targetWidth && targetWidth.endsWith('%') && targetWidth !== '0%') {
          meter.style.width = '0%';
          animate(
            meter,
            { width: ['0%', targetWidth] } as any,
            { duration: 1.1, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] } as any
          );
        }
      });
    });
  }
}

// 9. Back to Top Button Logic (Framer Motion Enhanced)
function setupBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  let isVisible = false;

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 350) {
        if (!isVisible) {
          isVisible = true;
          backBtn.classList.remove('opacity-0', 'pointer-events-none');
          backBtn.classList.add('opacity-100');
          animate(
            backBtn,
            { opacity: [0, 1], scale: [0.7, 1], y: [12, 0] } as any,
            { duration: 0.35, ease: [0.16, 1, 0.3, 1] } as any
          );
        }
      } else {
        if (isVisible) {
          isVisible = false;
          animate(
            backBtn,
            { opacity: [1, 0], scale: [1, 0.7], y: [0, 12] } as any,
            { duration: 0.25, ease: [0.16, 1, 0.3, 1] } as any
          ).finished.then(() => {
            backBtn.classList.remove('opacity-100');
            backBtn.classList.add('opacity-0', 'pointer-events-none');
          });
        }
      }
    },
    { passive: true }
  );

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

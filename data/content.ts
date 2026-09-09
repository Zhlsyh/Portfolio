// Konten non-proyek — diekstrak dari lib/portfolioBodyHtml.ts (versi lama)
// dan dirapikan jadi data terstruktur untuk komponen React baru.

export const SITE = {
  initials: 'Z\u00b7S',
  name: 'Zulhelmi Syahtiar',
  role: 'Industrial Electronics & IoT Engineer',
};

export const NAV_ITEMS = [
  { index: '01', label: 'Home', tag: 'INDEX', href: '#home' },
  { index: '02', label: 'Pengalaman', tag: 'REKAM JEJAK', href: '#experience' },
  { index: '03', label: 'Karya', tag: 'ARSIP', href: '#projects' },
  { index: '04', label: 'Keahlian', tag: 'KAPABILITAS', href: '#skills' },
  { index: '05', label: 'Sertifikasi', tag: 'LISENSI', href: '#certifications' },
  { index: '06', label: 'Kontak', tag: 'SAY HELLO', href: '#contact' },
];

export const HERO = {
  eyebrow: 'Fresh Graduate \u2014 D3 Elektronika Industri PNJ',
  title1: 'Zulhelmi',
  title2: 'Syahtiar.',
  description:
    'Fresh Graduate Jurusan Teknik Elektro, Program Studi D3 Elektronika Industri. Memiliki minat kuat di bidang Internet of Things (IoT), mikroprosesor, sistem kontrol, pemrograman web, serta memiliki ketertarikan di bidang desain dan fotografi. Terbiasa mengerjakan proyek berbasis mikrokontroler dan pengembangan sistem otomasi sederhana. Bersemangat untuk terus belajar, berinovasi, dan menerapkan teknologi terbaru dalam dunia industri.',
  quote: 'Do what you wanna do',
  badges: [
    { icon: 'developer_board', label: 'Hardware & IoT', value: 'ESP32 & Arduino' },
    { icon: 'tune', label: 'Sistem Kontrol', value: 'PID & Fuzzy Logic' },
    { icon: 'electric_bolt', label: 'Otomasi Industri', value: 'PLC & SCADA' },
    { icon: 'photo_camera', label: 'Kreatif & Media', value: 'Fotografi & Desain' },
  ],
};

export const STATS = [
  { value: 'IPK 3.55', label: 'D3 Elektronika Industri PNJ' },
  { value: '10+ Proyek', label: 'Engineering & Kreatif' },
  { value: 'Sejak 2023', label: 'Aktif Berkarya' },
];

export const EXPERIENCE = [
  {
    tag: 'Magang Kerja Industri',
    title: 'Magang Pemeliharaan Proteksi (HAR PRO)',
    org: 'PT PLN (Persero) ULTG Petukangan',
    period: 'Juli 2025 \u2013 November 2025',
    location: 'Jakarta & Tangerang',
    points: [
      'Melaksanakan pemeliharaan dan pengawasan sistem relai proteksi Gardu Induk (Relai OCR, GFR, Differential, Distance, OVR/UVR, Buchholz, Thermal Overload).',
      'Berpartisipasi dalam pengujian Battery Capacity Test (BCT) dan pengujian migrasi transformator gardu induk 150kV.',
      'Penyusunan Laporan Hasil Uji (LHU) & proteksi sistem penyulang 20kV & 150kV.',
    ],
    skillsLabel: 'Keahlian Terpakai',
    skills: ['Relai Proteksi', 'Instrumentasi', 'Otomasi Gardu'],
  },
  {
    tag: 'Freelance & Proyek Mandiri',
    title: 'Freelance Photographer & Graphic Designer',
    org: 'Klien Independen & Komunitas',
    period: 'Maret 2023 \u2013 Sekarang',
    location: 'Jabodetabek',
    points: [
      'Merencanakan & mengeksekusi sesi fotografi kelulusan akademik, pasca-sidang, serta dokumentasi event dengan retouching warna di Adobe Lightroom.',
      'Merancang karya desain grafis banner cetak kustom, poster acara, feeds Instagram, dan materi promosi visual untuk berbagai klien.',
    ],
    skillsLabel: 'Aplikasi & Tools',
    skills: ['Adobe Lightroom', 'Photoshop', 'Canva', 'Kamera Mirrorless'],
  },
];

// ID project organisasi/kepanitiaan yang dipetakan dari PROJECTS_DATA (org-1..org-4)
export const ORG_PROJECT_IDS = ['org-1', 'org-2', 'org-3', 'org-4'];

// Kartu organisasi/kepanitiaan (flip card)
export const ORG_CARDS = [
  {
    id: 'org-1',
    logo: '/logos/organisasi/psychorobotic.png',
    role: 'Pengurus Kominfo',
    period: 'Mar 2025 \u2013 Des 2025',
    responsibility:
      'Mengelola media komunikasi visual, merancang template feeds Instagram, poster kegiatan, serta dokumentasi karya robotika.',
  },
  {
    id: 'org-2',
    logo: '/logos/organisasi/etime.png',
    role: 'Divisi Media Kreatif',
    period: 'Mei 2025 \u2013 Jul 2025',
    responsibility:
      'Membuat aset visual lomba elektro nasional (poster, feeds, merchandise, e-certificate) & produksi video aftermovie.',
  },
  {
    id: 'org-3',
    logo: '/logos/organisasi/oe.png',
    role: 'Divisi Publikasi & Dokum',
    period: 'Apr 2024 \u2013 Ags 2024',
    responsibility:
      'Dokumentasi foto pertandingan, pengelolaan media sosial OE_PNJ, serta pengoperasian Photobooth Studio penutupan acara.',
  },
  {
    id: 'org-4',
    logo: '/logos/organisasi/fraction.png',
    role: 'Divisi PDD',
    period: 'Ags 2024 \u2013 Okt 2024',
    responsibility:
      'Publikasi media sosial, dokumentasi foto & video wisuda jurusan, serta perancangan aset visual & desain layout acara.',
  },
];

export const CAPABILITIES = [
  {
    icon: 'developer_board',
    title: 'Mikrokontroler & Hardware',
    subtitle: 'Sistem Tertanam, Sensor IoT, & Board Development',
    items: [
      { name: 'ESP32', detail: 'WiFi, Bluetooth, Sensor IoT & Database', iconType: 'material', icons: ['memory'] },
      { name: 'Arduino', detail: 'ADC, PWM, I2C, SPI & Pemrosesan Sensor', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg'] },
      { name: 'Raspberry Pi Board', detail: 'Single Board Computer & Linux Embedded', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg'] },
    ],
  },
  {
    icon: 'tune',
    title: 'Otomasi & Sistem Kontrol',
    subtitle: 'Kontrol Motor, PLC, SCADA & Proteksi Listrik',
    items: [
      { name: 'PID Controller & Fuzzy Logic', detail: 'Kontrol Kecepatan Motor DC & Kestabilan', iconType: 'material', icons: ['settings_input_component'] },
      { name: 'PLC Schneider & SCADA Vijeo', detail: 'Pemrograman Ladder Diagram & Otomasi', iconType: 'material', icons: ['precision_manufacturing'] },
      { name: 'Relai Proteksi PLN 150kV', detail: 'Relai OCR, GFR, Differential, BCT & Trafo', iconType: 'material', icons: ['electric_bolt'] },
    ],
  },
  {
    icon: 'code',
    title: 'Pemrograman & Software',
    subtitle: 'Bahasa Pemrograman, Web Dashboard, CAD & Simulasi',
    items: [
      { name: 'C / C++ (Embedded Systems)', detail: 'Pemrograman Mikrokontroler & Firmware', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'] },
      { name: 'Python Scripting', detail: 'Pemrosesan Data Telemetri & Otomasi', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'] },
      { name: 'HTML, CSS & JavaScript', detail: 'Pengembangan Antarmuka Web & Web Dashboard', iconType: 'image', icons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ] },
      { name: 'Firebase', detail: 'Realtime Database, Authentication & Cloud Storage', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'] },
      { name: 'MySQL & PostgreSQL', detail: 'Relational Database & Pengelolaan Data', iconType: 'image', icons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      ] },
      { name: 'AutoCAD & Fusion 360', detail: 'Desain Teknik 2D & Modeling 3D CAD', iconType: 'image', icons: ['/logos/autocad.webp', '/logos/fusion360.webp'] },
      { name: 'NI Multisim & Proteus', detail: 'Simulasi Rangkaian Elektronika Analog-Digital', iconType: 'image', icons: ['/logos/multisim.png', '/logos/proteus.png'] },
    ],
  },
  {
    icon: 'photo_camera',
    title: 'Aplikasi Desain & Fotografi',
    subtitle: 'Software Editing Foto, Desain Grafis & Video',
    items: [
      { name: 'Adobe Lightroom', detail: 'Retouching Warna, Grading', iconType: 'image', icons: ['/logos/lightroom.webp'] },
      { name: 'Adobe Photoshop', detail: 'Desain Grafis', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'] },
      { name: 'Canva', detail: 'Editing, Layouting, Carousel', iconType: 'image', icons: ['/logos/canva.png'] },
      { name: 'ibis Paint X', detail: 'Ilustrasi Digital & Desain Vektor', iconType: 'image', icons: ['/logos/ibispaint.png'] },
      { name: 'CapCut Video Editor', detail: 'Editing Video', iconType: 'image', icons: ['/logos/capcut.png'] },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    badge: 'BNSP Official Certification',
    period: '2025 \u2013 2028',
    title: 'Teknisi Instrumentasi',
    issuer: 'LSP PNJ / Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia',
    description:
      'Sertifikasi kompetensi resmi BNSP untuk kualifikasi Teknisi Instrumentasi. Teruji secara terstruktur dalam kalibrasi instrumen pengukuran industri, pengujian sensor & transmitter (tekanan, suhu, aliran, level), pemeliharaan peralatan kontrol proses, serta pemasangan dan trouble-shooting sistem instrumentasi industri.',
    tags: ['BNSP Competency', 'Teknisi Instrumentasi', 'Kalibrasi & Testing', 'Sistem Kontrol Proses', 'Industrial Sensor'],
    regNo: 'BNSP-INST-2025-PNJ',
  },
];

export const CONTACT = {
  email: 'helmi2591@gmail.com',
  location: 'Jakarta Timur, DKI Jakarta',
  description:
    'Tertarik untuk berkolaborasi, mendiskusikan peluang kerja, proyek IoT/sistem kontrol, atau membutuhkan jasa fotografi & desain? Silakan kirim pesan Anda.',
  socials: [
    { label: 'Instagram', handle: '@zhlsyh', href: 'https://www.instagram.com/zhlsyh' },
    { label: 'LinkedIn', handle: 'Zulhelmi', href: 'https://www.linkedin.com/in/zulhelmisyahtiar/' },
    { label: 'GitHub', handle: 'Zhlsyh', href: 'https://github.com/Zhlsyh/' },
    { label: 'TikTok', handle: '@miiixixixi', href: 'https://www.tiktok.com/@miiixixixi' },
  ],
};

// Objek gabungan sesuai tipe SiteContent — dipakai sebagai seed pertama kali ke
// Firestore, dan sebagai fallback kalau Firestore belum dikonfigurasi/offline.
export const DEFAULT_CONTENT = {
  site: SITE,
  nav: NAV_ITEMS,
  hero: HERO,
  stats: STATS,
  experience: EXPERIENCE,
  orgProjectIds: ORG_PROJECT_IDS,
  orgCards: ORG_CARDS,
  capabilities: CAPABILITIES,
  certifications: CERTIFICATIONS,
  contact: CONTACT,
};

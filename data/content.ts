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
    'Fresh graduate D3 Elektronika Industri dari Politeknik Negeri Jakarta, dengan pengalaman magang pada sistem proteksi tenaga listrik di PT PLN. Memiliki minat kuat di bidang Internet of Things (IoT), mikrokontroler, pemrograman, dan sistem kontrol. Terbiasa mengerjakan proyek berbasis mikrokontroler dan pengembangan sistem otomasi sederhana. Bersemangat untuk terus belajar, berinovasi, dan menerapkan teknologi terbaru dalam dunia industri.',
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
  { value: 'TOEIC 620', label: 'English Working Proficiency' },
  { value: '12+ Proyek', label: 'Engineering & Kreatif' },
  { value: 'Sejak 2023', label: 'Aktif Berkarya' },
];

export const EXPERIENCE = [
  {
    tag: 'Magang Kerja Industri',
    title: 'Magang Pemeliharaan Proteksi (HAR PRO)',
    org: 'PT PLN (Persero) ULTG Petukangan',
    period: 'Juli 2025 \u2013 November 2025',
    location: 'Tangerang Selatan',
    points: [
      'Membantu pemeliharaan dan pengawasan berkala sistem proteksi Gardu Induk.',
      'Melakukan pengujian relai proteksi (OCR, GFR, Diferensial, Distance Relay, OVR/UVR, Buchholz, Thermal Overload).',
      'Terlibat dalam pengujian sistem saat migrasi DSS di gardu induk 150kV.',
      'Melaksanakan Battery Capacity Test (BCT) untuk menjaga keandalan daya cadangan gardu induk.',
      'Membantu pengujian non-cascade pada panel incoming transformator.',
    ],
    skillsLabel: 'Keahlian Terpakai',
    skills: ['Relai Proteksi', 'OMICRON TestUniverse', 'Instrumentasi', 'SCADA', 'Otomasi Gardu'],
  },
  {
    tag: 'Freelance & Proyek Mandiri',
    title: 'Freelance Graphic Designer & Photographer',
    org: 'Klien Independen',
    period: 'Maret 2023 \u2013 Sekarang',
    location: 'Jabodetabek',
    points: [
      'Menyediakan jasa fotografi kelulusan dan pasca-sidang, termasuk pengarahan gaya dan penyuntingan foto.',
      'Membuat desain banner untuk acara perayaan kelulusan.',
      'Membuat desain grafis media sosial untuk kebutuhan konten Instagram organisasi.',
    ],
    skillsLabel: 'Aplikasi & Tools',
    skills: ['Adobe Lightroom', 'Photoshop', 'Canva', 'Kamera Mirrorless'],
  },
  {
    tag: 'Kegiatan Akademik',
    title: 'Asisten Dosen – Pengabdian Masyarakat',
    org: 'Politeknik Negeri Jakarta',
    period: '2024 – 2025',
    location: 'Depok, Jawa Barat',
    points: [
      'Berperan sebagai Asisten Dosen pada proyek Pengabdian Masyarakat instalasi Green House Hidroponik bertenaga solar panel.',
      'Mendukung proses instalasi sistem IoT dan kelistrikan panel surya untuk greenhouse hidroponik.',
      'Mendampingi mahasiswa dan masyarakat dalam pemahaman teknologi energi terbarukan berbasis komunitas.',
    ],
    skillsLabel: 'Keahlian Terpakai',
    skills: ['Solar Panel', 'Sistem IoT', 'Hidroponik', 'Pengabdian Masyarakat'],
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
      { name: 'Raspberry Pi Board', detail: 'Single Board Computer & Linux Embedded & Computer Vision', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg'] },
    ],
  },
  {
    icon: 'tune',
    title: 'Otomasi & Sistem Kontrol',
    subtitle: 'Kontrol Motor, PLC, SCADA & Proteksi Listrik',
    items: [
      { name: 'PID Controller & Fuzzy Logic', detail: 'Kontrol Kecepatan Motor DC & Kestabilan', iconType: 'material', icons: ['settings_input_component'] },
      { name: 'PLC Schneider & SCADA Vijeo Citect', detail: 'Pemrograman Ladder Diagram & Otomasi', iconType: 'material', icons: ['precision_manufacturing'] },
      { name: 'Relai Proteksi & OMICRON', detail: 'OCR, GFR, Differential, REF MiCOM, GOOSE Config', iconType: 'material', icons: ['electric_bolt'] },
    ],
  },
  {
    icon: 'code',
    title: 'Pemrograman & Software',
    subtitle: 'Bahasa Pemrograman, Web Dashboard, CAD & Simulasi',
    items: [
      { name: 'C / C++ (Embedded Systems)', detail: 'Pemrograman Mikrokontroler & Firmware', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'] },
      { name: 'Python Scripting', detail: 'Pemrosesan Data Telemetri, Otomasi & Computer Vision (OpenCV)', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'] },
      { name: 'TypeScript, React & Node.js', detail: 'Fullstack Web & Real-time App Development', iconType: 'image', icons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      ] },
      { name: 'HTML, CSS & JavaScript', detail: 'Pengembangan Antarmuka Web & Web Dashboard', iconType: 'image', icons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ] },
      { name: 'Firebase', detail: 'Realtime Database, Firestore, Authentication & Hosting', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'] },
      { name: 'MySQL & PostgreSQL', detail: 'Relational Database & Pengelolaan Data', iconType: 'image', icons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      ] },
      { name: 'Three.js, WebRTC & Socket.IO', detail: 'Visualisasi 3D, Video P2P & Real-time Communication', iconType: 'material', icons: ['travel_explore'] },
      { name: 'AutoCAD & Fusion 360', detail: 'Desain Teknik 2D & Modeling 3D CAD', iconType: 'image', icons: ['/logos/autocad.webp', '/logos/fusion360.webp'] },
      { name: 'NI Multisim & Proteus', detail: 'Simulasi Rangkaian Elektronika Analog-Digital', iconType: 'image', icons: ['/logos/multisim.png', '/logos/proteus.png'] },
      { name: 'Eagle (PCB Design)', detail: 'Perancangan Skematik & Layout PCB', iconType: 'material', icons: ['developer_board'] },
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
  {
    icon: 'language',
    title: 'Bahasa & Produktivitas',
    subtitle: 'Komunikasi Profesional, Office Suite & Multibahasa',
    items: [
      { name: 'Microsoft Office', detail: 'Word (Laporan), Excel (Data), PowerPoint (Presentasi)', iconType: 'material', icons: ['description'] },
      { name: 'Bahasa Indonesia', detail: 'Bahasa utama (native speaker)', iconType: 'material', icons: ['translate'] },
      { name: 'Bahasa Melayu', detail: 'Fasih komunikasi lisan & tulisan', iconType: 'material', icons: ['translate'] },
      { name: 'Bahasa Inggris', detail: 'Working Proficiency – TOEIC Prediction 620/990', iconType: 'material', icons: ['translate'] },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    badge: 'BNSP Official Certification',
    period: '2026 \u2013 2029',
    title: 'Teknisi Instrumentasi',
    issuer: 'LSP PNJ / Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia',
    description:
      'Sertifikasi kompetensi resmi BNSP untuk kualifikasi Teknisi Instrumentasi (2026) \u2014 Kompeten. Uji kompetensi: konfigurasi zero-span dan scaling level transmitter (4\u201320 mA) pada PLC, termasuk analisis linearitas dan deviasi hasil pengukuran.',
    tags: ['BNSP Competency', 'Teknisi Instrumentasi', 'Kalibrasi & Testing', 'PLC & Transmitter', 'Industrial Sensor'],
    regNo: 'BNSP-INST-2026-PNJ',
  },
  {
    badge: 'English Proficiency Test',
    period: '2026',
    title: 'TOEIC Prediction Test',
    issuer: 'Politeknik Negeri Jakarta',
    description:
      'TOEIC Prediction Test yang diselenggarakan oleh Politeknik Negeri Jakarta (2026). Skor 620/990 (Listening 260, Reading 360). Setara dengan kemampuan kerja profesional berbahasa Inggris (working proficiency).',
    tags: ['TOEIC', 'English Proficiency', 'Working Proficiency', 'PNJ', 'Skor 620/990'],
    regNo: 'TOEIC-PNJ-2026',
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

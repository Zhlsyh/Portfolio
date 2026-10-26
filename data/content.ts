// Konten portofolio resmi Zulhelmi Syahtiar — diperbarui sesuai CV resmi (2 Halaman)
// Fresh Graduate D3 Elektronika Industri, Politeknik Negeri Jakarta

export const SITE = {
  initials: 'Z·S',
  name: 'Zulhelmi Syahtiar',
  role: 'Fresh Graduate D3 Elektronika Industri',
  phone: '0838-9446-9333',
  email: 'helmi2591@gmail.com',
  location: 'Cipayung, Jakarta Timur',
};

export const NAV_ITEMS = [
  { index: '01', label: 'Home', tag: 'INDEX', href: '#home' },
  { index: '02', label: 'Pengalaman', tag: 'REKAM JEJAK', href: '#experience' },
  { index: '03', label: 'Karya', tag: 'ARSIP', href: '#projects' },
  { index: '04', label: 'Keahlian', tag: 'KAPABILITAS', href: '#skills' },
  { index: '05', label: 'Sertifikasi', tag: 'LISENSI', href: '#certifications' },
  { index: '06', label: 'Kontak', tag: 'SAY HELLO', href: '#contact' },
];

export const NAV_SECTION_HREFS = NAV_ITEMS.map((item) => item.href);

export const HERO = {
  eyebrow: '',
  title1: 'Zulhelmi',
  title2: 'Syahtiar.',
  headlineRole: '',
  taglineSub: '(elektronika industri + embedded IoT + sistem kendali)',
  description:
    'Lulusan D3 Elektronika Industri dari Politeknik Negeri Jakarta, dengan pengalaman magang pada sistem proteksi tenaga listrik di PT PLN. Memiliki minat kuat di bidang Internet of Things (IoT), mikrokontroler, pemrograman, dan sistem kontrol. Terbiasa mengerjakan proyek berbasis mikrokontroler dan pengembangan sistem otomasi sederhana. Bersemangat untuk terus belajar, berinovasi, dan menerapkan teknologi terbaru dalam dunia industri.',
  quote: 'Do what you wanna do',
  gpa: '',
  location: '',
  badges: [
    { icon: 'developer_board', label: 'IoT & Mikrokontroler', value: 'ESP32, Arduino, Raspberry Pi' },
    { icon: 'tune', label: 'Sistem Kendali', value: 'PID, Fuzzy, PLC & SCADA' },
    { icon: 'electric_bolt', label: 'Proteksi Listrik', value: 'Relai Proteksi & OMICRON' },
    { icon: 'photo_camera', label: 'Multimedia & Kreatif', value: 'Fotografi, Desain & Video' },
  ],
};

export const STATS = [];

export const EXPERIENCE = [
  {
    tag: 'Magang Kerja Industri',
    title: 'Magang Pemeliharaan Proteksi (HAR PRO)',
    org: 'PT PLN (Persero) ULTG Petukangan',
    period: 'Jul 2025 – Okt 2025',
    location: 'Tangerang Selatan',
    points: [
      'Membantu pemeliharaan dan pengawasan berkala sistem proteksi di 9 Gardu Induk lingkup ULTG Petukangan.',
      'Melakukan pengujian relai proteksi: OCR, GFR, Diferensial, Distance Relay, OVR/UVR, Buchholz, dan Thermal Overload Relay.',
      'Terlibat dalam pemeliharaan operasional dan pengujian sistem saat migrasi DSS di GI Petukangan.',
      'Ikut serta dalam pelaksanaan Battery Capacity Test (BCT) di GI Ciracas untuk menjaga keandalan daya cadangan gardu induk.',
      'Membantu pengujian non-cascade pada panel incoming transformator.',
    ],
    skillsLabel: 'Keahlian Terpakai',
    skills: ['Relai Proteksi', 'OMICRON TestUniverse', 'Konfigurasi GOOSE', 'DSS Migration', 'Otomasi Gardu Induk'],
  },
  {
    tag: 'Freelance & Proyek Mandiri',
    title: 'Freelance Graphic Designer & Photographer',
    org: 'Klien Independen',
    period: 'Mar 2023 – Sekarang',
    location: 'Jabodetabek',
    points: [
      'Menyediakan jasa fotografi kelulusan dan pasca-sidang, termasuk pengarahan gaya dan penyuntingan (editing) foto.',
      'Membuat desain banner cetak untuk acara perayaan kelulusan klien.',
      'Membuat desain grafis media sosial untuk kebutuhan konten feeds Instagram organisasi.',
    ],
    skillsLabel: 'Aplikasi & Tools',
    skills: ['Adobe Lightroom', 'Adobe Photoshop', 'Canva', 'CapCut', 'Kamera Profesional'],
  },
  {
    tag: 'Tugas Kewirausahaan / Personal Brand',
    title: 'Mediocreation – Brand Merchandise',
    org: 'Proyek Pribadi (Personal Brand)',
    period: '2024 – Sekarang',
    location: 'Jakarta',
    points: [
      'Merancang identitas visual brand, feeds Instagram, dan poster promosi.',
      'Membuat konten foto/video untuk Instagram Story dan Reels, serta desain merchandise.',
      'Portofolio media kreatif: @me.diocreation.',
    ],
    skillsLabel: 'Keahlian Terpakai',
    skills: ['Brand Identity', 'Desain Merchandise', 'Strategi Konten', 'Instagram Feeds & Reels'],
  },
  {
    tag: 'Kegiatan Akademik',
    title: 'Asisten Dosen – Pengabdian Masyarakat',
    org: 'Politeknik Negeri Jakarta',
    period: '2024 – 2025',
    location: 'Depok, Jawa Barat',
    points: [
      'Asisten Dosen pada Pengabdian Masyarakat instalasi Green House Hidroponik bertenaga solar panel.',
    ],
    skillsLabel: 'Keahlian Terpakai',
    skills: ['Green House Hidroponik', 'Solar Panel', 'Pengabdian Masyarakat'],
  },
];

// ID project organisasi/kepanitiaan yang dipetakan dari PROJECTS_DATA (org-1..org-4)
export const ORG_PROJECT_IDS = ['org-1', 'org-2', 'org-3', 'org-4'];

// Kartu organisasi & kepanitiaan (3D Flip Card)
export const ORG_CARDS = [
  {
    id: 'org-1',
    logo: '/logos/organisasi/psychorobotic.png',
    role: 'Departemen Kominfo',
    period: 'Mar 2025 – Des 2025',
    orgName: 'PSYCHOROBOTIC PNJ – Depok, Jawa Barat',
    responsibility:
      'KSM Robotika & IoT PNJ: Membuat seluruh desain kebutuhan organisasi, dokumentasi seluruh kegiatan, mengelola media sosial, membuat konten edukasi robotika, serta ikut kegiatan lomba robotika.',
  },
  {
    id: 'org-2',
    logo: '/logos/organisasi/etime.png',
    role: 'Divisi Media Kreatif',
    period: 'Mei 2025 – Jul 2025',
    orgName: 'E-TIME 2025 PNJ (Nasional)',
    responsibility:
      'Lomba elektro tingkat nasional HME PNJ: Membuat & menyiapkan seluruh aset desain (feeds medsos, poster, merchandise, desain cetak, sertifikat) serta memproduksi video aftermovie & publikasi.',
  },
  {
    id: 'org-3',
    logo: '/logos/organisasi/oe.png',
    role: 'Divisi Publikasi dan Dokumentasi',
    period: 'Apr 2024 – Agu 2024',
    orgName: 'Olahraga Elektro 2024 – HME PNJ',
    responsibility:
      'Ajang kompetisi olahraga & seni tahunan Elektro PNJ: Mendokumentasikan seluruh kegiatan acara, mengelola media sosial acara, serta membuat dan mengelola photobooth penutupan acara.',
  },
  {
    id: 'org-4',
    logo: '/logos/organisasi/fraction.png',
    role: 'Divisi Media',
    period: 'Nov 2024',
    orgName: 'Kuliah Umum EC-IKI PNJ 2024',
    responsibility:
      'Kuliah umum jurusan Elektro untuk D3 Elektronika Industri & D4 Instrumentasi Kontrol Industri: Mendokumentasikan seluruh kegiatan dan memastikan pertemuan Zoom bagi peserta daring lancar.',
  },
];

export const CAPABILITIES = [
  {
    icon: 'developer_board',
    title: 'IoT & Mikrokontroler',
    subtitle: 'Sistem Tertanam, Komunikasi Telemetri & Computer Vision',
    items: [
      { name: 'ESP32', iconType: 'material', icons: ['memory'] },
      { name: 'Arduino', iconType: 'material', icons: ['developer_board'] },
      { name: 'Raspberry Pi', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg'] },
      { name: 'Firebase', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'] },
      { name: 'Computer Vision (OpenCV)', iconType: 'material', icons: ['visibility'] },
    ],
  },
  {
    icon: 'tune',
    title: 'Sistem Kendali & Otomasi Industri',
    subtitle: 'Kontrol Kecepatan, Algoritma Cerdas & SCADA',
    items: [
      { name: 'PID Controller', iconType: 'material', icons: ['settings_input_component'] },
      { name: 'Fuzzy Logic Controller', iconType: 'material', icons: ['tune'] },
      { name: 'Pemrograman PLC', iconType: 'material', icons: ['precision_manufacturing'] },
      { name: 'SCADA (Vijeo Citect)', iconType: 'material', icons: ['desktop_windows'] },
    ],
  },
  {
    icon: 'electric_bolt',
    title: 'Sistem Proteksi & Pengujian',
    subtitle: 'Relai Proteksi Gardu Induk & Injeksi Sekunder',
    items: [
      { name: 'Relai Proteksi', iconType: 'material', icons: ['bolt'] },
      { name: 'OMICRON TestUniverse', iconType: 'material', icons: ['terminal'] },
      { name: 'Konfigurasi GOOSE', iconType: 'material', icons: ['lan'] },
    ],
  },
  {
    icon: 'build',
    title: 'Keterampilan Praktik Elektronika',
    subtitle: 'Perakitan Hardware & Instrumentasi Pengukuran',
    items: [
      { name: 'Soldering & Desoldering', iconType: 'material', icons: ['hardware'] },
      { name: 'Wiring & Pengkabelan', iconType: 'material', icons: ['cable'] },
      { name: 'Alat Ukur Elektronika', iconType: 'material', icons: ['speed'] },
    ],
  },
  {
    icon: 'code',
    title: 'Pemrograman',
    subtitle: 'Bahasa Pemrograman Firmware & Fullstack Web',
    items: [
      { name: 'Python', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'] },
      { name: 'C/C++', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'] },
      { name: 'HTML5', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'] },
      { name: 'CSS3', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'] },
      { name: 'JavaScript', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'] },
      { name: 'TypeScript', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'] },
      { name: 'React', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'] },
      { name: 'Node.js', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'] },
    ],
  },
  {
    icon: 'schema',
    title: 'Perancangan & Simulasi',
    subtitle: 'Simulasi Rangkaian & Modeling CAD 2D/3D',
    items: [
      { name: 'NI Multisim', iconType: 'image', icons: ['/logos/multisim.png'] },
      { name: 'Proteus', iconType: 'image', icons: ['/logos/proteus.png'] },
      { name: 'AutoCAD', iconType: 'image', icons: ['/logos/autocad.webp'] },
      { name: 'Fusion 360', iconType: 'image', icons: ['/logos/fusion360.webp'] },
      { name: 'Eagle PCB Design', iconType: 'material', icons: ['developer_board'] },
    ],
  },
  {
    icon: 'view_in_ar',
    title: 'Visualisasi & Real-time',
    subtitle: 'Digital Twin 3D & Protokol Komunikasi Real-time',
    items: [
      { name: 'Three.js (Digital Twin 3D)', iconType: 'material', icons: ['view_in_ar'] },
      { name: 'WebRTC', iconType: 'material', icons: ['video_call'] },
      { name: 'Socket.IO', iconType: 'material', icons: ['sync_alt'] },
    ],
  },
  {
    icon: 'database',
    title: 'Basis Data',
    subtitle: 'Penyimpanan Data Historis & Telemetri',
    items: [
      { name: 'MySQL', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'] },
      { name: 'PostgreSQL (Supabase)', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'] },
    ],
  },
  {
    icon: 'photo_camera',
    title: 'Desain Grafis, Multimedia & Fotografi',
    subtitle: 'Produksi Media Kreatif, Directing & Editing',
    items: [
      { name: 'Kamera Profesional', iconType: 'material', icons: ['photo_camera'] },
      { name: 'Adobe Lightroom', iconType: 'image', icons: ['/logos/lightroom.webp'] },
      { name: 'Adobe Photoshop', iconType: 'image', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'] },
      { name: 'Canva', iconType: 'image', icons: ['/logos/canva.png'] },
      { name: 'ibis Paint X', iconType: 'image', icons: ['/logos/ibispaint.png'] },
      { name: 'CapCut Video Editor', iconType: 'image', icons: ['/logos/capcut.png'] },
    ],
  },
  {
    icon: 'description',
    title: 'Microsoft Office & Bahasa',
    subtitle: 'Laporan Teknis, Analisis Data & Komunikasi Global',
    items: [
      { name: 'Microsoft Word', iconType: 'material', icons: ['description'] },
      { name: 'Microsoft Excel', iconType: 'material', icons: ['table_chart'] },
      { name: 'Microsoft PowerPoint', iconType: 'material', icons: ['slideshow'] },
      { name: 'Bahasa Indonesia', iconType: 'material', icons: ['translate'] },
      { name: 'Bahasa Inggris', iconType: 'material', icons: ['language'] },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    badge: 'Coursera Project Certificate',
    period: 'Okt 2026',
    title: 'Getting started with Azure IoT Hub',
    issuer: 'Coursera',
    description:
      'Sertifikasi proyek resmi mengenai konfigurasi Azure IoT Hub, manajemen perangkat IoT, integrasi telemetri awan (cloud), serta pemantauan komunikasi data sensor terdistribusi.',
    tags: ['Azure IoT Hub', 'Cloud Telemetry', 'IoT Device Management', 'Coursera'],
    regNo: '9VNG76MJWBKZ',
  },
  {
    badge: 'Official English Proficiency Test',
    period: '2026',
    title: 'TOEIC Prediction Test (Skor 620/990)',
    issuer: 'Politeknik Negeri Jakarta',
    description:
      'TOEIC Prediction Test oleh Politeknik Negeri Jakarta dengan total skor 620/990 (Listening 260, Reading 360). Menunjukkan kemampuan berbahasa Inggris tingkat kerja profesional (Working Proficiency).',
    tags: ['TOEIC 620/990', 'Working Proficiency', 'Listening & Reading', 'PNJ'],
    regNo: 'TOEIC-620-PNJ-2026',
  },
  {
    badge: 'Pelatihan Kompetensi Kreatif',
    period: 'Okt 2023',
    title: 'Teknik Mengedit Video Kreatif',
    issuer: 'Rumah Siap Kerja',
    description:
      'Pelatihan teknik alur kerja penyuntingan video, transisi sinematik, tata suara, dan produksi konten media kreatif untuk promosi digital.',
    tags: ['Video Editing', 'Media Kreatif', 'Produksi Konten', 'Rumah Siap Kerja'],
    regNo: 'A/1291/0383/PK002338/RSK/X/2023',
  },
  {
    badge: 'Bootcamp Intensif Profesional',
    period: 'Feb 2025',
    title: 'Bootcamp Manajemen Media Sosial',
    issuer: 'Growth Skill',
    description:
      'Program intensif yang berfokus pada personal branding, strategi konten digital, desain grafis periklanan, dan manajemen media sosial untuk pertumbuhan audiens.',
    tags: ['Social Media', 'Personal Branding', 'Strategi Konten', 'Growth Skill'],
    regNo: '13/116/GROWTHSKILL/11/2025',
  },
];

export const CONTACT = {
  email: 'helmi2591@gmail.com',
  phone: '0838-9446-9333',
  location: 'Cipayung, Jakarta Timur, DKI Jakarta',
  description:
    'Tertarik untuk berkolaborasi, mendiskusikan peluang kerja, proyek IoT / sistem kontrol, atau membutuhkan jasa fotografi & desain grafis? Jangan ragu untuk menghubungi saya.',
  socials: [
    { label: 'LinkedIn', handle: 'Zulhelmi Syahtiar', href: 'https://www.linkedin.com/in/zulhelmisyahtiar/' },
    { label: 'GitHub', handle: 'Zhlsyh', href: 'https://github.com/Zhlsyh/' },
    { label: 'Instagram', handle: '@zhlsyh', href: 'https://www.instagram.com/zhlsyh' },
  ],
};

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

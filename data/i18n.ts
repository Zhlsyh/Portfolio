// Teks antarmuka dan terjemahan konten. Bahasa sumber (ID) tetap di data/*.ts;
// versi Inggris untuk konten data ada di EN_MAP dan PROJECT_EN di bawah.

export type Lang = 'id' | 'en';
export type Audience = 'general' | 'tech' | 'creative';

const ID = {
  // navigasi
  backTop: 'Kembali ke atas',
  toDay: 'Ganti ke mode siang',
  toNight: 'Ganti ke mode malam',
  dayTitle: 'Mode siang',
  nightTitle: 'Mode malam',
  on3d: '3D aktif',
  lite: 'Mode ringan',
  navLabel: 'Navigasi utama',
  langLabel: 'Ganti bahasa ke Inggris',
  langShort: 'ID',
  // hero
  heroEyebrow: 'Fresh graduate · D3 Elektronika Industri PNJ',
  heroLead:
    'Embedded & IoT engineer yang juga memotret dan mendesain. Merancang sistem kontrol cerdas dan IoT dengan kendali presisi, didukung dokumentasi visual yang terarah.',
  heroSub:
    'Magang proteksi tenaga listrik di PT PLN, proyek ESP32 dan sistem kendali PID/Fuzzy, serta freelance fotografi dan desain grafis sejak 2023.',
  tour: 'Keliling studio',
  hint: 'Scroll atau klik objek 3D untuk berpindah pojok',
  pathLabel: 'Saya sedang mencari',
  pathTech: 'Engineer / teknisi',
  pathCreative: 'Fotografer / desainer',
  cvGeneral: 'Unduh CV',
  cvTech: 'Unduh CV Teknik',
  cvCreative: 'Unduh CV Kreatif',
  // section
  corner: 'Pojok',
  workbenchEyebrow: 'Pojok 01 · Engineering',
  workbenchIntro: 'Tempat ESP32, motor, dan sensor dirakit sampai benar-benar jalan.',
  photoEyebrow: 'Pojok 02 · Fotografi',
  photoIntro: 'Foto kelulusan, dokumentasi acara, dan hasil photo hunting. Dari pengarahan gaya sampai editing.',
  designEyebrow: 'Pojok 03 · Desain',
  designIntro: 'Poster, feeds, merchandise, dan identitas visual untuk organisasi, acara, dan brand sendiri.',
  showAll: 'Lihat semua',
  showLess: 'Tampilkan lebih sedikit',
  journeyEyebrow: 'Rekam Jejak',
  journeyTitle: 'Pendidikan & organisasi',
  journeyIntro: 'Dari bangku SMA MIPA sampai D3 Elektronika Industri, plus kepanitiaan yang mengasah sisi kreatif.',
  education: 'Pendidikan',
  finalProject: 'Lihat proyek tugas akhir',
  orgs: 'Organisasi & kepanitiaan',
  viewDocs: 'Lihat dokumentasi ↗',
  bonusEyebrow: 'Aktivitas Personal',
  bonusTitle: 'Hobi & musik',
  bonusIntro: 'Dua hobi yang akhirnya jadi pekerjaan sampingan, dan playlist yang menemani prosesnya.',
  photoResult: 'Hasil foto',
  favSongs: 'Lagu favorit',
  spotifyPlayer: 'Pemutar Spotify',
  onSpotify: 'di Spotify',
  spotifyOpen: 'Buka profil untuk lihat apa yang sedang saya dengarkan ↗',
  skillsEyebrow: 'Kapabilitas',
  skillsTitle: 'Keahlian & sertifikasi',
  skillsIntro:
    'Ringkasan tools dan bukti belajar yang saya terapkan dalam perkuliahan, magang industri, dan proyek mandiri.',
  certs: 'Sertifikasi',
  contactEyebrow: 'Pojok 04 · Kontak',
  sendEmail: 'Kirim email',
  copyEmail: 'Salin email',
  copied: 'Tersalin ✓',
  copyPrompt: 'Salin email:',
  cvPick: 'Unduh CV',
  cvGeneralShort: 'Umum',
  cvTechShort: 'Teknik',
  cvCreativeShort: 'Kreatif',
  builtWith: 'dibuat dengan Next.js & Three.js',
  // modal
  closeModal: 'Tutup modal',
  openProject: 'Buka tautan proyek',
  gallery: 'Galeri',
  moreAtLink: 'Foto selengkapnya ada di tautan proyek di atas.',
  catEngineering: 'Engineering',
  catPhotography: 'Fotografi',
  catDesign: 'Desain',
  // halaman
  title: 'Zulhelmi Syahtiar | Embedded & IoT Engineer, Fotografer, Desainer',
  desc: 'Portofolio Zulhelmi Syahtiar, lulusan D3 Elektronika Industri PNJ: proyek ESP32 dan sistem kendali, magang proteksi PLN, fotografi, dan desain grafis.',
  noscript: 'Situs ini memerlukan JavaScript untuk menampilkan diorama 3D dan daftar proyek.',
  staticAlt: 'Ilustrasi diorama studio: meja elektronik, pojok foto, meja desain, dan kotak surat',
  // maskot (balon ucapan)
  bubbleHome: 'Halo, saya Helmi! Silakan keliling.',
  bubbleWorkbench: 'Meja kerja saya: ESP32, motor, sensor.',
  bubblePhoto: 'Foto wisuda dan acara mulai dari sini.',
  bubbleDesign: 'Poster, feeds, dan merchandise.',
  bubbleJourney: 'Kuliah, SMA, dan organisasi.',
  bubbleBonus: 'Sambil memutar piringan hitam.',
  bubbleSkills: 'Tools dan sertifikat saya.',
  bubbleContact: 'Kirim kabar ke kotak surat ini.',
  bubbleWake: 'Hoam... sudah pagi?',
  bubbleCool: 'Keren, kan?',
  bubbleSleepHint: 'Zzz... klik untuk membangunkan',
};

export type Dict = typeof ID;

const EN: Dict = {
  backTop: 'Back to top',
  toDay: 'Switch to day mode',
  toNight: 'Switch to night mode',
  dayTitle: 'Day mode',
  nightTitle: 'Night mode',
  on3d: '3D on',
  lite: 'Lite mode',
  navLabel: 'Main navigation',
  langLabel: 'Switch language to Indonesian',
  langShort: 'EN',
  heroEyebrow: 'Fresh graduate · D3 Industrial Electronics, PNJ',
  heroLead:
    'Embedded & IoT engineer who also shoots photos and designs. I build smart control and IoT systems with precise control, backed by clear visual documentation.',
  heroSub:
    'Protection-systems internship at PT PLN, ESP32 and PID/Fuzzy control projects, plus freelance photography and graphic design since 2023.',
  tour: 'Tour the studio',
  hint: 'Scroll or click a 3D object to move to another corner',
  pathLabel: "I'm looking for",
  pathTech: 'An engineer / technician',
  pathCreative: 'A photographer / designer',
  cvGeneral: 'Download CV',
  cvTech: 'Download Technical CV',
  cvCreative: 'Download Creative CV',
  corner: 'Corner',
  workbenchEyebrow: 'Corner 01 · Engineering',
  workbenchIntro: 'Where ESP32 boards, motors, and sensors get assembled until they actually run.',
  photoEyebrow: 'Corner 02 · Photography',
  photoIntro: 'Graduation photos, event documentation, and photo-hunting results. From style direction to editing.',
  designEyebrow: 'Corner 03 · Design',
  designIntro: 'Posters, feeds, merchandise, and visual identity for organizations, events, and my own brand.',
  showAll: 'Show all',
  showLess: 'Show less',
  journeyEyebrow: 'Track Record',
  journeyTitle: 'Education & organizations',
  journeyIntro: 'From a science-major high school to a D3 in Industrial Electronics, plus committee work that sharpened the creative side.',
  education: 'Education',
  finalProject: 'View final project',
  orgs: 'Organizations & committees',
  viewDocs: 'View documentation ↗',
  bonusEyebrow: 'Personal',
  bonusTitle: 'Hobbies & music',
  bonusIntro: 'Two hobbies that turned into side work, and the playlist that keeps me company.',
  photoResult: 'Photo',
  favSongs: 'Favorite songs',
  spotifyPlayer: 'Spotify player',
  onSpotify: 'on Spotify',
  spotifyOpen: "Open the profile to see what I'm listening to ↗",
  skillsEyebrow: 'Capabilities',
  skillsTitle: 'Skills & certifications',
  skillsIntro:
    'A summary of the tools and proof of learning I have applied in coursework, an industrial internship, and independent projects.',
  certs: 'Certifications',
  contactEyebrow: 'Corner 04 · Contact',
  sendEmail: 'Send email',
  copyEmail: 'Copy email',
  copied: 'Copied ✓',
  copyPrompt: 'Copy email:',
  cvPick: 'Download CV',
  cvGeneralShort: 'General',
  cvTechShort: 'Technical',
  cvCreativeShort: 'Creative',
  builtWith: 'built with Next.js & Three.js',
  closeModal: 'Close dialog',
  openProject: 'Open project link',
  gallery: 'Gallery',
  moreAtLink: 'More photos are available at the project link above.',
  catEngineering: 'Engineering',
  catPhotography: 'Photography',
  catDesign: 'Design',
  title: 'Zulhelmi Syahtiar | Embedded & IoT Engineer, Photographer, Designer',
  desc: 'Portfolio of Zulhelmi Syahtiar, D3 Industrial Electronics graduate of PNJ: ESP32 and control-system projects, PLN protection internship, photography, and graphic design.',
  noscript: 'This site needs JavaScript to show the 3D diorama and the project list.',
  staticAlt: 'Studio diorama illustration: electronics bench, photo corner, design desk, and mailbox',
  bubbleHome: "Hi, I'm Helmi! Look around.",
  bubbleWorkbench: 'My workbench: ESP32, motors, sensors.',
  bubblePhoto: 'Graduation and event shots start here.',
  bubbleDesign: 'Posters, feeds, and merchandise.',
  bubbleJourney: 'Studies, high school, and clubs.',
  bubbleBonus: 'Spinning a record meanwhile.',
  bubbleSkills: 'My tools and certificates.',
  bubbleContact: 'Drop a note in this mailbox.',
  bubbleWake: 'Yawn... is it morning already?',
  bubbleCool: 'Cool, right?',
  bubbleSleepHint: 'Zzz... click to wake me',
};

export const UI: Record<Lang, Dict> = { id: ID, en: EN };

export const SECTION_LABELS: Record<Lang, { label: string; short: string }[]> = {
  id: [
    { label: 'Home', short: 'Home' },
    { label: 'Workbench', short: 'Bench' },
    { label: 'Photo Corner', short: 'Foto' },
    { label: 'Design Desk', short: 'Desain' },
    { label: 'Perjalanan', short: 'Jejak' },
    { label: 'Bonus', short: 'Bonus' },
    { label: 'Keahlian', short: 'Skill' },
    { label: 'Kontak', short: 'Kontak' },
  ],
  en: [
    { label: 'Home', short: 'Home' },
    { label: 'Workbench', short: 'Bench' },
    { label: 'Photo Corner', short: 'Photo' },
    { label: 'Design Desk', short: 'Design' },
    { label: 'Journey', short: 'Path' },
    { label: 'Bonus', short: 'Bonus' },
    { label: 'Skills', short: 'Skills' },
    { label: 'Contact', short: 'Contact' },
  ],
};

/** Berkas CV per tujuan dan bahasa. CV Umum (ID) memakai versi terbaru di /cv. */
export const CV_FILES: Record<Lang, Record<Audience, string>> = {
  id: {
    general: '/cv/CV_Zulhelmi_Syahtiar_Umum.pdf',
    tech: '/CV_Zulhelmi_Syahtiar_Teknik_ID.pdf',
    creative: '/CV_Zulhelmi_Syahtiar_Kreatif_ID.pdf',
  },
  en: {
    general: '/CV_Zulhelmi_Syahtiar_General_EN.pdf',
    tech: '/CV_Zulhelmi_Syahtiar_Technical_EN.pdf',
    creative: '/CV_Zulhelmi_Syahtiar_Creative_EN.pdf',
  },
};

const MONTHS: Record<string, string> = {
  Mei: 'May',
  Agu: 'Aug',
  Ags: 'Aug',
  Agustus: 'August',
  Okt: 'Oct',
  Oktober: 'October',
  Des: 'Dec',
  Desember: 'December',
  Maret: 'March',
  Sekarang: 'Present',
};

/** Terjemahkan nama bulan pada periode ("Mei 2025 – Jul 2025"). */
export function periodEn(s: string): string {
  return s.replace(/\b(Mei|Agustus|Agu|Ags|Oktober|Okt|Desember|Des|Maret|Sekarang)\b/g, (m) => MONTHS[m] ?? m);
}

/** Kamus teks data (ID -> EN). Teks yang tidak ada di sini dipakai apa adanya. */
export const EN_MAP: Record<string, string> = {
  // pengalaman
  'Magang Kerja Industri': 'Industrial Internship',
  'Magang Pemeliharaan Proteksi (HAR PRO)': 'Protection Maintenance Intern (HAR PRO)',
  'Membantu pemeliharaan dan pengawasan berkala sistem proteksi di 9 Gardu Induk lingkup ULTG Petukangan.':
    'Assisted with periodic maintenance and monitoring of protection systems at 9 substations under ULTG Petukangan.',
  'Melakukan pengujian relai proteksi: OCR, GFR, Diferensial, Distance Relay, OVR/UVR, Buchholz, dan Thermal Overload Relay.':
    'Performed testing of protection relays: OCR, GFR, Differential, Distance Relay, OVR/UVR, Buchholz, and Thermal Overload Relay.',
  'Terlibat dalam pemeliharaan operasional dan pengujian sistem saat migrasi DSS di GI Petukangan.':
    'Involved in operational maintenance and system testing during the DSS migration at the Petukangan substation.',
  'Ikut serta dalam pelaksanaan Battery Capacity Test (BCT) di GI Ciracas untuk menjaga keandalan daya cadangan gardu induk.':
    'Took part in Battery Capacity Tests (BCT) at the Ciracas substation to maintain the reliability of backup power.',
  'Membantu pengujian non-cascade pada panel incoming transformator.':
    'Assisted with non-cascade testing on transformer incoming panels.',
  'Relai Proteksi': 'Protection Relays',
  'Konfigurasi GOOSE': 'GOOSE Configuration',
  'Otomasi Gardu Induk': 'Substation Automation',
  'Freelance & Proyek Mandiri': 'Freelance & Independent Projects',
  'Menyediakan jasa fotografi kelulusan dan pasca-sidang, termasuk pengarahan gaya dan penyuntingan (editing) foto.':
    'Provided graduation and post-thesis-defense photography services, including style direction and photo editing.',
  'Membuat desain banner cetak untuk acara perayaan kelulusan klien.':
    "Created printed banner designs for clients' graduation celebration events.",
  'Membuat desain grafis media sosial untuk kebutuhan konten feeds Instagram organisasi.':
    "Created social media graphic designs for organizations' Instagram feed content.",
  'Kamera Profesional': 'Professional Camera',
  // pendidikan
  'Depok, Jawa Barat': 'Depok, West Java',
  'D3 Elektronika Industri': 'D3 Industrial Electronics',
  'IPK 3,55 / 4,00': 'GPA 3.55 / 4.00',
  'Tugas Akhir: "Trainer Kit Kendali Motor DC Dual-Control PID-Fuzzy Berbasis ESP32 dengan Visualisasi Digital Twin 3D".':
    'Final Project: "Dual DC Motor Control Trainer Kit with PID-Fuzzy Dual-Control Based on ESP32 and 3D Digital Twin Visualization".',
  'Sub judul: "Perancangan Web Monitoring dan Visualisasi Digital Twin 3D Berbasis Real-Time Database pada Trainer Kit".':
    'Sub-title: "Design of Web Monitoring and 3D Digital Twin Visualization Based on a Real-Time Database for the Trainer Kit".',
  'Asisten Dosen pada kegiatan Pengabdian Masyarakat instalasi Green House Hidroponik bertenaga solar panel.':
    'Teaching Assistant for a Community Service project installing a solar-powered Hydroponic Green House.',
  'Jakarta Timur': 'East Jakarta',
  'SMA, Jurusan MIPA': 'High School, Science Major (MIPA)',
  // organisasi
  'Departemen Kominfo': 'Communication & Information Department',
  'KSM (Kelompok Studi Mahasiswa) Politeknik Negeri Jakarta yang mempelajari Robotika dan IoT.':
    'Student Study Group (KSM) at Politeknik Negeri Jakarta focused on Robotics and IoT.',
  'Membuat seluruh desain untuk kebutuhan organisasi.': 'Created all design assets needed by the organization.',
  'Mendokumentasikan seluruh kegiatan organisasi.': 'Documented all organizational activities.',
  'Mengelola media sosial organisasi.': "Managed the organization's social media.",
  'Membuat konten edukasi mengenai robotika.': 'Created educational content about robotics.',
  'Ikut serta dalam kegiatan lomba robotika.': 'Took part in robotics competitions.',
  'Divisi Media Kreatif': 'Creative Media Division',
  'E-TIME (Electro Activities Programme), lomba tingkat nasional bidang elektro oleh Himpunan Mahasiswa Elektro PNJ (Line Follower, PLC, Networking, Collaborative Robot).':
    'E-TIME (Electro Activities Programme), a national-level electrical engineering competition held by the PNJ Electrical Engineering Student Association (Line Follower, PLC, Networking, Collaborative Robot).',
  'Membuat dan menyiapkan seluruh aset desain acara: feeds media sosial, poster, merchandise, desain cetak, dan sertifikat.':
    'Created and prepared all design assets for the event: social media feeds, posters, merchandise, print designs, and certificates.',
  'Membuat video aftermovie dan video publikasi acara.': "Produced the event's aftermovie and other publication videos.",
  'Divisi Publikasi dan Dokumentasi': 'Publication and Documentation Division',
  'Program kerja HME PNJ, ajang kompetisi olahraga dan seni tahunan jurusan Teknik Elektro PNJ.':
    'Annual work program of HME PNJ; a yearly sports and arts competition for the PNJ Electrical Engineering Department.',
  'Mendokumentasikan seluruh kegiatan acara.': 'Documented all event activities.',
  'Mengelola media sosial acara.': "Managed the event's social media.",
  'Membuat dan mengelola photobooth pada penutupan acara.': 'Created and operated the photobooth at the closing ceremony.',
  'Kuliah Umum EC-IKI PNJ 2024': 'EC-IKI PNJ 2024 Public Lecture',
  'Divisi Media': 'Media Division',
  'Kuliah umum jurusan Teknik Elektro untuk Program Studi D3 Elektronika Industri dan D4 Instrumentasi Kontrol Industri.':
    'Public lecture held by the Electrical Engineering Department for the D3 Industrial Electronics and D4 Industrial Control Instrumentation study programs.',
  'Memastikan pertemuan Zoom bagi peserta daring berjalan lancar.': 'Ensured a smooth Zoom meeting experience for online participants.',
  // hobi
  'Memotret kelulusan, acara kampus, dan photo hunting. Senang mengarahkan gaya subjek, lalu mengedit di Lightroom.':
    'Shooting graduations, campus events, and photo hunting. I enjoy directing the subject’s pose, then editing in Lightroom.',
  'Poster, feeds Instagram, merchandise, dan identitas visual, dari kebutuhan organisasi sampai brand sendiri.':
    'Posters, Instagram feeds, merchandise, and visual identity, from organization needs to my own brand.',
  'Photoshop (dasar)': 'Photoshop (basic)',
  'ibis Paint (dasar)': 'ibis Paint (basic)',
  // kapabilitas
  'IoT & Mikrokontroler': 'IoT & Microcontrollers',
  'Sistem Kendali & Otomasi Industri': 'Control Systems & Industrial Automation',
  'Pemrograman PLC': 'PLC Programming',
  'Sistem Proteksi & Pengujian': 'Protection & Testing Systems',
  'Keterampilan Praktik Elektronika': 'Electronics Practical Skills',
  'Wiring & Pengkabelan': 'Wiring & Cabling',
  'Alat Ukur Elektronika': 'Electronic Measurement Tools',
  Pemrograman: 'Programming',
  'Perancangan & Simulasi': 'Design & Simulation',
  'Visualisasi & Real-time': 'Visualization & Real-time',
  'Basis Data': 'Databases',
  'Desain Grafis, Multimedia & Fotografi': 'Graphic Design, Multimedia & Photography',
  'Microsoft Office & Bahasa': 'Microsoft Office & Languages',
  'Bahasa Indonesia': 'Indonesian',
  'Bahasa Inggris': 'English',
  // sertifikasi
  'Teknik Mengedit Video Kreatif': 'Creative Video Editing Techniques',
  'Bootcamp Manajemen Media Sosial': 'Social Media Management Bootcamp',
  'TOEIC Prediction Test (Skor 620/990)': 'TOEIC Prediction Test (Score 620/990)',
  // kontak
  'Tertarik untuk berkolaborasi, mendiskusikan peluang kerja, proyek IoT / sistem kontrol, atau membutuhkan jasa fotografi & desain grafis? Jangan ragu untuk menghubungi saya.':
    'Interested in collaborating, discussing job opportunities, IoT / control system projects, or need photography and graphic design services? Feel free to get in touch.',
  'Cipayung, Jakarta Timur, DKI Jakarta': 'Cipayung, East Jakarta, DKI Jakarta',
  // tag proyek
  'Dokumentasi Kepanitiaan': 'Committee Documentation',
  Kominfo: 'Comms & Info',
  Organisasi: 'Organization',
  'Media Kreatif': 'Creative Media',
  'Poster Nasional': 'National Poster',
  'Publikasi & Dokum': 'Publication & Docs',
  'Wisuda TE PNJ': 'TE PNJ Graduation',
  'Divisi PDD': 'PDD Division',
  'Elektronika Digital': 'Digital Electronics',
  Otomasi: 'Automation',
  'Sensor Infrared': 'Infrared Sensor',
  Robotika: 'Robotics',
  'Aset Editing': 'Asset Editing',
  'Desain Visual': 'Visual Design',
  'Dokumentasi Event': 'Event Documentation',
  'Klien Freelance': 'Freelance Client',
  'Desain Grafis': 'Graphic Design',
  'Banner Cetak': 'Print Banner',
  // label spesifikasi
  Kategori: 'Category',
  Jabatan: 'Position',
  'Periode Kerja': 'Working Period',
  Acara: 'Event',
  'Skala Acara': 'Event Scale',
  Kegiatan: 'Activity',
  Periode: 'Period',
  'Cakupan Foto': 'Photo Coverage',
  'Protokol Realtime': 'Realtime Protocol',
  Mikrokontroler: 'Microcontroller',
  'Algoritma Kontrol': 'Control Algorithm',
  'Visualisasi 3D': '3D Visualization',
  Prosesor: 'Processor',
  'Sensor Terpasang': 'Installed Sensors',
  Konektivitas: 'Connectivity',
  Aplikasi: 'Application',
  'Parameter Log': 'Logged Parameters',
  'Fitur Sistem': 'System Features',
  'Komponen Utama': 'Main Components',
  'Fitur Trainer': 'Trainer Features',
  Proteksi: 'Protection',
  'Arus Maksimal': 'Max Current',
  Fungsi: 'Function',
  'Library Vision': 'Vision Library',
  Fitur: 'Features',
  Tahun: 'Year',
  Mekanisme: 'Mechanism',
  Kontroler: 'Controller',
  'Sistem Penggerak': 'Drive System',
  'Kontrol Skor': 'Score Control',
  Proyek: 'Project',
  Fokus: 'Focus',
  Perangkat: 'Equipment',
  'Proses Edit': 'Editing Process',
  'Area Layanan': 'Service Area',
  Peran: 'Role',
  'Cakupan Kerja': 'Scope of Work',
  Peralatan: 'Equipment',
  Pengolahan: 'Processing',
  Lokasi: 'Location',
  'Format Output': 'Output Format',
  'Tahun Proyek': 'Project Year',
  'Kategori Portofolio': 'Portfolio Category',
  'Penyimpanan Drive': 'Drive Storage',
  'Software Terpakai': 'Software Used',
  'Proyek Acara': 'Event Project',
  // nilai spesifikasi
  'Dokumentasi Kepanitiaan & Organisasi': 'Committee & Organization Documentation',
  'Pengurus Departemen Kominfo': 'Communication & Information Department Member',
  'Maret 2025 – Desember 2025': 'March 2025 – December 2025',
  'Aset Visual, Poster, Feed, Certificate & Video': 'Visual Assets, Posters, Feeds, Certificates & Video',
  'Perlombaan Nasional': 'National Competition',
  'Divisi Publikasi & Dokumentasi': 'Publication & Documentation Division',
  'April 2024 – Agustus 2024': 'April 2024 – August 2024',
  'Match Action, Supporter & Photobooth Studio': 'Match Action, Supporters & Photobooth Studio',
  'Divisi PDD (Publikasi, Dokum & Desain)': 'PDD Division (Publication, Documentation & Design)',
  'Agustus 2024 – Oktober 2024': 'August 2024 – October 2024',
  'Suhu & Kelembaban Tanah': 'Temperature & Soil Moisture',
  'Data Logging & Sensor Table Log': 'Data Logging & Sensor Log Table',
  'Hardware Praktikum Digital': 'Digital Lab Hardware',
  'Filter Kapasitor & Dioda': 'Capacitor & Diode Filter',
  '1 Ampere': '1 Ampere',
  'Power Supply Mikrokontroler': 'Microcontroller Power Supply',
  'Deteksi Objek & Warna Real-time': 'Real-time Object & Color Detection',
  'Identitas Visual & Merchandise Design': 'Visual Identity & Merchandise Design',
  'Portret Kelulusan / Sidang': 'Graduation / Thesis-Defense Portraits',
  'Kamera Profesional & Lensa Prime': 'Professional Camera & Prime Lens',
  'Retouching Adobe Lightroom': 'Adobe Lightroom Retouching',
  'Jabodetabek (2023 - Sekarang)': 'Greater Jakarta (2023 - Present)',
  'Editing Aset Visual, Poster & Content': 'Visual Asset Editing, Posters & Content',
  'Personal Project / Hunting': 'Personal Project / Photo Hunting',
  'Street, Human Interest & Landscape': 'Street, Human Interest & Landscape',
  'Kamera Mirrorless & Lensa Prime/Zoom': 'Mirrorless Camera & Prime/Zoom Lenses',
  'Adobe Lightroom Color Grading': 'Adobe Lightroom Color Grading',
  'Liputan Match, Supporter & Awarding': 'Match Coverage, Supporters & Awarding',
  'Gedung & Lapangan Olahraga PNJ': 'PNJ Sports Hall & Fields',
  'Cetak Baliho / Spanduk CMYK': 'CMYK Billboard / Banner Print',
  'File Siap Cetak Res Tinggi': 'High-Res Print-Ready File',
  'Desain Grafis & Media Visual': 'Graphic Design & Visual Media',
  'Photoshop, Illustrator, Canva, ibis Paint X': 'Photoshop, Illustrator, Canva, ibis Paint X',
  'Photoshop, Canva & Illustrator': 'Photoshop, Canva & Illustrator',
  'Canva, Photoshop & ibis Paint X': 'Canva, Photoshop & ibis Paint X',
  'E-TIME 2025 Politeknik Negeri Jakarta': 'E-TIME 2025 Politeknik Negeri Jakarta',
  'Wi-Fi Telemetry IoT': 'Wi-Fi IoT Telemetry',
  'Automation & Plant Guard': 'Automation & Plant Guard',
  'Hardware Praktikum Digital ': 'Digital Lab Hardware',
  'Instagram (@me.diocreation)': 'Instagram (@me.diocreation)',
  'Mediocreation (Personal Brand)': 'Mediocreation (Personal Brand)',
  '2024 – Sekarang': '2024 – Present',
};

interface ProjectText {
  title: string;
  description: string;
}

/** Judul dan deskripsi proyek dalam bahasa Inggris, per id proyek. */
export const PROJECT_EN: Record<string, ProjectText> = {
  'org-1': {
    title: 'Committee Documentation - Communication & Information Staff, KSM PSYCHOROBOTIC PNJ',
    description:
      'Documentation and record of activities as a member of the Communication & Information Department of KSM PSYCHOROBOTIC PNJ (Mar 2025 – Dec 2025).',
  },
  'org-2': {
    title: 'Creative Media Division - E-TIME 2025 PNJ (National)',
    description:
      'Documentation of the Creative Media Division of E-TIME 2025 PNJ (May 2025 – Jul 2025). Produced visual assets for a national electrical engineering competition: publication posters, feeds, merchandise, e-certificates, and the aftermovie video.',
  },
  'org-3': {
    title: 'Publication & Documentation Division - Olahraga Elektro 2024 HME PNJ',
    description:
      'Official documentation and coverage of Olahraga Elektro 2024 HME PNJ (Apr 2024 – Aug 2024). Covered match photography, managed the Instagram account @OE_PNJ, and ran the closing-ceremony photobooth studio.',
  },
  'org-4': {
    title: 'Committee Documentation - PDD Division, Fraction 2024 (TE PNJ Graduation)',
    description:
      'Documentation of the Publication, Documentation & Design Division of Fraction 2024 (Aug 2024 – Oct 2024). Managed social media publication, photo and video documentation of the Electrical Engineering department graduation, and designed visual assets and decoration layouts.',
  },
  'eng-numa': {
    title: 'Numa Space - Virtual Study Room & Realtime Matchmaking',
    description:
      'A virtual study room platform with realtime study-buddy matchmaking. It supports P2P video/audio via WebRTC, Socket.IO chat, a private room access code system, and a Pomodoro Timer for productivity. Live Web Application: http://numaspace.vercel.app/',
  },
  'eng-1': {
    title: 'Dual DC Motor Control Trainer Kit (PID & Fuzzy)',
    description:
      'D3 Industrial Electronics final project at PNJ: a trainer kit for precise dual-control DC motor control using PID and Fuzzy Logic algorithms on an ESP32. It comes with a web monitoring interface (HTML/CSS/JS) and an interactive Three.js r160 3D Digital Twin synchronized through Firebase Realtime Database. Web Live Demo: https://trainermotordc.web.app/',
  },
  'eng-2': {
    title: 'IoT Plant Guardian Robot (Psychorobotic)',
    description:
      'A KSM Psychorobotic PNJ project: a plant-monitoring robot using an ESP32-C3, a DHT11 air temperature and humidity sensor, and a soil moisture sensor to monitor plant conditions automatically over IoT.',
  },
  'eng-3': {
    title: 'IoT Web Dashboard & MySQL Telemetry',
    description:
      'An interactive web dashboard for realtime monitoring of environmental parameters (temperature, air humidity, and soil moisture), integrated with a MySQL database to log and store historical sensor data.',
  },
  'eng-4': {
    title: 'Digital Logic Gates Practice Module',
    description:
      'Design of a logic gate trainer kit for learning Digital Electronics. It includes basic AND, OR, NOT, NAND, NOR, XOR gates, Full Adder, Multiplexer, Demultiplexer, Flip-flop, BCD to 7-Segment Decoder, and LED indicators.',
  },
  'eng-5': {
    title: 'Stable 9V Power Supply with IC 7809',
    description:
      'Design and fabrication of a regulated power supply circuit using an IC 7809 with a stable 9V DC output to power electronic circuits and microcontrollers.',
  },
  'eng-6': {
    title: 'Object and Color Detection Mobile Robot',
    description:
      'Developed a real-time object and color detection system using a Raspberry Pi camera and the OpenCV library. The robot moves autonomously based on the camera’s visual analysis.',
  },
  'eng-7': {
    title: 'Touchless Automatic Hand-Washing Machine',
    description:
      'Designed a touchless system based on an Arduino Uno and an infrared sensor that dispenses soap and water automatically without contact. Built for hygiene and efficient water use.',
  },
  'eng-8': {
    title: 'Line Follower Robot & Obstacle Avoiding Robot',
    description:
      'Built and programmed a line follower robot based on an OP-Amp comparator and an obstacle avoiding robot based on an Arduino Uno with an ultrasonic sensor for autonomous navigation around obstacles.',
  },
  'eng-9': {
    title: 'Digital 2-Team Football Scoreboard',
    description:
      'Designed and built a digital scoreboard for 2 football teams using large seven-segment displays and a reliable digital counter circuit.',
  },
  'creative-medio': {
    title: 'Mediocreation - Brand Merchandise & Visual Media',
    description:
      'Entrepreneurship assignment and personal project (personal brand): designed the brand’s visual identity, Instagram feed, and promotional posters, and created photo and video content for Instagram Story and Reels. Portfolio: @me.diocreation.',
  },
  'photo-1': {
    title: 'Academic Graduation & Thesis-Defense Photography',
    description:
      'Independent professional photography for graduation celebrations and post-thesis-defense moments across Greater Jakarta, covering style direction, lighting, and color retouching in Adobe Lightroom.',
  },
  'photo-2': {
    title: 'E-TIME 2025 PNJ Creative Assets & Media',
    description:
      'Design and editing of digital visual assets, national competition posters, social media feeds, and other creative media needs for E-TIME 2025 at Politeknik Negeri Jakarta.',
  },
  'photo-3': {
    title: 'Personal Photo Project (Photo Hunting)',
    description:
      'A collection of personal photography captured while photo hunting, exploring street photography, human interest, and the beauty of architecture and nature.',
  },
  'photo-4': {
    title: 'Olahraga Elektro 2024 Documentation (OE PNJ)',
    description:
      'Official photographic documentation of the Olahraga Elektro 2024 HME PNJ event series, covering match action, supporter enthusiasm, and the closing ceremony.',
  },
  'des-1': {
    title: 'Custom Graduation Print Banner Design',
    description:
      'Custom print banner design for a client’s graduation celebration, with a high-contrast color composition and print-ready output.',
  },
  'des-4': {
    title: 'Psychorobotic Graphic Design & Visual Portfolio',
    description:
      'Design and management of digital visual material, robotics infographics, Instagram post templates, and information publications for the Communication & Information team of KSM Psychorobotic PNJ.',
  },
  'des-fraction': {
    title: 'Fraction 2024 (TE PNJ Graduation)',
    description: 'A portfolio of graphic design work and documentation for Fraction 2024.',
  },
};

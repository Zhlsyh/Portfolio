// Pendidikan, organisasi, hobi, dan musik. Isi pendidikan & organisasi mengikuti CV terbaru (CV Umum).

export const EDUCATION = [
  {
    school: 'Politeknik Negeri Jakarta',
    place: 'Depok, Jawa Barat',
    program: 'D3 Elektronika Industri',
    period: '2023 – 2026',
    badge: 'IPK 3,55 / 4,00',
    points: [
      'Tugas Akhir: "Trainer Kit Kendali Motor DC Dual-Control PID-Fuzzy Berbasis ESP32 dengan Visualisasi Digital Twin 3D".',
      'Sub judul: "Perancangan Web Monitoring dan Visualisasi Digital Twin 3D Berbasis Real-Time Database pada Trainer Kit".',
      'Asisten Dosen pada kegiatan Pengabdian Masyarakat instalasi Green House Hidroponik bertenaga solar panel.',
    ],
    projectId: 'eng-1',
  },
  {
    school: 'SMAN 64 Jakarta',
    place: 'Jakarta Timur',
    program: 'SMA, Jurusan MIPA',
    period: '2019 – 2022',
    badge: '',
    points: [] as string[],
    projectId: '',
  },
];

export const ORGANIZATIONS = [
  {
    id: 'org-1',
    logo: '/logos/organisasi/psychorobotic.png',
    name: 'PSYCHOROBOTIC PNJ',
    role: 'Departemen Kominfo',
    period: 'Mar 2025 – Des 2025',
    about: 'KSM (Kelompok Studi Mahasiswa) Politeknik Negeri Jakarta yang mempelajari Robotika dan IoT.',
    points: [
      'Membuat seluruh desain untuk kebutuhan organisasi.',
      'Mendokumentasikan seluruh kegiatan organisasi.',
      'Mengelola media sosial organisasi.',
      'Membuat konten edukasi mengenai robotika.',
      'Ikut serta dalam kegiatan lomba robotika.',
    ],
  },
  {
    id: 'org-2',
    logo: '/logos/organisasi/etime.png',
    name: 'E-TIME 2025',
    role: 'Divisi Media Kreatif',
    period: 'Mei 2025 – Jul 2025',
    about:
      'E-TIME (Electro Activities Programme), lomba tingkat nasional bidang elektro oleh Himpunan Mahasiswa Elektro PNJ (Line Follower, PLC, Networking, Collaborative Robot).',
    points: [
      'Membuat dan menyiapkan seluruh aset desain acara: feeds media sosial, poster, merchandise, desain cetak, dan sertifikat.',
      'Membuat video aftermovie dan video publikasi acara.',
    ],
  },
  {
    id: 'org-3',
    logo: '/logos/organisasi/oe.png',
    name: 'Olahraga Elektro 2024',
    role: 'Divisi Publikasi dan Dokumentasi',
    period: 'Apr 2024 – Agu 2024',
    about: 'Program kerja HME PNJ, ajang kompetisi olahraga dan seni tahunan jurusan Teknik Elektro PNJ.',
    points: [
      'Mendokumentasikan seluruh kegiatan acara.',
      'Mengelola media sosial acara.',
      'Membuat dan mengelola photobooth pada penutupan acara.',
    ],
  },
  {
    id: 'org-4',
    logo: '/logos/organisasi/fraction.png',
    name: 'Kuliah Umum EC-IKI PNJ 2024',
    role: 'Divisi Media',
    period: 'Nov 2024',
    about:
      'Kuliah umum jurusan Teknik Elektro untuk Program Studi D3 Elektronika Industri dan D4 Instrumentasi Kontrol Industri.',
    points: ['Mendokumentasikan seluruh kegiatan acara.', 'Memastikan pertemuan Zoom bagi peserta daring berjalan lancar.'],
  },
];

export const HOBBIES = [
  {
    key: 'photo',
    title: 'Photography',
    color: '#ffd24a',
    text: 'Memotret kelulusan, acara kampus, dan photo hunting. Senang mengarahkan gaya subjek, lalu mengedit di Lightroom.',
    tags: ['Directing & shooting', 'Adobe Lightroom', 'Photo hunting'],
    images: ['/hobby/photo-1.jpg', '/hobby/photo-2.jpg', '/hobby/photo-3.jpg'],
  },
  {
    key: 'design',
    title: 'Design',
    color: '#6ec1e4',
    text: 'Poster, feeds Instagram, merchandise, dan identitas visual, dari kebutuhan organisasi sampai brand sendiri.',
    tags: ['Canva', 'Photoshop (dasar)', 'ibis Paint (dasar)'],
    images: [] as string[],
  },
];

export const SPOTIFY = {
  profileUrl: 'https://open.spotify.com/user/8tur95y6stdyg1s0mjwkjztwm?si=c73f3c0ecc4c4066',
  displayName: 'Myy',
  // Isi dengan ID playlist/album/track untuk menampilkan pemutar Spotify di halaman.
  // Contoh: embedPath: 'playlist/37i9dQZF1DXcBWIGoYBM5M'
  embedPath: 'playlist/05ICtDzqYho0bQCvauPynm',
};

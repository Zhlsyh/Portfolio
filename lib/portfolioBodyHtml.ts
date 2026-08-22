// Konten HTML statis portfolio (hasil migrasi langsung dari index.html Vite).
// Disimpan sebagai string dan di-render via dangerouslySetInnerHTML supaya
// markup asli (beserta seluruh id/class yang dipakai oleh lib/initPortfolio.ts)
// tetap identik tanpa perlu menulis ulang jadi JSX satu per satu.
export const PORTFOLIO_BODY_HTML = `
    <!-- Ambient Animated Aurora Background Layer -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <!-- Top Left Lime / Cyan / Purple Aurora Blob -->
        <div class="aurora-blob-1 absolute -top-40 -left-40 w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full bg-gradient-to-tr from-[#0e7b97]/45 via-[#00F0FF]/35 to-[#a855f7]/35 dark:from-[#58E200]/30 dark:via-[#00D2FF]/25 dark:to-[#256CFF]/40 blur-[90px] md:blur-[130px] opacity-25 dark:opacity-80"></div>
        
        <!-- Top Right Magenta / Violet / Lime Aurora Blob -->
        <div class="aurora-blob-2 absolute top-10 -right-40 w-[550px] h-[550px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-[#FF0080]/35 via-[#7928CA]/40 to-[#0e7b97]/35 dark:from-[#8A2BE2]/30 dark:via-[#4F46E5]/35 dark:to-[#58E200]/25 blur-[100px] md:blur-[140px] opacity-20 dark:opacity-75"></div>
        
        <!-- Center Floating Cyan / Lime Glow -->
        <div class="aurora-blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[950px] md:h-[950px] rounded-full bg-gradient-to-r from-[#00E5FF]/40 via-[#0e7b97]/35 to-[#EC4899]/30 dark:from-[#256CFF]/30 dark:via-[#58E200]/20 dark:to-[#10B981]/25 blur-[110px] md:blur-[150px] opacity-20 dark:opacity-70"></div>
        
        <!-- Lower Ambient Aurora Glow -->
        <div class="aurora-blob-1 absolute -bottom-48 left-1/4 w-[550px] h-[550px] md:w-[850px] md:h-[850px] rounded-full bg-gradient-to-t from-[#0e7b97]/40 via-[#00F0FF]/35 to-[#8B5CF6]/30 dark:from-[#58E200]/25 dark:via-[#256CFF]/30 dark:to-[#9333EA]/20 blur-[100px] md:blur-[140px] opacity-20 dark:opacity-75"></div>
    </div>

    <!-- Top Navigation Bar -->
    <nav class="fixed top-0 w-full z-50 bg-white/10 border-b border-white/20 backdrop-blur-2xl shadow-lg transition-all duration-300">
        <div class="flex justify-between items-center px-5 md:px-16 py-4 max-w-7xl mx-auto h-20">
            <button id="nav-brand" class="font-extrabold text-xl md:text-2xl text-white tracking-tight hover:opacity-90 transition-opacity">
                ZULHELMI SYAHTIAR
            </button>
            
            <div class="hidden lg:flex items-center gap-5 xl:gap-6 font-bold text-xs uppercase tracking-wider">
                <button data-tab="home" class="nav-btn active-nav-link text-white/90 hover:text-secondary transition-colors flex items-center gap-1.5 py-1">
                    <span class="material-symbols-outlined text-[18px]">home</span>Beranda
                </button>
                <button data-tab="experience" class="nav-btn text-white/90 hover:text-secondary transition-colors flex items-center gap-1.5 py-1">
                    <span class="material-symbols-outlined text-[18px]">work</span>Pengalaman
                </button>
                <button data-tab="projects" class="nav-btn text-white/90 hover:text-secondary transition-colors flex items-center gap-1.5 py-1">
                    <span class="material-symbols-outlined text-[18px]">memory</span>Proyek Teknik
                </button>
                <button data-tab="design-photo" class="nav-btn text-white/90 hover:text-secondary transition-colors flex items-center gap-1.5 py-1">
                    <span class="material-symbols-outlined text-[18px]">photo_camera</span>Desain & Fotografi
                </button>
                <button data-tab="skills" class="nav-btn text-white/90 hover:text-secondary transition-colors flex items-center gap-1.5 py-1">
                    <span class="material-symbols-outlined text-[18px]">bolt</span>Keahlian
                </button>
                <button data-tab="certifications" class="nav-btn text-white/90 hover:text-secondary transition-colors flex items-center gap-1.5 py-1">
                    <span class="material-symbols-outlined text-[18px]">verified</span>Sertifikasi
                </button>
                <button data-tab="contact" class="nav-btn text-white/90 hover:text-secondary transition-colors flex items-center gap-1.5 py-1">
                    <span class="material-symbols-outlined text-[18px]">mail</span>Kontak
                </button>
            </div>

            <div class="flex items-center gap-3.5 sm:gap-4 lg:ml-6 lg:pl-6 lg:border-l lg:border-white/25">
                <button id="theme-toggle" aria-label="Toggle dark mode" title="Beralih Mode Gelap/Terang" class="w-10 h-10 border border-white/25 bg-white/15 backdrop-blur-md rounded-lg hover:border-secondary/50 transition-all flex items-center justify-center cursor-pointer">
                    <span id="theme-toggle-dark-icon" class="material-symbols-outlined text-primary text-xl hidden" style="display: none;">dark_mode</span>
                    <span id="theme-toggle-light-icon" class="material-symbols-outlined text-amber-300 dark:text-secondary text-xl" style="display: inline-block;">light_mode</span>
                </button>
                <button id="open-resume-btn" class="bg-secondary text-black font-extrabold text-sm px-6 py-2.5 rounded-lg border border-secondary/30 hover:bg-secondary/90 transition-all shadow-md btn-press">
                    Resume
                </button>
                <button id="mobile-menu-toggle" aria-label="Menu" class="lg:hidden p-2 text-white">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white/15 backdrop-blur-2xl border-b border-white/20 px-6 py-5 flex flex-col gap-2">
            <button data-tab="home" class="mobile-nav-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-left font-bold text-white hover:bg-white/10">
                <span class="material-symbols-outlined text-secondary">home</span>Beranda
            </button>
            <button data-tab="experience" class="mobile-nav-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-left font-bold text-white hover:bg-white/10">
                <span class="material-symbols-outlined text-secondary">work</span>Pengalaman Kerja
            </button>
            <button data-tab="projects" class="mobile-nav-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-left font-bold text-white hover:bg-white/10">
                <span class="material-symbols-outlined text-secondary">memory</span>Proyek Teknik & IoT
            </button>
            <button data-tab="design-photo" class="mobile-nav-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-left font-bold text-white hover:bg-white/10">
                <span class="material-symbols-outlined text-secondary">photo_camera</span>Portofolio Desain & Fotografi
            </button>
            <button data-tab="skills" class="mobile-nav-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-left font-bold text-white hover:bg-white/10">
                <span class="material-symbols-outlined text-secondary">bolt</span>Keahlian
            </button>
            <button data-tab="certifications" class="mobile-nav-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-left font-bold text-white hover:bg-white/10">
                <span class="material-symbols-outlined text-secondary">verified</span>Sertifikasi & Pelatihan
            </button>
            <button data-tab="contact" class="mobile-nav-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-left font-bold text-white hover:bg-white/10">
                <span class="material-symbols-outlined text-secondary">mail</span>Kontak
            </button>
            <button id="mobile-resume-btn" class="mt-2 bg-secondary text-black font-extrabold py-3 rounded-xl border border-secondary/30 flex items-center justify-center gap-2 shadow-md">
                <span class="material-symbols-outlined">description</span>Buka Curriculum Vitae
            </button>
        </div>
    </nav>

    <!-- SECTION 1: HOME -->
    <section id="home" class="min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-5 md:px-16 max-w-7xl mx-auto relative overflow-hidden">
        <!-- Abstract Background Orbs -->
        <div class="absolute top-20 -left-20 w-96 h-96 bg-primary/10 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto">
            <!-- Hero Left Content -->
            <div class="lg:col-span-7 flex flex-col gap-6">
                <h1 class="font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                    Zulhelmi <br>
                    <span class="text-secondary">Syahtiar.</span>
                </h1>
                
                <p class="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-normal">
                    Fresh Graduate Jurusan Teknik Elektro, Program Studi D3 Elektronika Industri. Memiliki minat kuat di bidang Internet of Things (IoT), mikroprosesor, sistem kontrol, pemrograman web, serta memiliki  ketertarikan di bidang desain dan fotografi. Terbiasa mengerjakan proyek berbasis mikrokontroler dan pengembangan sistem otomasi sederhana. Bersemangat untuk terus belajar, berinovasi, dan menerapkan teknologi terbaru dalam dunia industri.
                </p>

                <!-- Call To Action Buttons -->
                <div class="flex flex-wrap gap-4 pt-2">
                    <button data-tab="contact" class="bg-secondary text-black hover:bg-secondary/90 px-8 py-4 border-2 border-black/20 hard-shadow-primary font-extrabold text-lg flex items-center gap-2 btn-press transition-all">
                        <span>Hubungi Saya</span>
                        <span class="material-symbols-outlined">send</span>
                    </button>
                    <button id="hero-resume-btn" class="bg-transparent text-white px-8 py-4 border-2 border-white/40 hard-shadow-secondary font-extrabold text-lg hover:bg-white/10 btn-press transition-all flex items-center gap-2 cv-bounce-hover group">
                        <span>Unduh CV</span>
                        <span class="material-symbols-outlined group-hover:text-secondary">download</span>
                    </button>
                    <button data-tab="projects" class="text-white/90 hover:text-secondary px-4 py-4 font-bold text-base transition-colors flex items-center gap-2">
                        <span>Lihat Karya</span>
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>

            <!-- Hero Right Interactive Frame -->
            <div class="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div id="hero-frame" class="relative w-full max-w-md aspect-square glass-panel p-4 border-2 border-slate-300 dark:border-white/20 shadow-2xl group cursor-pointer transition-transform duration-500" style="transform: perspective(1000px) rotateZ(-2deg);">
                    <!-- Industrial Badge -->
                    <div class="absolute -top-6 -right-6 bg-secondary p-4 border-2 border-black/20 text-black z-20 shadow-xl animate-pulse font-bold">
                        <span class="material-symbols-outlined text-[32px]">memory</span>
                    </div>

                    <div class="w-full h-full bg-slate-900/10 dark:bg-black/40 overflow-hidden border-2 border-slate-200 dark:border-white/10 transition-colors">
                        <img src="/profile.jpeg" alt="Zulhelmi Syahtiar" class="w-full h-full object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105">
                    </div>

                    <!-- Floating Quote Card -->
                    <div class="absolute -bottom-8 -left-6 md:-left-8 glass-panel p-5 border-2 border-white/20 text-white font-medium text-xs md:text-sm max-w-[280px] shadow-2xl backdrop-blur-md">
                        <span class="text-secondary text-2xl font-bold leading-none">“</span>
                        <p class="inline italic">Do what you wanna do</p>
                        <span class="text-secondary text-2xl font-bold leading-none">“</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bento Feature Snippet -->
        <div class="max-w-7xl w-full mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
            <div class="glass-panel p-8 border-2 border-white/10 hover:border-secondary/40 transition-all group cursor-default shadow-xl">
                <span class="material-symbols-outlined text-secondary text-4xl mb-4 block group-hover:rotate-12 transition-transform">developer_board</span>
                <div class="font-bold text-white/50 uppercase tracking-[0.2em] text-[10px] mb-2">Hardware & IoT</div>
                <div class="text-white font-bold text-xl group-hover:text-secondary transition-colors">ESP32 & Arduino</div>
            </div>
            <div class="glass-panel p-8 border-2 border-white/10 hover:border-secondary/40 transition-all group cursor-default shadow-xl">
                <span class="material-symbols-outlined text-secondary text-4xl mb-4 block group-hover:rotate-12 transition-transform">tune</span>
                <div class="font-bold text-white/50 uppercase tracking-[0.2em] text-[10px] mb-2">Sistem Kontrol</div>
                <div class="text-white font-bold text-xl group-hover:text-secondary transition-colors">PID & Fuzzy Logic</div>
            </div>
            <div class="glass-panel p-8 border-2 border-white/10 hover:border-secondary/40 transition-all group cursor-default shadow-xl">
                <span class="material-symbols-outlined text-secondary text-4xl mb-4 block group-hover:rotate-12 transition-transform">electric_bolt</span>
                <div class="font-bold text-white/50 uppercase tracking-[0.2em] text-[10px] mb-2">Otomasi Industri</div>
                <div class="text-white font-bold text-xl group-hover:text-secondary transition-colors">PLC & SCADA</div>
            </div>
            <div class="glass-panel p-8 border-2 border-white/10 hover:border-secondary/40 transition-all group cursor-default shadow-xl">
                <span class="material-symbols-outlined text-secondary text-4xl mb-4 block group-hover:rotate-12 transition-transform">photo_camera</span>
                <div class="font-bold text-white/50 uppercase tracking-[0.2em] text-[10px] mb-2">Kreatif & Media</div>
                <div class="text-white font-bold text-xl group-hover:text-secondary transition-colors">Fotografi & Desain</div>
            </div>
        </div>
    </section>

    <!-- SECTION 2: PENGALAMAN KERJA -->
    <section id="experience" class="pt-28 pb-20 px-5 md:px-16 max-w-7xl mx-auto min-h-screen">
        <header class="mb-12 space-y-4">
            <div class="inline-flex items-center gap-2 bg-secondary text-black px-4 py-1.5 border border-black/20 font-bold text-xs uppercase tracking-wider rounded-md">
                <span class="material-symbols-outlined text-sm">work</span>
                Rekam Jejak Karir & Organisasi
            </div>
            <h1 class="text-4xl md:text-6xl text-white font-extrabold tracking-tight">Pengalaman Kerja</h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
                Pengalaman kerja industri di gardu induk PLN, proyek freelance fotografi & desain visual, serta peran kepemimpinan di organisasi kemahasiswaan PNJ.
            </p>
        </header>

        <div class="space-y-8">
            <!-- Experience Item 1: PLN -->
            <div class="glass-panel p-8 md:p-10 border-2 border-white/15 hover:border-secondary/60 transition-all rounded-2xl relative overflow-hidden group shadow-xl">
                <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                        <span class="text-xs font-extrabold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">Magang Kerja Industri</span>
                        <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-2">Magang Pemeliharaan Proteksi (HAR PRO)</h2>
                        <p class="text-secondary font-bold text-base mt-1 flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg">electric_bolt</span>
                            PT PLN (Persero) ULTG Petukangan
                        </p>
                    </div>
                    <div class="text-left lg:text-right">
                        <span class="text-sm font-extrabold text-black bg-secondary px-4 py-2 rounded-xl shadow-md inline-block">Juli 2025 – November 2025</span>
                        <p class="text-xs text-white/70 font-medium mt-2">Jakarta & Tangerang</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="md:col-span-2 space-y-3 text-white/90 text-sm leading-relaxed">
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary shrink-0 mt-0.5 text-lg">check_circle</span>
                            <p>Melaksanakan pemeliharaan dan pengawasan sistem relai proteksi Gardu Induk (Relai OCR, GFR, Differential, Distance, OVR/UVR, Buchholz, Thermal Overload).</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary shrink-0 mt-0.5 text-lg">check_circle</span>
                            <p>Berpartisipasi dalam pengujian Battery Capacity Test (BCT) dan pengujian migrasi transformator gardu induk 150kV.</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary shrink-0 mt-0.5 text-lg">check_circle</span>
                            <p>Penyusunan Laporan Hasil Uji (LHU) & proteksi sistem penyulang 20kV & 150kV.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-center gap-2">
                        <span class="text-xs uppercase font-bold text-white/60 tracking-wider">Keahlian Terpakai:</span>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-2.5 py-1 bg-white/10 text-white font-bold text-xs rounded border border-white/15">Relai Proteksi</span>
                            <span class="px-2.5 py-1 bg-white/10 text-white font-bold text-xs rounded border border-white/15">Instrumentasi</span>
                            <span class="px-2.5 py-1 bg-white/10 text-white font-bold text-xs rounded border border-white/15">Otomasi Gardu</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experience Item 2: Freelance Photography & Design -->
            <div class="glass-panel p-8 md:p-10 border-2 border-white/15 hover:border-secondary/60 transition-all rounded-2xl relative overflow-hidden group shadow-xl">
                <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                        <span class="text-xs font-extrabold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">Freelance & Proyek Mandiri</span>
                        <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-2">Freelance Photographer & Graphic Designer</h2>
                        <p class="text-secondary font-bold text-base mt-1 flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg">photo_camera</span>
                            Klien Independen & Komunitas
                        </p>
                    </div>
                    <div class="text-left lg:text-right">
                        <span class="text-sm font-extrabold text-black bg-secondary px-4 py-2 rounded-xl shadow-md inline-block">Maret 2023 – Sekarang</span>
                        <p class="text-xs text-white/70 font-medium mt-2">Jabodetabek</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="md:col-span-2 space-y-3 text-white/90 text-sm leading-relaxed">
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary shrink-0 mt-0.5 text-lg">check_circle</span>
                            <p>Merencanakan & mengeksekusi sesi fotografi kelulusan akademik, pasca-sidang, serta dokumentasi event dengan retouching warna di Adobe Lightroom.</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary shrink-0 mt-0.5 text-lg">check_circle</span>
                            <p>Merancang karya desain grafis banner cetak kustom, poster acara, feeds Instagram, dan materi promosi visual untuk berbagai klien.</p>
                        </div>
                    </div>
                    <div class="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-center gap-2">
                        <span class="text-xs uppercase font-bold text-white/60 tracking-wider">Aplikasi & Tools:</span>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-2.5 py-1 bg-white/10 text-white font-bold text-xs rounded border border-white/15">Adobe Lightroom</span>
                            <span class="px-2.5 py-1 bg-white/10 text-white font-bold text-xs rounded border border-white/15">Photoshop</span>
                            <span class="px-2.5 py-1 bg-white/10 text-white font-bold text-xs rounded border border-white/15">Canva</span>
                            <span class="px-2.5 py-1 bg-white/10 text-white font-bold text-xs rounded border border-white/15">Kamera Mirorrless</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experience Item 3: Organisasi & Kepanitiaan (Model Kartu UNO 3D Flip & Zoom) -->
            <div class="pt-8">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
                            <span class="material-symbols-outlined text-secondary text-3xl">style</span>
                            <span>Pengalaman Organisasi & Kepanitiaan</span>
                        </h2>
                        <p class="text-xs md:text-sm text-white/70 font-medium mt-1">
                            Model Kartu UNO Tema Portofolio – Klik kartu untuk animasi 3D Flip & Zoom dokumentasi kegiatan.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- UNO CARD 1: KSM PSYCHOROBOTIC PNJ -->
                    <div class="uno-flip-container group" data-project-id="org-1">
                        <div class="uno-card-flipper">
                            <!-- FRONT FACE -->
                            <div class="uno-card-face uno-card-front-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>01</span>
                                        <span class="material-symbols-outlined text-lg">smart_toy</span>
                                    </div>
                                    <span class="text-[10px] font-extrabold uppercase tracking-widest bg-secondary/15 text-secondary px-2.5 py-0.5 rounded-full border border-secondary/30">
                                        UNO CARD
                                    </span>
                                </div>

                                <!-- Central Oval Badge with ONLY Logo Slot (Enlarged) -->
                                <div class="uno-oval-themed my-2 py-3">
                                    <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-secondary bg-slate-950 p-2 shadow-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                                        <img src="/logos/organisasi/psychorobotic.png" alt="Logo KSM Psychorobotic PNJ" class="w-full h-full object-contain">
                                    </div>
                                </div>

                                <!-- Card Front Info -->
                                <div class="space-y-2.5 pt-1">
                                    <div class="flex items-center justify-between text-[11px] md:text-xs font-extrabold bg-white/5 px-2.5 py-1.5 rounded-xl border border-white/10 text-white whitespace-nowrap overflow-hidden">
                                        <span class="flex items-center gap-1 text-white/70">
                                            <span class="material-symbols-outlined text-sm text-secondary">calendar_month</span>
                                            <span>Periode:</span>
                                        </span>
                                        <span class="text-secondary font-black">Mar 2025 – Des 2025</span>
                                    </div>
                                    <div class="py-2 px-3 rounded-xl bg-secondary/10 border border-secondary/30 text-center text-xs font-bold text-secondary flex items-center justify-center gap-1.5 group-hover:bg-secondary/20 transition-all">
                                        <span class="material-symbols-outlined text-sm">sync_alt</span>
                                        <span>Klik untuk Flip (Rincian & Dokum)</span>
                                    </div>

                                    <!-- Kepanitiaan & Divisi di bawah tulisan flip -->
                                    <div class="text-center pt-2.5 border-t border-white/10">
                                        <h3 class="text-sm md:text-base uno-card-title leading-tight">Pengurus Kominfo</h3>
                                        <p class="text-[11px] uno-card-subtitle uppercase tracking-wider mt-0.5">KSM PSYCHOROBOTIC PNJ</p>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-2">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>01</span>
                                        <span class="material-symbols-outlined text-lg">smart_toy</span>
                                    </div>
                                </div>
                            </div>

                            <!-- BACK FACE -->
                            <div class="uno-card-face uno-card-back-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>01</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                    <span class="text-[10px] font-black uppercase tracking-widest bg-secondary text-black px-2.5 py-0.5 rounded-full">
                                        DETAILS & DOKUM
                                    </span>
                                </div>

                                <!-- Back Details Content -->
                                <div class="space-y-2.5 my-auto py-1">
                                    <div class="bg-white/5 border border-white/10 p-2.5 rounded-xl space-y-1">
                                        <h4 class="text-xs font-extrabold flex items-center gap-1.5 border-b border-white/10 pb-1">
                                            <span class="material-symbols-outlined text-secondary text-sm">badge</span>
                                            <span>Tugas & Responsibilitas:</span>
                                        </h4>
                                        <p class="text-[11px] text-white/90 leading-relaxed font-medium">
                                            Mengelola media komunikasi visual, merancang template feeds Instagram, poster kegiatan, serta dokumentasi karya robotika.
                                        </p>
                                    </div>

                                    <!-- Documentation Thumbnails & Counter -->
                                    <div class="bg-white/5 border border-white/10 p-2 rounded-xl space-y-1.5">
                                        <div class="flex items-center justify-between text-[11px] font-extrabold text-white">
                                            <span class="flex items-center gap-1">
                                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                                <span>Dokumentasi Kegiatan:</span>
                                            </span>
                                            <span id="card-badge-org-1" class="bg-secondary/20 text-secondary border border-secondary/40 px-2 py-0.5 rounded-md font-extrabold">2 Foto</span>
                                        </div>
                                        <div id="card-thumbnails-org-1" class="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                                            <!-- Dynamic Thumbnail Strip initialized via JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Buttons on Back -->
                                <div class="space-y-1.5 pt-2 border-t border-white/15">
                                    <div class="flex gap-1.5">
                                        <button data-project-id="org-1" class="open-project-modal-btn flex-1 py-2 bg-secondary text-black font-extrabold text-[11px] uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-1 btn-press">
                                            <span class="material-symbols-outlined text-sm">zoom_in</span>
                                            <span>Perbesar</span>
                                        </button>
                                        <a href="https://drive.google.com/drive/folders/1MW-zqLVDPw4Wtqc5LLOj4cOjHaEPR4eq?usp=sharing" target="_blank" rel="noopener noreferrer" class="px-2.5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-[11px] rounded-xl flex items-center justify-center gap-1 transition-all" title="Buka Drive Dokumentasi Psychorobotic">
                                            <span class="material-symbols-outlined text-sm">folder_open</span>
                                            <span>Drive</span>
                                        </a>
                                    </div>
                                    <div class="text-center text-[10px] text-white/60 font-bold flex items-center justify-center gap-1">
                                        <span class="material-symbols-outlined text-xs">undo</span>
                                        <span>Klik kartu untuk putar balik</span>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-1">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>01</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- UNO CARD 2: E-TIME 2025 PNJ (NASIONAL) -->
                    <div class="uno-flip-container group" data-project-id="org-2">
                        <div class="uno-card-flipper">
                            <!-- FRONT FACE -->
                            <div class="uno-card-face uno-card-front-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>02</span>
                                        <span class="material-symbols-outlined text-lg">electric_bolt</span>
                                    </div>
                                    <span class="text-[10px] font-extrabold uppercase tracking-widest bg-secondary/15 text-secondary px-2.5 py-0.5 rounded-full border border-secondary/30">
                                        UNO CARD
                                    </span>
                                </div>

                                <!-- Central Oval Badge with ONLY Logo Slot (Enlarged) -->
                                <div class="uno-oval-themed my-2 py-3">
                                    <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-secondary bg-slate-950 p-2 shadow-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                                        <img src="/logos/organisasi/etime.png" alt="Logo E-TIME 2025 PNJ" class="w-full h-full object-contain">
                                    </div>
                                </div>

                                <!-- Card Front Info -->
                                <div class="space-y-2.5 pt-1">
                                    <div class="flex items-center justify-between text-[11px] md:text-xs font-extrabold bg-white/5 px-2.5 py-1.5 rounded-xl border border-white/10 text-white whitespace-nowrap overflow-hidden">
                                        <span class="flex items-center gap-1 text-white/70">
                                            <span class="material-symbols-outlined text-sm text-secondary">calendar_month</span>
                                            <span>Periode:</span>
                                        </span>
                                        <span class="text-secondary font-black">Mei 2025 – Jul 2025</span>
                                    </div>
                                    <div class="py-2 px-3 rounded-xl bg-secondary/10 border border-secondary/30 text-center text-xs font-bold text-secondary flex items-center justify-center gap-1.5 group-hover:bg-secondary/20 transition-all">
                                        <span class="material-symbols-outlined text-sm">sync_alt</span>
                                        <span>Klik untuk Flip (Rincian & Dokum)</span>
                                    </div>

                                    <!-- Kepanitiaan & Divisi di bawah tulisan flip -->
                                    <div class="text-center pt-2.5 border-t border-white/10">
                                        <h3 class="text-sm md:text-base uno-card-title leading-tight">Divisi Media Kreatif</h3>
                                        <p class="text-[11px] uno-card-subtitle uppercase tracking-wider mt-0.5">E-TIME 2025 PNJ (Nasional)</p>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-2">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>02</span>
                                        <span class="material-symbols-outlined text-lg">electric_bolt</span>
                                    </div>
                                </div>
                            </div>

                            <!-- BACK FACE -->
                            <div class="uno-card-face uno-card-back-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>02</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                    <span class="text-[10px] font-black uppercase tracking-widest bg-secondary text-black px-2.5 py-0.5 rounded-full">
                                        DETAILS & DOKUM
                                    </span>
                                </div>

                                <!-- Back Details Content -->
                                <div class="space-y-2.5 my-auto py-1">
                                    <div class="bg-white/5 border border-white/10 p-2.5 rounded-xl space-y-1">
                                        <h4 class="text-xs font-extrabold flex items-center gap-1.5 border-b border-white/10 pb-1">
                                            <span class="material-symbols-outlined text-secondary text-sm">badge</span>
                                            <span>Tugas & Responsibilitas:</span>
                                        </h4>
                                        <p class="text-[11px] text-white/90 leading-relaxed font-medium">
                                            Membuat aset visual lomba elektro nasional (poster, feeds, merchandise, e-certificate) & produksi video aftermovie.
                                        </p>
                                    </div>

                                    <!-- Documentation Thumbnails & Counter -->
                                    <div class="bg-white/5 border border-white/10 p-2 rounded-xl space-y-1.5">
                                        <div class="flex items-center justify-between text-[11px] font-extrabold text-white">
                                            <span class="flex items-center gap-1">
                                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                                <span>Dokumentasi Kegiatan:</span>
                                            </span>
                                            <span id="card-badge-org-2" class="bg-secondary/20 text-secondary border border-secondary/40 px-2 py-0.5 rounded-md font-extrabold">2 Foto</span>
                                        </div>
                                        <div id="card-thumbnails-org-2" class="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                                            <!-- Dynamic Thumbnail Strip initialized via JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Buttons on Back -->
                                <div class="space-y-1.5 pt-2 border-t border-white/15">
                                    <button data-project-id="org-2" class="open-project-modal-btn w-full py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-1.5 btn-press">
                                        <span class="material-symbols-outlined text-base">zoom_in</span>
                                        <span>Perbesar & Buka Galeri (Zoom)</span>
                                    </button>
                                    <div class="text-center text-[10px] text-white/60 font-bold flex items-center justify-center gap-1">
                                        <span class="material-symbols-outlined text-xs">undo</span>
                                        <span>Klik kartu untuk putar balik</span>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-1">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>02</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- UNO CARD 3: OLAHRAGA ELEKTRO 2024 HME PNJ -->
                    <div class="uno-flip-container group" data-project-id="org-3">
                        <div class="uno-card-flipper">
                            <!-- FRONT FACE -->
                            <div class="uno-card-face uno-card-front-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>03</span>
                                        <span class="material-symbols-outlined text-lg">sports_soccer</span>
                                    </div>
                                    <span class="text-[10px] font-extrabold uppercase tracking-widest bg-secondary/15 text-secondary px-2.5 py-0.5 rounded-full border border-secondary/30">
                                        UNO CARD
                                    </span>
                                </div>

                                <!-- Central Oval Badge with ONLY Logo Slot (Enlarged) -->
                                <div class="uno-oval-themed my-2 py-3">
                                    <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-secondary bg-slate-950 p-2 shadow-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                                        <img src="/logos/organisasi/oe.png" alt="Logo OE 2024 HME PNJ" class="w-full h-full object-contain">
                                    </div>
                                </div>

                                <!-- Card Front Info -->
                                <div class="space-y-2.5 pt-1">
                                    <div class="flex items-center justify-between text-[11px] md:text-xs font-extrabold bg-white/5 px-2.5 py-1.5 rounded-xl border border-white/10 text-white whitespace-nowrap overflow-hidden">
                                        <span class="flex items-center gap-1 text-white/70">
                                            <span class="material-symbols-outlined text-sm text-secondary">calendar_month</span>
                                            <span>Periode:</span>
                                        </span>
                                        <span class="text-secondary font-black">Apr 2024 – Ags 2024</span>
                                    </div>
                                    <div class="py-2 px-3 rounded-xl bg-secondary/10 border border-secondary/30 text-center text-xs font-bold text-secondary flex items-center justify-center gap-1.5 group-hover:bg-secondary/20 transition-all">
                                        <span class="material-symbols-outlined text-sm">sync_alt</span>
                                        <span>Klik untuk Flip (Rincian & Dokum)</span>
                                    </div>

                                    <!-- Kepanitiaan & Divisi di bawah tulisan flip -->
                                    <div class="text-center pt-2.5 border-t border-white/10">
                                        <h3 class="text-sm md:text-base uno-card-title leading-tight">Divisi Publikasi & Dokum</h3>
                                        <p class="text-[11px] uno-card-subtitle uppercase tracking-wider mt-0.5">OE 2024 HME PNJ</p>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-2">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>03</span>
                                        <span class="material-symbols-outlined text-lg">sports_soccer</span>
                                    </div>
                                </div>
                            </div>

                            <!-- BACK FACE -->
                            <div class="uno-card-face uno-card-back-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>03</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                    <span class="text-[10px] font-black uppercase tracking-widest bg-secondary text-black px-2.5 py-0.5 rounded-full">
                                        DETAILS & DOKUM
                                    </span>
                                </div>

                                <!-- Back Details Content -->
                                <div class="space-y-2.5 my-auto py-1">
                                    <div class="bg-white/5 border border-white/10 p-2.5 rounded-xl space-y-1">
                                        <h4 class="text-xs font-extrabold flex items-center gap-1.5 border-b border-white/10 pb-1">
                                            <span class="material-symbols-outlined text-secondary text-sm">badge</span>
                                            <span>Tugas & Responsibilitas:</span>
                                        </h4>
                                        <p class="text-[11px] text-white/90 leading-relaxed font-medium">
                                            Dokumentasi foto pertandingan, pengelolaan media sosial OE_PNJ, serta pengoperasian Photobooth Studio penutupan acara.
                                        </p>
                                    </div>

                                    <!-- Documentation Thumbnails & Counter -->
                                    <div class="bg-white/5 border border-white/10 p-2 rounded-xl space-y-1.5">
                                        <div class="flex items-center justify-between text-[11px] font-extrabold text-white">
                                            <span class="flex items-center gap-1">
                                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                                <span>Dokumentasi Kegiatan:</span>
                                            </span>
                                            <span id="card-badge-org-3" class="bg-secondary/20 text-secondary border border-secondary/40 px-2 py-0.5 rounded-md font-extrabold">4 Foto</span>
                                        </div>
                                        <div id="card-thumbnails-org-3" class="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                                            <!-- Dynamic Thumbnail Strip initialized via JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Buttons on Back -->
                                <div class="space-y-1.5 pt-2 border-t border-white/15">
                                    <button data-project-id="org-3" class="open-project-modal-btn w-full py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-1.5 btn-press">
                                        <span class="material-symbols-outlined text-base">zoom_in</span>
                                        <span>Perbesar & Buka Galeri (Zoom)</span>
                                    </button>
                                    <div class="text-center text-[10px] text-white/60 font-bold flex items-center justify-center gap-1">
                                        <span class="material-symbols-outlined text-xs">undo</span>
                                        <span>Klik kartu untuk putar balik</span>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-1">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>03</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- UNO CARD 4: FRACTION 2024 (WISUDA TE PNJ) -->
                    <div class="uno-flip-container group" data-project-id="org-4">
                        <div class="uno-card-flipper">
                            <!-- FRONT FACE -->
                            <div class="uno-card-face uno-card-front-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>04</span>
                                        <span class="material-symbols-outlined text-lg">school</span>
                                    </div>
                                    <span class="text-[10px] font-extrabold uppercase tracking-widest bg-secondary/15 text-secondary px-2.5 py-0.5 rounded-full border border-secondary/30">
                                        UNO CARD
                                    </span>
                                </div>

                                <!-- Central Oval Badge with ONLY Logo Slot (Enlarged) -->
                                <div class="uno-oval-themed my-2 py-3">
                                    <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-secondary bg-slate-950 p-2 shadow-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                                        <img src="/logos/organisasi/fraction.png" alt="Logo Fraction 2024 Wisuda PNJ" class="w-full h-full object-contain">
                                    </div>
                                </div>

                                <!-- Card Front Info -->
                                <div class="space-y-2.5 pt-1">
                                    <div class="flex items-center justify-between text-[11px] md:text-xs font-extrabold bg-white/5 px-2.5 py-1.5 rounded-xl border border-white/10 text-white whitespace-nowrap overflow-hidden">
                                        <span class="flex items-center gap-1 text-white/70">
                                            <span class="material-symbols-outlined text-sm text-secondary">calendar_month</span>
                                            <span>Periode:</span>
                                        </span>
                                        <span class="text-secondary font-black">Ags 2024 – Okt 2024</span>
                                    </div>
                                    <div class="py-2 px-3 rounded-xl bg-secondary/10 border border-secondary/30 text-center text-xs font-bold text-secondary flex items-center justify-center gap-1.5 group-hover:bg-secondary/20 transition-all">
                                        <span class="material-symbols-outlined text-sm">sync_alt</span>
                                        <span>Klik untuk Flip (Rincian & Dokum)</span>
                                    </div>

                                    <!-- Kepanitiaan & Divisi di bawah tulisan flip -->
                                    <div class="text-center pt-2.5 border-t border-white/10">
                                        <h3 class="text-sm md:text-base uno-card-title leading-tight">Divisi PDD</h3>
                                        <p class="text-[11px] uno-card-subtitle uppercase tracking-wider mt-0.5">Fraction 2024 (Wisuda PNJ)</p>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-2">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>04</span>
                                        <span class="material-symbols-outlined text-lg">school</span>
                                    </div>
                                </div>
                            </div>

                            <!-- BACK FACE -->
                            <div class="uno-card-face uno-card-back-face">
                                <!-- Top Corner (TL) -->
                                <div class="flex justify-between items-center mb-1">
                                    <div class="uno-corner text-xl font-black">
                                        <span>04</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                    <span class="text-[10px] font-black uppercase tracking-widest bg-secondary text-black px-2.5 py-0.5 rounded-full">
                                        DETAILS & DOKUM
                                    </span>
                                </div>

                                <!-- Back Details Content -->
                                <div class="space-y-2.5 my-auto py-1">
                                    <div class="bg-white/5 border border-white/10 p-2.5 rounded-xl space-y-1">
                                        <h4 class="text-xs font-extrabold flex items-center gap-1.5 border-b border-white/10 pb-1">
                                            <span class="material-symbols-outlined text-secondary text-sm">badge</span>
                                            <span>Tugas & Responsibilitas:</span>
                                        </h4>
                                        <p class="text-[11px] text-white/90 leading-relaxed font-medium">
                                            Publikasi media sosial, dokumentasi foto & video wisuda jurusan, serta perancangan aset visual & desain layout acara.
                                        </p>
                                    </div>

                                    <!-- Documentation Thumbnails & Counter -->
                                    <div class="bg-white/5 border border-white/10 p-2 rounded-xl space-y-1.5">
                                        <div class="flex items-center justify-between text-[11px] font-extrabold text-white">
                                            <span class="flex items-center gap-1">
                                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                                <span>Dokumentasi Kegiatan:</span>
                                            </span>
                                            <span id="card-badge-org-4" class="bg-secondary/20 text-secondary border border-secondary/40 px-2 py-0.5 rounded-md font-extrabold">2 Foto</span>
                                        </div>
                                        <div id="card-thumbnails-org-4" class="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                                            <!-- Dynamic Thumbnail Strip initialized via JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Buttons on Back -->
                                <div class="space-y-1.5 pt-2 border-t border-white/15">
                                    <div class="flex gap-1.5">
                                        <button data-project-id="org-4" class="open-project-modal-btn flex-1 py-2 bg-secondary text-black font-extrabold text-[11px] uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-1 btn-press">
                                            <span class="material-symbols-outlined text-sm">zoom_in</span>
                                            <span>Perbesar</span>
                                        </button>
                                        <a href="https://drive.google.com/drive/folders/16ANdl0vBs7JVwluv6RIOTcAb1tsw5KO4?usp=sharing" target="_blank" rel="noopener noreferrer" class="px-2.5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-[11px] rounded-xl flex items-center justify-center gap-1 transition-all" title="Buka Drive Dokumentasi Fraction 2024">
                                            <span class="material-symbols-outlined text-sm">folder_open</span>
                                            <span>Drive</span>
                                        </a>
                                    </div>
                                    <div class="text-center text-[10px] text-white/60 font-bold flex items-center justify-center gap-1">
                                        <span class="material-symbols-outlined text-xs">undo</span>
                                        <span>Klik kartu untuk putar balik</span>
                                    </div>
                                </div>

                                <!-- Bottom Corner (BR Rotated 180deg) -->
                                <div class="flex justify-end pt-1">
                                    <div class="uno-corner uno-corner-br text-xl font-black">
                                        <span>04</span>
                                        <span class="material-symbols-outlined text-lg">collections</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3: PROYEK TEKNIK -->
    <section id="projects" class="pt-28 pb-24 px-5 md:px-16 max-w-7xl mx-auto min-h-screen">
        <header class="mb-8 space-y-4">
            <div class="inline-flex items-center gap-2 bg-secondary text-black px-4 py-1.5 border border-black/20 font-bold text-xs uppercase tracking-wider rounded-md">
                <span class="material-symbols-outlined text-sm">memory</span>
                Hardware, IoT & Control Systems
            </div>
            <h1 class="text-4xl md:text-6xl text-white font-extrabold tracking-tight">Proyek Teknik & Otomasi</h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
                Portofolio proyek yang pernah dikerjakan di bidang Teknik, IoT, dan Sistem Otomasi.
            </p>
        </header>

        <!-- Search & Filter Bar -->
        <div class="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl border border-white/15 backdrop-blur-md">
            <!-- Search Bar Input -->
            <div class="relative w-full md:w-80">
                <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50 text-xl">search</span>
                <input type="text" id="project-search-input" placeholder="Cari kata kunci (contoh: ESP32, PID, Robot...)..." class="w-full pl-11 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all">
            </div>

            <!-- Category Filter Buttons -->
            <div class="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                <button data-project-filter="all" class="project-filter-btn active-filter px-4 py-2 rounded-xl text-xs font-extrabold transition-all bg-secondary text-black shadow-md">Semua Proyek</button>
                <button data-project-filter="esp32" class="project-filter-btn px-4 py-2 rounded-xl text-xs font-extrabold transition-all bg-white/10 text-white/80 hover:bg-white/20 border border-white/10">ESP32 & Micro</button>
                <button data-project-filter="iot" class="project-filter-btn px-4 py-2 rounded-xl text-xs font-extrabold transition-all bg-white/10 text-white/80 hover:bg-white/20 border border-white/10">IoT & Monitoring</button>
                <button data-project-filter="control" class="project-filter-btn px-4 py-2 rounded-xl text-xs font-extrabold transition-all bg-white/10 text-white/80 hover:bg-white/20 border border-white/10">Otomasi & Kontrol</button>
                <button data-project-filter="ta" class="project-filter-btn px-4 py-2 rounded-xl text-xs font-extrabold transition-all bg-white/10 text-white/80 hover:bg-white/20 border border-white/10">Tugas Akhir</button>
            </div>
        </div>

        <!-- No search results state -->
        <div id="no-projects-found" class="hidden text-center py-16 bg-white/5 rounded-2xl border border-white/10">
            <span class="material-symbols-outlined text-5xl text-white/40 mb-3">search_off</span>
            <h3 class="text-xl font-bold text-white mb-1">Tidak Ada Proyek Sesuai</h3>
            <p class="text-sm text-white/60">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
        </div>

        <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Engineering Card 1: Tugas Akhir PNJ Motor DC Dual -->
            <div class="project-card glass-card flex flex-col rounded-xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300" data-category="esp32 control ta iot" data-search="trainer kit motor dc dual esp32 pid fuzzy logic digital twin 3d firebase tugas akhir pnj trainermotordc.web.app">
                <div class="h-56 overflow-hidden relative">
                    <img src="/photos/TrainerMotorDC.jpeg" alt="Trainer Kit Motor DC Dual" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700">
                    <div class="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-secondary px-3 py-1 rounded-md text-xs font-extrabold border border-secondary/30">
                        Tugas Akhir PNJ
                    </div>
                    <a href="https://trainermotordc.web.app/" target="_blank" rel="noopener noreferrer" class="absolute bottom-3 left-3 bg-secondary/90 hover:bg-secondary text-black px-3 py-1.5 rounded-md text-xs font-extrabold flex items-center gap-1 shadow-lg transition-all" title="Buka Live Web App trainermotordc.web.app">
                        <span class="material-symbols-outlined text-sm">open_in_new</span>
                        trainermotordc.web.app
                    </a>
                </div>
                <div class="p-8 flex-grow flex flex-col gap-5">
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">ESP32</span>
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">PID & Fuzzy</span>
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">Digital Twin 3D</span>
                    </div>
                    <h3 class="text-2xl text-white font-bold">Trainer Kit Motor DC Dual</h3>
                    <p class="text-white/85 text-base leading-relaxed">Trainer kit kendali motor DC presisi berbasis ESP32 dengan algoritma PID & Fuzzy Logic serta visualisasi Digital Twin 3D Three.js dan integrasi Firebase Realtime Database. Web live demo: <a href="https://trainermotordc.web.app/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline font-bold">trainermotordc.web.app</a></p>
                    <div class="mt-auto pt-4 flex gap-2">
                        <button data-project-id="eng-1" class="open-project-modal-btn flex-1 py-4 bg-secondary text-black rounded-lg font-extrabold text-sm uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-md">
                            Detail Proyek
                        </button>
                        <a href="https://trainermotordc.web.app/" target="_blank" rel="noopener noreferrer" class="py-4 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-extrabold text-sm flex items-center justify-center gap-1 transition-all" title="Buka Web App trainermotordc.web.app">
                            <span class="material-symbols-outlined text-lg">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Engineering Card 3: Psychorobotic Plant Guardian -->
            <div class="project-card glass-card flex flex-col rounded-xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300" data-category="esp32 iot" data-search="robot penjaga tanaman esp32-c3 dht11 iot psychorobotic sensor tanah monitoring">
                <div class="h-56 overflow-hidden relative">
                    <img src="/photos/RobotPenjagaTanaman.jpeg" alt="IoT Plant Guardian Robot" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700">
                    <div class="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-secondary px-3 py-1 rounded-md text-xs font-extrabold border border-secondary/30">
                        Psychorobotic
                    </div>
                </div>
                <div class="p-8 flex-grow flex flex-col gap-5">
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">ESP32-C3</span>
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">DHT11</span>
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">IoT</span>
                    </div>
                    <h3 class="text-2xl text-white font-bold">Robot Penjaga Tanaman</h3>
                    <p class="text-white/85 text-base leading-relaxed">Robot penjaga tanaman dengan ESP32-C3 dan sensor suhu/kelembaban tanah berbasis IoT untuk monitoring tanaman.</p>
                    <div class="mt-auto pt-4">
                        <button data-project-id="eng-2" class="open-project-modal-btn w-full py-4 bg-secondary text-black rounded-lg font-extrabold text-sm uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-md">
                            Detail Proyek
                        </button>
                    </div>
                </div>
            </div>

            <!-- Engineering Card 4: Web Dashboard IoT -->
            <div class="project-card glass-card flex flex-col rounded-xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300" data-category="iot control" data-search="web dashboard monitoring iot mysql websocket telemetry realtime data log">
                <div class="h-56 overflow-hidden relative">
                    <img src="/photos/WebDashboardMonitoringIoT.jpeg" alt="Web Dashboard IoT Telemetry" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700">
                    <div class="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-secondary px-3 py-1 rounded-md text-xs font-extrabold border border-secondary/30">
                        MySQL Log
                    </div>
                </div>
                <div class="p-8 flex-grow flex flex-col gap-5">
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">MySQL</span>
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">Data Logging</span>
                    </div>
                    <h3 class="text-2xl text-white font-bold">Web Dashboard Monitoring IoT</h3>
                    <p class="text-white/85 text-base leading-relaxed">Dashboard web monitoring suhu dan kelembaban tanah realtime terintegrasi dengan database MySQL untuk pencatatan data log historis.</p>
                    <div class="mt-auto pt-4 flex gap-2">
                        <button data-project-id="eng-3" class="open-project-modal-btn flex-1 py-4 bg-secondary text-black rounded-lg font-extrabold text-sm uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-md">
                            Detail Proyek
                        </button>
                        <a href="https://drive.google.com/drive/folders/1prb4NeVaktvjzNK4zYtoHbZbykCMB_Ab" target="_blank" rel="noopener noreferrer" class="py-4 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-extrabold text-sm flex items-center justify-center gap-1 transition-all" title="Buka Dokumentasi Google Drive">
                            <span class="material-symbols-outlined text-lg">folder_open</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Engineering Card 5: Trainer Gerbang Logika -->
            <div class="project-card glass-card flex flex-col rounded-xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300" data-category="control" data-search="modul gerbang logika digital ic 74xx full adder multiplexer flip flop dekoder bcd">
                <div class="h-56 overflow-hidden relative">
                    <img src="/photos/trainerlogic/TrainerKitLogic.jpeg" alt="Modul Praktikum Gerbang Logika" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700">
                    <div class="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-secondary px-3 py-1 rounded-md text-xs font-extrabold border border-secondary/30">
                        Praktikum Digital
                    </div>
                </div>
                <div class="p-8 flex-grow flex flex-col gap-5">
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">IC 74xx</span>
                        <span class="px-3 py-1 bg-white/10 text-white font-bold text-xs rounded-md border border-white/15 uppercase tracking-wider">Full Adder</span>
                    </div>
                    <h3 class="text-2xl text-white font-bold">Modul Gerbang Logika Digital</h3>
                    <p class="text-white/85 text-base leading-relaxed">Trainer kit pembelajaran Elektronika Digital: Gerbang AND, OR, NAND, XOR, Full Adder, Multiplexer, Flip-flop & Dekoder BCD 7-segment.</p>
                    <div class="mt-auto pt-4">
                        <button data-project-id="eng-4" class="open-project-modal-btn w-full py-4 bg-secondary text-black rounded-lg font-extrabold text-sm uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-md">
                            Detail Proyek
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: PORTOFOLIO DESAIN & FOTOGRAFI -->
    <section id="design-photo" class="pt-28 pb-24 px-5 md:px-16 max-w-7xl mx-auto min-h-screen">
        <header class="mb-12 space-y-4">
            <div class="inline-flex items-center gap-2 bg-secondary text-black px-4 py-1.5 border border-black/20 font-bold text-xs uppercase tracking-wider rounded-md">
                <span class="material-symbols-outlined text-sm">photo_camera</span>
                Media Kreatif & Galeri Foto
            </div>
            <h1 class="text-4xl md:text-6xl text-white font-extrabold tracking-tight">Portofolio Desain & Fotografi</h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
                Galeri lengkap karya fotografi, serta desain grafis. Klik gambar untuk tampilan penuh.
            </p>

            <!-- Gallery Filter Buttons & Upload Action -->
            <div class="flex flex-wrap items-center justify-between gap-4 pt-4">
                <div class="flex flex-wrap gap-2.5">
                    <button data-photo-filter="all" class="photo-filter-btn px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all bg-secondary text-black font-extrabold shadow-lg">
                        Semua Karya
                    </button>
                    <button data-photo-filter="design" class="photo-filter-btn px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15">
                        Portofolio Desain Grafis
                    </button>
                    <button data-photo-filter="graduation" class="photo-filter-btn px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15">
                        Fotografi Kelulusan
                    </button>
                    <button data-photo-filter="event" class="photo-filter-btn px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15">
                        Dokumentasi Event
                    </button>
                    <button data-photo-filter="banner" class="photo-filter-btn px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15">
                        Desain Banner & Cetak
                    </button>
                    <button data-photo-filter="feeds" class="photo-filter-btn px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15">
                        Feeds & Social Media
                    </button>
                </div>
                <div class="flex flex-wrap gap-2.5">
                    <button id="open-drive-modal-btn" class="open-upload-modal-btn bg-secondary text-black font-extrabold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:bg-secondary/90 btn-press" title="Import foto atau folder dari Google Drive">
                        <span class="material-symbols-outlined text-lg">add_to_drive</span>
                        <span>Import Google Drive</span>
                    </button>
                    <button id="open-create-folder-modal-btn" class="bg-white/10 hover:bg-white/20 text-white font-extrabold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 transition-all border border-white/20 shadow-md hover:border-secondary">
                        <span class="material-symbols-outlined text-lg text-secondary">create_new_folder</span>
                        <span>Buat Folder Baru</span>
                    </button>
                </div>
            </div>
        </header>

        <!-- Gallery Grid -->
        <div id="gallery-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Item 1: Graduation Photo -->
            <div class="gallery-card photo-cat-graduation glass-card rounded-2xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300 flex flex-col shadow-xl">
                <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="photo-1">
                    <img src="https://lh3.googleusercontent.com/d/1c6klqm9QzQ3gJ-NAtOzd37U2gGVh1sIB" alt="Fotografi Kelulusan Akademik" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div class="flex items-center justify-between">
                            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                Kelulusan
                            </span>
                            <span id="card-badge-photo-1" class="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                <span>17 Foto Galeri</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-white/90 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm self-center">
                            <span class="material-symbols-outlined text-secondary">collections</span>
                            <span>Klik untuk Buka Galeri Hasil Foto</span>
                        </div>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">Fotografi Kelulusan Akademik & Sidang</h3>
                        <p class="text-xs text-white/80 leading-relaxed">Sesi fotografi momen selebrasi kelulusan & pasca-sidang di Jabodetabek dengan retouching Adobe Lightroom.</p>
                    </div>

                    <!-- Mini Preview Thumbnails Strip -->
                    <div class="space-y-1.5">
                        <div class="text-[10px] font-extrabold text-white/50 uppercase tracking-wider">Pratinjau Foto Album:</div>
                        <div id="card-thumbnails-photo-1" class="flex items-center gap-2 overflow-x-auto pb-1">
                            <img src="https://lh3.googleusercontent.com/d/1c6klqm9QzQ3gJ-NAtOzd37U2gGVh1sIB" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1Lt9RjEnecibGu1f4x4lHBlIH7GDQGcgk" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1LNnOzLENLQVFo1AMR007o97EKddWpZ9Y" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/16gSm9ntDO4XodFXB2InOjWoMC87QMltS" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                        </div>
                    </div>

                    <button data-project-id="photo-1" class="open-project-modal-btn w-full py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-base">collections</span>
                        <span>Lihat Galeri Foto Hasil</span>
                    </button>
                </div>
            </div>

            <!-- Item 2: Desain & Visual Fraction 2024 -->
            <div class="gallery-card photo-cat-design photo-cat-banner photo-cat-feeds photo-cat-event glass-card rounded-2xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300 flex flex-col shadow-xl">
                <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="des-fraction">
                    <img src="https://lh3.googleusercontent.com/d/1Bsk0__0HmfW_Cuu5tIMJPMEFLEUQ0w0h" alt="Desain & Visual Fraction 2024" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div class="flex items-center justify-between">
                            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                Fraction 2024
                            </span>
                            <span id="card-badge-des-fraction" class="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                <span>19 Foto</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-white/90 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm self-center">
                            <span class="material-symbols-outlined text-secondary">collections</span>
                            <span>Klik untuk Buka Galeri Desain</span>
                        </div>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">Desain & Visual Fraction 2024</h3>
                        <p class="text-xs text-white/80 leading-relaxed">Perancangan aset desain grafis, feeds Instagram, poster, banner cetak, dan media visual Wisuda TE PNJ (Fraction 2024).</p>
                    </div>

                    <!-- Mini Preview Thumbnails Strip -->
                    <div class="space-y-1.5">
                        <div class="text-[10px] font-extrabold text-white/50 uppercase tracking-wider">Pratinjau Desain:</div>
                        <div id="card-thumbnails-des-fraction" class="flex items-center gap-2 overflow-x-auto pb-1">
                            <img src="https://lh3.googleusercontent.com/d/1Bsk0__0HmfW_Cuu5tIMJPMEFLEUQ0w0h" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1bpAzZNTG6hKj42paPb4sj41qRKK4ZcAX" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1tccZs891qGc-bjLtGpxJStWUzbgwCBKn" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1MLZmwJyVrF5j24ZOzERTEM4hjISuHK9C" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                        </div>
                    </div>
                </div>

                <div class="p-5 pt-0">
                    <div class="flex gap-2">
                        <button data-project-id="des-fraction" class="open-project-modal-btn flex-1 py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-base">collections</span>
                            <span>Lihat Galeri Desain</span>
                        </button>
                        <a href="https://drive.google.com/drive/folders/16ANdl0vBs7JVwluv6RIOTcAb1tsw5KO4?usp=sharing" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 transition-all" title="Buka Drive Portofolio Desain Fraction 2024">
                            <span class="material-symbols-outlined text-base">folder_open</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Item 3: Media Kreatif E-TIME 2025 -->
            <div class="gallery-card photo-cat-design photo-cat-feeds photo-cat-banner glass-card rounded-2xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300 flex flex-col shadow-xl">
                <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="photo-2">
                    <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" alt="Aset Media Kreatif E-TIME 2025" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div class="flex items-center justify-between">
                            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                Media Kreatif
                            </span>
                            <span id="card-badge-photo-2" class="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                <span>0 Foto</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-white/90 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm self-center">
                            <span class="material-symbols-outlined text-secondary">collections</span>
                            <span>Klik untuk Buka Galeri Hasil Desain</span>
                        </div>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">E-TIME 2025 PNJ</h3>
                        <p class="text-xs text-white/80 leading-relaxed">Perancangan aset visual, poster perlombaan, dan editing konten digital E-TIME 2025 sebagai Divisi Media Kreatif.</p>
                    </div>

                    <!-- Mini Preview Thumbnails Strip -->
                    <div class="space-y-1.5">
                        <div class="text-[10px] font-extrabold text-white/50 uppercase tracking-wider">Pratinjau Desain Album:</div>
                        <div id="card-thumbnails-photo-2" class="flex items-center gap-2 overflow-x-auto pb-1">
                        </div>
                    </div>

                    <button data-project-id="photo-2" class="open-project-modal-btn w-full py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-base">collections</span>
                        <span>Lihat Galeri Desain Hasil</span>
                    </button>
                </div>
            </div>

            <!-- Item 4: Printed Banner Design -->
            <div class="gallery-card photo-cat-design photo-cat-banner glass-card rounded-2xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300 flex flex-col shadow-xl">
                <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="des-1">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" alt="Desain Banner Cetak" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div class="flex items-center justify-between">
                            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                Desain Cetak
                            </span>
                            <span id="card-badge-des-1" class="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                <span>0 Foto</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-white/90 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm self-center">
                            <span class="material-symbols-outlined text-secondary">collections</span>
                            <span>Klik untuk Buka Galeri Banner</span>
                        </div>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">Banner Cetak Kelulusan</h3>
                        <p class="text-xs text-white/80 leading-relaxed">Pembuatan tata letak visual banner cetak kustom acara selebrasi kelulusan & sidang akademik.</p>
                    </div>

                    <!-- Mini Preview Thumbnails Strip -->
                    <div class="space-y-1.5">
                        <div class="text-[10px] font-extrabold text-white/50 uppercase tracking-wider">Pratinjau Banner Cetak:</div>
                        <div id="card-thumbnails-des-1" class="flex items-center gap-2 overflow-x-auto pb-1">
                        </div>
                    </div>

                    <button data-project-id="des-1" class="open-project-modal-btn w-full py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-base">collections</span>
                        <span>Lihat Galeri Banner Hasil</span>
                    </button>
                </div>
            </div>

            <!-- Item 5: Foto Personal Project (Hunting) -->
            <div class="gallery-card photo-cat-event photo-cat-photography glass-card rounded-2xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300 flex flex-col shadow-xl">
                <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="photo-3">
                    <img src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80" alt="Foto Personal Project Hunting" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div class="flex items-center justify-between">
                            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                Photo Hunting
                            </span>
                            <span id="card-badge-photo-3" class="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                <span>0 Foto</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-white/90 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm self-center">
                            <span class="material-symbols-outlined text-secondary">collections</span>
                            <span>Klik untuk Buka Galeri Hunting</span>
                        </div>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">Foto Personal Project</h3>
                        <p class="text-xs text-white/80 leading-relaxed">Koleksi dokumentasi fotografi personal hasil tangkapan saat photo hunting, mengeksplorasi sudut pandang visual unik dan esensi momen.</p>
                    </div>

                    <!-- Mini Preview Thumbnails Strip -->
                    <div class="space-y-1.5">
                        <div class="text-[10px] font-extrabold text-white/50 uppercase tracking-wider">Pratinjau Foto Hunting:</div>
                        <div id="card-thumbnails-photo-3" class="flex items-center gap-2 overflow-x-auto pb-1">
                        </div>
                    </div>

                    <button data-project-id="photo-3" class="open-project-modal-btn w-full py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-base">collections</span>
                        <span>Lihat Galeri Foto Hunting</span>
                    </button>
                </div>
            </div>

            <!-- Item 6: Kominfo Psychorobotic -->
            <div class="gallery-card photo-cat-design photo-cat-feeds glass-card rounded-2xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300 flex flex-col shadow-xl">
                <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="des-4">
                    <img src="https://lh3.googleusercontent.com/d/1R0dPo_eToychuTPxsE6P_EcRGbSLLbmQ" alt="Kominfo Psychorobotic" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div class="flex items-center justify-between">
                            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                Kominfo Feeds
                            </span>
                            <span id="card-badge-des-4" class="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                <span>31 Foto</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-white/90 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm self-center">
                            <span class="material-symbols-outlined text-secondary">collections</span>
                            <span>Klik untuk Buka Galeri Feeds</span>
                        </div>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">KSM Psychorobotic</h3>
                        <p class="text-xs text-white/80 leading-relaxed">Pengelolaan visual media sosial, publikasi informasi, dan infografis digital Divisi Kominfo KSM Psychorobotic PNJ.</p>
                    </div>

                    <!-- Mini Preview Thumbnails Strip -->
                    <div class="space-y-1.5">
                        <div class="text-[10px] font-extrabold text-white/50 uppercase tracking-wider">Pratinjau Feeds Instagram:</div>
                        <div id="card-thumbnails-des-4" class="flex items-center gap-2 overflow-x-auto pb-1">
                            <img src="https://lh3.googleusercontent.com/d/1R0dPo_eToychuTPxsE6P_EcRGbSLLbmQ" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1uDVOKgflYKX2b6JUWmz8mtUIa-wMCoIt" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1oW9mF0yA8uGP7g-o8zBv3Kbg1cykSOwS" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1wh6YDL4NcJgwywuHYGXyfHKEeJesNZcu" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <button data-project-id="des-4" class="open-project-modal-btn flex-1 py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-base">collections</span>
                            <span>Lihat Galeri Feeds</span>
                        </button>
                        <a href="https://drive.google.com/drive/folders/1MW-zqLVDPw4Wtqc5LLOj4cOjHaEPR4eq?usp=sharing" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 transition-all" title="Buka Drive Portofolio Desain Psychorobotic">
                            <span class="material-symbols-outlined text-base">folder_open</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Item 6: Olahraga Elektro 2024 -->
            <div class="gallery-card photo-cat-event glass-card rounded-2xl overflow-hidden group border border-white/15 hover:border-secondary/60 transition-all duration-300 flex flex-col shadow-xl">
                <div class="h-64 overflow-hidden relative cursor-pointer open-project-modal-btn" data-project-id="photo-4">
                    <img src="https://lh3.googleusercontent.com/d/1rUCMYisoBsSywGcY0bcp_4vc1pMA_UIv" alt="Olahraga Elektro 2024" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div class="flex items-center justify-between">
                            <span class="bg-secondary text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                OE PNJ 2024
                            </span>
                            <span id="card-badge-photo-4" class="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
                                <span>85 Foto</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-white/90 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-xl backdrop-blur-sm self-center">
                            <span class="material-symbols-outlined text-secondary">collections</span>
                            <span>Klik untuk Buka Galeri Event</span>
                        </div>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">Olahraga Elektro 2024</h3>
                        <p class="text-xs text-white/80 leading-relaxed">Dokumentasi fotografi liputan pertandingan, supporter, dan kemeriahan acara Olahraga Elektro HME PNJ.</p>
                    </div>

                    <!-- Mini Preview Thumbnails Strip -->
                    <div class="space-y-1.5">
                        <div class="text-[10px] font-extrabold text-white/50 uppercase tracking-wider">Pratinjau Foto Event:</div>
                        <div id="card-thumbnails-photo-4" class="flex items-center gap-2 overflow-x-auto pb-1">
                            <img src="https://lh3.googleusercontent.com/d/1rUCMYisoBsSywGcY0bcp_4vc1pMA_UIv" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1JGu60xF1d_JSKb-z_9ygwuD6q6q5NPFK" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1MV8FFHsFjq8hJbbVEZFOhQWe9XpZrM3n" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                            <img src="https://lh3.googleusercontent.com/d/1ZbVcerWVUwW9DDAGn9Y9Nu9wwlp813-s" class="w-12 h-12 object-cover rounded-lg border border-white/20">
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <button data-project-id="photo-4" class="open-project-modal-btn flex-1 py-2.5 bg-secondary text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-base">collections</span>
                            <span>Lihat Galeri Foto Event</span>
                        </button>
                        <a href="https://drive.google.com/drive/folders/1_K4NnYPc7GIIF6zW7Eea02amxWheghou" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 transition-all" title="Buka Google Drive Olahraga Elektro 2024">
                            <span class="material-symbols-outlined text-base">folder_open</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 5: KEAHLIAN & SKILL APLIKASI -->
    <section id="skills" class="pt-28 pb-24 px-5 md:px-16 max-w-7xl mx-auto min-h-screen">
        <header class="mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 bg-secondary text-black px-4 py-1.5 border border-black/20 font-bold text-xs uppercase tracking-wider rounded-md">
                <span class="material-symbols-outlined text-sm">bolt</span>
                Kategori Keahlian & Perangkat Lunak
            </div>
            <h1 class="text-4xl sm:text-6xl text-white font-extrabold tracking-tight uppercase leading-none">
                KEAHLIAN & <br/>
                <span class="text-secondary">PERANGKAT LUNAK</span>
            </h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-normal">
                Keahlian teknis dan penguasaan aplikasi dikelompokkan berdasarkan kategori bidang kerja.
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <!-- Category 1: Mikrokontroler & Hardware -->
            <div class="glass-card p-8 md:p-10 rounded-2xl flex flex-col gap-6 border border-white/15 hover:border-secondary/60 transition-all duration-300">
                <div class="flex items-center gap-4 pb-4 border-b border-white/10">
                    <div class="p-3 bg-secondary/10 rounded-xl border border-secondary/20 shrink-0">
                        <span class="material-symbols-outlined text-secondary text-3xl">developer_board</span>
                    </div>
                    <div>
                        <h2 class="text-2xl text-white font-bold">Mikrokontroler & Hardware</h2>
                        <p class="text-xs text-white/60 font-medium mt-0.5">Sistem Tertanam, Sensor IoT, & Board Development</p>
                    </div>
                </div>

                <div class="space-y-5">
                    <!-- Item 1: ESP32 -->
                    <div class="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 p-2 flex items-center justify-center shrink-0 border border-white/15">
                                    <span class="material-symbols-outlined text-secondary text-xl">memory</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white text-sm">ESP32</h3>
                                    <p class="text-[11px] text-white/60">WiFi, Bluetooth, Sensor IoT & Database</p>
                                </div>
                            </div>
                        </div>
                        <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-secondary w-[30%] rounded-full"></div>
                        </div>
                    </div>

                    <!-- Item 2: Arduino -->
                    <div class="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 p-2 flex items-center justify-center shrink-0 border border-white/15">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino Icon" class="w-6 h-6">
                                </div>
                                <div>
                                    <h3 class="font-bold text-white text-sm">Arduino</h3>
                                    <p class="text-[11px] text-white/60">ADC, PWM, I2C, SPI & Pemrosesan Sensor</p>
                                </div>
                            </div>
                        </div>
                        <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-secondary w-[30%] rounded-full"></div>
                        </div>
                    </div>

                    <!-- Item 3: Raspberry Pi -->
                    <div class="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 p-2 flex items-center justify-center shrink-0 border border-white/15">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="Raspberry Pi Icon" class="w-6 h-6">
                                </div>
                                <div>
                                    <h3 class="font-bold text-white text-sm">Raspberry Pi Board</h3>
                                    <p class="text-[11px] text-white/60">Single Board Computer & Linux Embedded</p>
                                </div>
                            </div>
                        </div>
                        <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-secondary w-[30%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Category 2: Otomasi & Sistem Kontrol -->
            <div class="glass-card p-8 md:p-10 rounded-2xl flex flex-col gap-6 border border-white/15 hover:border-secondary/60 transition-all duration-300">
                <div class="flex items-center gap-4 pb-4 border-b border-white/10">
                    <div class="p-3 bg-secondary/10 rounded-xl border border-secondary/20 shrink-0">
                        <span class="material-symbols-outlined text-secondary text-3xl">tune</span>
                    </div>
                    <div>
                        <h2 class="text-2xl text-white font-bold">Otomasi & Sistem Kontrol</h2>
                        <p class="text-xs text-white/60 font-medium mt-0.5">Kontrol Motor, PLC, SCADA & Proteksi Listrik</p>
                    </div>
                </div>

                <div class="space-y-5">
                    <!-- Item 1: PID & Fuzzy -->
                    <div class="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 p-2 flex items-center justify-center shrink-0 border border-white/15">
                                    <span class="material-symbols-outlined text-secondary text-xl">settings_input_component</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white text-sm">PID Controller & Fuzzy Logic</h3>
                                    <p class="text-[11px] text-white/60">Kontrol Kecepatan Motor DC & Kestabilan</p>
                                </div>
                            </div>
                        </div>
                        <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-secondary w-[30%] rounded-full"></div>
                        </div>
                    </div>

                    <!-- Item 2: PLC & SCADA -->
                    <div class="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 p-2 flex items-center justify-center shrink-0 border border-white/15">
                                    <span class="material-symbols-outlined text-secondary text-xl">precision_manufacturing</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white text-sm">PLC Schneider & SCADA Vijeo</h3>
                                    <p class="text-[11px] text-white/60">Pemrograman Ladder Diagram & Otomasi</p>
                                </div>
                            </div>
                        </div>
                        <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-secondary w-[30%] rounded-full"></div>
                        </div>
                    </div>

                    <!-- Item 3: Relai Proteksi PLN -->
                    <div class="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-slate-800 p-2 flex items-center justify-center shrink-0 border border-white/15">
                                    <span class="material-symbols-outlined text-secondary text-xl">electric_bolt</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white text-sm">Relai Proteksi PLN 150kV</h3>
                                    <p class="text-[11px] text-white/60">Relai OCR, GFR, Differential, BCT & Trafo</p>
                                </div>
                            </div>
                        </div>
                        <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-secondary w-[30%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Category 3: Pemrograman & Software Engineering -->
            <div class="glass-card p-8 md:p-10 rounded-2xl flex flex-col gap-6 border border-white/15 hover:border-secondary/60 transition-all duration-300">
                <div class="flex items-center gap-4 pb-4 border-b border-white/10">
                    <div class="p-3 bg-secondary/10 rounded-xl border border-secondary/20 shrink-0">
                        <span class="material-symbols-outlined text-secondary text-3xl">code</span>
                    </div>
                    <div>
                        <h2 class="text-2xl text-white font-bold">Pemrograman & Software</h2>
                        <p class="text-xs text-white/60 font-medium mt-0.5">Bahasa Pemrograman, Web Dashboard, CAD & Simulasi</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <!-- C / C++ -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++ Icon" class="w-7 h-7 shrink-0">
                            <div>
                                <h3 class="font-bold text-white text-sm">C / C++ (Embedded Systems)</h3>
                                <p class="text-[11px] text-white/60">Pemrograman Mikrokontroler & Firmware</p>
                            </div>
                        </div>
                    </div>

                    <!-- Python -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Icon" class="w-7 h-7 shrink-0">
                            <div>
                                <h3 class="font-bold text-white text-sm">Python Scripting</h3>
                                <p class="text-[11px] text-white/60">Pemrosesan Data Telemetri & Otomasi</p>
                            </div>
                        </div>
                    </div>

                    <!-- HTML / CSS / JS -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-1.5 shrink-0">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Icon" class="w-6 h-6 object-contain">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Icon" class="w-6 h-6 object-contain">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS Icon" class="w-6 h-6 object-contain">
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-sm">HTML, CSS & JavaScript</h3>
                                <p class="text-[11px] text-white/60">Pengembangan Antarmuka Web & Web Dashboard</p>
                            </div>
                        </div>
                    </div>

                    <!-- Firebase & Database -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase Icon" class="w-7 h-7 shrink-0">
                            <div>
                                <h3 class="font-bold text-white text-sm">Firebase</h3>
                                <p class="text-[11px] text-white/60">Realtime Database, Authentication & Cloud Storage</p>
                            </div>
                        </div>
                    </div>

                    <!-- MySQL & PostgreSQL -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-1.5 shrink-0">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Icon" class="w-6 h-6 object-contain">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Icon" class="w-6 h-6 object-contain">
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-sm">MySQL & PostgreSQL</h3>
                                <p class="text-[11px] text-white/60">Relational Database & Pengelolaan Data</p>
                            </div>
                        </div>
                    </div>

                    <!-- AutoCAD & Fusion 360 -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-1.5 shrink-0">
                                <img src="/logos/autocad.webp" alt="AutoCAD Icon" class="w-7 h-7 rounded object-contain">
                                <img src="/logos/fusion360.webp" alt="Fusion 360 Icon" class="w-7 h-7 rounded object-contain">
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-sm">AutoCAD & Fusion 360</h3>
                                <p class="text-[11px] text-white/60">Desain Teknik 2D & Modeling 3D CAD</p>
                            </div>
                        </div>
                    </div>

                    <!-- NI Multisim & Proteus -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-1.5 shrink-0">
                                <img src="/logos/multisim.png" alt="NI Multisim Icon" class="w-7 h-7 rounded object-contain">
                                <img src="/logos/proteus.png" alt="Proteus Icon" class="w-7 h-7 rounded object-contain">
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-sm">NI Multisim & Proteus</h3>
                                <p class="text-[11px] text-white/60">Simulasi Rangkaian Elektronika Analog-Digital</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Category 4: Aplikasi Desain Grafis & Fotografi -->
            <div class="glass-card p-8 md:p-10 rounded-2xl flex flex-col gap-6 border border-white/15 hover:border-secondary/60 transition-all duration-300">
                <div class="flex items-center gap-4 pb-4 border-b border-white/10">
                    <div class="p-3 bg-secondary/10 rounded-xl border border-secondary/20 shrink-0">
                        <span class="material-symbols-outlined text-secondary text-3xl">photo_camera</span>
                    </div>
                    <div>
                        <h2 class="text-2xl text-white font-bold">Aplikasi Desain & Fotografi</h2>
                        <p class="text-xs text-white/60 font-medium mt-0.5">Software Editing Foto, Desain Grafis & Video</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <!-- Adobe Lightroom -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/logos/lightroom.webp" alt="Lightroom Icon" class="w-7 h-7 rounded shrink-0 object-contain">
                            <div>
                                <h3 class="font-bold text-white text-sm">Adobe Lightroom</h3>
                                <p class="text-[11px] text-white/60">Retouching Warna, Grading</p>
                            </div>
                        </div>
                    </div>

                    <!-- Adobe Photoshop -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop Icon" class="w-7 h-7 shrink-0">
                            <div>
                                <h3 class="font-bold text-white text-sm">Adobe Photoshop</h3>
                                <p class="text-[11px] text-white/60">Desain Grafis</p>
                            </div>
                        </div>
                    </div>

                    <!-- Canva App -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/logos/canva.png" alt="Canva Icon" class="w-7 h-7 rounded shrink-0 object-contain">
                            <div>
                                <h3 class="font-bold text-white text-sm">Canva</h3>
                                <p class="text-[11px] text-white/60">Editing, Layouting, Carousel</p>
                            </div>
                        </div>
                    </div>

                    <!-- ibis Paint -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/logos/ibispaint.png" alt="ibis Paint X Icon" class="w-7 h-7 rounded shrink-0 object-contain">
                            <div>
                                <h3 class="font-bold text-white text-sm">ibis Paint X</h3>
                                <p class="text-[11px] text-white/60">Ilustrasi Digital & Desain Vektor</p>
                            </div>
                        </div>
                    </div>

                    <!-- CapCut -->
                    <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="/logos/capcut.png" alt="CapCut Icon" class="w-7 h-7 rounded shrink-0 object-contain">
                            <div>
                                <h3 class="font-bold text-white text-sm">CapCut Video Editor</h3>
                                <p class="text-[11px] text-white/60">Editing Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 5.5: SERTIFIKASI & PELATIHAN -->
    <section id="certifications" class="pt-28 pb-24 px-5 md:px-16 max-w-7xl mx-auto min-h-screen">
        <header class="mb-12 space-y-4 text-center md:text-left">
            <div class="inline-flex items-center gap-2 bg-secondary text-black px-4 py-1.5 border border-black/20 font-bold text-xs uppercase tracking-wider rounded-md">
                <span class="material-symbols-outlined text-sm">verified</span>
                Lisensi & Sertifikasi Resmi
            </div>
            <h1 class="text-4xl md:text-6xl text-white font-extrabold tracking-tight">Sertifikasi Kompetensi</h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
                Kualifikasi dan lisensi kompetensi resmi yang diakui secara nasional oleh Badan Nasional Sertifikasi Profesi (BNSP).
            </p>
        </header>

        <div class="max-w-3xl mx-auto">
            <!-- Cert 1: BNSP Teknisi Instrumentasi -->
            <div class="glass-card p-8 md:p-10 rounded-2xl border border-white/20 hover:border-secondary/80 transition-all duration-300 flex flex-col justify-between group hard-shadow-secondary">
                <div class="space-y-6">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <span class="px-4 py-1.5 bg-secondary/20 text-secondary border border-secondary/50 font-extrabold text-xs rounded-full uppercase tracking-wider flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-sm">workspace_premium</span>
                            BNSP Official Certification
                        </span>
                        <span class="text-xs text-white/70 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">2025 - 2028</span>
                    </div>
                    
                    <div class="flex items-start gap-5">
                        <div class="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400 hard-shadow">
                            <span class="material-symbols-outlined text-4xl">verified</span>
                        </div>
                        <div class="space-y-1">
                            <h2 class="text-2xl md:text-3xl font-extrabold text-white group-hover:text-secondary transition-colors">Teknisi Instrumentasi</h2>
                            <p class="text-sm md:text-base text-secondary font-bold">LSP PNJ / Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia</p>
                        </div>
                    </div>

                    <p class="text-sm md:text-base text-white/90 leading-relaxed pt-2">
                        Sertifikasi kompetensi resmi BNSP untuk kualifikasi <b>Teknisi Instrumentasi</b>. Teruji secara terstruktur dalam kalibrasi instrumen pengukuran industri, pengujian sensor & transmitter (tekanan, suhu, aliran, level), pemeliharaan peralatan kontrol proses, serta pemasangan dan trouble-shooting sistem instrumentasi industri.
                    </p>

                    <div class="flex flex-wrap gap-2.5 pt-2">
                        <span class="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded-lg border border-white/15">BNSP Competency</span>
                        <span class="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded-lg border border-white/15">Teknisi Instrumentasi</span>
                        <span class="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded-lg border border-white/15">Kalibrasi & Testing</span>
                        <span class="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded-lg border border-white/15">Sistem Kontrol Proses</span>
                        <span class="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded-lg border border-white/15">Industrial Sensor</span>
                    </div>
                </div>

                <div class="pt-6 mt-8 border-t border-white/15 flex items-center justify-between flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-white/50 font-mono">No. Reg: BNSP-INST-2025-PNJ</span>
                    </div>
                    <button class="cert-modal-trigger px-5 py-2.5 bg-secondary text-black hover:bg-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg btn-press" data-title="Sertifikat BNSP Teknisi Instrumentasi" data-img="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1000&q=80">
                        <span>Lihat Bukti Sertifikat</span>
                        <span class="material-symbols-outlined text-base">visibility</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: CONTACT -->
    <section id="contact" class="pt-28 pb-24 px-5 md:px-16 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-5 space-y-6">
                <div class="inline-flex items-center gap-2 bg-secondary text-black px-4 py-1.5 border border-black/20 font-bold text-xs uppercase tracking-wider rounded-md">
                    <span class="material-symbols-outlined text-sm">mail</span>
                    Mari Terhubung
                </div>
                <h1 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    Hubungi Saya
                </h1>
                <p class="text-base md:text-lg text-white/85 leading-relaxed">
                    Tertarik untuk berkolaborasi, mendiskusikan peluang kerja, proyek IoT/sistem kontrol, atau membutuhkan jasa fotografi & desain? Silakan kirim pesan Anda.
                </p>

                <!-- Quick Info Cards -->
                <div class="space-y-4 pt-4">
                    <div class="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/15">
                        <div class="p-3 bg-secondary/10 rounded-lg shrink-0 border border-secondary/20">
                            <span class="material-symbols-outlined text-secondary text-2xl">alternate_email</span>
                        </div>
                        <div>
                            <p class="text-xs uppercase font-bold text-white/60 tracking-wider">Email Direct</p>
                            <p id="email-text" class="text-white font-bold text-base">helmi2591@gmail.com</p>
                        </div>
                    </div>

                    <div class="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/15">
                        <div class="p-3 bg-secondary/10 rounded-lg shrink-0 border border-secondary/20">
                            <span class="material-symbols-outlined text-secondary text-2xl">location_on</span>
                        </div>
                        <div>
                            <p class="text-xs uppercase font-bold text-white/60 tracking-wider">Lokasi Domisili</p>
                            <p class="text-white font-bold text-base">Jakarta Timur, DKI Jakarta</p>
                        </div>
                    </div>

                    <!-- Media Sosial Grid -->
                    <div class="pt-2 space-y-3">
                        <p class="text-xs uppercase font-bold text-white/60 tracking-wider text-center">Media Sosial & Portofolio</p>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 justify-center items-center">
                            <a href="https://www.instagram.com/zhlsyh" target="_blank" rel="noopener noreferrer" class="glass-card p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1.5 border border-white/15 hover:border-secondary/60 hover:bg-white/10 transition-all group">
                                <div class="p-2 bg-secondary/10 rounded-lg shrink-0 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <svg class="w-5 h-5 fill-current text-secondary group-hover:text-black transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </div>
                                <div class="overflow-hidden w-full">
                                    <p class="text-[10px] uppercase font-bold text-white/60 tracking-wider">Instagram</p>
                                    <p class="text-white font-bold text-xs truncate">@zhlsyh</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/zulhelmisyahtiar/" target="_blank" rel="noopener noreferrer" class="glass-card p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1.5 border border-white/15 hover:border-secondary/60 hover:bg-white/10 transition-all group">
                                <div class="p-2 bg-secondary/10 rounded-lg shrink-0 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <svg class="w-5 h-5 fill-current text-secondary group-hover:text-black transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </div>
                                <div class="overflow-hidden w-full">
                                    <p class="text-[10px] uppercase font-bold text-white/60 tracking-wider">LinkedIn</p>
                                    <p class="text-white font-bold text-xs truncate">Zulhelmi</p>
                                </div>
                            </a>

                            <a href="https://github.com/Zhlsyh/" target="_blank" rel="noopener noreferrer" class="glass-card p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1.5 border border-white/15 hover:border-secondary/60 hover:bg-white/10 transition-all group">
                                <div class="p-2 bg-secondary/10 rounded-lg shrink-0 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <svg class="w-5 h-5 fill-current text-secondary group-hover:text-black transition-colors" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </div>
                                <div class="overflow-hidden w-full">
                                    <p class="text-[10px] uppercase font-bold text-white/60 tracking-wider">GitHub</p>
                                    <p class="text-white font-bold text-xs truncate">Zhlsyh</p>
                                </div>
                            </a>

                            <a href="https://www.tiktok.com/@miiixixixi" target="_blank" rel="noopener noreferrer" class="glass-card p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1.5 border border-white/15 hover:border-secondary/60 hover:bg-white/10 transition-all group">
                                <div class="p-2 bg-secondary/10 rounded-lg shrink-0 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <svg class="w-5 h-5 fill-current text-secondary group-hover:text-black transition-colors" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                                </div>
                                <div class="overflow-hidden w-full">
                                    <p class="text-[10px] uppercase font-bold text-white/60 tracking-wider">TikTok</p>
                                    <p class="text-white font-bold text-xs truncate">@miiixixixi</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Action buttons -->
                <div class="flex gap-3 pt-2 justify-center">
                    <button id="copy-email-btn" aria-label="Copy Email" class="flex-1 py-3 bg-white/10 rounded-xl text-white border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-all font-bold text-sm" title="Salin Email">
                        <span class="material-symbols-outlined text-[20px]">content_copy</span>
                        <span>Salin Email</span>
                    </button>
                    <button id="share-btn" aria-label="Share" class="px-5 py-3 bg-secondary text-black font-extrabold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all text-sm shadow-md" title="Bagikan Profile">
                        <span class="material-symbols-outlined text-[20px]">ios_share</span>
                        <span>Bagikan Profile</span>
                    </button>
                </div>
            </div>

            <!-- Contact Form Left Card -->
            <div class="lg:col-span-7">
                <div class="glass-card p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
                    <form id="contact-form" class="space-y-6">
                        <div class="space-y-2">
                            <label class="font-bold text-xs text-white uppercase tracking-widest block" for="contact-name">Nama Lengkap</label>
                            <input id="contact-name" type="text" required placeholder="Nama Anda" class="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none font-medium">
                        </div>

                        <div class="space-y-2">
                            <label class="font-bold text-xs text-white uppercase tracking-widest block" for="contact-email">Alamat Email</label>
                            <input id="contact-email" type="email" required placeholder="email@contoh.com" class="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none font-medium">
                        </div>

                        <div class="space-y-2">
                            <label class="font-bold text-xs text-white uppercase tracking-widest block" for="contact-message">Pesan / Detail Proyek</label>
                            <textarea id="contact-message" required rows="4" placeholder="Tuliskan pesan Anda di sini..." class="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none resize-none font-medium"></textarea>
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="w-full py-4 bg-secondary text-black font-extrabold rounded-lg uppercase tracking-widest border border-black/20 hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 shadow-lg text-sm">
                                <span>Kirim Pesan</span>
                                <span class="material-symbols-outlined text-[24px]">send</span>
                            </button>
                        </div>
                    </form>

                    <!-- Toast feedback -->
                    <div id="contact-toast" class="hidden mt-6 bg-secondary text-black font-bold p-4 rounded-xl border border-black flex items-center gap-3">
                        <span class="material-symbols-outlined">check_circle</span>
                        <span>Pesan berhasil dikirim! Saya akan segera menghubungi Anda.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="w-full bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-12 transition-colors">
        <div class="flex flex-col items-center justify-center text-center px-5 md:px-16 max-w-7xl mx-auto gap-6">
            <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 font-bold text-sm">
                <button data-tab="home" class="footer-nav-btn text-white/80 hover:text-secondary transition-colors">Beranda</button>
                <button data-tab="projects" class="footer-nav-btn text-white/80 hover:text-secondary transition-colors">Proyek</button>
                <button data-tab="skills" class="footer-nav-btn text-white/80 hover:text-secondary transition-colors">Keahlian</button>
                <button data-tab="contact" class="footer-nav-btn text-white/80 hover:text-secondary transition-colors">Kontak</button>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 font-bold text-sm">
                <a href="https://www.instagram.com/zhlsyh" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-secondary transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/zulhelmisyahtiar/" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-secondary transition-colors">LinkedIn</a>
                <a href="https://github.com/Zhlsyh/" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-secondary transition-colors">GitHub</a>
                <a href="https://www.tiktok.com/@miiixixixi" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-secondary transition-colors">TikTok</a>
                <a href="mailto:helmi2591@gmail.com" class="text-white/80 hover:text-secondary transition-colors">Email</a>
            </div>
            <div class="font-bold text-sm text-white/70 pt-2">
                © 2026 Zulhelmi Syahtiar.
            </div>
        </div>
    </footer>

    <!-- MODAL 1: Project Details Modal -->
    <div id="project-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="project-modal-card bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto text-white shadow-2xl space-y-6">
            <button id="close-project-modal" class="modal-close-icon absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-all">
                <span class="material-symbols-outlined">close</span>
            </button>

            <div class="h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 relative shadow-inner">
                <img id="modal-project-img" src="" alt="Project Image" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div id="modal-project-tags" class="absolute bottom-4 left-4 flex flex-wrap gap-2"></div>
            </div>

            <div class="space-y-2">
                <h2 id="modal-project-title" class="modal-heading text-2xl md:text-3xl font-extrabold text-white"></h2>
                <p id="modal-project-desc" class="modal-body-text text-white/90 leading-relaxed font-medium text-sm md:text-base"></p>
            </div>

            <!-- Specs Grid -->
            <div id="modal-project-specs-container">
                <h3 class="modal-heading text-md font-extrabold mb-3 text-white flex items-center gap-2">
                    <span class="material-symbols-outlined text-secondary">memory</span>
                    <span>Spesifikasi Teknis & Informasi</span>
                </h3>
                <div id="modal-project-specs" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"></div>
            </div>

            <!-- GALERI FOTO DALAM CARD/ALBUM INI -->
            <div id="modal-gallery-section" class="modal-gallery-box bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-2xl">collections</span>
                        <h3 id="modal-gallery-title" class="modal-heading text-lg font-extrabold text-white">Galeri Hasil Foto & Karya Visual</h3>
                        <span id="modal-gallery-count" class="px-2.5 py-0.5 bg-secondary text-black text-xs font-extrabold rounded-full">0 Foto</span>
                    </div>
                    <button id="modal-add-photo-btn" class="px-3.5 py-1.5 bg-secondary text-black text-xs font-extrabold rounded-lg hover:bg-secondary/90 transition-all shadow-md flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-sm">add_photo_alternate</span>
                        <span>Tambah Foto ke Card Ini</span>
                    </button>
                </div>

                <!-- Gallery Grid inside Modal -->
                <div id="modal-gallery-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    <!-- Photo items rendered dynamically by JS -->
                </div>
            </div>

            <div class="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a id="modal-project-doclink" href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-black font-extrabold rounded-xl text-sm hover:bg-secondary/90 transition-all shadow-md">
                    <span class="material-symbols-outlined text-[20px]">folder_open</span>
                    <span>Link Dokumentasi / Drive</span>
                    <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
                <button id="modal-close-btn" class="modal-secondary-btn px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-colors">
                    Tutup
                </button>
            </div>
        </div>
    </div>

    <!-- MODAL 2: Curriculum Vitae Modal -->
    <div id="resume-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full p-6 md:p-10 relative max-h-[90vh] overflow-y-auto text-white shadow-2xl">
            <div class="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-secondary text-3xl">badge</span>
                    <div>
                        <h2 class="text-2xl font-bold text-white">Curriculum Vitae</h2>
                        <p class="text-xs text-white/60">Pilih & unduh langsung berkas PDF CV resmi Zulhelmi Syahtiar</p>
                    </div>
                </div>
                <div class="flex items-center gap-2.5">
                    <button id="download-pdf-btn" class="bg-white/10 text-white font-extrabold px-3 py-2 rounded-lg text-xs uppercase flex items-center gap-1.5 hover:bg-white/20 transition-all border border-white/20" title="Cetak modal web ini sebagai PDF">
                        <span class="material-symbols-outlined text-[18px]">print</span>
                        <span class="hidden sm:inline">Cetak Modal PDF</span>
                    </button>
                    <button id="close-resume-modal" class="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-all">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>

            <!-- Resume Content Body -->
            <div class="space-y-8">
                <!-- 3 LARGE PROMINENT CV DOWNLOAD CARDS -->
                <div class="bg-slate-950/80 p-6 rounded-2xl border border-secondary/30 space-y-4 shadow-xl">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-lg font-extrabold text-white flex items-center gap-2">
                                <span class="material-symbols-outlined text-secondary">download</span>
                                <span>Pilih & Unduh File CV Asli (PDF)</span>
                            </h3>
                            <p class="text-xs text-white/70 mt-1">Unduh berkas PDF resmi Zulhelmi Syahtiar sesuai kebutuhan posisi/bidang perusahaan Anda:</p>
                        </div>
                    </div>

                    <!-- 3 Big Choice Cards Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <!-- Card 1: Bahasa Indonesia -->
                        <a href="/CV_Zulhelmi_Syahtiar_ID.pdf" target="_blank" download class="group bg-slate-900/90 hover:bg-secondary border border-white/20 hover:border-secondary p-5 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
                            <div class="space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl">🇮🇩</span>
                                    <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-secondary/20 group-hover:bg-black/30 text-secondary group-hover:text-black uppercase tracking-wider">Format ATS ID</span>
                                </div>
                                <h4 class="font-bold text-base text-white group-hover:text-black transition-colors">CV Bahasa Indonesia</h4>
                                <p class="text-xs text-white/70 group-hover:text-black/80 transition-colors leading-relaxed">Versi standar ATS industri Indonesia untuk lamaran perusahaan umum & instansi.</p>
                            </div>
                            <div class="mt-4 pt-3 border-t border-white/10 group-hover:border-black/20 flex items-center justify-between font-extrabold text-xs text-secondary group-hover:text-black">
                                <span>Unduh / Buka PDF</span>
                                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                            </div>
                        </a>

                        <!-- Card 2: Bahasa Inggris -->
                        <a href="/CV_Zulhelmi_Syahtiar_EN.pdf" target="_blank" download class="group bg-slate-900/90 hover:bg-secondary border border-white/20 hover:border-secondary p-5 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
                            <div class="space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl">🇬🇧</span>
                                    <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-secondary/20 group-hover:bg-black/30 text-secondary group-hover:text-black uppercase tracking-wider">English ATS</span>
                                </div>
                                <h4 class="font-bold text-base text-white group-hover:text-black transition-colors">CV English Version</h4>
                                <p class="text-xs text-white/70 group-hover:text-black/80 transition-colors leading-relaxed">Global professional English format for multinational companies.</p>
                            </div>
                            <div class="mt-4 pt-3 border-t border-white/10 group-hover:border-black/20 flex items-center justify-between font-extrabold text-xs text-secondary group-hover:text-black">
                                <span>Download / Open PDF</span>
                                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                            </div>
                        </a>

                        <!-- Card 3: Bidang Kreatif -->
                        <a href="/CV_Zulhelmi_Syahtiar_Creative.pdf" target="_blank" download class="group bg-slate-900/90 hover:bg-secondary border border-white/20 hover:border-secondary p-5 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
                            <div class="space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl">🎨</span>
                                    <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-secondary/20 group-hover:bg-black/30 text-secondary group-hover:text-black uppercase tracking-wider">Visual & Layout</span>
                                </div>
                                <h4 class="font-bold text-base text-white group-hover:text-black transition-colors">CV Bidang Kreatif</h4>
                                <p class="text-xs text-white/70 group-hover:text-black/80 transition-colors leading-relaxed">Format desain & visual penuh untuk posisi Desain Grafis & Fotografi.</p>
                            </div>
                            <div class="mt-4 pt-3 border-t border-white/10 group-hover:border-black/20 flex items-center justify-between font-extrabold text-xs text-secondary group-hover:text-black">
                                <span>Unduh / Buka PDF</span>
                                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div>
                    <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Zulhelmi Syahtiar</h1>
                    <p class="text-xl text-secondary font-bold mt-1">Fresh Graduate D3 Elektronika Industri - PNJ</p>
                    <p class="text-xs text-white/70 mt-2 font-medium">Email: helmi2591@gmail.com | Lokasi: Jakarta Timur | IPK: 3.55 / 4.00</p>
                    <p class="text-xs text-secondary mt-1 font-semibold">LinkedIn: linkedin.com/in/zulhelmisyahtiar</p>
                </div>

                <div class="bg-white/5 p-5 rounded-xl border border-white/10 space-y-4">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                        <h2 class="text-xs font-bold uppercase tracking-wider text-secondary">Ringkasan Profil</h2>
                        <div class="flex items-center gap-2 flex-wrap text-xs">
                            <span class="text-white/60 font-semibold text-[11px]">Unduh Versi CV:</span>
                            <a href="/CV_Zulhelmi_Syahtiar_ID.pdf" download target="_blank" class="px-2.5 py-1 bg-white/10 hover:bg-secondary hover:text-black text-white font-bold rounded-lg transition-all flex items-center gap-1 border border-white/15">
                                <span>🇮🇩</span> <span>Bahasa Indonesia</span>
                            </a>
                            <a href="/CV_Zulhelmi_Syahtiar_EN.pdf" download target="_blank" class="px-2.5 py-1 bg-white/10 hover:bg-secondary hover:text-black text-white font-bold rounded-lg transition-all flex items-center gap-1 border border-white/15">
                                <span>🇬🇧</span> <span>English</span>
                            </a>
                            <a href="/CV_Zulhelmi_Syahtiar_Creative.pdf" download target="_blank" class="px-2.5 py-1 bg-white/10 hover:bg-secondary hover:text-black text-white font-bold rounded-lg transition-all flex items-center gap-1 border border-white/15">
                                <span>🎨</span> <span>Kreatif</span>
                            </a>
                        </div>
                    </div>
                    <p class="text-sm text-white/90 leading-relaxed font-normal">
                        Fresh Graduate Jurusan Teknik Elektro, Program Studi D3 Elektronika Industri. Memiliki minat kuat di bidang Internet of Things (IoT), mikroprosesor, sistem kontrol, pemrograman web, serta memiliki ketertarikan di bidang desain dan fotografi. Terbiasa mengerjakan proyek berbasis mikrokontroler dan pengembangan sistem otomasi sederhana. Bersemangat untuk terus belajar, berinovasi, dan menerapkan teknologi terbaru dalam dunia industri.
                    </p>
                </div>

                <div class="space-y-4">
                    <h2 class="text-lg font-bold text-white border-b border-white/10 pb-2">Pendidikan</h2>
                    <div class="space-y-3">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <div>
                                <h3 class="font-bold text-base text-white">Politeknik Negeri Jakarta (PNJ)</h3>
                                <p class="text-xs text-white/80">Program Studi D3 Elektronika Industri (IPK: 3.55 / 4.00)</p>
                                <p class="text-xs text-secondary mt-1 font-semibold">Tugas Akhir: Trainer Kit Kendali Motor DC Dual – Control PID – Fuzzy Berbasis ESP32 Dan Visualisasi Digital Twin 3D (<a href="https://trainermotordc.web.app/" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">trainermotordc.web.app</a>)</p>
                            </div>
                            <span class="text-xs font-bold text-secondary shrink-0">Ags 2023 - 2026</span>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                            <div>
                                <h3 class="font-bold text-base text-white">SMAN 64 Jakarta</h3>
                                <p class="text-xs text-white/80">Jurusan MIPA</p>
                            </div>
                            <span class="text-xs font-bold text-secondary">Jun 2019 - Jun 2022</span>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-lg font-bold text-white border-b border-white/10 pb-2">Pengalaman Kerja</h2>
                    <div class="space-y-6">
                        <div class="relative pl-6 border-l-2 border-secondary/40 space-y-1">
                            <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-slate-900"></div>
                            <div class="flex justify-between items-start flex-wrap gap-2">
                                <h3 class="font-bold text-lg text-white">Magang Pemeliharaan Proteksi (HAR PRO)</h3>
                                <span class="text-xs font-extrabold bg-secondary text-black px-3 py-1 rounded-full">Jul 2025 - Nov 2025</span>
                            </div>
                            <div class="text-xs font-bold text-secondary">PT PLN (Persero) ULTG Petukangan</div>
                            <p class="text-sm text-white/80 pt-1 leading-relaxed">
                                Membantu pemeliharaan dan pengawasan sistem proteksi Gardu Induk (Relai OCR, GFR, Differential, Distance, OVR/UVR, Buchholz, Thermal Overload). Berpartisipasi dalam pengujian Battery Capacity Test (BCT) dan pengujian migrasi transformator gardu induk 150kV.
                            </p>
                        </div>
                        <div class="relative pl-6 border-l-2 border-secondary/40 space-y-1">
                            <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-slate-900"></div>
                            <div class="flex justify-between items-start flex-wrap gap-2">
                                <h3 class="font-bold text-lg text-white">Freelance Graphic Designer & Photographer</h3>
                                <span class="text-xs font-extrabold bg-secondary text-black px-3 py-1 rounded-full">Mar 2023 - Sekarang</span>
                            </div>
                            <div class="text-xs font-bold text-secondary">Klien Independen - Jabodetabek</div>
                            <p class="text-sm text-white/80 pt-1 leading-relaxed">
                                Sesi fotografi kelulusan akademik & pasca-sidang (directing, shooting & retouching Adobe Lightroom), pembuatan desain banner cetak kustom, dan pembuatan feeds Instagram untuk organisasi/komunitas.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-lg font-bold text-white border-b border-white/10 pb-2">Proyek Unggulan & Portofolio Teknis</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">Trainer Kit Motor DC Dual ESP32 (Tugas Akhir PNJ)</h3>
                            <p class="text-xs text-secondary font-semibold">Sistem Kontrol PID + Fuzzy Logic + Digital Twin 3D</p>
                            <p class="text-xs text-white/70">Aplikasi kendali kecepatan/posisi motor DC dual independen dengan telemetry Firebase DB dan visualisasi 3D Three.js real-time.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">Psychorobotic Plant Guardian</h3>
                            <p class="text-xs text-secondary font-semibold">Robot Monitoring IoT Tanaman (ESP32-C3)</p>
                            <p class="text-xs text-white/70">Robot monitoring kelembaban tanah dan kondisi lingkungan dengan DHT11, ESP32-C3, serta transmisi data telemetri wireless.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">Web Dashboard Telemetry IoT</h3>
                            <p class="text-xs text-secondary font-semibold">Real-time Web App (MySQL & WebSocket)</p>
                            <p class="text-xs text-white/70">Dashboard visualisasi grafik real-time sensor industri, logging data otomatis, serta kontrol sakelar relay jarak jauh.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">Modul Practical Trainer Gerbang Logika</h3>
                            <p class="text-xs text-secondary font-semibold">Hardware Trainer Digital IC 74xx</p>
                            <p class="text-xs text-white/70">Modul praktikum teknik digital untuk pengujian IC 74xx, Full Adder, Multiplexer, Flip-Flop, dan BCD Decoder.</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-lg font-bold text-white border-b border-white/10 pb-2">Keahlian Utama & Tools</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <span class="font-bold text-secondary uppercase tracking-wider block mb-1">IoT & Mikrokontroler</span>
                            <p class="text-white/80">ESP32, Arduino, Raspberry Pi, Sensor Telemetri, Firebase Realtime DB, MySQL, MQTT.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <span class="font-bold text-secondary uppercase tracking-wider block mb-1">Otomasi & Sistem Kontrol</span>
                            <p class="text-white/80">PID Controller, Fuzzy Logic, PLC Schneider, SCADA Vijeo, Relai Proteksi Gardu Induk PLN.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <span class="font-bold text-secondary uppercase tracking-wider block mb-1">Pemrograman & Software</span>
                            <p class="text-white/80">C/C++, Python, HTML5, CSS3, JavaScript, Three.js 3D, AutoCAD, Proteus, NI Multisim.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <span class="font-bold text-secondary uppercase tracking-wider block mb-1">Desain & Multimedia</span>
                            <p class="text-white/80">Adobe Lightroom, Adobe Photoshop, Canva, CapCut, ibis Paint X, Fotografi Studio & Retouching.</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-lg font-bold text-white border-b border-white/10 pb-2">Pengalaman Organisasi & Kepanitiaan</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">KSM PSYCHOROBOTIC PNJ</h3>
                            <p class="text-xs text-secondary font-semibold">Pengurus Departemen Kominfo (Mar 2025 - Des 2025)</p>
                            <p class="text-xs text-white/70">Desain organisasi, dokumentasi kegiatan, dan konten edukasi robotika & IoT.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">E-TIME 2025 PNJ</h3>
                            <p class="text-xs text-secondary font-semibold">Divisi Media Kreatif (Mei 2025 - Jul 2025)</p>
                            <p class="text-xs text-white/70">Membuat aset desain nasional (poster, feeds, merchandise, sertifikat) & video aftermovie.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">Fraction 2024 – Wisuda Teknik Elektro PNJ</h3>
                            <p class="text-xs text-secondary font-semibold">Divisi PDD / Publikasi, Dokumentasi & Desain (2024)</p>
                            <p class="text-xs text-white/70">Publikasi media sosial, dokumentasi foto & video wisuda jurusan, dan perancangan aset visual acara.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">Olahraga Elektro 2024 PNJ</h3>
                            <p class="text-xs text-secondary font-semibold">Divisi Publikasi & Dokumentasi (Apr 2024 - Ags 2024)</p>
                            <p class="text-xs text-white/70">Dokumentasi, pengelolaan sosmed & Photobooth studio acara penutupan.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                            <h3 class="font-bold text-sm text-white">Kuliah Umum EC-IKI PNJ 2024</h3>
                            <p class="text-xs text-secondary font-semibold">Divisi Media (Nov 2024)</p>
                            <p class="text-xs text-white/70">Dokumentasi acara & operator Zoom webinar.</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-lg font-bold text-white border-b border-white/10 pb-2">Sertifikasi & Lisensi</h2>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                        <p class="font-extrabold text-sm text-white">Sertifikat Kompetensi Teknisi Instrumentasi</p>
                        <p class="text-xs text-secondary font-bold">LSP PNJ / Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia (2025 - 2028)</p>
                        <p class="text-xs text-white/70 pt-1">Sertifikasi kompetensi resmi BNSP mencakup kalibrasi instrumen pengukuran, sensor & transmitter, pemeliharaan peralatan kontrol proses, serta pemasangan dan trouble-shooting sistem instrumentasi industri.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Back to Top Floating Button -->
    <button id="back-to-top" aria-label="Kembali ke atas" class="fixed bottom-6 right-6 z-40 p-3.5 bg-secondary text-black rounded-full shadow-2xl border border-black/20 opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 active:scale-95 group" title="Kembali ke atas">
        <span class="material-symbols-outlined text-2xl font-bold group-hover:-translate-y-0.5 transition-transform">keyboard_arrow_up</span>
    </button>

    <!-- Custom Toast Notification -->
    <div id="custom-toast" class="fixed top-20 left-1/2 -translate-x-1/2 z-[110] bg-slate-900/95 text-white px-5 py-3 rounded-xl border border-secondary/50 shadow-2xl backdrop-blur-xl flex items-center gap-3 transition-all duration-300 opacity-0 pointer-events-none -translate-y-4">
        <div class="w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0 text-secondary">
            <span id="toast-icon" class="material-symbols-outlined text-xl">check_circle</span>
        </div>
        <div>
            <p id="toast-title" class="text-xs font-bold uppercase tracking-wider text-secondary">Notifikasi</p>
            <p id="toast-message" class="text-sm font-semibold text-white"></p>
        </div>
    </div>

    <!-- Create New Folder Modal -->
    <div id="create-folder-modal" class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md hidden flex items-center justify-center p-4 transition-all duration-300">
        <div class="bg-slate-900 border border-white/20 rounded-2xl max-w-lg w-full p-6 md:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
                <div class="flex items-center gap-3">
                    <div class="p-2.5 bg-secondary/20 border border-secondary/40 text-secondary rounded-xl">
                        <span class="material-symbols-outlined text-2xl">create_new_folder</span>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-white">Buat Folder Album Foto Baru</h2>
                        <p class="text-xs text-white/60">Buat tempat/folder baru untuk mengelompokkan foto-foto Anda</p>
                    </div>
                </div>
                <button id="close-folder-modal-btn" class="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-all">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <form id="create-folder-form" class="space-y-4">
                <!-- Nama Folder -->
                <div class="space-y-1.5">
                    <label for="folder-name" class="text-xs font-bold text-white uppercase tracking-wider block">Nama Folder / Album</label>
                    <input type="text" id="folder-name" required placeholder="Contoh: Folder Wisuda Poltek 2026 / Folder Hunting Kota Tua" class="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary">
                </div>

                <!-- Kategori Folder -->
                <div class="space-y-1.5">
                    <label for="folder-category" class="text-xs font-bold text-white uppercase tracking-wider block">Kategori Folder</label>
                    <select id="folder-category" required class="w-full px-4 py-2.5 bg-slate-800 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary">
                        <option value="graduation">Fotografi Kelulusan</option>
                        <option value="event">Dokumentasi Event</option>
                        <option value="banner">Desain Banner & Cetak</option>
                        <option value="feeds">Feeds & Instagram</option>
                    </select>
                </div>

                <!-- Deskripsi Folder -->
                <div class="space-y-1.5">
                    <label for="folder-desc" class="text-xs font-bold text-white uppercase tracking-wider block">Deskripsi Singkat Folder</label>
                    <textarea id="folder-desc" rows="2" placeholder="Tuliskan deskripsi folder foto ini..." class="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary resize-none"></textarea>
                </div>

                <!-- Cover Folder Image Selector / Upload -->
                <div class="space-y-1.5">
                    <label class="text-xs font-bold text-white uppercase tracking-wider block">Pilih Cover / Sampul Folder (Opsional)</label>
                    <div id="folder-cover-dropzone" class="border-2 border-dashed border-white/20 hover:border-secondary rounded-xl p-4 text-center cursor-pointer transition-all bg-white/5 space-y-1">
                        <span class="material-symbols-outlined text-3xl text-secondary">image</span>
                        <p class="text-xs font-bold text-white">Klik untuk Unggah Cover Gambar</p>
                        <input type="file" id="folder-cover-file-input" accept="image/*" class="hidden">
                    </div>
                    <div id="folder-cover-preview-container" class="hidden relative rounded-xl overflow-hidden border border-secondary/50 max-h-36 bg-black/50">
                        <img id="folder-cover-preview-img" src="" alt="Cover Preview" class="w-full h-36 object-cover">
                        <button type="button" id="remove-folder-cover-btn" class="absolute top-2 right-2 bg-red-600/90 text-white p-1 rounded-full hover:bg-red-700 transition-all text-xs font-bold shadow-md">
                            <span class="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>
                </div>

                <div class="pt-2 flex items-center justify-end gap-3">
                    <button type="button" id="cancel-folder-btn" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase transition-all">
                        Batal
                    </button>
                    <button type="submit" class="px-6 py-2.5 bg-secondary text-black font-extrabold rounded-xl text-xs uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">folder_special</span>
                        <span>Buat Folder Sekarang</span>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Upload Photo & Design Modal (Google Drive Method Only) -->
    <div id="upload-modal" class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md hidden flex items-center justify-center p-4 transition-all duration-300">
        <div class="bg-slate-900 border border-white/20 rounded-2xl max-w-xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
                <div class="flex items-center gap-3">
                    <div class="p-2.5 bg-secondary/20 border border-secondary/40 text-secondary rounded-xl">
                        <span class="material-symbols-outlined text-2xl">add_to_drive</span>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-white">Tambah Foto Galeri via Google Drive</h2>
                        <p class="text-xs text-white/60">Tempel link foto Google Drive untuk menampilkan preview langsung</p>
                    </div>
                </div>
                <button id="close-upload-modal-btn" class="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-all">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <form id="upload-gallery-form" class="space-y-4">
                <!-- Google Drive Link Input -->
                <div id="upload-gdrive-section" class="space-y-2">
                    <label for="gdrive-url-input" class="text-xs font-bold text-white uppercase tracking-wider block flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-sm text-secondary">link</span>
                        <span>Link Foto Google Drive atau URL Gambar</span>
                    </label>
                    <textarea id="gdrive-url-input" rows="3" required placeholder="Tempelkan link Google Drive di sini...&#10;Contoh: https://drive.google.com/file/d/1ABC123xyz.../view?usp=sharing&#10;(Anda dapat menempel beberapa link sekaligus dipisah baris baru)" class="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary resize-none font-mono text-xs leading-relaxed"></textarea>
                    <div class="flex items-center justify-between text-[11px] text-white/60 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                        <span class="flex items-center gap-1 text-secondary">
                            <span class="material-symbols-outlined text-sm">info</span>
                            <span>Mendukung link share Google Drive ("Siapa saja yang memiliki link")</span>
                        </span>
                        <button type="button" id="btn-parse-gdrive" class="text-secondary font-bold hover:underline">Uji & Pratinjau Link</button>
                    </div>
                </div>

                <!-- Shared Image Preview Container -->
                <div id="upload-preview-container" class="hidden relative rounded-xl overflow-hidden border border-secondary/50 bg-black/60 p-2 space-y-2">
                    <div class="relative max-h-52 overflow-hidden rounded-lg bg-black/80 flex items-center justify-center border border-white/10 p-1">
                        <img id="upload-preview-img" src="" alt="Preview Google Drive" referrerpolicy="no-referrer" class="w-full max-h-48 object-contain rounded-lg transition-all">
                        <button type="button" id="remove-preview-btn" class="absolute top-2 right-2 bg-red-600/90 text-white p-1.5 rounded-full hover:bg-red-700 transition-all text-xs font-bold shadow-md z-10" title="Hapus Pratinjau">
                            <span class="material-symbols-outlined text-sm">delete</span>
                        </button>
                        <div id="gdrive-multi-badge" class="hidden absolute bottom-2 left-2 bg-black/80 text-secondary text-xs font-extrabold px-2.5 py-1 rounded-lg border border-secondary/40 backdrop-blur-md">
                            Terdeteksi 1 Link Foto
                        </div>
                    </div>
                    <!-- Status Loading / Success / Permission Warning -->
                    <div id="gdrive-status-success" class="hidden bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs p-2 rounded-lg flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm text-emerald-400">check_circle</span>
                        <span class="font-medium">Pratinjau gambar Google Drive berhasil dimuat!</span>
                    </div>
                    <div id="gdrive-status-warning" class="hidden bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs p-2.5 rounded-xl flex items-start gap-2">
                        <span class="material-symbols-outlined text-base shrink-0 text-amber-400">warning</span>
                        <div class="text-[11px] leading-relaxed">
                            <span class="font-bold block text-amber-300 mb-0.5">Gambar gagal dimuat dari Google Drive</span>
                            <span>Pastikan izin akses file di Google Drive sudah diubah ke <b>"Siapa saja yang memiliki link" (Anyone with the link)</b>.</span>
                        </div>
                    </div>
                </div>

                <!-- Album Card Target Selection -->
                <div class="space-y-1.5">
                    <label for="upload-album-id" class="text-xs font-bold text-white uppercase tracking-wider block">Pilih Card / Album Portofolio Tujuan</label>
                    <select id="upload-album-id" required class="w-full px-4 py-2.5 bg-slate-800 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary">
                        <option value="photo-1">📷 Card: Fotografi Kelulusan Akademik & Sidang</option>
                        <option value="des-fraction">🎓 Card: Desain & Visual Fraction 2024 (Wisuda PNJ)</option>
                        <option value="photo-2">🎨 Card: Aset & Media Kreatif E-TIME 2025 PNJ</option>
                        <option value="des-1">🖼️ Card: Desain Banner Cetak Kelulusan Kustom</option>
                        <option value="photo-3">📸 Card: Foto Personal Project (Photo Hunting)</option>
                        <option value="des-4">📱 Card: Kominfo Psychorobotic - Feeds & Konten</option>
                        <option value="photo-4">⚽ Card: Dokumentasi Olahraga Elektro 2024 (OE PNJ)</option>
                    </select>
                </div>

                <!-- Judul Foto / Keterangan -->
                <div class="space-y-1.5">
                    <label for="upload-title" class="text-xs font-bold text-white uppercase tracking-wider block">Judul Foto / Keterangan Hasil Foto</label>
                    <input type="text" id="upload-title" required placeholder="Contoh: Portrait Wisudawan Pose Formal - Sesi 1" class="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary">
                </div>

                <!-- Kategori -->
                <div class="space-y-1.5">
                    <label for="upload-category" class="text-xs font-bold text-white uppercase tracking-wider block">Kategori Galeri</label>
                    <select id="upload-category" required class="w-full px-4 py-2.5 bg-slate-800 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary">
                        <option value="graduation">Fotografi Kelulusan</option>
                        <option value="event">Dokumentasi Event</option>
                        <option value="banner">Desain Banner & Cetak</option>
                        <option value="feeds">Feeds & Instagram</option>
                    </select>
                </div>

                <!-- Deskripsi Singkat -->
                <div class="space-y-1.5">
                    <label for="upload-desc" class="text-xs font-bold text-white uppercase tracking-wider block">Deskripsi Singkat Karya</label>
                    <textarea id="upload-desc" rows="2" placeholder="Tuliskan keterangan detail, lokasi, atau software yang digunakan..." class="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary resize-none"></textarea>
                </div>

                <div class="pt-2 flex items-center justify-end gap-3">
                    <button type="button" id="cancel-upload-btn" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase transition-all">
                        Batal
                    </button>
                    <button type="submit" class="px-6 py-2.5 bg-secondary text-black font-extrabold rounded-xl text-xs uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">publish</span>
                        <span>Simpan ke Galeri</span>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Image Lightbox Modal -->
    <div id="image-modal" class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md hidden flex items-center justify-center p-4 transition-all duration-300">
        <button id="close-image-modal" class="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 text-2xl transition-all cursor-pointer z-10">
            <span class="material-symbols-outlined">close</span>
        </button>
        <div class="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center space-y-3">
            <img id="modal-image" src="" alt="Full view" class="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/20">
            <h3 id="modal-caption" class="text-white font-bold text-center text-lg md:text-xl"></h3>
        </div>
    </div>
`;

import Head from 'next/head';
import { useEffect, useState } from 'react';
import GrainOverlay from '@/components/GrainOverlay';
import CustomCursor from '@/components/CustomCursor';
import ScrollRail from '@/components/ScrollRail';
import IntroScreen from '@/components/IntroScreen';
import TopNav from '@/components/TopNav';
import FullScreenMenu from '@/components/FullScreenMenu';
import ProjectModal from '@/components/ProjectModal';
import ResumeModal from '@/components/ResumeModal';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Capabilities from '@/components/sections/Capabilities';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [introDone, setIntroDone] = useState(false);

  // Kunci scroll selama animasi intro tampil, lepas begitu selesai.
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [introDone]);

  return (
    <>
      <Head>
        <title>Zulhelmi Syahtiar | Electrical Engineer & IoT Developer Portfolio</title>
        <meta
          name="description"
          content="Portofolio resmi Zulhelmi Syahtiar — Lulusan D3 Elektronika Industri PNJ dengan pengalaman di proteksi listrik PLN, sistem kendali, IoT, fotografi, dan media visual."
        />
        <meta name="keywords" content="Zulhelmi Syahtiar, Electrical Engineer, IoT Developer, Elektronika Industri, PNJ, Proteksi Listrik, Trainer Motor DC, Three.js Digital Twin" />
        <meta name="author" content="Zulhelmi Syahtiar" />
        <meta name="theme-color" content="#0b1712" />

        {/* Open Graph / LinkedIn / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zulhelmi Syahtiar | Electrical Engineer & IoT Developer Portfolio" />
        <meta
          property="og:description"
          content="Portofolio resmi Zulhelmi Syahtiar — Lulusan D3 Elektronika Industri PNJ dengan pengalaman di proteksi listrik PLN, sistem kendali, IoT, fotografi, dan media visual."
        />
        <meta property="og:image" content="/profile.jpeg" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zulhelmi Syahtiar | Electrical Engineer & IoT Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Portofolio resmi Zulhelmi Syahtiar — Lulusan D3 Elektronika Industri PNJ dengan pengalaman di proteksi listrik PLN, sistem kendali, IoT, fotografi, dan media visual."
        />
        <meta name="twitter:image" content="/profile.jpeg" />

        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/profile.jpeg" />
      </Head>

      <GrainOverlay />
      <CustomCursor />
      <ScrollRail />
      <IntroScreen onDone={() => setIntroDone(true)} />

      <TopNav
        onOpenMenu={() => setMenuOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggle}
      />

      <main className="relative">
        <Hero onOpenResume={() => setResumeOpen(true)} isDark={isDark} />
        <StatsBar />
        <Experience onOpenProject={setActiveProject} />
        <Projects onOpenProject={setActiveProject} />
        <Capabilities />
        <Certifications />
        <Contact />
      </main>

      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ProjectModal projectId={activeProject} onClose={() => setActiveProject(null)} />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

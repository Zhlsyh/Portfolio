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
          content="Portofolio resmi Zulhelmi Syahtiar - Lulusan D3 Elektronika Industri Politeknik Negeri Jakarta (IPK 3.55/4.00). Spesialisasi IoT, ESP32, Kontrol PID & Fuzzy, PLC, Fotografi, dan Desain Grafis."
        />
        <meta name="theme-color" content="#0b1712" />
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

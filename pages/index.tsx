import { useEffect } from 'react';
import Head from 'next/head';
import { PORTFOLIO_BODY_HTML } from '@/lib/portfolioBodyHtml';
import { initPortfolio } from '@/lib/initPortfolio';
import { initEnhancements } from '@/lib/enhancements';

export default function Home() {
  // Semua logic (navigasi, filter, modal, tema, animasi, dsb) tetap ditulis
  // dengan DOM manipulation vanilla persis seperti versi Vite/main.ts.
  // Bedanya, di Next.js kita jalankan lewat useEffect setelah komponen
  // ter-mount di client, bukan lewat event 'DOMContentLoaded'.
  useEffect(() => {
    initPortfolio();
    initEnhancements();
  }, []);

  return (
    <>
      <Head>
        <title>Zulhelmi Syahtiar | Electrical Engineer & IoT Developer Portfolio</title>

        {/* Basic Meta Tags */}
        <meta
          name="description"
          content="Portofolio resmi Zulhelmi Syahtiar - Lulusan D3 Elektronika Industri Politeknik Negeri Jakarta (IPK 3.55/4.00). Spesialisasi IoT, ESP32, Kontrol PID & Fuzzy, PLC, Digital Twin 3D, Fotografi, dan Desain Grafis."
        />
        <meta
          name="keywords"
          content="Zulhelmi Syahtiar, Elektronika Industri, PNJ, IoT Developer, ESP32, PID Controller, Fuzzy Logic, PLC Automation, Hardware Engineer, Digital Twin, Three.js, Photography, Graphic Design"
        />
        <meta name="author" content="Zulhelmi Syahtiar" />
        <meta name="theme-color" content="#070b14" />
        <link rel="canonical" href="https://zulhelmi-portfolio.web.app" />

        {/* OpenGraph / Facebook / LinkedIn Social Media Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zulhelmi-portfolio.web.app" />
        <meta property="og:title" content="Zulhelmi Syahtiar | Industrial Electronics & IoT Engineer" />
        <meta
          property="og:description"
          content="Portofolio resmi Zulhelmi Syahtiar - Fresh Graduate D3 Elektronika Industri PNJ (IPK 3.55). Keahlian IoT, ESP32, Kontrol Presisi PID & Fuzzy, PLC Otomasi, Fotografi & Desain Grafis."
        />
        <meta property="og:image" content="https://zulhelmi-portfolio.web.app/photos/TrainerMotorDC.jpeg" />
        <meta property="og:image:secure_url" content="https://zulhelmi-portfolio.web.app/photos/TrainerMotorDC.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zulhelmi Syahtiar Portfolio - Trainer Kit Motor DC & IoT Digital Twin" />
        <meta property="og:site_name" content="Zulhelmi Syahtiar Portfolio" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://zulhelmi-portfolio.web.app" />
        <meta name="twitter:title" content="Zulhelmi Syahtiar | Electrical Engineer & IoT Developer" />
        <meta
          name="twitter:description"
          content="Portofolio resmi Zulhelmi Syahtiar - Lulusan D3 Elektronika Industri PNJ. Spesialisasi IoT, ESP32, PID & Fuzzy Controller, PLC Otomasi."
        />
        <meta name="twitter:image" content="https://zulhelmi-portfolio.web.app/photos/TrainerMotorDC.jpeg" />
        <meta name="twitter:image:alt" content="Zulhelmi Syahtiar Portfolio Preview" />

        {/* Schema.org Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Zulhelmi Syahtiar',
              jobTitle: 'Industrial Electronics Engineer & IoT Developer',
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Politeknik Negeri Jakarta'
              },
              url: 'https://zulhelmi-portfolio.web.app',
              image: 'https://zulhelmi-portfolio.web.app/profile.jpeg',
              sameAs: [
                'https://www.linkedin.com/in/zulhelmisyahtiar/',
                'https://github.com/Zhlsyh/'
              ],
              knowsAbout: [
                'Industrial Electronics',
                'IoT',
                'ESP32',
                'PID Controller',
                'Fuzzy Logic',
                'PLC Automation',
                'Digital Twin 3D',
                'Photography',
                'Graphic Design'
              ]
            })
          }}
        />
      </Head>

      {/*
        Markup body diambil apa adanya dari index.html versi Vite dan
        di-render lewat dangerouslySetInnerHTML. Ini disengaja: karena
        initPortfolio() masih mengandalkan document.getElementById /
        querySelectorAll dengan id & class yang sama persis seperti markup
        aslinya, mengubah markup ini jadi JSX satu-satu berisiko mematahkan
        referensi id/class yang dipakai ratusan kali di lib/initPortfolio.ts.
      */}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: PORTFOLIO_BODY_HTML }} />
    </>
  );
}

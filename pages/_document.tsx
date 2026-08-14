import { Html, Head, Main, NextScript } from 'next/document';

// _document.tsx hanya dirender di server dan hanya sekali per request.
// Di sinilah tempat yang tepat untuk atribut <html>, font eksternal, dan
// tag <head> yang sama untuk semua halaman (di project Vite sebelumnya ini
// ada langsung di index.html).
export default function Document() {
  return (
    <Html lang="id" className="scroll-smooth dark">
      <Head>
        {/* Google Fonts & Material Symbols */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans overflow-x-hidden antialiased min-h-screen selection:bg-secondary selection:text-black transition-colors duration-300 relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

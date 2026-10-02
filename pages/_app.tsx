import type { AppProps } from 'next/app';
import { MotionConfig } from 'motion/react';
import '@/styles/globals.css';
import { SiteDataProvider } from '@/context/SiteDataContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <SiteDataProvider>
        <Component {...pageProps} />
      </SiteDataProvider>
    </MotionConfig>
  );
}

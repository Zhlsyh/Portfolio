import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { SiteDataProvider } from '@/context/SiteDataContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteDataProvider>
      <Component {...pageProps} />
    </SiteDataProvider>
  );
}

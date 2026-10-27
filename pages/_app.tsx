import type { AppProps } from 'next/app';
import { PrefsProvider } from '@/lib/prefs';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrefsProvider>
      <Component {...pageProps} />
    </PrefsProvider>
  );
}

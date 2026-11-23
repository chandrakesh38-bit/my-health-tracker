import './globals.css';
import PWA from './pwa';
import Script from 'next/script';
export const metadata = { title: 'My Health Tracker', description: 'Personal diet, nutrition and health tracking', manifest: '/manifest.json', themeColor: '#142b43' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" /><PWA />{children}</body></html>;
}

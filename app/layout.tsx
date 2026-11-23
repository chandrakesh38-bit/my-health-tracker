import './globals.css';
import PWA from './pwa';
export const metadata = {
  title: 'My Health Tracker',
  description: 'Personal diet, nutrition and health tracking',
  manifest: '/manifest.json',
  themeColor: '#142b43'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><PWA />{children}</body></html>;
}
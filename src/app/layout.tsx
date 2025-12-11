import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Charles Milton - Software Engineer',
  description: 'Incoming SDE at Amazon | CS Student at CSULB specializing in full-stack development, AI/ML, and scalable web applications',
  keywords: ['Charles Milton', 'Software Engineer', 'Amazon SDE', 'CSULB', 'Full Stack Developer', 'Web Development', 'Machine Learning'],
  authors: [{ name: 'Charles Milton' }],
  creator: 'Charles Milton',
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
    shortcut: '/favicons/favicon-32x32.png',
    other: [
      { rel: 'icon', url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  manifest: '/favicons/site.webmanifest',
  openGraph: {
    type: 'website',
    title: 'Charles Milton - Software Engineer',
    description: 'Incoming SDE at Amazon | Full-stack developer and CS student',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-50 antialiased">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Charles Milton',
  description: 'Charles Milton - CS Student at CSULB | Building Web Apps & Machine Learning Solutions',
  icons: {
    icon: '/favicons/favicon.ico', // Default favicon
    apple: '/favicons/apple-touch-icon.png', // iOS Home screen icon
    shortcut: '/favicons/favicon-32x32.png', // For shortcuts
    other: [
      { rel: 'icon', url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  manifest: '/favicons/site.webmanifest', // For Progressive Web App (PWA)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

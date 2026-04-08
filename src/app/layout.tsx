import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Charles Milton | Software Engineer',
  description: 'Software engineer at Amazon building web applications and scalable systems. Full-stack developer with experience in React, Node.js, AWS, and Python. CS graduate from CSULB.',
  keywords: ['Charles Milton', 'Software Engineer', 'Amazon SDE', 'CSULB', 'Full Stack Developer', 'React', 'Node.js', 'AWS', 'Python'],
  authors: [{ name: 'Charles Milton', url: 'https://chuckmilton.com' }],
  creator: 'Charles Milton',
  metadataBase: new URL('https://chuckmilton.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicons/favicon.svg',
    apple: '/favicons/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chuckmilton.com',
    title: 'Charles Milton | Software Engineer',
    description: 'Software engineer at Amazon building web applications and scalable systems.',
    siteName: 'Charles Milton',
  },
  twitter: {
    card: 'summary',
    title: 'Charles Milton | Software Engineer',
    description: 'Software engineer at Amazon building web applications and scalable systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Charles Milton',
    url: 'https://chuckmilton.com',
    jobTitle: 'Software Development Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Amazon',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'California State University, Long Beach',
    },
    sameAs: [
      'https://github.com/chuckmilton',
      'https://www.linkedin.com/in/charles-milton-cs',
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-800 focus:text-white focus:rounded">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

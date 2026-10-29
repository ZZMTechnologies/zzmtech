import { Space_Grotesk } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-display' });

const description =
  'ZZMTech, Technology Solution craft for Industries and SMEs. Explore our services, process, team and clients in 3D.';

export const metadata = {
  metadataBase: new URL('https://zzmtech.com'),
  title: {
    default: 'ZZMTech',
    template: '%s | ZZMTech'
  },
  description,
  applicationName: 'ZZMTech',
  keywords: ['zzmtech', 'development', 'web', 'cloud', 'software', 'malaysia'],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zzmtech.com',
    siteName: 'ZZMTech',
    title: 'ZZMTech',
    description
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZZMTech',
    description
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  }
};

export const viewport = {
  themeColor: '#05040f'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.className} ${display.variable}`} style={{ margin: 0, background: '#05040f' }}>
        {children}
      </body>
    </html>
  );
}

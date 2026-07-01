// import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import PageLoader from '@/components/loader'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Pinapaka Lokesh | Software Designer & Engineer',
  description:
    'Personal portfolio of Pinapaka Lokesh, a software designer and engineer crafting clean, thoughtful digital experiences.',
  generator: 'v0.app',
  openGraph: {
    title: 'Pinapaka Lokesh | Software Designer & Engineer',
    description:
      'Personal portfolio of Pinapaka Lokesh, a software designer and engineer crafting clean, thoughtful digital experiences.',
    url: 'https://lokesh.dev',
    siteName: 'Pinapaka Lokesh Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1c20' },
  ],
}

// Set theme before paint to avoid flash. Defaults to dark.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${ inter.variable } ${ syne.variable } bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className="font-sans antialiased">
        <PageLoader />
        {children}
        {/* {process.env.NODE_ENV === 'production' && <Analytics />} */}
      </body>
    </html>
  )
}

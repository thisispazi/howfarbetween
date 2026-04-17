import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from './components/CookieBanner'

export const metadata: Metadata = {
  title: {
    default: 'How Far Between — Distance Calculator',
    template: '%s | HowFarBetween.com',
  },
  description: 'Calculate the distance between any two cities in the world. Flight time, driving time, walking time and more.',
  metadataBase: new URL('https://howfarbetween.com'),
  verification: {
    google: 'ARhZQ5ZYavGvWGDD4zs12jJeLkEMasFJ9pfd2HhcpeE',
  },
  openGraph: {
    siteName: 'HowFarBetween.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7339237018962749"
    crossOrigin="anonymous"
  />
</head>
<body>
  {children}
  <CookieBanner />
</body>
    </html>
  )
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'How Far Between — Distance Calculator',
    template: '%s | HowFarBetween.com',
  },
  description: 'Calculate the distance between any two cities in the world. Flight time, driving time, walking time and more.',
  metadataBase: new URL('https://howfarbetween.com'),
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
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/ac495fcc91ad0169c68375828a4707ba/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
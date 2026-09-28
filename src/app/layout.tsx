import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abu Sahid — Vibe Coder & Developer',
  description: 'Portfolio of Abu Sahid, a B.Tech Civil Engineering student at Assam down town University and a passionate vibe coder building apps, websites, and creative digital products.',
  keywords: ['Abu Sahid', 'Vibe Coder', 'Android Developer', 'Web Developer', 'App Developer', 'ADTU', 'Assam', 'Portfolio'],
  openGraph: {
    title: 'Abu Sahid — Vibe Coder & Developer',
    description: 'Portfolio of Abu Sahid, a passionate vibe coder building apps, websites, and creative digital products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        {children}
      </body>
    </html>
  )
}

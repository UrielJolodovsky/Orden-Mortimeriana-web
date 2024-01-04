import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orden Mortimeriana',
  description: 'Página creada por un grupo de olímpicos matemáticos',
  icons: {
    icon: [
      "/icon-page/favicon.ico",
    ],
    apple: [
      '/icon-page/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/icon-page/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

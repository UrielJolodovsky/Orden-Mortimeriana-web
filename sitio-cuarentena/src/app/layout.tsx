import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../ui/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orden Mortimeriana',
  description: 'Página creada por un grupo de olímpicos matemáticos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='bg-hero bg-cover pt-12'>
          {children}
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ClientSessionProvider } from './Providers'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Utility App',
  description: 'Aplicación para cubrir las necesidades diarias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClientSessionProvider>
          <Navbar />
          <main className='container mx-auto my-2'>
            {children}
          </main>
          <Footer />
        </ClientSessionProvider>
      </body>
    </html>
  )
}

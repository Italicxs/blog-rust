import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rust Blog',
  description: 'Itamakingbases Rust',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href='./favicon.ico'/>
      </head>
      <body className={inter.className}>
        <main>
        <Navbar></Navbar>
        {children}
        </main>
        </body>
    </html>
  )
}

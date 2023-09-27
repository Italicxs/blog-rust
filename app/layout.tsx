'use client'
import { useState, useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Loader from './components/Loader'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoading(false);
        observer.disconnect();
      }
    }, {
      threshold: 0,
    });
    observer.observe(document.body);
  }, []);
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href='./favicon.ico'/>
      </head>
      <body className={inter.className}>
      {
      isLoading ?  <Loader></Loader> : 
      <div>
        <main>
        {children}
        </main>
      </div>
    }
        </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Binary Question Generator',
  description: 'A simple application to help you practice binary problems.',
  keywords: ['Binary', 'Twos compliment binary', 'Binary fractions', 'Binary practice', 'Binary practice a level', 'binary practice gcse', 'Binary mantissa exponent'],
  verification: {
    google: "lbLKcs1huBLl10UkYNSxYQwHlVf0z7P5kgPf_wTjj3E",
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
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-HYDPC8K0E8'></Script>
        <Script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-HYDPC8K0E8');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}

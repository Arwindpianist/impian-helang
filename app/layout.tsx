import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const footlight = localFont({
  src: '../public/ftltlt.ttf',
  display: 'swap',
  variable: '--font-footlight',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Impian Helang Sdn Bhd - HRD Corp Certified Training Provider',
  description: 'Professional training programs including Emotional Intelligence (RM700) and Train The Trainer Programme (RM2788). HRD Corp certified courses led by veteran trainer Rita Krishnan.',
  keywords: 'HRD Corp, training provider, emotional intelligence, train the trainer, Rita Krishnan, corporate training, Malaysia',
  authors: [{ name: 'Impian Helang Sdn Bhd' }],
  creator: 'Impian Helang Sdn Bhd',
  publisher: 'Impian Helang Sdn Bhd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://impianhelang.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Impian Helang Sdn Bhd - HRD Corp Certified Training Provider',
    description: 'Professional training programs including Emotional Intelligence and Train The Trainer Programme. HRD Corp certified courses led by veteran trainer Rita Krishnan.',
    url: 'https://impianhelang.com',
    siteName: 'Impian Helang Sdn Bhd',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Impian Helang Sdn Bhd - Professional Training',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impian Helang Sdn Bhd - HRD Corp Certified Training Provider',
    description: 'Professional training programs including Emotional Intelligence and Train The Trainer Programme.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#005BAC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={footlight.className + ' antialiased'}>
        {children}
      </body>
    </html>
  )
}

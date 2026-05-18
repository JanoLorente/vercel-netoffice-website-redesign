import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
});
const twCenMT = localFont({
  src: './fonts/tw-cen-mt.ttf',
  variable: '--font-tw-cen',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NetOffice | ERP Inteligente para Transporte y Logística',
  description: 'El ERP más avanzado para transporte y logística. Con IA integrada, cloud y on-premise. Más de 30 años de experiencia y 300+ empresas confían en nosotros.',
  keywords: ['ERP transporte', 'software logística', 'TMS', 'gestión flota', 'IA transporte', 'NetOffice'],
  authors: [{ name: 'NetOffice' }],
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'NetOffice | ERP Inteligente para Transporte y Logística',
    description: 'El ERP más avanzado para transporte y logística. Con IA integrada, cloud y on-premise.',
    type: 'website',
    locale: 'es_ES',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} ${twCenMT.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

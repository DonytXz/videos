import './globals.css'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Deepia | Videos personalizados a escala',
  description: 'Convierte los datos de cada prospecto en videos personalizados, revisables y listos para compartir.',
  openGraph: {
    title: 'Cada prospecto merece un video que se siente personal.',
    description: 'Convierte una base de datos en videos personalizados, revisables y listos para compartir.',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'Deepia, video personalizado a escala' }],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cada prospecto merece un video que se siente personal.',
    description: 'Convierte una base de datos en videos personalizados con Deepia.',
    images: [`${siteUrl}/og.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

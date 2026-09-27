import './globals.css'
import './property-tour.css'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Deepia | Un recorrido para cada comprador',
  description: 'Explora recorridos inmobiliarios personalizados. Cambia de comprador, personaliza el mensaje y prueba tu campaña con un CSV.',
  openGraph: {
    title: 'Una grabación. Un recorrido personal para cada comprador.',
    description: 'Una propiedad, un mensaje relevante y un siguiente paso: agendar una visita. Prueba la demo de Deepia.',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'Deepia, video personalizado a escala' }],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Un recorrido personal para cada comprador.',
    description: 'Prueba la demo inmobiliaria de Deepia: mira, personaliza y conecta tus datos.',
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

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Greislyn Auto Import',
  description: 'Los mejores vehículos importados en República Dominicana',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}

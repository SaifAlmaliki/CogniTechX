import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "sonner"
import { ClientLayout } from '@/components/client-layout'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CogniTechX - Industrial IoT & AI Solutions',
  description: 'Leading provider of Industrial IoT, AI Solutions, Data Platforms, and Digital Academy services.',
  keywords: 'IIoT, MES, AI Solutions, Data Platforms, Digital Academy, Industry 4.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
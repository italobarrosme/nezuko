import '@/styles/globals.css'

import { ReactNode } from 'react'
import { NextAuthProvider } from '@/providers/auth'
import { Metadata } from 'next'
import { Navigation } from '@/modules/Navigation'

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js Boilerplate',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
  themeColor: '#000',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className="min-h-screen bg-brand-dark bg-effect-granula">
          <Navigation />
          <main className="mt-20 p-4 px-8 text-brand-light">{children}</main>
        </body>
      </NextAuthProvider>
    </html>
  )
}

import '@/styles/globals.scss'
import '@/styles/main.scss'

import Head from 'next/head'
import { ReactNode } from 'react'
import { NextAuthProvider } from '@/providers/auth'
import { ToastProvider } from '@/providers/toast'
import { Navigation } from '@/modules/Navigation'

type Props = {
  children?: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#000" />
      </Head>
      <body>
        <NextAuthProvider>
          <ToastProvider>
            <Navigation />
            {children}
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}

import Head from 'next/head'
import { Component } from './type'

const AuthtLayout = ({ children }: Component) => {
  return (
    <div className="font-mono">
      <Head>
        <title>Auth layout</title>
        <meta name="description" content="Auth layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen items-center justify-center bg-brand-primary">
        {children}
      </main>
    </div>
  )
}

export default AuthtLayout

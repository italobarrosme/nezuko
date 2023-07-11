import Head from 'next/head'
import { Component } from './type'

const DefaultLayout = ({ children, title }: Component) => {
  return (
    <div className="flex w-screen font-mono">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-full items-center justify-center overflow-auto px-6 py-20">
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout

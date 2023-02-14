import Head from 'next/head';
import { Component } from './type';


const DefaultLayout = ({ children, title }: Component) => {

  return (
    <div className="font-mono w-screen flex">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overflow-auto h-screen justify-center w-full items-center py-20 px-6'>
        {children}
      </main>

    </div>
  )
}

export default DefaultLayout;
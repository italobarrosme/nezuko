import '@/styles/globals.scss'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ListToast } from '@/components/ListToast'
import { storeListToast } from '@/components/ListToast/store/storeListToast'
import { Loading } from '@/components/Loading'
import { storeLoading } from '@/components/Loading/store/storeLoading'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { data } = storeListToast()
  const { store } = storeLoading()

  return (
    <>
      {<ListToast position={data.position} list={data.list} />}
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      {store.isLoading && <Loading />}
    </>
  )
}

export default App

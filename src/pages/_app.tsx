import '@/styles/globals.scss'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ListToast } from '@/components/ListToast'
import { useStoreListToast } from '@/store/useStoreListToast'
import { Loading } from '@/components/Loading'
import { useStoreLoading } from '@/store/useStoreLoading'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { data } = useStoreListToast()
  const { store } = useStoreLoading()

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

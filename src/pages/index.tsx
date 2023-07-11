import DefaultLayout from '@/layouts/DefaultLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <DefaultLayout title="home page">
        <h1 className="text-brand-primary">Home test </h1>
      </DefaultLayout>
    </>
  )
}

export default Home

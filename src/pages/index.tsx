import { NextPage } from 'next'
import Head from 'next/head'
import { HelloWorld } from '@/front/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Betty</title>
        <meta
          name="description"
          content="A web app to manage your betting bankroll"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HelloWorld />
    </>
  )
}

export default Home

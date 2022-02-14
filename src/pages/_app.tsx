import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from '@/front/components'

const App = ({ Component, pageProps }: AppProps) => {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App

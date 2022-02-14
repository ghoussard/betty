import { NextPage } from 'next'
import { HelloWorld } from '@/front/components'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Link href={'/bankroll/create'}>Create bankroll</Link>
      <HelloWorld />
    </>
  )
}

export default Home

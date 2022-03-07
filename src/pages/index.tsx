import { NextPage } from 'next'
import { Link, Title } from '@/front/shared'

const Home: NextPage = () => {
  return (
    <>
      <Title>Betty</Title>
      <Link href={'/bankroll/create'}>Create bankroll</Link>
    </>
  )
}

export default Home

import { NextPage } from 'next'
import { Title, Link } from '@/front/shared'

const Bankrolls: NextPage = () => {
  return (
    <>
      <Title>Bankrolls</Title>
      <p>You don&apos;t own any bankroll at this time.</p>
      <Link href="/bankrolls/create">Create a bankroll</Link>
    </>
  )
}

export default Bankrolls

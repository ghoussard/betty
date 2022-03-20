import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { breakpoints, colors } from '@/front/shared'

const Container = styled.a<{ active: boolean }>`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;

  text-align: center;
  font-weight: 500;
  text-decoration: none;
  color: ${({ active }) => (active ? colors.white : colors.black)};
  background-color: ${({ active }) => (active ? colors.green : colors.white)};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.green};
  }

  @media ${breakpoints.desktop} {
    text-align: left;
  }
`

type TabProps = PropsWithChildren<{
  href: string
  onClick: () => void
}>

const Tab = ({ children, href, onClick }: TabProps) => {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <Container active={router.pathname === href} onClick={onClick}>
        {children}
      </Container>
    </Link>
  )
}

export type { TabProps }
export { Tab }

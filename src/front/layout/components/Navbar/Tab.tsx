import { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { breakpoints, colors } from '@/front/shared'

const isPathnameMatched = (
  actualPathname: string,
  testPathname: string
): boolean => {
  return '/' === testPathname
    ? testPathname === actualPathname
    : actualPathname.startsWith(testPathname)
}

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

type TabProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const Tab = ({ children, href, ...props }: TabProps) => {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <Container active={isPathnameMatched(router.pathname, href)} {...props}>
        {children}
      </Container>
    </Link>
  )
}

export type { TabProps }
export { Tab }

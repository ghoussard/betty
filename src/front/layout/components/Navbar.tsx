import styled from 'styled-components'
import Link from 'next/link'
import { breakpoints } from '@/front/shared'

type NavbarEntryProps = {
  children: React.ReactChild
  href: string
}

const NavbarEntryContainer = styled(Link)`
  :focus {
    text-color: white;
  }

  @media ${breakpoints.desktop} {
    :hover {
      text-color: white;
    }
  }
`

const NavbarContainer = styled.div`
  display: flex;
`

const NavbarEntry = ({ children, href }: NavbarEntryProps) => {
  return <NavbarEntryContainer href={href}>{children}</NavbarEntryContainer>
}

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarEntry href="/">Bankrolls</NavbarEntry>
    </NavbarContainer>
  )
}

export { Navbar }

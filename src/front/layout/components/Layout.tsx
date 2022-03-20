import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { breakpoints, colors } from '@/front/shared'
import { Navbar } from './Navbar'

type LayoutProps = {
  children: ReactNode
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${colors.white};
  color: ${colors.black};
  font-family: 'Roboto', sans-serif;

  @media ${breakpoints.desktop} {
    display: flex;
  }
`

const ContentContainer = styled.div`
  margin-top: 30px;

  @media ${breakpoints.desktop} {
    margin-top: revert;
  }
`

const Layout = ({ children }: LayoutProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggleNavbar = () => setNavbarOpen(!navbarOpen)
  const closeNavbar = () => setNavbarOpen(false)

  return (
    <Container>
      <Navbar open={navbarOpen} onToggle={toggleNavbar}>
        <Navbar.Tab href="/" onClick={closeNavbar}>
          Home
        </Navbar.Tab>
        <Navbar.Tab href="/bankrolls" onClick={closeNavbar}>
          Bankrolls
        </Navbar.Tab>
      </Navbar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

export { Layout }

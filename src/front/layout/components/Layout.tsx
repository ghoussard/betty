import styled from 'styled-components'
import { breakpoints } from '@/front/shared'
import { Navbar } from '@/front/layout'

type LayoutProps = {
  children: React.ReactChild
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #fafafa;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`

const ChildrenContainer = styled.div`
  height: 100%;
  padding: 1rem;

  @media ${breakpoints.desktop} {
    width: 80%;
  }
`

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </LayoutContainer>
  )
}

export { Layout }

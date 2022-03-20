import { ReactElement } from 'react'
import styled from 'styled-components'
import { breakpoints, colors } from '@/front/shared'
import { Tab, TabProps } from './Navbar/Tab'

const Container = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80vw;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: inherit;

  display: flex;
  flex-direction: column;
  gap: 20px;

  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};

  @media ${breakpoints.desktop} {
    position: revert;
    width: 20vw;
    box-shadow: revert;
    visibility: visible;
  }
`

const Toggle = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  padding: 0.5rem;

  color: ${colors.green};
  font-weight: 500;
  z-index: 1;

  @media ${breakpoints.desktop} {
    display: none;
  }
`

const Title = styled.h1`
  text-align: center;
  line-height: 2;
`

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 0 1rem;
`

type NavbarProps = {
  children: ReactElement<TabProps> | ReactElement<TabProps>[]
  open: boolean
  onToggle: () => void
}

const Navbar = ({ children, open, onToggle }: NavbarProps) => {
  return (
    <>
      <Toggle onClick={onToggle}>{open ? 'Close' : 'Open menu'}</Toggle>
      <Container open={open}>
        <Title>Betty</Title>
        <TabsContainer>{children}</TabsContainer>
      </Container>
    </>
  )
}

Navbar.Tab = Tab

export { Navbar }

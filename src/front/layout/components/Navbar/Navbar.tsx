import { HTMLAttributes, ReactElement } from 'react'
import styled from 'styled-components'
import { Tab, TabProps } from './Tab'
import { Toggle } from './Toggle'
import { breakpoints, Title, Override } from '@/front/shared'

const Container = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: inherit;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};

  @media ${breakpoints.desktop} {
    box-shadow: revert;
  }
`

const CentredTitle = styled(Title)`
  text-align: center;
`

const TabsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 1rem;
`

type NavbarProps = Override<
  HTMLAttributes<HTMLElement>,
  {
    children: ReactElement<TabProps> | ReactElement<TabProps>[]
    open: boolean
  }
>

const Navbar = ({ children, open, ...props }: NavbarProps) => (
  <Container open={open} {...props}>
    <CentredTitle>Betty</CentredTitle>
    <TabsContainer>{children}</TabsContainer>
  </Container>
)

Navbar.Tab = Tab
Navbar.Toggle = Toggle

export { Navbar }

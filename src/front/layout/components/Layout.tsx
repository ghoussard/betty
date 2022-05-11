import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import {
  breakpoints,
  colors,
  Notification,
  Override,
  useListenNotification,
  generateUuid,
} from '@/front/shared'
import { Navbar } from './Navbar'
import { Flash } from './Flash'

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

const FlashOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  @media ${breakpoints.desktop} {
    width: 20%;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 1rem;
  }
`

const FixedToggle = styled(Navbar.Toggle)`
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 1;

  @media ${breakpoints.desktop} {
    display: none;
  }
`

const FixedNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80vw;
  max-width: 400px;

  @media ${breakpoints.desktop} {
    position: revert;
    width: 20vw;
    max-width: none;
    visibility: visible;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 1rem;
  text-align: center;

  @media ${breakpoints.desktop} {
    text-align: left;
  }
`

type IdentifiedNotification = Override<Notification, { uuid: string }>

const Layout = ({ children }: LayoutProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [notifications, setNotifications] = useState<IdentifiedNotification[]>(
    []
  )

  useListenNotification((notification: Notification) => {
    const identifiedNotification: IdentifiedNotification = {
      ...notification,
      uuid: generateUuid(),
    }
    setNotifications((notifications) => [
      ...notifications,
      identifiedNotification,
    ])
  })

  const toggleNavbar = () => setNavbarOpen(!navbarOpen)
  const closeNavbar = () => setNavbarOpen(false)

  const handleNotificationClose = (uuid: string): void => {
    setNotifications((notifications) =>
      notifications.filter((notification) => uuid !== notification.uuid)
    )
  }

  return (
    <Container>
      <FlashOverlay>
        {notifications.map(({ uuid, level, message }) => (
          <Flash
            key={uuid}
            level={level}
            onClose={() => handleNotificationClose(uuid)}
          >
            {message}
          </Flash>
        ))}
      </FlashOverlay>
      <FixedToggle open={navbarOpen} onClick={toggleNavbar} />
      <FixedNavbar open={navbarOpen}>
        <Navbar.Tab href="/" onClick={closeNavbar}>
          Home
        </Navbar.Tab>
        <Navbar.Tab href="/bankrolls" onClick={closeNavbar}>
          Bankrolls
        </Navbar.Tab>
      </FixedNavbar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

export { Layout }

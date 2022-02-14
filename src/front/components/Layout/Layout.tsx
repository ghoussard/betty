import { ReactElement } from 'react'
import { Header } from './Header'

type LayoutProps = {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  )
}

export { Layout }

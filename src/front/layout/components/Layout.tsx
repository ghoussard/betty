import { Navbar } from '@/front/layout'

type LayoutProps = {
  children: React.ReactChild
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-50 text-gray-800 w-screen h-screen box-border flex flex-col-reverse md:flex-row">
      <Navbar />
      <main className="h-full md:w-9/12 p-2">{children}</main>
    </div>
  )
}

export { Layout }

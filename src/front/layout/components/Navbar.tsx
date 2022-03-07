import Link from 'next/link'

type NavbarEntryProps = {
  children: React.ReactChild
  href: string
}

const NavbarEntry = ({ children, href }: NavbarEntryProps) => {
  return (
    <Link href={href}>
      <a className="p-2 h-12 focus:text-white md:hover:text-white">
        {children}
      </a>
    </Link>
  )
}

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-slate-100 flex">
      <NavbarEntry href="/">Bankrolls</NavbarEntry>
    </nav>
  )
}

export { Navbar }

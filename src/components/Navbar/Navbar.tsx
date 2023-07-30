'use client'

import Image from 'next/image'
import { ButtonAuth } from '../../app/modules/Authentication/components/ButtonAuth'
import Link from 'next/link'

type Menu = {
  name: string
  icon?: string
  href?: string
  onClick?: () => void
}

type NavbarProps = {
  logo: string
  user: any
  buttonAuthClick?: () => void
  menus: Menu[]
  isMenuOpen: boolean
}

export const Navbar = ({
  logo,
  user,
  buttonAuthClick,
  menus,
  isMenuOpen,
}: NavbarProps) => {
  return (
    <nav className="relative flex h-20 items-center justify-between px-4 shadow-sm">
      <Link href="/">
        <Image src={logo} alt="logo" width={42} height={42} />
      </Link>
      <ButtonAuth
        data={user}
        icon={isMenuOpen ? 'lucide:x' : 'quill:hamburger'}
        onClick={buttonAuthClick}
      />
      {isMenuOpen ? (
        <ul className="absolute right-20 top-16 z-40 rounded-md border bg-brand-light p-2 shadow-xl">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="relative my-4 cursor-pointer p-0 px-2 text-xs font-semibold text-brand-secondary hover:bg-brand-primary hover:text-white"
              onClick={menu.onClick}
            >
              {menu.name}
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  )
}

import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

type navItems = {
  name: string
  fn?: () => void
  icon?: string
}

export type NavbarProps = {
  menu: navItems[]
  className?: string
  scrollPageY?: number
}

export const Navbar = ({ menu, className, scrollPageY = 0 }: NavbarProps) => {
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    if (scrollPageY === 0) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }, [scrollPageY])

  return (
    <>
      <nav
        className={cn(
          'duration-500 ease-in',
          !navbar
            ? 'absolute right-0 top-0 z-30 h-11 w-[80%] rounded-l-full bg-brand-primary opacity-0'
            : 'absolute right-0 top-0 z-30 h-11 w-[80%] rounded-l-full bg-brand-primary',
          className
        )}
      >
        <ul className="flex flex-row-reverse px-4">
          {menu.map((item, index) => {
            return !item.fn ? (
              <li
                key={index}
                className="flex select-none items-center gap-2 p-2 text-xl text-brand-light"
              >
                <Icon icon={item.icon || ''} /> {item.name}
              </li>
            ) : (
              <li
                key={index}
                className="flex cursor-pointer select-none items-center gap-2 p-2 text-brand-light hover:bg-brand-secondary"
                onClick={item.fn}
              >
                <Icon icon={item.icon || ''} /> {item.name}
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

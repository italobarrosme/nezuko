import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useWindowSize } from 'usehooks-ts'
import clsx from 'clsx'
import { useAutoAnimate } from '@formkit/auto-animate/react'

type menu = {
  name: string
  link: string
  icon?: string
}

export type SidebarMenuProps = {
  menu: menu[]
  className?: string
}

export const SidebarMenu = ({ menu, className }: SidebarMenuProps) => {
  const [animationParent] = useAutoAnimate<any>({
    duration: 500
  })
  const [sidebar, setSidebar] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width > 768) {
      setSidebar(true)
    } else {
      setSidebar(false)
    }
  }, [width])

  const toggleBar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div
      className={clsx(
        className,
        'duration-500 ease-in',
        sidebar
          ? 'relative top-0 h-screen w-52 rounded-r-lg bg-brand-primary'
          : 'relative top-0 h-screen w-20 rounded-r-lg bg-brand-primary'
      )}
    >
      <div ref={animationParent} className="flex items-center">
        <button className="p-4 text-brand-light" onClick={toggleBar}>
          <Icon icon="mdi:menu" width={32} />
        </button>
        {sidebar && <h1 className="text-4xl text-brand-accent">IPOG</h1>}
      </div>
      <ul className="">
        {menu.map((item, index) => (
          <Link key={index} href={item.link}>
            <li className="flex h-16 cursor-pointer items-center gap-2 rounded-sm bg-brand-secondary p-2 text-brand-light">
              <Icon
                icon={item.icon || ''}
                width={24}
                className={clsx(sidebar ? 'h-8 w-12' : 'h-8 w-12')}
              />
              {sidebar && <p>{item.name}</p>}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

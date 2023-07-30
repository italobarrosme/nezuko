'use client'

import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

type ButtonAuthProps = {
  icon?: string
  data: any
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonAuth = ({
  icon = '',
  data,
  onClick,
  ...props
}: ButtonAuthProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer appearance-none',
        data
          ? 'flex items-center gap-4 rounded-3xl border p-2'
          : 'p-2 font-bold text-brand-secondary'
      )}
      {...props}
    >
      {data ? (
        <>
          <Icon icon={icon} width={32} />
          <Image
            src={data.image}
            alt="image user"
            width={32}
            height={32}
            className="rounded-full"
          />
        </>
      ) : (
        'Login'
      )}
    </button>
  )
}

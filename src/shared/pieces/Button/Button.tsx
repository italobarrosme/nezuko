import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  label?: string
  className?: string
  icon?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  onClick,
  label,
  className,
  type,
  icon = '',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'flex items-center gap-4 whitespace-nowrap rounded bg-brand-secondary px-4 py-2 font-bold text-white hover:bg-brand-secondary',
        className
      )}
      onClick={onClick}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      <p>{label}</p>
    </button>
  )
}

import { Icon } from '@iconify/react'

export type ButtonIconProps = {
  label?: string
  icon: string
  onClick: () => void
  width?: number
  height?: number
}

export const ButtonIcon = ({
  onClick,
  label,
  icon,
  height = 24,
  width = 24,
}: ButtonIconProps) => {
  return (
    <>
      <button
        type="button"
        id="buttonIcon"
        className="flex items-center gap-2 rounded-full bg-brand-primary p-2 font-bold text-white hover:bg-brand-secondary"
        onClick={onClick}
      >
        {label ? (
          <label htmlFor="buttonIcon" className="font-bold">
            {label}
          </label>
        ) : null}
        <Icon icon={icon} width={width} height={height} />
      </button>
    </>
  )
}

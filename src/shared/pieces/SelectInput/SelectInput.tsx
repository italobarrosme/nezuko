import { cn } from '@/utils'
import { SelectHTMLAttributes } from 'react'
export type SelectInputProps = {
  label: string
  name: string
  options: []
} & SelectHTMLAttributes<HTMLSelectElement>

export const SelectInput = ({
  label,
  name,
  options,
  value,
  onChange,
  disabled,
  className,
}: SelectInputProps) => {
  return (
    <div className={cn('flex flex-col gap-2')}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={cn(
          'border-1 h-9 w-80 rounded-md border-brand-primary p-2 text-brand-dark',
          className
        )}
        onChange={onChange}
        value={value}
        disabled={disabled}
      >
        {options.map((option: any) => (
          <option
            key={option.value}
            value={option.value}
            className="h-9 overflow-y-auto"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

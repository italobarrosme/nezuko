import { InputHTMLAttributes } from 'react'

export type InputDateProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputDate = ({
  label,
  name,
  defaultValue,
  onChange,
  value
}: InputDateProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type="date"
          className="h-9 cursor-pointer rounded-md p-2 font-semibold text-brand-dark"
          defaultValue={defaultValue}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  )
}

import { Icon } from '@iconify/react'
import { ChangeEvent } from 'react'

export type InputSearchProps = {
  placeholder: string
  label?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputSearch = ({
  placeholder,
  label,
  onChange
}: InputSearchProps) => {
  return (
    <>
      <fieldset className="w-full space-y-1 rounded-md border ">
        <label htmlFor="Search" className="hidden">
          {label}
        </label>
        <div className="relative w-full">
          <span className="absolute left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="p-1 focus:outline-none"
            >
              <Icon icon="ic:baseline-search" width={32} />
            </button>
          </span>
          <input
            onChange={onChange}
            type="search"
            name="Search"
            placeholder={placeholder}
            className="w-full rounded-md py-2 pl-14 pr-2 text-sm text-brand-dark focus:text-brand-secondary focus:outline-none"
          />
        </div>
      </fieldset>
    </>
  )
}

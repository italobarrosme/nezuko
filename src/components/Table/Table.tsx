import { Icon } from '@iconify/react'
import { ReactNode } from 'react'
import { InputSearch } from '@/usePieces/InputSearch'
import { ChangeEvent } from 'react'
import { Button } from '@/usePieces/Button'
import clsx from 'clsx'

export type itemsHeader = {
  title: string
  fn?: () => void
}

export type TableProps = {
  title?: string
  headerItems: itemsHeader[]
  children: ReactNode
  onChangeSearch?: (event: ChangeEvent<HTMLInputElement>) => void
  actionHeadButton?: () => void
  labelButtonHeader?: string
}

export const Table = ({
  title,
  headerItems,
  children,
  onChangeSearch,
  actionHeadButton,
  labelButtonHeader
}: TableProps) => {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <h2 className="w-full text-2xl font-semibold leading-tight">{title}</h2>
        <div className="mb-2 flex w-full items-center justify-between gap-4">
          {actionHeadButton && (
            <Button onClick={actionHeadButton} label={labelButtonHeader} />
          )}
          {onChangeSearch && (
            <InputSearch placeholder="Filtro" onChange={onChangeSearch} />
          )}
        </div>
      </div>
      <div className="h-auto overflow-auto rounded-lg">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-200 bg-brand-secondary text-brand-light">
              {headerItems?.map((item) => (
                <th key={item.title} className="p-3 text-left font-semibold">
                  <p className="flex items-center gap-1">
                    <button onClick={item.fn}>
                      <span className={clsx(item.fn ? 'underline' : '')}>
                        {item.title}
                      </span>{' '}
                      {item.fn && (
                        <span>
                          {/* <Icon icon='ic:baseline-expand-more' width={18} /> */}{' '}
                        </span>
                      )}
                    </button>
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  )
}

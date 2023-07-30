'use client'

import { ListToast, storeListToast } from '@/components/ListToast'
import { ReactNode } from 'react'

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const { data } = storeListToast()

  return (
    <>
      {children}
      <ListToast position={data.position} list={data.list} />
    </>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useRedirectTimeout = (timeout: number, redirectPath: string) => {
  const router = useRouter()

  useEffect(() => {
    console.log('router', timeout, router)
    setTimeout(() => {
      router.push(redirectPath)
    }, timeout)
  }, [redirectPath, router, timeout])
}

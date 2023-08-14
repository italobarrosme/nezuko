'use client'

import { useEffect } from 'react'

export const useRedirectTimeout = (timeout: number, redirectPath: string) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('redirecting to', redirectPath)

      window.location.href = redirectPath // Força uma recarga completa da página
    }, timeout)
  }, [redirectPath, timeout])
}

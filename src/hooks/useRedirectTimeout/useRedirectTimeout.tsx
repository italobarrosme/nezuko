import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRedirectTimeout = (timeout: number, redirectPath: string) => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push(redirectPath)
    }, timeout)
  }, [])
}

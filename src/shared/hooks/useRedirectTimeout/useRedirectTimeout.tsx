import { useEffect } from 'react'

export const useRedirectTimeout = (timeout: number, path: string) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.href = path
      }
    }, timeout)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [timeout, path])
}

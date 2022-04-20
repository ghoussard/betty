import { useEffect } from 'react'

const useTimeout = (callback: () => void, duration: number): void => {
  useEffect(() => {
    const timeout = setTimeout(callback, duration)
    return () => clearTimeout(timeout)
  }, [callback, duration])
}

export { useTimeout }

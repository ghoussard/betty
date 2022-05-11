import { useEffect, useCallback } from 'react'

const useTimeout = (callback: () => void, duration: number): void => {
  const callbackMemo = useCallback(callback, [callback])

  useEffect(() => {
    const timeout = setTimeout(callbackMemo, duration)
    return () => clearTimeout(timeout)
  }, [callbackMemo, duration])
}

export { useTimeout }

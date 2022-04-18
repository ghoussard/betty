import { useCallback } from 'react'
import { eventEmitter, NOTIFICATION_EVENT } from './common'
import { Notification } from '../../models'

const useNotify = (): ((notification: Notification) => void) => {
  const emit = useCallback((data: Notification) => {
    eventEmitter.emit(NOTIFICATION_EVENT, data)
  }, [])

  return emit
}

export { useNotify }

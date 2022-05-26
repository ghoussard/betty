import { useCallback } from 'react'
import { eventEmitter, NOTIFICATION_EMITTED_EVENT } from './common'
import { Notification } from '../../models'

const useNotify = (): ((notification: Notification) => void) => {
  return useCallback((notification: Notification) => {
    eventEmitter.emit(NOTIFICATION_EMITTED_EVENT, notification)
  }, [])
}

export { useNotify }

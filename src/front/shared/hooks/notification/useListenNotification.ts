import { useEffect } from 'react'
import { eventEmitter, NOTIFICATION_EVENT } from './common'
import { Notification } from '../../models'

const useListenNotification = (
  callback: (data: Notification) => void
): void => {
  useEffect(() => {
    eventEmitter.on(NOTIFICATION_EVENT, callback)
    return () => void eventEmitter.off(NOTIFICATION_EVENT, callback)
  }, [callback])
}

export { useListenNotification }

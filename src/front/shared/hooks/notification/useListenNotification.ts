import { useEffect } from 'react'
import { eventEmitter, NOTIFICATION_EVENT } from './common'
import { Notification } from '../../models'

const useListenNotification = (
  handler: (notification: Notification) => void
): void => {
  useEffect(() => {
    eventEmitter.on(NOTIFICATION_EVENT, handler)
    return () => void eventEmitter.off(NOTIFICATION_EVENT, handler)
  }, [handler])
}

export { useListenNotification }

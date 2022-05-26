import { useEffect } from 'react'
import { eventEmitter, NOTIFICATION_EMITTED_EVENT } from './common'
import { Notification } from '../../models'

const useListenNotification = (
  handler: (notification: Notification) => void
): void => {
  useEffect(() => {
    eventEmitter.on(NOTIFICATION_EMITTED_EVENT, handler)
    return () => void eventEmitter.off(NOTIFICATION_EMITTED_EVENT, handler)
  }, [handler])
}

export { useListenNotification }

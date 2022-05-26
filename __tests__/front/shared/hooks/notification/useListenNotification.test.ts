import { renderHook } from '@testing-library/react-hooks'
import { Notification } from '@/front/shared'
import {
  eventEmitter,
  NOTIFICATION_EMITTED_EVENT,
} from '@/front/shared/hooks/notification/common'
import { useListenNotification } from '@/front/shared/hooks/notification/useListenNotification'

describe('useListenNotification hook', () => {
  test('it calls handler when notification is emitted', () => {
    const handler = jest.fn()

    renderHook(() => useListenNotification(handler))

    const notification: Notification = {
      message: 'test',
      level: 'info',
    }

    eventEmitter.emit(NOTIFICATION_EMITTED_EVENT, notification)

    expect(handler).toHaveBeenCalledWith(notification)
  })
})

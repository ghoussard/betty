import { renderHook } from '@testing-library/react-hooks'
import { Notification } from '@/front/shared'
import {
  eventEmitter,
  NOTIFICATION_EMITTED_EVENT,
} from '@/front/shared/hooks/notification/common'
import { useNotify } from '@/front/shared/hooks/notification/useNotify'

jest.mock('@/front/shared/hooks/notification/common', () => ({
  ...jest.requireActual('@/front/shared/hooks/notification/common'),
  eventEmitter: {
    emit: jest.fn(),
  },
}))

describe('useNotify hook', () => {
  test('it emits a notification when called', () => {
    const { result } = renderHook(() => useNotify())

    const notification: Notification = {
      message: 'test',
      level: 'info',
    }

    result.current(notification)

    expect(eventEmitter.emit).toHaveBeenCalledWith(
      NOTIFICATION_EMITTED_EVENT,
      notification
    )
  })
})

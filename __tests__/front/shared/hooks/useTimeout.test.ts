import { renderHook } from '@testing-library/react-hooks'
import { useTimeout } from '@/front/shared/hooks/useTimeout'

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')
jest.spyOn(global, 'clearTimeout')

describe('useTimeout hook', () => {
  test('it calls passed callback after passed timeout', () => {
    const callback = jest.fn()

    renderHook(() => useTimeout(callback, 1000))

    // Unreliable assertion, see https://stackoverflow.com/a/58306733/18543262
    // expect(setTimeout).toHaveBeenCalledTimes(1);

    expect(setTimeout).toHaveBeenLastCalledWith(callback, 1000)
    expect(callback).not.toHaveBeenCalled()

    jest.advanceTimersByTime(900)
    expect(callback).not.toHaveBeenCalled()

    jest.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalled()
  })

  test('it clears and reset timeout when passed callback change', () => {
    const firstCallback = jest.fn()
    const duration = 1000

    const { rerender } = renderHook(
      ({ callback, duration }) => useTimeout(callback, duration),
      {
        initialProps: { callback: firstCallback, duration },
      }
    )

    expect(setTimeout).toHaveBeenLastCalledWith(firstCallback, duration)

    const secondCallback = jest.fn()

    rerender({ callback: secondCallback, duration })

    expect(firstCallback).not.toHaveBeenCalled()
    expect(clearTimeout).toHaveBeenCalled()
    expect(setTimeout).toHaveBeenLastCalledWith(secondCallback, duration)

    jest.advanceTimersByTime(duration)
    expect(secondCallback).toHaveBeenCalled()
  })

  test('it clears and reset timeout when passed duration change', () => {
    const callback = jest.fn()
    const firstDuration = 1000

    const { rerender } = renderHook(
      ({ callback, duration }) => useTimeout(callback, duration),
      {
        initialProps: { callback, duration: firstDuration },
      }
    )

    expect(setTimeout).toHaveBeenLastCalledWith(callback, firstDuration)

    const secondDuration = 500

    rerender({ callback, duration: secondDuration })

    expect(callback).not.toHaveBeenCalled()
    expect(clearTimeout).toHaveBeenCalled()
    expect(setTimeout).toHaveBeenLastCalledWith(callback, secondDuration)

    jest.advanceTimersByTime(secondDuration)
    expect(callback).toHaveBeenCalled()
  })
})

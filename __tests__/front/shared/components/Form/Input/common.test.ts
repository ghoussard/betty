import { getInputColor } from '@/front/shared/components/Form/Input/common'

jest.mock('@/front/shared/theme/colors', () => ({
  colors: {
    red: 'red',
    green: 'green',
  },
}))

describe('Input common', () => {
  test('it returns input color', () => {
    expect(getInputColor(false)).toBe('green')
    expect(getInputColor(true)).toBe('red')
  })
})

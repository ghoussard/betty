import { render, screen, fireEvent } from '@testing-library/react'
import { NumberInput } from '@/front/shared'

describe('NumberInput component', () => {
  test('it renders children', () => {
    render(
      <NumberInput name="input" value={0} onChange={jest.fn()}>
        NumberInput
      </NumberInput>
    )
    expect(screen.getByText('NumberInput')).toBeInTheDocument()
  })

  test('it triggers onChange call back when it is changed', () => {
    const onChange = jest.fn()

    render(
      <NumberInput name="input" value={0} onChange={onChange}>
        NumberInput
      </NumberInput>
    )

    const input = screen.getByLabelText('NumberInput')
    fireEvent.change(input, { target: { value: '1' } })
    expect(onChange).toHaveBeenCalledWith(1)
  })
})

import { render, screen, fireEvent } from '@testing-library/react'
import { NumberInput } from '@/front/shared/components/Form/Input/NumberInput'

describe('NumberInput component', () => {
  test('it triggers onChange callback when it is changed', () => {
    const onChange = jest.fn()

    render(<NumberInput data-testid="testInput" onChange={onChange} />)

    const input = screen.getByTestId('testInput')
    fireEvent.change(input, { target: { value: '1' } })
    expect(onChange).toHaveBeenCalledWith(1)
  })

  test('it accepts a className props to extend it with styled-components', () => {
    render(<NumberInput data-testid="testInput" className="test-class" />)
    expect(screen.getByTestId('testInput')).toHaveClass('test-class')
  })
})

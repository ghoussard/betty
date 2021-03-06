import { render, screen, fireEvent } from '@testing-library/react'
import { TextInput } from '@/front/shared/components/Form/Input/TextInput'

describe('TextInput component', () => {
  test('it triggers onChange callback when it is changed', () => {
    const onChange = jest.fn()

    render(<TextInput data-testid="testInput" onChange={onChange} />)

    const input = screen.getByTestId('testInput')
    fireEvent.change(input, { target: { value: 'betty' } })
    expect(onChange).toHaveBeenCalledWith('betty')
  })

  test('it accepts a className props to extend it with styled-components', () => {
    render(<TextInput data-testid="testInput" className="test-class" />)
    expect(screen.getByTestId('testInput')).toHaveClass('test-class')
  })

  test('it displays error', () => {
    render(<TextInput onChange={jest.fn()} error="an error" />)
    expect(screen.getByText('an error')).toBeInTheDocument()
  })
})

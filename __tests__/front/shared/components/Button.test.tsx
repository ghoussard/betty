import { screen, render, fireEvent } from '@testing-library/react'
import { Button } from '@/front/shared'

describe('Button component', () => {
  test('it renders children', () => {
    render(<Button onClick={jest.fn()}>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  test('it triggers onClick callback when it is clicked', () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick}>Button</Button>)
    const button = screen.getByText('Button')

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  test('it accepts a className props to extends it with styled-components', () => {
    render(<Button className="test-class">Button</Button>)
    expect(screen.getByText('Button')).toHaveClass('test-class')
  })
})

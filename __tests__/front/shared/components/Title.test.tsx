import { screen, render } from '@testing-library/react'
import { Title } from '@/front/shared/components/Title'

describe('Title component', () => {
  test('it renders children', () => {
    render(<Title>Title</Title>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  test('it accepts a className props to extend it with styled-components', () => {
    render(<Title className="test-class">Title</Title>)
    expect(screen.getByText('Title')).toHaveClass('test-class')
  })
})

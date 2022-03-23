import { screen, render } from '@testing-library/react'
import { Label } from '@/front/shared'

describe('Label component', () => {
  test('it renders children', () => {
    render(<Label>Label</Label>)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  test('it accepts a className props to extend it with styled-components', () => {
    render(<Label className="test-class">Label</Label>)
    expect(screen.getByText('Label')).toHaveClass('test-class')
  })
})

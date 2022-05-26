import { render, screen } from '@testing-library/react'
import { Link } from '@/front/shared/components/Link'

describe('Link component', () => {
  test('it renders children', () => {
    render(<Link href="/">Link</Link>)
    expect(screen.getByText('Link')).toBeInTheDocument()
  })

  test('it accepts a className props to extend it with styled-components', () => {
    render(
      <Link className="test-class" href="/">
        Link
      </Link>
    )
    expect(screen.getByText('Link')).toHaveClass('test-class')
  })
})

import { render, screen } from '@testing-library/react'
import { Link } from '@/front/shared'

describe('Link component', () => {
  test('it renders children', () => {
    render(<Link href="/">Link</Link>)
    expect(screen.getByText('Link')).toBeInTheDocument()
  })
})

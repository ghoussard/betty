import { Error } from '@/front/shared'
import { render, screen } from '@testing-library/react'

describe('Error component', () => {
  test('it renders children', () => {
    render(<Error>an error</Error>)
    expect(screen.getByText('an error')).toBeInTheDocument()
  })
})

import { screen, render } from '@testing-library/react'
import { Title } from '@/front/shared'

describe('Title component', () => {
  test('it renders children', () => {
    render(<Title>Title</Title>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })
})

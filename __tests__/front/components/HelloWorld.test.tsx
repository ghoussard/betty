import { render, screen } from '@testing-library/react'
import { HelloWorld } from '@/front/components'

jest.mock('@/front/hooks/useHelloWorld', () => ({
  useHelloWorld: () => 'Hello world!',
}))

test('it displays hello world!', () => {
  render(<HelloWorld />)
  expect(screen.getByText('Hello world!')).toBeInTheDocument()
})

import { render, screen, fireEvent } from '@testing-library/react'
import { TextInput } from '@/front/shared'

describe('TextInput component', () => {
  test('it renders children', () => {
    render(
      <TextInput name="input" value="" onChange={jest.fn()}>
        TextInput
      </TextInput>
    )
    expect(screen.getByText('TextInput')).toBeInTheDocument()
  })

  test('it triggers onChange call back when it is changed', () => {
    const onChange = jest.fn()

    render(
      <TextInput name="input" value="" onChange={onChange}>
        TextInput
      </TextInput>
    )

    const input = screen.getByLabelText('TextInput')
    fireEvent.change(input, { target: { value: 'betty' } })
    expect(onChange).toHaveBeenCalledWith('betty')
  })
})

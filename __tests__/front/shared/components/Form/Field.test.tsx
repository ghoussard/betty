import { screen, render } from '@testing-library/react'
import { Field, Label, TextInput } from '@/front/shared'

describe('Field component', () => {
  test('it renders children when name is undefined', () => {
    render(
      <Field>
        <Label>Property</Label>
      </Field>
    )

    expect(screen.getByText('Property')).toBeInTheDocument()
  })

  test('it pass props to child when they are Input or Label', () => {
    render(
      <Field name="property">
        <Label>Property</Label>
        <TextInput data-testid="testInput" />
        <div>A random div</div>
        <input data-testid="testNotComponentInput" />
      </Field>
    )

    expect(screen.getByText('Property')).toHaveAttribute('for', 'propertyInput')
    expect(screen.getByTestId('testInput')).toHaveAttribute(
      'id',
      'propertyInput'
    )
    expect(screen.getByTestId('testInput')).toHaveAttribute('name', 'property')
    expect(screen.getByText('A random div')).not.toHaveAttribute(
      'for',
      'propertyInput'
    )
    expect(screen.getByText('A random div')).not.toHaveAttribute(
      'id',
      'propertyInput'
    )
    expect(screen.getByText('A random div')).not.toHaveAttribute(
      'name',
      'property'
    )
    expect(screen.getByTestId('testNotComponentInput')).not.toHaveAttribute(
      'id',
      'propertyInput'
    )
    expect(screen.getByTestId('testNotComponentInput')).not.toHaveAttribute(
      'name',
      'property'
    )
  })

  test('it accepts a className props to extend it with styled-components', () => {
    render(<Field className="test-class">Field</Field>)
    expect(screen.getByText('Field')).toHaveClass('test-class')
  })
})

import { render, screen, fireEvent } from '@testing-library/react'
import { Violation } from '@/shared/domain'
import {
  CreateBankrollForm,
  CreateBankrollFormValues,
} from '@/front/feature/components/createBankroll/CreateBankrollForm'

describe('CreateBankrollForm component', () => {
  test('it triggers onSubmit callback when it is submitted', () => {
    const onSubmit = jest.fn()

    render(<CreateBankrollForm onSubmit={onSubmit} violations={[]} />)

    const nameInput = screen.getByLabelText('Name')
    fireEvent.change(nameInput, { target: { value: 'Betty' } })

    const initialCapitalInput = screen.getByLabelText('Initial capital')
    fireEvent.change(initialCapitalInput, { target: { value: '1' } })

    const currencyInput = screen.getByLabelText('Currency')
    fireEvent.change(currencyInput, { target: { value: 'EUR' } })

    const submitButton = screen.getByText('Create')
    fireEvent.click(submitButton)

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Betty',
      initialCapital: 1,
      currency: 'EUR',
    })
  })

  test('it displays violations', () => {
    const violations: Violation<CreateBankrollFormValues>[] = [
      {
        property: 'name',
        reason: 'name violation',
      },
      {
        property: 'initialCapital',
        reason: 'initialCapital violation',
      },
      {
        property: 'currency',
        reason: 'currency violation',
      },
    ]

    render(<CreateBankrollForm onSubmit={jest.fn()} violations={violations} />)

    expect(screen.getByText('name violation')).toBeInTheDocument()
    expect(screen.getByText('initialCapital violation')).toBeInTheDocument()
    expect(screen.getByText('currency violation')).toBeInTheDocument()
  })
})

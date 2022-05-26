import { render, screen, fireEvent } from '@testing-library/react'
import { CreateBankrollForm } from '@/front/feature/components/createBankroll/CreateBankrollForm'

describe('CreateBankrollForm component', () => {
  test('it triggers onSubmit callback when it is submitted', () => {
    const onSubmit = jest.fn()

    render(<CreateBankrollForm onSubmit={onSubmit} />)

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
})

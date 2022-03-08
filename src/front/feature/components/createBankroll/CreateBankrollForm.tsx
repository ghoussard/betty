import { FormEvent, useState } from 'react'
import { Button, NumberInput, TextInput } from '@/front/shared'

type CreateBankrollFormValues = {
  name: string
  initialCapital: number
  currency: string
}

type CreateBankrollFormProps = {
  onSubmit: (values: CreateBankrollFormValues) => void
}

const CreateBankrollForm = ({ onSubmit }: CreateBankrollFormProps) => {
  const [formValues, setFormValues] = useState<CreateBankrollFormValues>({
    name: '',
    initialCapital: 0,
    currency: '',
  })

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()
    onSubmit(formValues)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <TextInput
        name="name"
        value={formValues.name}
        onChange={(name) => setFormValues({ ...formValues, name })}
      >
        Name
      </TextInput>
      <NumberInput
        name="initialCapital"
        value={formValues.initialCapital}
        onChange={(initialCapital) =>
          setFormValues({ ...formValues, initialCapital })
        }
      >
        Initial capital
      </NumberInput>
      <TextInput
        name="currency"
        value={formValues.currency}
        onChange={(currency) => setFormValues({ ...formValues, currency })}
      >
        Currency
      </TextInput>
      <Button onClick={handleSubmit}>Create</Button>
    </form>
  )
}

export type { CreateBankrollFormValues }
export { CreateBankrollForm }

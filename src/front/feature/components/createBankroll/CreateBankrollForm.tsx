import { FormEvent, useState } from 'react'
import { Violation } from '@/shared/domain'
import {
  Button,
  Field,
  Label,
  NumberInput,
  TextInput,
  getViolationReason,
} from '@/front/shared'
import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
`

type CreateBankrollFormValues = {
  name: string
  initialCapital: number
  currency: string
}

type CreateBankrollFormProps = {
  onSubmit: (values: CreateBankrollFormValues) => void
  violations: Violation<CreateBankrollFormValues>[]
}

const CreateBankrollForm = ({
  onSubmit,
  violations,
}: CreateBankrollFormProps) => {
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
    <Container onSubmit={handleSubmit}>
      <Field name="name">
        <Label>Name</Label>
        <TextInput
          value={formValues.name}
          onChange={(name) => setFormValues({ ...formValues, name })}
          error={getViolationReason(violations, 'name')}
        />
      </Field>
      <Field name="initalCapital">
        <Label>Initial capital</Label>
        <NumberInput
          value={formValues.initialCapital}
          onChange={(initialCapital) =>
            setFormValues({ ...formValues, initialCapital })
          }
          error={getViolationReason(violations, 'initialCapital')}
        />
      </Field>
      <Field name="currency">
        <Label>Currency</Label>
        <TextInput
          value={formValues.currency}
          onChange={(currency) => setFormValues({ ...formValues, currency })}
          error={getViolationReason(violations, 'currency')}
        />
      </Field>
      <Button onClick={handleSubmit}>Create</Button>
    </Container>
  )
}

export type { CreateBankrollFormValues }
export { CreateBankrollForm }

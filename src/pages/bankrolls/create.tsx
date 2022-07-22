import { useState } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import { CreateBankrollCommand, Violation } from '@/shared/domain'
import { Title, Link, useNotify, generateUuid } from '@/front/shared'
import { CreateBankrollForm, CreateBankrollFormValues } from '@/front/feature'

const CreateBankroll: NextPage = () => {
  const notify = useNotify()
  const [violations, setViolations] = useState<
    Violation<CreateBankrollFormValues>[]
  >([])

  const handleFormSubmitted = async (formValues: CreateBankrollFormValues) => {
    const command: CreateBankrollCommand = {
      uuid: generateUuid(),
      ...formValues,
    }

    const response = await fetch('/api/bankrolls/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(command),
    })

    if (response.ok) {
      Router.push('/')

      notify({ level: 'success', message: 'Bankroll sucessfully created' })
    } else {
      const { violations } = await response.json()
      setViolations(violations)

      notify({ level: 'error', message: 'Unable to create a bankroll' })
    }
  }

  return (
    <>
      <Title>Create bankroll</Title>
      <Link href="/bankrolls">Go back</Link>
      <CreateBankrollForm
        onSubmit={handleFormSubmitted}
        violations={violations}
      />
    </>
  )
}

export default CreateBankroll

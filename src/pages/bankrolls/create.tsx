import { NextPage } from 'next'
import Router from 'next/router'
import { CreateBankrollCommand } from '@/back/domain'
import { Title, Link, useNotify, generateUuid } from '@/front/shared'
import { CreateBankrollForm, CreateBankrollFormValues } from '@/front/feature'

const CreateBankroll: NextPage = () => {
  const notify = useNotify()

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
    }
  }

  return (
    <>
      <Title>Create bankroll</Title>
      <Link href="/bankrolls">Go back</Link>
      <CreateBankrollForm onSubmit={handleFormSubmitted} />
    </>
  )
}

export default CreateBankroll

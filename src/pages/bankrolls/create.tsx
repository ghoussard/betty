import { NextPage } from 'next'
import Router from 'next/router'
import { Title, Link, useNotify } from '@/front/shared'
import { CreateBankrollForm, CreateBankrollFormValues } from '@/front/feature'

const CreateBankroll: NextPage = () => {
  const notify = useNotify()

  const handleFormSubmitted = async (formValues: CreateBankrollFormValues) => {
    const response = await fetch('/api/bankrolls/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })

    if (response.ok) {
      Router.push('/')
      notify({ level: 'success', content: 'Bankroll sucessfully created' })
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

import { NextPage } from 'next'
import Router from 'next/router'
import { Title } from '@/front/shared'
import { CreateBankrollForm, CreateBankrollFormValues } from '@/front/feature'

const CreateBankroll: NextPage = () => {
  const handleFormSubmitted = async (formValues: CreateBankrollFormValues) => {
    const response = await fetch('/api/bankroll/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })

    if (response.ok) {
      Router.push('/')
    }
  }

  return (
    <>
      <Title>Create bankroll</Title>
      <CreateBankrollForm onSubmit={handleFormSubmitted} />
    </>
  )
}

export default CreateBankroll

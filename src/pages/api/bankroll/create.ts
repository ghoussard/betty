import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateBankrollCommand, handleCreateBankroll } from '@/back/application'
import { bankrollRepository, generateUuid } from '@/back/infrastructure'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<void>
): Promise<void> => {
  const { name } = req.body

  const createBankrollCommand: CreateBankrollCommand = {
    name,
  }

  await handleCreateBankroll(
    bankrollRepository, 
    generateUuid, 
    createBankrollCommand,
  )

  res.send()
}

export default handler

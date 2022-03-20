import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateBankrollCommand } from '@/back/domain'
import { handleCreateBankroll } from '@/back/application'
import { bankrollRepository, generateUuid } from '@/back/infrastructure'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<void>
): Promise<void> => {
  const { name, initialCapital, currency } = req.body

  const createBankrollCommand: CreateBankrollCommand = {
    name,
    initialCapital,
    currency,
  }

  await handleCreateBankroll(
    bankrollRepository,
    generateUuid,
    createBankrollCommand
  )

  res.send()
}

export default handler

import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateBankrollCommand } from '@/back/domain'
import { handleCreateBankroll } from '@/back/application'
import { bankrollRepository } from '@/back/infrastructure'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<void>
): Promise<void> => {
  const { uuid, name, initialCapital, currency } = req.body

  const createBankrollCommand: CreateBankrollCommand = {
    uuid,
    name,
    initialCapital,
    currency,
  }

  await handleCreateBankroll(bankrollRepository, createBankrollCommand)

  res.send()
}

export default handler

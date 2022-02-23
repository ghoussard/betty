import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateBankrollCommand, handleCreateBankroll } from '@/back/application'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<void>
): Promise<void> => {
  const createBankrollCommand: CreateBankrollCommand = {
    bankrollData: req.body,
  }

  await handleCreateBankroll(createBankrollCommand)

  res.send()
}

export default handler

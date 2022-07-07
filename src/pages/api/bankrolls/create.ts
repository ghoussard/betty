import type { NextApiRequest, NextApiResponse } from 'next'
import {
  CommandViolation,
  CreateBankrollCommand,
  validateCreateBankrollCommand,
} from '@/back/domain'
import { handleCreateBankroll } from '@/back/application'
import { bankrollRepository } from '@/back/infrastructure'

type CreateBankrollResponse = {
  violations: CommandViolation<CreateBankrollCommand>[]
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CreateBankrollResponse>
): Promise<void> => {
  const { uuid, name, initialCapital, currency } = req.body

  const createBankrollCommand: CreateBankrollCommand = {
    uuid,
    name,
    initialCapital,
    currency,
  }

  const violations = validateCreateBankrollCommand(createBankrollCommand)

  if (0 < violations.length) {
    res.status(400).json({
      violations,
    })

    return
  }

  await handleCreateBankroll(bankrollRepository, createBankrollCommand)

  res.json({ violations: [] })
}

export default handler

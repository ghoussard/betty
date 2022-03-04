import {
  Bankroll,
  BankrollRepository,
  CreateBankrollCommand,
} from '@/back/domain'
import { GenerateUuid } from '@/back/application'

const handleCreateBankroll = async (
  { create }: BankrollRepository,
  generateUuid: GenerateUuid,
  { name }: CreateBankrollCommand
): Promise<void> => {
  const uuid = generateUuid()

  const bankroll: Bankroll = {
    uuid,
    name,
  }

  await create(bankroll)
}

export { handleCreateBankroll }

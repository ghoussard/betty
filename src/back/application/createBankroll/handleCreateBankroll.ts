import {
  Bankroll,
  BankrollRepository,
  CreateBankrollCommand,
} from '@/back/domain'
import { GenerateUuid } from '@/back/application'

const handleCreateBankroll = async (
  { create }: BankrollRepository,
  generateUuid: GenerateUuid,
  { name, capital, currency }: CreateBankrollCommand
): Promise<void> => {
  const uuid = generateUuid()

  const bankroll: Bankroll = {
    uuid,
    name,
    capital,
    currency
  }

  await create(bankroll)
}

export { handleCreateBankroll }

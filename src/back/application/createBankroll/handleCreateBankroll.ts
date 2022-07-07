import {
  Bankroll,
  BankrollRepository,
  CreateBankrollCommand,
} from '@/back/domain'

const handleCreateBankroll = async (
  { create }: BankrollRepository,
  { uuid, name, initialCapital, currency }: CreateBankrollCommand
): Promise<void> => {
  const bankroll: Bankroll = {
    uuid,
    name,
    initialCapital,
    currency,
  }

  await create(bankroll)
}

export { handleCreateBankroll }

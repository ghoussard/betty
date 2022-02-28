import { Bankroll, BankrollRepository } from '@/back/domain'
import { GenerateUuid } from '@/back/application'

type CreateBankrollCommand = {
  name: string,
}

const handleCreateBankroll = async ({create}: BankrollRepository, generateUuid: GenerateUuid, createBankrollCommand: CreateBankrollCommand): Promise<void> => {
  const uuid = generateUuid();

  const bankroll: Bankroll = {
    uuid,
    name: createBankrollCommand.name,
  }

  await create(bankroll);
}

export type { CreateBankrollCommand }
export { handleCreateBankroll }

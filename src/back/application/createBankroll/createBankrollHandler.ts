import { Bankroll } from '@/common/domain/models'
import { addBankroll } from '@/back/infrastructure/command'
import { generateUuid } from '@/back/infrastructure/uuid'

type BankrollData = Omit<Bankroll, 'uuid'>

type CreateBankrollCommand = {
  bankrollData: BankrollData
}

const handleCreateBankroll = async ({
  bankrollData,
}: CreateBankrollCommand): Promise<void> => {
  const bankroll: Bankroll = {
    ...bankrollData,
    uuid: generateUuid(),
  }

  await addBankroll(bankroll)
}

export type { CreateBankrollCommand }
export { handleCreateBankroll }

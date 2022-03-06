import { Bankroll, BankrollRepository } from '@/back/domain'
import { handleCreateBankroll } from '@/back/application'

describe('handle create bankroll', () => {
  test('it creates a bankroll', async () => {
    const name = 'My bankroll'
    const uuid = 'uuid'
    const bankroll: Bankroll = {
      uuid,
      name,
    }

    const generateUuid = jest.fn().mockReturnValue(uuid)

    const bankrollRepository: BankrollRepository = {
      create: jest.fn(),
    }

    const bankrollRepositorySpy = jest.spyOn(bankrollRepository, 'create')

    await handleCreateBankroll(bankrollRepository, generateUuid, { name })

    expect(bankrollRepositorySpy).toHaveBeenCalledWith(bankroll)
  })
})
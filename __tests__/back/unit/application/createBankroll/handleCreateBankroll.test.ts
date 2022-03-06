import { Bankroll, BankrollRepository } from '@/back/domain'
import { handleCreateBankroll } from '@/back/application'

describe('handle create bankroll', () => {
  test('it creates a bankroll', async () => {
    const name = 'My bankroll'
    const uuid = 'uuid'
    const capital = 100
    const currency = 'EUR'
    const bankroll: Bankroll = {
      uuid,
      name,
      capital,
      currency,
    }

    const generateUuid = jest.fn().mockReturnValue(uuid)

    const bankrollRepository: BankrollRepository = {
      create: jest.fn(),
    }

    const bankrollRepositorySpy = jest.spyOn(bankrollRepository, 'create')

    await handleCreateBankroll(bankrollRepository, generateUuid, { name, capital, currency })

    expect(bankrollRepositorySpy).toHaveBeenCalledWith(bankroll)
  })
})

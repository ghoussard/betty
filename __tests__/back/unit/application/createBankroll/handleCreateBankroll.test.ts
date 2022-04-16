import { Bankroll, BankrollRepository } from '@/back/domain'
import { handleCreateBankroll } from '@/back/application/createBankroll/handleCreateBankroll'

describe('handle create bankroll', () => {
  test('it creates a bankroll', async () => {
    const name = 'My bankroll'
    const uuid = 'uuid'
    const initialCapital = 100
    const currency = 'EUR'
    const bankroll: Bankroll = {
      uuid,
      name,
      initialCapital,
      currency,
    }

    const generateUuid = jest.fn().mockReturnValue(uuid)

    const bankrollRepository: BankrollRepository = {
      create: jest.fn(),
    }

    const bankrollRepositorySpy = jest.spyOn(bankrollRepository, 'create')

    await handleCreateBankroll(bankrollRepository, generateUuid, {
      name,
      initialCapital,
      currency,
    })

    expect(bankrollRepositorySpy).toHaveBeenCalledWith(bankroll)
  })
})

import { Bankroll } from '@/back/domain'
import { bankrollRepository } from '@/back/infrastructure'

describe('bankroll repository', () => {
  test('it creates a bankroll', async () => {
    const bankroll: Bankroll = {
      uuid: 'an_uuid',
      name: 'My bankroll',
      capital: 100,
      currency: 'EUR',
    }

    await bankrollRepository.create(bankroll)
    await expect(bankroll).toBeSaved('bankrolls', 'uuid')
  })
})

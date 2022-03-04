import { Bankroll } from '@/back/domain'
import { bankrollRepository, assertDocumentExists } from '@/back/infrastructure'

describe('bankroll repository', () => {
  test('it creates a bankroll', async () => {
    const bankroll: Bankroll = {
      uuid: 'an_uuid',
      name: 'My bankroll',
    }

    await bankrollRepository.create(bankroll)
    const bankrollDocumentExists = await assertDocumentExists(
      'bankrolls',
      'an_uuid'
    )
    expect(bankrollDocumentExists).toBe(true)
  })
})

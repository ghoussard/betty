import { addDocument, BANKROLL_COLLECTION } from '@/back/infrastructure/firebase'
import { Bankroll, BankrollRepository } from '@/back/domain'

const create = async (bankroll: Bankroll): Promise<void> =>
  void addDocument(BANKROLL_COLLECTION, bankroll)

const bankrollRepository: BankrollRepository = {
  create,
}

export { bankrollRepository }

import { Bankroll, BankrollRepository } from '@/back/domain'
import { firestore, BANKROLL_COLLECTION_NAME } from '../firestore'

const bankrollRepository: BankrollRepository = {
  async create(bankroll: Bankroll): Promise<void> {
    await firestore
      .collection(BANKROLL_COLLECTION_NAME)
      .doc(bankroll.uuid)
      .create(bankroll)
  },
}

export { bankrollRepository }

import { addDoc } from 'firebase/firestore'
import { Bankroll, BankrollRepository } from '@/back/domain'
import {
  getCollectionReference,
  BANKROLL_COLLECTION_NAME,
} from '@/back/infrastructure'

const bankrollRepository: BankrollRepository = {
  async create(bankroll: Bankroll): Promise<void> {
    const bankrollCollectionReference = getCollectionReference(
      BANKROLL_COLLECTION_NAME
    )

    await addDoc(bankrollCollectionReference, bankroll)
  },
}

export { bankrollRepository }

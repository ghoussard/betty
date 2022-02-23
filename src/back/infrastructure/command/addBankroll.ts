import { addDoc, collection } from 'firebase/firestore'
import { firestore, BANKROLL_COLLECTION } from '@/back/infrastructure/database'
import { Bankroll } from '@/common/domain/models'

const addBankroll = async (bankroll: Bankroll): Promise<void> =>
  void addDoc(collection(firestore, BANKROLL_COLLECTION), bankroll)

export { addBankroll }

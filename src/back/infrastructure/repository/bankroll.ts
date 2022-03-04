import {
  createDocument,
  Document,
  BANKROLL_COLLECTION_NAME,
} from '@/back/infrastructure'
import { Bankroll, BankrollRepository } from '@/back/domain'

const create = async (bankroll: Bankroll): Promise<void> => {
  const bankrollDocument: Document = {
    id: bankroll.uuid,
    ...bankroll,
  }

  await createDocument(BANKROLL_COLLECTION_NAME, bankrollDocument)
}

const bankrollRepository: BankrollRepository = {
  create,
}

export { bankrollRepository }

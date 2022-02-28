import { Bankroll } from '@/back/domain'

type BankrollRepository = {
  create: (bankroll: Bankroll) => Promise<void>
}

export type { BankrollRepository }

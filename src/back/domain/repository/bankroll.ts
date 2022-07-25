import { Bankroll } from '../model/bankroll'

type BankrollRepository = {
  create: (bankroll: Bankroll) => Promise<void>
}

export type { BankrollRepository }

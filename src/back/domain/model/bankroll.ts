type BankrollIdentifier = string

type Bankroll = {
  uuid: BankrollIdentifier
  name: string
  initialCapital: number
  currency: string
}

export type { Bankroll, BankrollIdentifier }

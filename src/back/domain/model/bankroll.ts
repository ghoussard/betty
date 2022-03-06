type BankrollIdentifier = string

type Bankroll = {
  uuid: BankrollIdentifier
  name: string,
  capital: number,
  currency: string,
}

export type { Bankroll, BankrollIdentifier }

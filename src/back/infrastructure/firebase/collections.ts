const BANKROLL_COLLECTION = 'bankrolls'

const collections = [BANKROLL_COLLECTION] as const

type Collection = typeof collections[number]

export type { Collection }
export { BANKROLL_COLLECTION }

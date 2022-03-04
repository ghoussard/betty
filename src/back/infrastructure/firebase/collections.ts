const BANKROLL_COLLECTION_NAME = 'bankrolls'

const collectionNames = [BANKROLL_COLLECTION_NAME] as const

type CollectionName = typeof collectionNames[number]

export type { CollectionName }
export { collectionNames, BANKROLL_COLLECTION_NAME }

import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  writeBatch,
  DocumentSnapshot,
} from 'firebase/firestore'
import { firestore } from '@/back/infrastructure'

const BANKROLL_COLLECTION_NAME = 'bankrolls'

const collectionNames = [BANKROLL_COLLECTION_NAME] as const

type CollectionName = typeof collectionNames[number]

const getCollectionReference = (
  collectionName: CollectionName
): CollectionReference<DocumentData> => collection(firestore, collectionName)

const clearCollection = async (
  collectionName: CollectionName
): Promise<void> => {
  const collectionReference = getCollectionReference(collectionName)
  const documents = await getDocs(collectionReference)

  const batch = writeBatch(firestore)

  documents.docs.forEach(async (document: DocumentSnapshot) => {
    batch.delete(document.ref)
  })

  await batch.commit()
}

const clearAllCollections = async (): Promise<void> => {
  collectionNames.forEach(async (collectionName: CollectionName) => {
    await clearCollection(collectionName)
  })
}

export type { CollectionName }
export {
  collectionNames,
  BANKROLL_COLLECTION_NAME,
  getCollectionReference,
  clearAllCollections,
}

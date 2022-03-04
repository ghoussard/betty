import { addDoc, collection, DocumentReference } from 'firebase/firestore'
import { Collection } from './collections'
import { firestore } from './firestore'

const addDocument = async (
  collectionName: Collection,
  document: unknown
): Promise<DocumentReference<unknown>> =>
  addDoc(collection(firestore, collectionName), document)

export { addDocument }

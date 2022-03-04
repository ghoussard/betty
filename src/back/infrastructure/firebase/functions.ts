import { deleteApp } from 'firebase/app'
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentReference,
  DocumentData,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  DocumentSnapshot,
  writeBatch,
} from 'firebase/firestore'
import {
  firestore,
  CollectionName,
  collectionNames,
} from '@/back/infrastructure'

type DocumentId = string

type Document = {
  id: DocumentId
  [key: string]: unknown
}

type PartialDocument = Omit<Document, 'id'>

class CollectionReferenceNotFound extends Error {}
class DocumentReferenceNotFound extends Error {}
class DocumentNotFound extends Error {}

const getCollectionReference = (
  collectionName: CollectionName
): CollectionReference<DocumentData> => {
  try {
    return collection(firestore, collectionName)
  } catch (e) {
    throw new CollectionReferenceNotFound()
  }
}

const getDocumentReference = (
  collectionName: CollectionName,
  documentId: DocumentId
): DocumentReference<DocumentData> => {
  try {
    return doc(firestore, collectionName, documentId)
  } catch (e) {
    throw new DocumentReferenceNotFound()
  }
}

const createDocument = async (
  collectionName: CollectionName,
  document: Document
): Promise<void> => {
  const collectionReference = getCollectionReference(collectionName)
  await addDoc(collectionReference, document)
}

const getDocument = async (
  collectionName: CollectionName,
  documentId: DocumentId
): Promise<unknown> => {
  const documentReference = getDocumentReference(collectionName, documentId)
  const documentSnapshot = await getDoc(documentReference)

  if (!documentSnapshot.exists()) {
    throw new DocumentNotFound()
  }

  return documentSnapshot.data()
}

const upsertDocument = async (
  collectionName: CollectionName,
  documentId: DocumentId,
  document: PartialDocument
): Promise<void> => {
  const documentReference = getDocumentReference(collectionName, documentId)
  void (await setDoc(documentReference, document))
}

const deleteDocument = async (
  collectionName: CollectionName,
  documentId: DocumentId
): Promise<void> => {
  const documentReference = getDocumentReference(collectionName, documentId)
  void (await deleteDoc(documentReference))
}

const clearCollection = async (
  collectionName: CollectionName
): Promise<void> => {
  const collectionReference = getCollectionReference(collectionName)
  const documents = await getDocs(collectionReference)

  const batch = writeBatch(firestore)

  documents.docs.forEach(async (document: DocumentSnapshot) => {
    batch.delete(document.ref)
  })

  void (await batch.commit())
}

const clearCollections = async (
  collectionNames: CollectionName[]
): Promise<void> => {
  collectionNames.forEach(async (collectionName: CollectionName) => {
    void (await clearCollection(collectionName))
  })
}

const clearAllCollections = async (): Promise<void> => {
  collectionNames.forEach(async (collectionName: CollectionName) => {
    void (await clearCollection(collectionName))
  })
}

const deleteFirebaseApp = async (): Promise<void> => {
  deleteApp(firestore.app)
}

export type { Document, DocumentId }

export {
  createDocument,
  getDocument,
  upsertDocument,
  deleteDocument,
  clearCollection,
  clearCollections,
  clearAllCollections,
  deleteFirebaseApp,
}

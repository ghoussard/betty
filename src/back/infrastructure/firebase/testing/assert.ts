import { CollectionName, DocumentId, getDocument } from '@/back/infrastructure'

const assertDocumentExists = async (
  collectionName: CollectionName,
  documentId: DocumentId
) => {
  try {
    void (await getDocument(collectionName, documentId))
  } catch (e) {
    return false
  }

  return true
}

export { assertDocumentExists }

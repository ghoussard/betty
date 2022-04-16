import { app, firestore } from './app'

const closeApp = (): Promise<void> => app.delete()

const clearFirestore = async (): Promise<void> => {
  const collections = await firestore.listCollections()
  await Promise.all(
    collections.map(async (collection) => {
      const documents = await collection.listDocuments()
      await Promise.all(documents.map(async (document) => document.delete()))
    })
  )
}

export { closeApp, clearFirestore }

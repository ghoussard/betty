import { CollectionName, firestore } from '@/back/infrastructure'

interface FirestoreMatchers<R = unknown> {
  toBeSaved(collectionName: string, matchProperty: string): Promise<R>
}

declare global {
  namespace jest {
    interface Expect extends FirestoreMatchers {}
    interface Matchers<R> extends FirestoreMatchers<R> {}
    interface InverseAsymmetricMatchers extends FirestoreMatchers {}
  }
}

expect.extend({
  async toBeSaved<Document>(
    received: Document,
    collectionName: CollectionName,
    matchProperty: keyof Document
  ): Promise<jest.CustomMatcherResult> {
    const matchValue = received[matchProperty]

    const querySnapshot = await firestore
      .collection(collectionName)
      .where(matchProperty as string, '==', matchValue)
      .get()

    const pass = 0 < querySnapshot.docs.length

    const message = pass
      ? () => `Document is saved in ${collectionName} collection`
      : () =>
          `Document is not saved in ${collectionName} collection (trying to match property: ${matchProperty} with value: ${matchValue})`

    return {
      pass,
      message,
    }
  },
})

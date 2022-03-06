import { getDocs, query, where } from 'firebase/firestore'
import { CollectionName, getCollectionReference } from '@/back/infrastructure'

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
  async toBeSaved(
    received: unknown,
    collectionName: CollectionName,
    matchProperty: string
  ): Promise<jest.CustomMatcherResult> {
    const collectionReference = getCollectionReference(collectionName)
    // @ts-ignore
    const matchValue = received[matchProperty]

    const searchQuery = query(
      collectionReference,
      where(matchProperty, '==', matchValue)
    )
    const querySnapshot = await getDocs(searchQuery)

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

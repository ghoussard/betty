import { env } from 'process'
import { ServiceAccount } from 'firebase-admin'

const shouldUseFirestoreEmulator = (): boolean =>
  '' !== (env.FIRESTORE_EMULATOR_HOST ?? '')

const getFirebaseProjectId = (): string => env.FIREBASE_PROJECT_ID ?? ''

const getFirebaseServiceAccount = (): ServiceAccount => {
  const projectId = getFirebaseProjectId()
  const clientEmail = env.FIREBASE_CLIENT_EMAIL ?? ''
  const privateKey = (env.FIREBASE_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')

  return {
    projectId,
    clientEmail,
    privateKey,
  }
}

export {
  shouldUseFirestoreEmulator,
  getFirebaseProjectId,
  getFirebaseServiceAccount,
}

import * as admin from 'firebase-admin'
import {
  getFirebaseServiceAccount,
  getFirebaseProjectId,
  shouldUseFirestoreEmulator,
} from '../environments'

const getAppOptions = (): admin.AppOptions => {
  if (shouldUseFirestoreEmulator()) {
    return {
      projectId: getFirebaseProjectId(),
    }
  } else {
    const serviceAccount = getFirebaseServiceAccount()

    return {
      credential: admin.credential.cert(serviceAccount),
    }
  }
}

const appOptions = getAppOptions()

const app = admin.initializeApp(appOptions)

const firestore = app.firestore()

export { app, firestore }

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

const getApp = (): admin.app.App => {
  if (0 === admin.apps.length) {
    admin.initializeApp(getAppOptions())
  }

  return admin.app()
}

const app = getApp()

const firestore = app.firestore()

export { app, firestore }

import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import {
  getFirebaseOptions,
  getFirebaseUseEmulator,
  getFirebaseEmulatorHost,
  getFirebaseEmulatorPort,
} from '@/back/infrastructure/environments'

const app = initializeApp(getFirebaseOptions())

const firestore = getFirestore(app)

if (getFirebaseUseEmulator()) {
  connectFirestoreEmulator(
    firestore,
    getFirebaseEmulatorHost(),
    getFirebaseEmulatorPort()
  )
}

export { firestore }

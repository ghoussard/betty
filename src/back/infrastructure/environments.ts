import { env } from 'process'
import { FirebaseOptions } from 'firebase/app'

const getFirebaseUseEmulator = (): boolean =>
  '1' === (env.FIREBASE_USE_EMULATOR ?? '0')
const getFirebaseEmulatorHost = (): string => env.FIREBASE_EMULATOR_HOST ?? ''
const getFirebaseEmulatorPort = (): number =>
  parseInt(env.FIREBASE_EMULATOR_PORT ?? '0')

const getFirebaseOptions = (): FirebaseOptions => {
  if (getFirebaseUseEmulator()) {
    return {
      projectId: env.FIREBASE_PROJECT_ID ?? '',
    }
  }

  return {
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    projectId: env.FIREBASE_PROJECT_ID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.FIREBASE_APP_ID,
  }
}

export {
  getFirebaseUseEmulator,
  getFirebaseEmulatorHost,
  getFirebaseEmulatorPort,
  getFirebaseOptions,
}

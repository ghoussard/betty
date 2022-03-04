import {
  getFirebaseUseEmulator,
  getFirebaseOptions,
  getFirebaseEmulatorHost,
  getFirebaseEmulatorPort,
} from '@/back/infrastructure'
import { env } from 'process'

const setEnvVar = (key: string, value: string): void => {
  env[key] = value
}

describe('environments', () => {
  const INITIAL_ENV = env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...INITIAL_ENV }
  })

  afterAll(() => {
    process.env = INITIAL_ENV
  })

  test('it returns the firebase options', () => {
    setEnvVar('FIREBASE_API_KEY', 'apiKey')
    setEnvVar('FIREBASE_AUTH_DOMAIN', 'authDomain')
    setEnvVar('FIREBASE_PROJECT_ID', 'projectId')
    setEnvVar('FIREBASE_STORAGE_BUCKET', 'storageBucket')
    setEnvVar('FIREBASE_MESSAGING_SENDER_ID', 'messagingSenderId')

    expect(getFirebaseOptions()).toEqual({
      apiKey: 'apiKey',
      authDomain: 'authDomain',
      projectId: 'projectId',
      storageBucket: 'storageBucket',
      messagingSenderId: 'messagingSenderId',
    })
  })

  test('it returns firebase options when use emulator is true', () => {
    setEnvVar('FIREBASE_USE_EMULATOR', '1')
    setEnvVar('FIREBASE_PROJECT_ID', 'betty-test')

    expect(getFirebaseUseEmulator()).toBe(true)
    expect(getFirebaseOptions()).toEqual({
      projectId: 'betty-test',
    })
  })

  test('it returns firebase emulator host and port', () => {
    setEnvVar('FIREBASE_EMULATOR_HOST', 'localhost')
    setEnvVar('FIREBASE_EMULATOR_PORT', '8080')

    expect(getFirebaseEmulatorHost()).toBe('localhost')
    expect(getFirebaseEmulatorPort()).toBe(8080)
  })
})

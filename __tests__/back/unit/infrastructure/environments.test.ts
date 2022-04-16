import {
  getFirebaseServiceAccount,
  shouldUseFirestoreEmulator,
} from '@/back/infrastructure/environments'
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

  test('it returns firebase service account', () => {
    setEnvVar('FIREBASE_PROJECT_ID', 'projectId')
    setEnvVar('FIREBASE_CLIENT_EMAIL', 'clientEmail')
    setEnvVar(
      'FIREBASE_PRIVATE_KEY',
      '-----BEGIN PRIVATE KEY-----\nmyprivatekey\n-----END PRIVATE KEY-----\n'
    )

    expect(getFirebaseServiceAccount()).toEqual({
      projectId: 'projectId',
      clientEmail: 'clientEmail',
      privateKey:
        '-----BEGIN PRIVATE KEY-----\nmyprivatekey\n-----END PRIVATE KEY-----\n',
    })
  })

  test('it say if we should use the firebase emulator', () => {
    setEnvVar('FIRESTORE_EMULATOR_HOST', 'localhost:8080')

    expect(shouldUseFirestoreEmulator()).toBe(true)
  })
})

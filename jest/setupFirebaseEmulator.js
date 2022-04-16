const { env } = require('process')

env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
env.FIREBASE_PROJECT_ID = 'test'

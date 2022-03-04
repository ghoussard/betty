const { env } = require('process')

env.FIREBASE_USE_EMULATOR = '1'
env.FIREBASE_EMULATOR_HOST = 'localhost'
env.FIREBASE_EMULATOR_PORT = '8080'
env.FIREBASE_PROJECT_ID = 'test'


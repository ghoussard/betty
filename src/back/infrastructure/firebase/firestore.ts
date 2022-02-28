import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getFirebaseOptions } from '@/back/infrastructure/environments'

const firebaseOptions = getFirebaseOptions()
const app = initializeApp(firebaseOptions)

const firestore = getFirestore(app)

export { firestore }

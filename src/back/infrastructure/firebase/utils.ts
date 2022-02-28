import { addDoc, collection, DocumentReference } from "firebase/firestore"
import { Collection } from "./collections"
import { firestore } from "./firestore"

const addDocument = async (collectionName: Collection, document: any): Promise<DocumentReference<any>> => 
    addDoc(collection(firestore, collectionName), document)

export { addDocument }

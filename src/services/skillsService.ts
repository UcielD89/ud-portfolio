import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION_NAME = "skills";

export const getSkills = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
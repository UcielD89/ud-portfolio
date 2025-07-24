import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION_NAME = "about_Us";

export const getAboutUs = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION_NAME = "projects";


export const getProjects = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProjectsBySlug = async (slug: string) => {
  const q = query(
    collection(db, COLLECTION_NAME),
    where("slug", "==", slug),
    limit(1)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } else {
    return null;
  }
};
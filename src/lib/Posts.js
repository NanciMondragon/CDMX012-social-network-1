import {
  collection, addDoc, db, getDocs,
} from './firebase.js';

// Add a new document with a generated id.
export const posting = async (textBox) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    description: textBox,
  });
  // console.log('Document written with ID: ', docRef.id);
};

export const readPost = async (textBox) => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
};

import {
  collection, addDoc, db, query, orderBy, serverTimestamp, auth,
} from './firebase.js';

// Add a new document with a generated id.
export const posting = async (textBox) => {
  await addDoc(collection(db, 'posts'), {
    description: textBox,
    user: auth.currentUser.email,
    likes: [],
    createdAt: serverTimestamp(),
    uid: auth.currentUser.uid,
  });
};

export const getPostQuery = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));

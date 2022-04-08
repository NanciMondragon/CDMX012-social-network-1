import {
  collection, addDoc, db,query, orderBy,serverTimestamp
} from './firebase.js';




// Add a new document with a generated id.
export const posting = async (textBox) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    description: textBox,
    createdAt: serverTimestamp()
  });
    //console.log('Document written with ID: ', docRef.id);
};


export const getPostQuery = query(collection(db, "posts"), orderBy("createdAt","desc"));

import { getDoc, doc, db, updateDoc } from '../../lib/firebase.js';

export const editPosts = (id) => getDoc(doc(db,'posts',id));

export const updatePost = (id, newFields) => updateDoc(doc(db,'posts',id),newFields);
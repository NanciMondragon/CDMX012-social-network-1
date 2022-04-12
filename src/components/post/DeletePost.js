
import { db, doc, deleteDoc } from '../../lib/firebase.js';
 
export const deletePost = async (id) => await deleteDoc(doc(db, 'posts', id));
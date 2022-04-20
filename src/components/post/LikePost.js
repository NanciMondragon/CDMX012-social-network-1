import {
  getDoc, doc, collection, db, user, updateDoc, auth,
  arrayUnion, arrayRemove,
} from '../../lib/firebase.js';
import { editPosts, updatePost } from './EditPost.js';

export async function likePost(id) {
  // const auth = getAuth();
  const data = getDoc(doc(db,'posts',id));
  console.log(data);

  // const giveLikes = doc.data().likes;
  /* console.log(giveLikes);
  const givingLike = giveLikes.find((like) => like.email === user.email);
  // console.log(arrLikes);

  if (givingLike) {
    const postRef = doc(db, 'posts', id);
    await updateDoc(postRef, {
      likes: arrayRemove({ email: user }),
    });
  } else {
    const postRef = doc(db, 'posts', id);
    await updateDoc(postRef, {
      likes: arrayUnion({ email: user }),
    });
  } */
}

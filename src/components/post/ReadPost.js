import { getPostQuery } from '../../lib/Posts.js';
import { onSnapshot } from '../../lib/firebase.js';
import { deletePost } from './DeletePost.js';

export const ReadPost = () => {
  const readPostDiv = document.createElement('div');
  // Para darle una clase al div
  readPostDiv.className = 'readPostClass';
  readPostDiv.setAttribute('id', 'readPost');

  const emptyContainer = document.createElement('section');

  onSnapshot(getPostQuery, (querySnapshot) => {
    emptyContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const dataPost = (doc.data().description);
      const getId = doc.id;
      const postContainer = `<section class = "container">
        <textarea class='textBoxRead'> ${dataPost}</textarea>
        <section class='iconBox'>
        <img class="iconLike" src='../assets/like.png'>
        <img class="iconEdit" src='../assets/edit.png'>
        <img class="iconDelete" src='../assets/delete.png' data-id="${getId}">
        </section>
        </section>`;
      emptyContainer.innerHTML += postContainer;

      const buttonDelete = emptyContainer.querySelectorAll('.iconDelete');
      buttonDelete.forEach((deletePostDoc) => {
        deletePostDoc.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
    });
  });

  readPostDiv.append(
    emptyContainer,
  );

  return readPostDiv;
};

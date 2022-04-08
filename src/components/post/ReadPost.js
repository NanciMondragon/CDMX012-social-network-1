import {getPostQuery} from '../../lib/Posts.js'
import { onSnapshot } from '../../lib/firebase.js';

export const ReadPost = () => {
  const readPostDiv = document.createElement('div');
  // Para darle una clase al div
  readPostDiv.className = 'readPostClass';
  readPostDiv.setAttribute('id', 'readPost');

  const emptyContainer =document.createElement('section')

  onSnapshot(getPostQuery, (querySnapshot) => {
    emptyContainer.innerHTML='';    
    querySnapshot.forEach((doc) => {
      let dataPost =(doc.data().description);
        let postContainer = `<section class = "container">
        <textarea class='textBoxRead'> ${dataPost}</textarea>
        <section class='iconBox'>
        <img class="iconRead" src='../assets/like.png'>
        <img class="iconRead" src='../assets/edit.png'>
        <img class="iconRead" src='../assets/delete.png'>
        </section>
        </section>`;
        emptyContainer.innerHTML +=postContainer;
    })})
 
  readPostDiv.append(
  emptyContainer,
  );
  
  return readPostDiv;
};

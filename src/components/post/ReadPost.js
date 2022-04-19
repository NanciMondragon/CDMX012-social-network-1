import { getPostQuery } from '../../lib/Posts.js';
import { onSnapshot, getAuth } from '../../lib/firebase.js';
import { deletePost } from './DeletePost.js';
import { onNavigate } from '../../main.js';
import { editPosts, updatePost } from './EditPost.js';

let editStatus = false;
let id ='';

export const ReadPost = () => {
  const readPostDiv = document.createElement('div');
  // Para darle una clase al div
  readPostDiv.className = 'readPostClass';
  readPostDiv.setAttribute('id', 'readPost');

  const emptyContainer = document.createElement('section');

  onSnapshot(getPostQuery, (querySnapshot) => {
    const auth = getAuth();
    emptyContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const dataPost = (doc.data().description);
      const getId = doc.id;
      const currentUserEmail = auth.currentUser.email;
      const getEmail = doc.data().user;
      // console.log(getId);
      const isMyPost = currentUserEmail === getEmail;
      let postContainer;
      //console.log(currentUserEmail, getEmail)
      if (isMyPost) {
        postContainer = `<section class = "container">
          <h5 class="textMail"> ${getEmail} </h5>
          <textarea class='textBoxRead'> ${dataPost}</textarea>
          <section class='iconBox'>
          <img class="iconLike" src='../assets/like.png'>
          <img class="iconEdit" src='../assets/edit.png'data-id="${getId}">
          <img class="iconDelete" src='../assets/delete.png' data-id="${getId}">
          </section>
          </section>`;
      } else {
        postContainer = `<section class = "container">
        <h5 class="textMail"> ${getEmail} </h5>
        <textarea class='textBoxRead'> ${dataPost}</textarea>
        <section class='iconBox'>
        <img class="iconLike" src='../assets/like.png'>
        </section>
        </section>`;
      }
      emptyContainer.innerHTML += postContainer;

      });
      
      const textBoxRR = document.getElementById('textBox');
      const UpdateButton = document.getElementById('btnUpdate');
      const sharingButton = document.getElementById('btnshare');

      const buttonEdit = emptyContainer.querySelectorAll('.iconEdit');
      buttonEdit.forEach((btn)=> {
        btn.addEventListener('click',async(e)=>{
          //console.log(e.target.dataset.id);
          editStatus = true;
          id = e.target.dataset.id;
          console.log(id);

          const doc = await editPosts(e.target.dataset.id);
          console.log(doc);
          const onePost = doc.data();
          textBoxRR.value = onePost.description;
          
        })
      });
      UpdateButton.addEventListener('click', () => {
        if (editStatus===true){
          updatePost( id,{
          description : textBoxRR.value,
        });
      } else{
        console.log('En este momento no se está editando')
      }
      });

      const buttonDelete = emptyContainer.querySelectorAll('.iconDelete');
      buttonDelete.forEach((deletePostDoc) => {
        deletePostDoc.addEventListener('click', (e) => {
          e.preventDefault();
          Swal.fire({
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8B2C45',
            cancelButtonColor: '#8B2C45',
            cancelButtonText: 'Cancelar',
            confirmButtonText: '¡Si,eliminar!',
            width: '270px',
          })
            .then((result) => {
              if (result.isConfirmed) {
                deletePost(e.target.dataset.id);
                Swal.fire(
                  // '¡Borrado!',
                  'Tu experiencia de viaje ha sido eliminada con éxito.',
                );
                onNavigate('/timeline');
              }
            });
        });
      });
    });
  

  readPostDiv.append(
    emptyContainer,
  );

  return readPostDiv;
};


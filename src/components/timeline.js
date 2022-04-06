// SPA Muro de app
import { CreatePost } from './post/CreatePost.js';

export const Timeline = () => {
  const timelineDiv = document.createElement('div');
  const postTextDiv = document.createElement('div');

  // Para darle una clase al div
  timelineDiv.className = 'HomeDiv';
  timelineDiv.setAttribute('id', 'timelineDiv');
  postTextDiv.setAttribute('id', 'postTextDiv');

  const nodoH1 = document.createElement('h1');
  nodoH1.textContent = 'Triptime';
  timelineDiv.replaceChildren(
    nodoH1,
  );

  timelineDiv.append(CreatePost());
  
  /* const buttonLogOut = document.createElement('img');
    //buttonLoginGoogle.className = 'buttonHome';
    buttonLogOut.setAttribute =('id','buttonLogOut');
    buttonLogOut.classList.add('iconG');
    buttonLogOut.src='../assets/google.jpg'
    buttonLoginGoogle.addEventListener('click', (e) => {
    loginGoogle(provider);
    });

    buttonShare.addEventListener('click', (e) => {
      loginGoogle(provider);
    });
    */

  return timelineDiv;
};

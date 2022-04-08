// SPA Muro de app
import { CreatePost } from './post/CreatePost.js';
import { ReadPost } from './post/ReadPost.js';
import { logOut } from '../lib/Auth.js';

export const Timeline = () => {
  const timelineDiv = document.createElement('div');
  const postTextDiv = document.createElement('div');

  // Para darle una clase al div
  timelineDiv.className = 'HomeDiv';
  timelineDiv.setAttribute('id', 'timelineDiv');
  postTextDiv.setAttribute('id', 'postTextDiv');

  const buttonLogOut = document.createElement('img');
    buttonLogOut.setAttribute =('id','buttonLogOut');
    buttonLogOut.classList.add('iconLogOut');
    buttonLogOut.src='../assets/logOut.png'
    buttonLogOut.addEventListener('click', () => {
      logOut();
   });
   
  const nodoH1 = document.createElement('h1');
  nodoH1.textContent = 'Triptime';
  timelineDiv.append(
    buttonLogOut,
    nodoH1,
  );

  timelineDiv.append(CreatePost());
  timelineDiv.append(ReadPost());
   
   
  return timelineDiv;
};

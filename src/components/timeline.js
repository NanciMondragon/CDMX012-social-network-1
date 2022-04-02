// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';




//SPA Muro de app
export const timeline = () => {
    const timelineDiv = document.createElement('div');
    // Para darle una clase al div
    timelineDiv.className = 'HomeDiv';
    const nodoH1 = document.createElement('h1');
    nodoH1.textContent = 'Triptime';
    
    const textBox = document.createElement('textarea');
    textBox.className = 'textBox';
    textBox.placeholder = 'Escribe aqui tu experiencia';
    textBox.rows ='8';
    textBox.cols = '42';


    const buttonShare = document.createElement('button');
    buttonShare.className = 'buttonTime';
    buttonShare.textContent='Compartir';

    /*const buttonLogOut = document.createElement('img');
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


    timelineDiv.append( nodoH1, textBox, buttonShare );
    return timelineDiv;
  };
  
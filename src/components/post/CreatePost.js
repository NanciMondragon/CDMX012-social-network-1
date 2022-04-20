import { posting } from '../../lib/Posts.js';

export const CreatePost = () => {
  const createPostDiv = document.createElement('div');
  // Para darle una clase al div
  createPostDiv.className = 'postDivClass';
  createPostDiv.setAttribute('id', 'createPost');

  const textBox = document.createElement('textarea');
  textBox.className = 'textBox';
  textBox.setAttribute('id', 'textBox');
  textBox.placeholder = 'Escribe aqui tu experiencia';
  textBox.maxLength = '400';
  textBox.setAttribute = ('required', '');
  textBox.rows = '8';
  textBox.cols = '42';

  const buttonShare = document.createElement('button');
  buttonShare.setAttribute('id', 'btnshare');
  buttonShare.className = 'buttonTime';
  buttonShare.textContent = 'Compartir';

  const buttonUpdating = document.createElement('button');
  buttonUpdating.setAttribute('id','btnUpdate');
  buttonUpdating.className = 'buttonUpdt';
  buttonUpdating.textContent = 'Actualizar';

  buttonShare.addEventListener('click', () => {
    const textPost = document.getElementById('textBox').value;
    // const inputMail = document.getElementById('inputMail').value;

    posting(textPost);

    // console.log(textPost);
  });

  createPostDiv.append(
    textBox,
    buttonShare,
    buttonUpdating,
  );
  return createPostDiv;
};

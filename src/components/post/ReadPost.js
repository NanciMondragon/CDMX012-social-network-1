
export const ReadPost = () => {
  const readPostDiv = document.createElement('div');
  // Para darle una clase al div
  readPostDiv.className = 'HomeDiv';
  readPostDiv.setAttribute('id', 'readPost');

  const textBox = document.createElement('textarea');
  textBox.className = 'textBox';
  textBox.setAttribute('id', 'textBox');
  textBox.placeholder = 'Escribe aqui tu experiencia';
  textBox.rows = '8';
  textBox.cols = '42';

 buttonShare.addEventListener('click', () => {
    const textPost = document.getElementById('textBox').value;
    posting(textPost);
    console.log(textPost);
  });

  createPostDiv.append(
    textBox,
    buttonShare,
  );
  return readPostDiv;
};


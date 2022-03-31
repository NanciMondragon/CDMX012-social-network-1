// eslint-disable-next-line import/no-cycle
// SPA Crear cuenta

import { onNavigate } from '../main.js';
import { createUser } from '../lib/Auth.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'HomeDiv';
  const nodoH1 = document.createElement('h1');
  const nodoH2 = document.createElement('h2');

  const inputName = document.createElement('input');
  inputName.className = 'inputName';
  inputName.setAttribute('id', 'idName');
  inputName.placeholder = 'Ingresa tu Nombre';

  const inputLast = document.createElement('input');
  inputLast.className = 'inputName';
  inputLast.setAttribute('id', 'idLast');
  inputLast.placeholder = 'Ingresa tu Apellido';

  const inputMail = document.createElement('input');
  inputMail.className = 'inputName';
  inputMail.setAttribute('id', 'idMail');
  inputMail.placeholder = 'Ingresa tu Email';

  const inputPassword = document.createElement('input');
  inputPassword.className = 'inputName';
  inputPassword.setAttribute('id', 'idPassword');
  inputPassword.placeholder = 'Ingresa tu Contraseña';
  inputPassword.setAttribute('type', 'password');

  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'buttonHome';
  buttonRegister.setAttribute('id', 'buttonRegister');

  buttonRegister.addEventListener('click', (e) => {
    const idMail = document.getElementById('idMail').value;
    const idPassword = document.getElementById('idPassword').value;
    const idName = document.getElementById('idName').value;
    const idLast = document.getElementById('idLast').value;

    createUser(idMail, idPassword, idName, idLast);
  });

  const buttonHome = document.createElement('button');
  buttonHome.className = 'buttonHome';

  inputName.textContent = 'Nombre';
  inputLast.textContent = 'Apellido';
  inputMail.textContent = 'Correo Electronico';
  inputPassword.textContent = 'Contraseña';
  buttonRegister.textContent = 'Registrarse';

  buttonHome.textContent = 'Regresa a Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  nodoH1.textContent = 'Triptime';
  nodoH2.textContent = 'Comparte experiencias auténticas de viaje';

  HomeDiv.append(nodoH1, nodoH2, inputName, inputLast, inputMail, inputPassword, buttonRegister, buttonHome);
  return HomeDiv;
};



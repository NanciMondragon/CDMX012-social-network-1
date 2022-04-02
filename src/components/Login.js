// eslint-disable-next-line import/no-cycle
// SPA Inicio de Sesión

import { onNavigate } from '../main.js';
import { loginUser } from '../lib/LoginFirebase.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'HomeDiv';
  const nodoH1 = document.createElement('h1');
  const nodoH2 = document.createElement('h2');

  const inputMail = document.createElement('input');
  inputMail.className = 'inputName';
  inputMail.setAttribute('id', 'idMailLogin');
  inputMail.placeholder = 'Ingresa tu Email';
  inputMail.setAttribute('type', 'email');

  const inputPassword = document.createElement('input');
  inputPassword.className = 'inputName';
  inputPassword.setAttribute('id', 'idPasswordLogin');
  inputPassword.placeholder = 'Ingresa tu Contraseña';
  inputPassword.setAttribute('type', 'password');

  // const nodoH6 = document.createElement('h6');
  const buttonSesion = document.createElement('button');
  buttonSesion.className = 'buttonHome';
  buttonSesion.setAttribute('id', 'buttonSesion');

  buttonSesion.addEventListener('click', (e) => {
    const idMailLogin = document.getElementById('idMailLogin').value;
    const idPasswordLogin = document.getElementById('idPasswordLogin').value;
    loginUser(idMailLogin, idPasswordLogin)
      .then((userCredential) => {
        const user = userCredential;
          swal({
          title: 'Bienvenidx a Triptime',
          text: 'Puedes acceder a compartir tus experiencias',
          icon: 'success',
          button: 'Continuar',
        });
  
        // aqui va el onNavigate va al muro
        onNavigate('/timeline');

      })
      .catch((error) => {
        const errorCode = error.code;
        //console.log(errorCode);
        if (errorCode === 'auth/invalid-email') {
          swal({
            title: 'Email inválido.',
            text: 'Formato válido: ejemplo@hotmail.com',
            icon: 'error',
            button: 'Aceptar',
          });
        } else if (errorCode === 'auth/wrong-password') {
          swal({
            title: 'Contraseña inválida.',
            text: 'Ingresa mínimo 6 caracteres',
            icon: 'error',
            button: 'Aceptar',
          });
        } else if (errorCode === 'auth/missing-email') {
          swal({
            title: 'Campo vacío',
            text: 'Ingresa un correo con formato válido: ejemplo@hotmail.com',
            icon: 'error',
            button: 'Aceptar',
          });
        } else if (errorCode === 'auth/internal-error') {
          swal({
            title: 'Campo vacío',
            text: 'Ingresa una contraseña de mínimo 6 caracteres',
            icon: 'error',
            button: 'Aceptar',
          });
        } else if (errorCode === 'auth/user-not-found') {
          swal({
            title: 'Usuario no encontrado',
            text: 'Realiza registro',
            icon: 'error',
            button: 'Aceptar',
          });
        } 

      });
  });

  const buttonHome = document.createElement('img');
  buttonHome.classList.add('logoHome');
  buttonHome.src ='../assets/HomeIcon.png';

  const footer = document.createElement('footer');
  footer.className = 'footer';
  const purple = document.createElement('div');
  purple.className = 'purple';
  inputMail.textContent = 'Correo Electronico';
  inputPassword.textContent = 'Contraseña';
  buttonSesion.textContent = 'Iniciar Sesión';

  //buttonHome.textContent = 'Regresa a Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  nodoH1.textContent = 'Triptime';
  nodoH2.textContent = 'Comparte experiencias auténticas de viaje';
  // nodoH6.textContent = '¿Olvidaste tu contraseña?';

  HomeDiv.append(
    nodoH1,
    nodoH2,
    inputMail,
    inputPassword,
    // nodoH6,
    buttonSesion,
    buttonHome,
    footer,
    purple,
  );
  return HomeDiv;
};

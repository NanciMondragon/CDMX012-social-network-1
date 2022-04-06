import { getAuth, createUserWithEmailAndPassword } from './firebase.js';

const auth = getAuth();

export const createUser = (email, password, name, lastName) => {
  createUserWithEmailAndPassword(auth, email, password, name, lastName)
    .then((userCredential) => {
      const user = userCredential;
      /* swal({
        title: 'Usuario registrado',
        text: 'Puedes acceder a compartir tus experiencias',
        icon: 'success',
        button: 'Continuar',
      }); */
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      if (name === '') {
        swal({
          title: 'Campo vacío',
          text: 'Ingresa un nombre válido',
          icon: 'error',
          button: 'Aceptar',
        });
      } else if (lastName === '') {
        swal({
          title: 'Campo vacío',
          text: 'Ingresa un apellido válido',
          icon: 'error',
          button: 'Aceptar',
        });
      } else if (errorCode === 'auth/invalid-email') {
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
      } else if (errorCode === 'auth/email-already-in-use') {
        swal({
          title: 'Usuario ya registrado',
          text: 'Ingresa otro correo',
          icon: 'error',
          button: 'Aceptar',
        });
      }
    });
};

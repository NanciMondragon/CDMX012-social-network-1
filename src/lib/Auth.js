import { getAuth, createUserWithEmailAndPassword } from './firebase.js';

const auth = getAuth();

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);

      alert('Usuario Creado');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(error);
      alert('No se pudo registrar el usuario');
      // ..
    });
};
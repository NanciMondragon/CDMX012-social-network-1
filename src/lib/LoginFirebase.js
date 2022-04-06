// Sincronizando firebase con usuarios creados y cuentas de google

import {
  getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
} from './firebase.js';

const auth = getAuth();

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const provider = new GoogleAuthProvider();

export const loginGoogle = (provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};


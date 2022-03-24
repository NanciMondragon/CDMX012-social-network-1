// aqui exportaras las funciones que necesites
// eslint-disable-next-line import/no-cycle

/* export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
 */
/* Bosquejo de Firebase */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

export {
  initializeApp, getAuth, createUserWithEmailAndPassword, doc, setDoc, signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup,
};
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyAOt2bNFkUBW3MtMOaFpdrZop1_CpNd7Qg',
  authDomain: 'triptime-a3a94.firebaseapp.com',
  projectId: 'triptime-a3a94',
  storageBucket: 'triptime-a3a94.appspot.com',
  messagingSenderId: '961267314788',
  appId: '1:961267314788:web:a39b1869b91dc66c8eaf71',
  measurementId: 'G-XD1NDWN59K',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
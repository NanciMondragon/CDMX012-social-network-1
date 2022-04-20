// eslint-disable-next-line import/no-cycle

/* Bosquejo de Firebase */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

export {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
  signOut,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
};

// https://firebase.google.com/docs/web/setup#available-libraries

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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const user = auth.currentUser;

// Initialize Firestore
export const db = getFirestore(app);

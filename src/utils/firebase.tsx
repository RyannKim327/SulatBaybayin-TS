import { FirebaseOptions } from "firebase/app";
import firebase from "firebase/compat/app";
import { addDoc, getFirestore, collection, getDocs } from "firebase/firestore";

const projID = "sulatbaybayin-website-ts";

const firebaseConfig: FirebaseOptions = {
  apiKey: `AIzaSyAQz21mkkIHZwgsnGhqJhJxGGN_6nBTGKY`,
  authDomain: `${projID}.firebaseapp.com`,
  projectId: projID,
  storageBucket: `${projID}.appspot.com`,
  messagingSenderId: "685011670583",
  appId: "1:685011670583:web:192fd1451d9041939511b2",
  measurementId: "G-LEXEWNQ8C8",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const authentication = firebase.auth;

export { app, authentication, db, addDoc, collection, getDocs };

import { FirebaseOptions, initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { addDoc, getFirestore, collection, getDocs } from "firebase/firestore";

interface fbase {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: number;
  appId: string;
  measurementID: string;
}

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection, getDocs };

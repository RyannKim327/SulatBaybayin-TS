import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: process?.env.APIKEY,
  authDomain: process?.env.AUTH_DOMAIN,
  projectId: process?.env.PROJECT_ID,
  storageBucket: process?.env.STORAGE_BUCKET,
  messagingSenderId: process?.env.MSG_SENDER_ID,
  measurementID: process?.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = firebase.firestore(app);


export default db;

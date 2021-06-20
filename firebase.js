import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKVPhYzhkIieChZMPzKO4DLg4qOGri3wc",
  authDomain: "nextfacebook-cda90.firebaseapp.com",
  projectId: "nextfacebook-cda90",
  storageBucket: "nextfacebook-cda90.appspot.com",
  messagingSenderId: "707050138221",
  appId: "1:707050138221:web:e8a339bb5c64dfea7d2d64",
  measurementId: "G-RS31K6031Y",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

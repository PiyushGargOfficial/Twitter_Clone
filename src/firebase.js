import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDME0bPU5o5KITRwQ52qkHBlYPx2GciQlk",
  authDomain: "twitterclone-c81a7.firebaseapp.com",
  projectId: "twitterclone-c81a7",
  storageBucket: "twitterclone-c81a7.appspot.com",
  messagingSenderId: "56178063669",
  appId: "1:56178063669:web:1c837f6763030744c9f47c",
  measurementId: "G-YSETRXWLPH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

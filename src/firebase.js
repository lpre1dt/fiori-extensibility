// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuUb05tb8T8JG2PD-lQgHbBbAGcctyIv4",
  authDomain: "fiori-extensibility.firebaseapp.com",
  projectId: "fiori-extensibility",
  storageBucket: "fiori-extensibility.appspot.com",
  messagingSenderId: "557892382894",
  appId: "1:557892382894:web:9e7ebc6dc0b2f225cffd3f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

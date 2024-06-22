// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0vMoCFNb_ZxKZc5lp_Be4RXryclyO8HM",
  authDomain: "aiobc-48ac1.firebaseapp.com",
  projectId: "aiobc-48ac1",
  storageBucket: "aiobc-48ac1.appspot.com",
  messagingSenderId: "896580345427",
  appId: "1:896580345427:web:2850062eae61e1a18770a6",
  measurementId: "G-2HKLSWQ89E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore=getFirestore(app)

export const auth=getAuth(app)

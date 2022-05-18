// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5XXsbm7LBtKVcZmbCeezzhWMvj1iSlR0",
  authDomain: "todo-app-c6190.firebaseapp.com",
  projectId: "todo-app-c6190",
  storageBucket: "todo-app-c6190.appspot.com",
  messagingSenderId: "696332111715",
  appId: "1:696332111715:web:17455f9314998f48f6cd56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
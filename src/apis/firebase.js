// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAkO21rk3fjFmjJGX5ePuy77SbwAyl7mY",
  authDomain: "streambase-453be.firebaseapp.com",
  projectId: "streambase-453be",
  storageBucket: "streambase-453be.appspot.com",
  messagingSenderId: "1042709472465",
  appId: "1:1042709472465:web:07deba9ff1190feedcd1f0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export let auth= getAuth(firebase)
export default firebase 
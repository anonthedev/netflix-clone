// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLLdTmnOBjKxvts71skSU8_DAgvuGLHLM",
  authDomain: "netflix-clone-498b0.firebaseapp.com",
  projectId: "netflix-clone-498b0",
  storageBucket: "netflix-clone-498b0.appspot.com",
  messagingSenderId: "817985094770",
  appId: "1:817985094770:web:50c376995b2fbb70342eeb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth =  getAuth();
const provider = new GoogleAuthProvider();

// const storage =  storage();

export { auth, provider, signInWithPopup, GoogleAuthProvider };
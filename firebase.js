// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmOANBuliZnpmC3HXOC3hwYOoNz2wPzK8",
  authDomain: "uber-clone-fde3d.firebaseapp.com",
  projectId: "uber-clone-fde3d",
  storageBucket: "uber-clone-fde3d.appspot.com",
  messagingSenderId: "931992936325",
  appId: "1:931992936325:web:e9a05a9a0ca327b468eeec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider  = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth} 
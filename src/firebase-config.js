// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL1UKqJfxWGbMxWmKcPAquVEJlHlZUxZQ",
  authDomain: "blog-post-46881.firebaseapp.com",
  projectId: "blog-post-46881",
  storageBucket: "blog-post-46881.appspot.com",
  messagingSenderId: "438940731476",
  appId: "1:438940731476:web:9b4eb777825ef1943b05c1",
  measurementId: "G-E5BS0YD9XY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase database
export const db = getFirestore(app);
// authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

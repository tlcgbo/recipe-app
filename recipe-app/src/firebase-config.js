// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdQpgvhSgugKu3WA3zTojp_zbvvT-zLUw",
  authDomain: "recipe-finder-4d4a1.firebaseapp.com",
  projectId: "recipe-finder-4d4a1",
  storageBucket: "recipe-finder-4d4a1.firebasestorage.app",
  messagingSenderId: "148005848198",
  appId: "1:148005848198:web:becc901636ff283dd13d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
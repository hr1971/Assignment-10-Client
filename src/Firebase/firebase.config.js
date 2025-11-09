// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIVEP4NZcZ-_p_K59GJd6XAxDUtJvdLmk",
  authDomain: "assignment-10-bcf6a.firebaseapp.com",
  projectId: "assignment-10-bcf6a",
  storageBucket: "assignment-10-bcf6a.firebasestorage.app",
  messagingSenderId: "69436363513",
  appId: "1:69436363513:web:7d436f56bd713f43f40828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
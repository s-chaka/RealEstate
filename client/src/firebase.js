// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "selam-estate.firebaseapp.com",
  projectId: "selam-estate",
  storageBucket: "selam-estate.appspot.com",
  messagingSenderId: "740915011217",
  appId: "1:740915011217:web:7b6400c96ec56c27ca6930"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
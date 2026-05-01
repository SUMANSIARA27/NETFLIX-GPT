// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQlCRlzq04m3vhvt21hUj7WSHzsYi0tWo",
  authDomain: "netflix-gpt-a4d25.firebaseapp.com",
  projectId: "netflix-gpt-a4d25",
  storageBucket: "netflix-gpt-a4d25.firebasestorage.app",
  messagingSenderId: "796925446357",
  appId: "1:796925446357:web:44eff39deb26d7a310fa5c",
  measurementId: "G-7ESB1XNGS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
 export const auth = getAuth();
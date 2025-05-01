// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdIcoGiuARdQlFAppCedSZxGBu1tVaSYM",
  authDomain: "dragon-news-347a8.firebaseapp.com",
  projectId: "dragon-news-347a8",
  storageBucket: "dragon-news-347a8.firebasestorage.app",
  messagingSenderId: "512413467984",
  appId: "1:512413467984:web:81a977ea0d5f3153de1855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
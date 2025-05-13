// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIEJ2RI_T2xptsRsgpo_ojzhCWWZkLyNs",
  authDomain: "a9-vocabullary-learn.firebaseapp.com",
  projectId: "a9-vocabullary-learn",
  storageBucket: "a9-vocabullary-learn.firebasestorage.app",
  messagingSenderId: "337844344946",
  appId: "1:337844344946:web:748c306a64fd885a8acaeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
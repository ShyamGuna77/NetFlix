// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5AnW2oXpZQ7JAkiOfkMKkRmVG7OktWL4",
  authDomain: "netflix-e8440.firebaseapp.com",
  projectId: "netflix-e8440",
  storageBucket: "netflix-e8440.firebasestorage.app",
  messagingSenderId: "626298453557",
  appId: "1:626298453557:web:4e0ae9f6024f0c4287bb7c",
  measurementId: "G-9NEEGSFB1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

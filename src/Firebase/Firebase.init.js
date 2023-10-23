// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZefEeMJ2xlaY6F7wxs9vnxzgUYrk_ZG4",
  authDomain: "login-with-email-passwor-57168.firebaseapp.com",
  projectId: "login-with-email-passwor-57168",
  storageBucket: "login-with-email-passwor-57168.appspot.com",
  messagingSenderId: "344053616385",
  appId: "1:344053616385:web:e24e170b4bae7d4f831500",
  measurementId: "G-BZXWV9TS0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
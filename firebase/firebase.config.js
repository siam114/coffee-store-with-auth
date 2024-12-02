// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZaIMX9BjuRno5rys11PYFrrXa8Eep1HY",
  authDomain: "coffee-store-fa9c4.firebaseapp.com",
  projectId: "coffee-store-fa9c4",
  storageBucket: "coffee-store-fa9c4.firebasestorage.app",
  messagingSenderId: "741759859175",
  appId: "1:741759859175:web:384e9d9ca000bc666a2542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
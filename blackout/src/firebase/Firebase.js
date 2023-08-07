// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBYI1K4HeFFFqGjpHoubuhpJnq1g8iAtA8",

  authDomain: "blackout-2d2d3.firebaseapp.com",

  projectId: "blackout-2d2d3",

  storageBucket: "blackout-2d2d3.appspot.com",

  messagingSenderId: "90088398828",

  appId: "1:90088398828:web:0dcba47cdce2ad1a92eac9",

  measurementId: "G-SD4MGBZNB4"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);


export { app, analytics, db , auth }
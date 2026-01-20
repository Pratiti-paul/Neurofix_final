// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyDg91ReY9WoUnTmEEV0RxFmrxKHCc7XVMk",
  authDomain: "neurofix-d45e6.firebaseapp.com",
  projectId: "neurofix-d45e6",
  storageBucket: "neurofix-d45e6.firebasestorage.app",
  messagingSenderId: "390681615736",
  appId: "1:390681615736:web:5f338f902ab55f2f967c8d",
  measurementId: "G-PTQWSJ7TMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add this line to enable auth
const auth = getAuth(app);

// ✅ Export auth so other files can use it
export { auth };

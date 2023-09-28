// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from"firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlvC4XDH_sIMT204BP2nuX53DwBHNLtf4",
  authDomain: "ecommerce-8fb02.firebaseapp.com",
  projectId: "ecommerce-8fb02",
  storageBucket: "ecommerce-8fb02.appspot.com",
  messagingSenderId: "1063100941168",
  appId: "1:1063100941168:web:951f6dadf4d1d6b1fcc5b5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; 
import {getStorage} from 'firebase/storage'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIRq27ubN_cS61IAWUQbG6JEx2gxW4DL8",
  authDomain: "fir-e-68d73.firebaseapp.com",
  projectId: "fir-e-68d73",
  storageBucket: "fir-e-68d73.appspot.com",
  messagingSenderId: "667014037819",
  appId: "1:667014037819:web:e19169e7891e6c07c8771e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

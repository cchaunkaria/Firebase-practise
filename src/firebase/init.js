// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALkq18LeYP7aWvu4TW6R0Lamt9MP1QGEo",
  authDomain: "fir-practice-7213c.firebaseapp.com",
  projectId: "fir-practice-7213c",
  storageBucket: "fir-practice-7213c.appspot.com",
  messagingSenderId: "392207354355",
  appId: "1:392207354355:web:448c398b9c0872cd77aa86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();  
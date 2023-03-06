// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3csFVCqMyMbWZhtf_ARcHLXEDR5WbDsU",
  authDomain: "takumi-nextjs-blog.firebaseapp.com",
  projectId: "takumi-nextjs-blog",
  storageBucket: "takumi-nextjs-blog.appspot.com",
  messagingSenderId: "571600524639",
  appId: "1:571600524639:web:6b9c43be595de21b37d2ea",
  measurementId: "G-FCPY86QVK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

console.log(app);
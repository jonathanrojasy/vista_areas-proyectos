import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/analytics'

let firebaseConfig = {
    apiKey: "AIzaSyDGOv3zy4y9qAj1jwwIzEqwJfYMzKybhvA",
    authDomain: "ccat-page.firebaseapp.com",
    projectId: "ccat-page",
    storageBucket: "ccat-page.appspot.com",
    messagingSenderId: "943555406820",
    appId: "1:943555406820:web:765c0e4ef62ccc2925f5f1",
    measurementId: "G-0Q7S9C90ZH"
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
firebase.analytics();
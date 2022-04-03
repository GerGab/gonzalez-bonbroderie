// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKsN3Z7DJGuFXBPEK6WNxibO-trCHBN2A",
  authDomain: "bonbroderie-e0e37.firebaseapp.com",
  projectId: "bonbroderie-e0e37",
  storageBucket: "bonbroderie-e0e37.appspot.com",
  messagingSenderId: "274814669911",
  appId: "1:274814669911:web:023160dc0abe88c6673f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtVm_zQEqF3WCvmcIJYrs2AkG0MeI9ZDQ",
  authDomain: "chatapp-fe8d8.firebaseapp.com",
  projectId: "chatapp-fe8d8",
  storageBucket: "chatapp-fe8d8.appspot.com",
  messagingSenderId: "355495322360",
  appId: "1:355495322360:web:b4c6b27204ce9ec93ad10d"
};

let app;
if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const db = app.firebase();
const auth = firebase.auth();
export { db, auth };





// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaqShEIYhqfMKW0MAt7Wc6JdNNUMk13kc",
  authDomain: "emoji-time-1.firebaseapp.com",
  databaseURL:
    "https://emoji-time-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "emoji-time-1",
  storageBucket: "emoji-time-1.appspot.com",
  messagingSenderId: "935680375155",
  appId: "1:935680375155:web:89d4d1935a50c6c3e52d06",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

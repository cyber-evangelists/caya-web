import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhmZfkrg9ASMBPGZq7uP9lj4RgaCzJBBU",
  authDomain: "car-share-a0cd3.firebaseapp.com",
  projectId: "car-share-a0cd3",
  storageBucket: "car-share-a0cd3.appspot.com",
  messagingSenderId: "324130015363",
  appId: "1:324130015363:web:aaf46e6ca8f78abef033b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const signIn = () => auth.signInWithPopup(provider);

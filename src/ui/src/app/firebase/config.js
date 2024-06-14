import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const signIn = () => auth.signInWithPopup(provider);

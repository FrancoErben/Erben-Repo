import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMEWka8ft8bkQTf3qenkeudsY4l-3v0NU",
  authDomain: "erbshop-coder.firebaseapp.com",
  projectId: "erbshop-coder",
  storageBucket: "erbshop-coder.appspot.com",
  messagingSenderId: "631390489119",
  appId: "1:631390489119:web:519b2f777a3780a363632a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
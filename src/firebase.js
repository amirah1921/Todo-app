import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAynu8bt7aurEqAUFm-ikjCqTLsnzmwBz8",
    authDomain: "todo-f6b8f.firebaseapp.com",
    projectId: "todo-f6b8f",
    storageBucket: "todo-f6b8f.appspot.com",
    messagingSenderId: "870686041920",
    appId: "1:870686041920:web:86a781d2327b0f5869bca5"
  };
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
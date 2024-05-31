
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJ1K1TVj4rICVs5K_mjfiamZ_3kFwgqE4",
    authDomain: "fir-todo-list-1eb9c.firebaseapp.com",
    databaseURL: "https://fir-todo-list-1eb9c-default-rtdb.firebaseio.com",
    projectId: "fir-todo-list-1eb9c",
    storageBucket: "fir-todo-list-1eb9c.appspot.com",
    messagingSenderId: "1009868505430",
    appId: "1:1009868505430:web:99e321d72906482b7616f7",
    measurementId: "G-QDNRC9Q1W7"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

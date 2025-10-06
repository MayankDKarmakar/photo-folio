import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4v46_DSf6VUGhc-_o033gglF7l_x5O_4",
  authDomain: "photo-folio-d80bd.firebaseapp.com",
  projectId: "photo-folio-d80bd",
  storageBucket: "photo-folio-d80bd.firebasestorage.app",
  messagingSenderId: "941534137833",
  appId: "1:941534137833:web:0d13225fa4289a0c020f78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
export const db = getFirestore(app);

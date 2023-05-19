import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCgTyTM33fpogRnicjdfF9M3mug0ZU-izY",
  authDomain: "foodaholic-fd71f.firebaseapp.com",
  projectId: "foodaholic-fd71f",
  storageBucket: "foodaholic-fd71f.appspot.com",
  messagingSenderId: "423529748469",
  appId: "1:423529748469:web:c9f01d9597d5b3a87fb2bc",
  measurementId: "G-Z0CB5GLVM5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };
// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0TuG4KnRDj7a1xIcgChhuJtfaf8nnZl4",
  authDomain: "newqwe-b03a2.firebaseapp.com",
  projectId: "newqwe-b03a2",
  storageBucket: "newqwe-b03a2.firebasestorage.app",
  messagingSenderId: "276023721661",
  appId: "1:276023721661:web:07f6dd3e2d3e23b2f9c1d4",
  measurementId: "G-8EML9GT4W0"
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };

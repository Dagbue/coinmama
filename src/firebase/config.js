import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyDlbU7gY2HYDBnExBN4tIJ5j3Z7aq2Shgg",
    authDomain: "investment-asset-management.firebaseapp.com",
    projectId: "investment-asset-management",
    storageBucket: "investment-asset-management.appspot.com",
    messagingSenderId: "26892930792",
    appId: "1:26892930792:web:bb6e9ab80c3d6fe536c35d"
};

// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();



export { auth, db, database, storage}


import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA_brN8vuLyv80GBzhxbJV_uwPsl_lvBoU",
    authDomain: "expensifyreactnative.firebaseapp.com",
    projectId: "expensifyreactnative",
    storageBucket: "expensifyreactnative.appspot.com",
    messagingSenderId: "1095192730353",
    appId: "1:1095192730353:web:fc18820a80b1600c0fa750"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export const tripsRef = collection(db, 'trips')
export const expensesRef = collection(db, 'expenses')

export default app

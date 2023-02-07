import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAuj8L54pnff_OuqY1CqCa9nNtWLkol3E",
  authDomain: "chatgpt-messenger-30317.firebaseapp.com",
  projectId: "chatgpt-messenger-30317",
  storageBucket: "chatgpt-messenger-30317.appspot.com",
  messagingSenderId: "882481655519",
  appId: "1:882481655519:web:c9074633a44c5f4d41836a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
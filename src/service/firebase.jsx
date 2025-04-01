// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtuztBFDNQPMio3dry4LGPoIPqbGB1YNk",
    authDomain: "villa-pino-furniture-store.firebaseapp.com",
    projectId: "villa-pino-furniture-store",
    storageBucket: "villa-pino-furniture-store.firebasestorage.app",
    messagingSenderId: "317104842763",
    appId: "1:317104842763:web:f9d6485000bbca0c57ff0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
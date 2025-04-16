// firebase.js o firebaseConfig.js

// Importación de módulos necesarios
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtuztBFDNQPMio3dry4LGPoIPqbGB1YNk",
  authDomain: "villa-pino-furniture-store.firebaseapp.com",
  projectId: "villa-pino-furniture-store",
  storageBucket: "villa-pino-furniture-store.appspot.com",
  messagingSenderId: "317104842763",
  appId: "1:317104842763:web:f9d6485000bbca0c57ff0e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

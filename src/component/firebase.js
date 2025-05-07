
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwh1P-SKRN-fTFrbiDd9-42P1x3R9lZjw",
    authDomain: "shans-95a2f.firebaseapp.com",
    projectId: "shans-95a2f",
    storageBucket: "shans-95a2f.firebasestorage.app",
    messagingSenderId: "598946649347",
    appId: "1:598946649347:web:f94aceb4131c190dfc0536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
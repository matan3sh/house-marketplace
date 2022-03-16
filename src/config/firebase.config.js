import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDefgHayHkk_qWiIVw2Q-9UBsf_8uql9Bs",
  authDomain: "house-marketplace-app-1501a.firebaseapp.com",
  projectId: "house-marketplace-app-1501a",
  storageBucket: "house-marketplace-app-1501a.appspot.com",
  messagingSenderId: "1053987815804",
  appId: "1:1053987815804:web:9ab544427a8d28384aa4f9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

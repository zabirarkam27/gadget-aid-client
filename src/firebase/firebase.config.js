// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;





  // apiKey: "AIzaSyB3dOK7W8lJSUyyC5shHKGw1AMxMAwiz7Q",
  // authDomain: "gadget-aid.firebaseapp.com",
  // projectId: "gadget-aid",
  // storageBucket: "gadget-aid.firebasestorage.app",
  // messagingSenderId: "567578595797",
  // appId: "1:567578595797:web:bc17483a8e2c6e3e792d5c"

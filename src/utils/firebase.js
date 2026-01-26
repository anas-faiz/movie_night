// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_firebase_apiKey,
  authDomain: import.meta.env.VITE_auth_domain,
  projectId: import.meta.env.VITE_projectID,
  storageBucket: import.meta.env.VITE_storage_bucket,
  messagingSenderId: import.meta.env.VITE_messaging_senderID,
  appId: import.meta.env.VITE_apiID,
  measurementId: import.meta.env.VITE_measurementID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
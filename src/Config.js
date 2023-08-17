// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCla_-x2pwiy1LgxZm6VSMcRyUiZsbV0L0",
  authDomain: "tastrix-in.firebaseapp.com",
  projectId: "tastrix-in",
  storageBucket: "tastrix-in.appspot.com",
  messagingSenderId: "461440392951",
  appId: "1:461440392951:web:d8fd1843ace6dffa5a3df2",
  measurementId: "G-FSNFK3KPTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
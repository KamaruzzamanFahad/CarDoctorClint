// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBECB361XXM7ZL7EIVEA9p4KPX4-LQxPMs",
  authDomain: "cardoctor-bded0.firebaseapp.com",
  projectId: "cardoctor-bded0",
  storageBucket: "cardoctor-bded0.appspot.com",
  messagingSenderId: "339475754161",
  appId: "1:339475754161:web:1c3915f2b1890b259bc690",
  measurementId: "G-N6CZ0P0NW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
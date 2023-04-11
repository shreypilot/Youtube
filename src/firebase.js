
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfEljkpzvozv7IUGjC0LbPOF6EBXo2N8",
  authDomain: "not-yout.firebaseapp.com",
  projectId: "not-yout",
  storageBucket: "not-yout.appspot.com",
  messagingSenderId: "816679726744",
  appId: "1:816679726744:web:4d51a250dfc2758017eaed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };

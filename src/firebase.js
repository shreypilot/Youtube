
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;

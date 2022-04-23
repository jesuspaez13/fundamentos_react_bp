// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhLcoW3aY1M5GYBndesaFPTpecgXYOPiI",
  authDomain: "crud-basico-react-bp-e6bcf.firebaseapp.com",
  projectId: "crud-basico-react-bp-e6bcf",
  storageBucket: "crud-basico-react-bp-e6bcf.appspot.com",
  messagingSenderId: "886651838498",
  appId: "1:886651838498:web:4a87eb7ffd41189466aa7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}
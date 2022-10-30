// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp48SyPbz3P_n9SUPZHgq1pNWG_lawgno",
  authDomain: "todo-nina.firebaseapp.com",
  projectId: "todo-nina",
  storageBucket: "todo-nina.appspot.com",
  messagingSenderId: "419902696424",
  appId: "1:419902696424:web:7915ed48f43196963bd25d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

export default db;
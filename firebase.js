import firebase from 'firebase';
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC7mybMry1LzLSlpsmXMlN_9LbcPogoW2g",
    authDomain: "inverseprivate-304e0.firebaseapp.com",
    projectId: "inverseprivate-304e0",
    storageBucket: "inverseprivate-304e0.appspot.com",
    messagingSenderId: "246587992179",
    appId: "1:246587992179:web:a5a5fc429c9e9c7d2ca206",
    measurementId: "G-TGV55BWQJW"
  };

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();

export { db };

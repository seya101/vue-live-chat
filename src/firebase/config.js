import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5XOMMuaG1kJWIVqZZLJcMxwQldMGGi7k",
    authDomain: "vue-firebase-sites-7fb49.firebaseapp.com",
    projectId: "vue-firebase-sites-7fb49",
    storageBucket: "vue-firebase-sites-7fb49.appspot.com",
    messagingSenderId: "1040605605459",
    appId: "1:1040605605459:web:f155f01581e62bf3fa20a6",
    measurementId: "G-KBHD7KXSSW"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
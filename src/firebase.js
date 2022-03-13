import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDWsledBCcUkOhShnIC2OzMOIBPx09CI8E",
    authDomain: "swapmessenger-fff.firebaseapp.com",
    projectId: "swapmessenger-fff",
    storageBucket: "swapmessenger-fff.appspot.com",
    messagingSenderId: "108040457003",
    appId: "1:108040457003:web:a71f45b9f9226c53a1136e",
}).auth();
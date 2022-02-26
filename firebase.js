import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyClrqjNcekCz0SjtNWdDqaoJY2LTH-RXr4",
    authDomain: "whatsapp-clone-f567c.firebaseapp.com",
    projectId: "whatsapp-clone-f567c",
    storageBucket: "whatsapp-clone-f567c.appspot.com",
    messagingSenderId: "1033950569974",
    appId: "1:1033950569974:web:67552dd1f8f87b143b53d7"
};

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
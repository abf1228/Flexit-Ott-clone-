import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLWcQ2idm9jSjvMEMaBj-V8tJ-E1vwKxs",
    authDomain: "flexit-ott.firebaseapp.com",
    projectId: "flexit-ott",
    storageBucket: "flexit-ott.appspot.com",
    messagingSenderId: "923735016403",
    appId: "1:923735016403:web:1a2d37896011be06f1a526"
  }; 

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth()

  export {auth}
  export default db;
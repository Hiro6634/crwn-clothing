import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDhbRSBxZL46Ew9mzYich8ltWpP-gDQK98",
    authDomain: "crwn-db-800b3.firebaseapp.com",
    projectId: "crwn-db-800b3",
    storageBucket: "crwn-db-800b3.appspot.com",
    messagingSenderId: "165539040838",
    appId: "1:165539040838:web:558afec34687a3ef8a4447"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

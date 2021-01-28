import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2AZcaVFkYp8pUiKJ-nlz3MJahHvlTd80",
    authDomain: "crwn-clothes-db-e4878.firebaseapp.com",
    projectId: "crwn-clothes-db-e4878",
    storageBucket: "crwn-clothes-db-e4878.appspot.com",
    messagingSenderId: "307266878138",
    appId: "1:307266878138:web:ad1d99d7c3ad4c536fa083",
    measurementId: "G-V56Q8XZZ5J"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
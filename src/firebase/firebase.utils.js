import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDhbRSBxZL46Ew9mzYich8ltWpP-gDQK98",
    authDomain: "crwn-db-800b3.firebaseapp.com",
    projectId: "crwn-db-800b3",
    storageBucket: "crwn-db-800b3.appspot.com",
    messagingSenderId: "165539040838",
    appId: "1:165539040838:web:558afec34687a3ef8a4447"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email } = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user ', error.message);
      }
    }

    return userRef;
  };

   export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();

    objectsToAdd.forEach( obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  }

  export const convertCollectionSnapshotToMap = (collections) => {
    const trasnformedCollection = collections.docs.map(doc=>{
      const{title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });

    console.log(trasnformedCollection);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
  export default firebase; 


import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhbRSBxZL46Ew9mzYich8ltWpP-gDQK98",
  authDomain: "crwn-db-800b3.firebaseapp.com",
  projectId: "crwn-db-800b3",
  storageBucket: "crwn-db-800b3.appspot.com",
  messagingSenderId: "165539040838",
  appId: "1:165539040838:web:558afec34687a3ef8a4447"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const  auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, provider);

export const db = getFirestore();

export const createUserDocuemntFromAuth = async (
    userAuth,
    aditionalInformation = {}
    ) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid ); 

    const userSnapshot = await getDoc( userDocRef );

    if( !userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...aditionalInformation 
            });
        } catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if( !email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if( !email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged( auth, callback);
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot
} from 'firebase/firestore';

import { Category } from '../../store/categories/categories.types';

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

export type ObjectToAdd = {
    title: string;
};

export const addCollectionsAndDocuments = async <T extends ObjectToAdd >(
    collectionKey: string, 
    objectToAdd: T[] 
): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db , 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
        (docSnapshot) => docSnapshot.data() as Category
    );
};

export type AdditionalInformation = {
    displayName?: string;
}

export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
}

export const createUserDocumentFromAuth = async (
    userAuth: User,
    aditionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
            console.log('error creating the user', error);
        }
    } 

    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (
    email: string, 
    password: string
) => {
    if( !email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (
    email: string, 
    password: string
) => {
    if( !email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => 
    onAuthStateChanged( auth, callback);

export const getCurrentUSer = ():Promise<User | null> => {
    return new Promise((resolve, reject) =>{
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    });
}
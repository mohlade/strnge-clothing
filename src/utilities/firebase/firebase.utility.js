import {initializeApp}  from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} 
from 'firebase/auth';

import {
     getFirestore,
     doc,
     getDoc,
     setDoc,
}
from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUlFLX9fMsPbpchN6qZzCKLGE69eFMJLw",
    authDomain: "strnge-clothing.firebaseapp.com",
    projectId: "strnge-clothing",
    storageBucket: "strnge-clothing.appspot.com",
    messagingSenderId: "857885434729",
    appId: "1:857885434729:web:fd7badf98ddb88440cd3f8"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
       prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () =>  signInWithRedirect(auth, googleProvider);


   export const db = getFirestore();

   export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) =>{
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef); 

    if(!userSnapshot.exists()) {
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{ 
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('there was an error creating the user', error.message);
        }
    }
    return userDocRef;
};

  export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
  }

  
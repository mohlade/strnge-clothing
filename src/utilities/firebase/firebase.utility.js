import {initializeApp}  from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
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

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
       prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup= () => signInWithPopup(auth, provider);

   export const db = getFirestore();

   export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);


    const userSnapshot = await getDoc(userDocRef); 
    console.log(userSnapshot);
    console.log( userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{ 
                displayName,email,createdAt
            });
        } catch (error) {
            console.log('there was an error creating the user', error.message);
        }
    }
    return userDocRef;



  };


  
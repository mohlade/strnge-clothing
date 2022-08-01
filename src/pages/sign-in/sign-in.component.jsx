import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth'
import { 
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
} from '../../utilities/firebase/firebase.utility'
import SignUpForm from '../../components/sign-up/sign-up.component.jsx';
 const SignIn = () => {

    const logGoogleUser = async () => {
         const { user } = await signInWithGooglePopup();
         const userDocRef = await createUserDocumentFromAuth(user);
    }
   
    return (
        <div>
            <h1>Sign in page</h1>
            <button  onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    );
};



export default SignIn;
import {useState,useContext} from 'react';
import FormInput from '../form-input/form-input-component';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button-components/button-components';
import {UserContext} from '../../context/user.context'
import {signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utilities/firebase/firebase.utility'

const defualtFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const[formFields,setFormFields] = useState(defualtFormFields);
    const {email,password} = formFields;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () =>{
        setFormFields(defualtFormFields);   
    } ;

    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();

       await createUserDocumentFromAuth(user);
       
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);

            
            resetFormFields();
            } catch(error){
            switch(error.code){
                case'auth/wrong-password':
                alert('incorrect password');
                break
                case'auth/user-not-found':
                alert('no user associated with this email');
                break;
                default:
                    console.log(error)
                }
            }            
    };

    const  handleChange = (event) => {
        const {name,value} = event.target;

        setFormFields({...formFields,[name]:value});

    };
    return (
        <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
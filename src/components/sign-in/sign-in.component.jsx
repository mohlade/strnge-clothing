import {useState} from 'react';
import FormInput from '../form-input/form-input-component'
import './sign-in.styles.scss';
import Button from '../button-components/button-components'
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
    console.log(formFields);

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
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields(); 
            
        }catch(error){
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
        <div className='sign-up-container'>
        <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit ={handleSubmit} >
              <FormInput label="Email"  type="email" required onChange={handleChange} name="email" value={email} /> 
               <FormInput label="Password" type="password" required onChange={handleChange} name="password"  value = {password}/>
               <div className='buttons'>
               <Button type="submit"> Sign In</Button>
               <Button  type="button" buttonType='google' onClick={signInWithGoogle}>
                Google sign in
                </Button>
               </div>               
            </form>
        </div>
    )
}

export default SignInForm;
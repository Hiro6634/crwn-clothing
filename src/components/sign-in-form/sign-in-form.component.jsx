import { useState, useContext } from 'react';

import { 
    createUserDocuemntFromAuth, 
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword
 } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { UserContext } from '../../context/user.context';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser} = useContext(UserContext);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthWithEmailAndPassword(
                email,
                password
            );
            setCurrentUser(user);
            console.log(response);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        await createUserDocuemntFromAuth(user);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email'
                    type='email' 
                    onChange={handleChange} 
                    name='email' 
                    value={email} 
                    required
                />
                
                <FormInput 
                    label='Password'
                    type='password' 
                    onChange={handleChange} 
                    name='password' 
                    value={password} 
                    required
                />
               
                <div className='buttons-container'>
                    <Button type='submit'>Sign </Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
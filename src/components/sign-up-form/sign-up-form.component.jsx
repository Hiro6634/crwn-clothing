import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocuemntFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("handle Submit");
        if( password !== confirmPassword ){
            alert("passwords do not match");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocuemntFromAuth(user, {displayName});
            resetFormFields();
        }catch(error){
            if( error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error ', error);
            }
        }

    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

    return(
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} 
                    required
                />

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
                
                <FormInput 
                    label='Confirm Password'
                    type='password' 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    required
                />
                
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
import React, { useState } from 'react';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import './SignUpForm.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          htmlFor="displayName"
          inputOptions={{
            id: 'displayName',
            name: 'displayName',
            type: 'text',
            value: displayName,
            required: true,
            onChange: handleChange
          }}
        />
        <FormInput
          label="Email"
          htmlFor="email"
          inputOptions={{
            id: 'email',
            name: 'email',
            type: 'email',
            value: email,
            required: true,
            onChange: handleChange
          }}
        />
        <FormInput
          label="Password"
          htmlFor="password"
          inputOptions={{
            id: 'password',
            name: 'password',
            type: 'password',
            value: password,
            required: true,
            onChange: handleChange
          }}
        />
        <FormInput
          label="Confirm Password"
          htmlFor="confirmPassword"
          inputOptions={{
            id: 'confirmPassword',
            name: 'confirmPassword',
            type: 'password',
            value: confirmPassword,
            required: true,
            onChange: handleChange
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

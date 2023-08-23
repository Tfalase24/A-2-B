import React from 'react';
import SignUpForm from '../../components/sign-up-form/SignUpForm';

const Signup = () => {
  return (
    <>
      <div>This is a sign up page for the applciation</div>
      <div>
        You enter your details and it will submit a form to our database
      </div>
      <div>
        After a successful submission, it will take you to the Log in Page
      </div>

      <SignUpForm />
    </>
  );
};

export default Signup;

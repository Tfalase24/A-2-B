import React from 'react';
import SubmitButton from '../submit-button/SubmitButton';

const SignUpForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('You have clicked the submit button');
  };
  return (
    <>
      <form>
        <div>
          <input placeholder="Enter First Name..." />
        </div>
        <div>
          <input placeholder="Enter Last Name..." />
        </div>
        <div>
          <input placeholder="Enter Email Address..." />
        </div>
        <div>
          <input placeholder="Choose Password..." type="password" />
        </div>
        <div>
          <input placeholder="Verify Password..." type="password" />
        </div>
        <div>
          <SubmitButton label="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;

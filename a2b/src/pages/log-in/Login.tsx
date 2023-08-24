import React from 'react';
import SubmitButton from '../../components/submit-button/SubmitButton';
import LoginComponent from '../../components/login/Login';

const Login = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('The submit button has been clicked');
  };

  return (
    <>
      <div>This is a log in page that simply displays login input fields</div>
      <div>If you login successfully it will direct you to the home page</div>
      <LoginComponent />
      <SubmitButton label="Submit" onClick={handleSubmit} />
    </>
  );
};

export default Login;

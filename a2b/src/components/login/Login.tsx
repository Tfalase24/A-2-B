import React from 'react';
import InputTag from '../input-tag/InputTag';

const LoginComponent = () => {
  return (
    <>
      <div>
        <InputTag
          placeholder="Enter Email Address..."
          aria-label="Email Address Input"
        />
      </div>
      <div>
        <InputTag
          placeholder="Enter Password..."
          aria-label="Password Input"
          type="password"
        />
      </div>
    </>
  );
};

export default LoginComponent;

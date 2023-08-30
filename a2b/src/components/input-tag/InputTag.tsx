import React from 'react';

interface InputTagProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
}

const InputTag: React.FC<InputTagProps> = ({ placeholder, type }) => {
  return <input placeholder={placeholder} type={type} />;
};

export default InputTag;

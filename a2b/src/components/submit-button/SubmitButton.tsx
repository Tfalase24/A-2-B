import React from 'react';

interface SubmitButtonProps {
  label: string;
  onClick: (event: React.FormEvent) => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick,
  disabled,
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default SubmitButton;

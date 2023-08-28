import React from 'react';

interface SubmitButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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
    <button onClick={onClick} disabled={disabled} aria-label={label}>
      {label}
    </button>
  );
};

export default SubmitButton;

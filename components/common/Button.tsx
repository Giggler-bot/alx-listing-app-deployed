import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 text-white px-4 py-2 rounded ${className}`}
  >
    {text}
  </button>
);

export default Button;

// components/UI/Input.tsx
import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;  // <-- Add className as optional prop
}

export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded ${className}`} // Include className here
    />
  );
};

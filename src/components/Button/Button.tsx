import React from 'react';
import './Button.scss';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
  buttonStyle?: string;
}

interface ButtonStyleClasses {
  google: string;
  inverted: string;
}

const buttonStyleClasses = {
  google: 'google-sign-in',
  inverted: 'inverted'
};

const Button = ({ children, type, buttonStyle, onClick }: Props) => {
  return (
    <button
      className={`button-container ${
        buttonStyleClasses[buttonStyle as keyof ButtonStyleClasses]
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

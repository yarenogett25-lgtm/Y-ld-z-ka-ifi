
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  variant = 'primary'
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md";
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-yellow-900",
    secondary: "bg-blue-500 hover:bg-blue-600 text-white",
    ghost: "bg-transparent hover:bg-black/5 text-gray-700"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

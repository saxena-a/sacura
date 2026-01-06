import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative flex items-center justify-center gap-4 px-10 py-4.5 rounded-[1.2rem] text-[11px] font-black tracking-[0.2em] transition-all duration-700 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed uppercase";
  
  const variants = {
    primary: "bg-black text-white hover:bg-[#1a1a1a] shadow-2xl shadow-black/5",
    secondary: "bg-white text-black border border-border hover:border-black hover:bg-[#FDFDFD] shadow-sm",
    ghost: "bg-transparent text-secondary hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
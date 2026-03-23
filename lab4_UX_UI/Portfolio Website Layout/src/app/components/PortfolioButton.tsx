import React from 'react';

interface PortfolioButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function PortfolioButton({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '' 
}: PortfolioButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg';
  
  const variantStyles = {
    primary: 'bg-[#00BCD4] text-white hover:bg-[#00ACC1]',
    secondary: 'border-2 border-[#00BCD4] text-[#00BCD4] bg-transparent hover:bg-[#00BCD4] hover:text-white'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

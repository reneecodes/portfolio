import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  // Variants - Using semantic colors defined in color-palette.css
  const variants = {
    // Primary: Coral Dark (Accessible) -> Coral (Brighter/Fun on hover)
    primary: "bg-primary-dark text-white hover:bg-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-transparent",
    
    // Secondary: Sage Dark -> Sage (Brighter on hover)
    secondary: "bg-secondary-dark text-white hover:bg-secondary shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-transparent",
    
    // Outline: Border Primary Dark -> Fill Primary Dark
    outline: "border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white bg-transparent hover:shadow-md",
    
    // Ghost: Text Primary Dark -> Light Background
    ghost: "text-primary-dark hover:bg-primary-light/10 bg-transparent",
  };

  // Sizes
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          className={combinedClassName}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string; // If the button acts as a link
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center justify-center';

  // Updated variant styles for the new theme
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary', // Teal bg, white text
    secondary: 'bg-secondary text-neutral-dark hover:bg-secondary-light focus:ring-secondary', // Yellow bg, dark text for contrast
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary', // Teal outline/text, on hover teal bg/white text
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

  if (href) {
    // Remove button-specific props that are not valid for anchor tags before spreading
    const { form, formAction, formEncType, formMethod, formNoValidate, formTarget, ...anchorProps } = props;
    return (
      <a href={href} className={combinedClassName} {...(anchorProps as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
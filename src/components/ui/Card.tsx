
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, onClick, hoverEffect = true }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${hoverEffect ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
    
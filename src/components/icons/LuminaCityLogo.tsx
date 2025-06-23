import React from 'react';

interface LogoProps {
  className?: string;
}

const LuminaCityLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/luminacity.svg" 
      alt="LuminaCity Logo" 
      className={className}
      style={{ 
        height: 'auto', 
        maxHeight: '100%',
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'contain'
      }}
    />
  );
};

export default LuminaCityLogo;
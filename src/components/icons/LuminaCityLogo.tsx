import React from 'react';

const LuminaCityLogo: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }> = (props) => {
  return (
    <img 
      src="/Professional Wordmark Logo for 'Luminacity'.png" 
      alt="LuminaCity Logo" 
      className={props.className}
      style={{ height: 'auto', maxHeight: '100%' }}
    />
  );
};

export default LuminaCityLogo;
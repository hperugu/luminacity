import React from 'react';

const LuminaCityLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <img 
      src="/luminacity.svg" 
      alt="LuminaCity Logo" 
      className={props.className}
      style={{ height: 'auto', maxHeight: '100%' }}
    />
  );
};

export default LuminaCityLogo;
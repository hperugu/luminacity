import React from 'react';

const LuminaCityLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  // Use an img element instead of SVG wrapper since we have an actual SVG file
  return (
    <img 
      src="/luminacity.svg" 
      alt="LuminaCity Logo" 
      className={props.className}
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
import React from 'react';

const LuminaCityLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  // Convert SVG props to img props, filtering out SVG-specific attributes
  const { fill, stroke, strokeWidth, viewBox, xmlns, ...imgProps } = props;
  
  return (
    <img 
      src="/ai-gov-favicon-512.png" 
      alt="LuminaCity Logo" 
      className={props.className}
      style={{ height: 'auto', maxHeight: '100%' }}
      {...imgProps}
    />
  );
};

export default LuminaCityLogo;
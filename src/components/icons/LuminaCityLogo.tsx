import React from 'react';

// --- IMPORTANT USER ACTION REQUIRED ---
// 1. ADJUST THE `viewBox` ATTRIBUTE BELOW:
//    Replace "0 0 200 50" with the correct coordinates and dimensions
//    that tightly fit YOUR new SVG logo artwork. For example, if your
//    logo design is 300 units wide and 60 units tall, use "0 0 300 60".
//    This is crucial for correct scaling and aspect ratio.
//
// 2. PASTE YOUR SVG CONTENT:
//    Replace the placeholder <text> and <rect> elements inside the <svg> tag
//    with the actual <path>, <circle>, <rect>, etc., elements of your new logo.
//
// 3. CHECK `fill` ATTRIBUTE:
//    The `fill="currentColor"` attribute on the <svg> tag means parts of your
//    SVG (that don't have their own fill specified or use "currentColor")
//    will inherit the text color from the parent (e.g., white from the Navbar).
//    Remove `fill="currentColor"` if all colors in your SVG are hardcoded.
// -------------------------------------

const LuminaCityLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  // The {...props} spread includes the className (e.g., "h-10 md:h-12 w-auto")
  // passed from the Navbar, which controls the actual display size.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50" // <<< --- YOU MUST ADJUST THIS VALUE!
      // Example: if your logo artwork is 1000px wide by 250px tall,
      // you might use viewBox="0 0 1000 250".
      fill="currentColor" // Optional: remove if all your SVG colors are hardcoded.
      {...props}
    >
      {/* VVV --- REPLACE THIS SECTION WITH YOUR NEW SVG's PATHS AND ELEMENTS --- VVV */}
      <rect x="0" y="0" width="200" height="50" fill="rgba(0,0,0,0.05)" stroke="#CCC" strokeDasharray="5,5" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Manrope, sans-serif"
        fontSize="10"
        fill="#555"
      >
        Adjust viewBox &amp; Add SVG Content Here
      </text>
      <img 
      src="/luminacity.svg" 
      alt="LuminaCity Logo" 
      className={props.className}
      style={{ height: 'auto', maxHeight: '100%' }}
    />
    </svg>
  );
};

export default LuminaCityLogo;


import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hasPattern?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, id, hasPattern = false }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''} ${hasPattern ? 'bg-neutral-light/30 relative' : ''}`}>
      {hasPattern && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {/* Subtle pattern example - replace with actual SVG or more complex pattern if desired */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(100,116,139,0.2)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
    
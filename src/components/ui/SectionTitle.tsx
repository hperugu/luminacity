
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className, align = 'center' }) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${alignmentClass[align]} ${className || ''}`}>
      {subtitle && <p className="text-base font-semibold text-primary-light uppercase tracking-wider mb-2">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark"> 
        {title}
      </h2>
      {/* Underline uses secondary color (yellow) */}
      <div className={`mt-4 w-24 h-1 ${align === 'center' ? 'mx-auto' : (align === 'right' ? 'ml-auto' : '')} bg-secondary rounded-full`}></div>
    </div>
  );
};

export default SectionTitle;
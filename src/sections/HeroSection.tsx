
import React from 'react';
import Button from '../components/ui/Button';
import { SectionProps } from '../types';

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative bg-neutral-dark text-neutral-light min-h-[80vh] md:min-h-screen flex items-center pt-24 md:pt-0">
      {/* Optional: Add a subtle pattern or overlay if desired, replacing the picsum image */}
      {/* <div className="absolute inset-0 opacity-5 bg-[url('/path/to/subtle-pattern.svg')]"></div> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight mb-6 text-white">
            Transforming Local Government with Intelligent Solutions & Grant Funding
          </h1>
          <p className="text-lg md:text-xl text-neutral-light opacity-90 mb-10">
            Leveraging AI, Data Analytics, and GenLLM to build smarter, more responsive, and efficient public services for your community. Plus, we help you secure the grants to fund it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="#solutions" variant="secondary" size="lg">
              Discover Our Solutions
            </Button>
            <Button href="#contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-dark">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-8 h-8 text-white animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
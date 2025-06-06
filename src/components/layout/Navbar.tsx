
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../constants';
import { NavItem } from '../../types';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';
import LuminaCityLogo from '../icons/LuminaCityLogo';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  
  const logoColor = isSticky ? 'text-white' : 'text-white'; // Logo text part is white on both states
  const navLinkColor = isSticky ? 'text-neutral-light hover:bg-primary-light hover:text-white' : 'text-neutral-light hover:text-primary-light';
  const mobileMenuButtonColor = isSticky ? 'text-neutral-light hover:bg-primary-light' : 'text-neutral-light hover:bg-neutral-dark/50'; // Ensuring contrast for hamburger

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-primary shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* The SVG logo itself has hardcoded colors for shapes. `logoColor` affects the <text> "LUMINA" if it were to use `currentColor`.
                However, our new SVG logo directly sets fill for "LUMINA" to white and "CITY" to yellow.
                The className here can be used if any part of the SVG relies on `currentColor`.
                For the new logo, it's mainly for sizing.
             */}
            <a href="#hero" className="font-bold text-2xl">
              <LuminaCityLogo className={`h-10 md:h-12 w-auto ${logoColor}`} />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item: NavItem) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${navLinkColor}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${mobileMenuButtonColor}`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-out`} id="mobile-menu">
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isSticky ? 'bg-primary' : 'bg-neutral-dark shadow-lg'}`}>
          {NAV_ITEMS.map((item: NavItem) => (
            <a
              key={item.id}
              href={item.href}
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isSticky ? 'text-neutral-light hover:bg-primary-light hover:text-white' : 'text-neutral-light hover:bg-primary hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
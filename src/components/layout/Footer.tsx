import React from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from '../icons/SocialIcons'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-neutral-light py-12"> {/* neutral-dark is now lc-blue-dark, neutral-light is light text */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">LuminaCity</h3>
            <p className="text-sm text-neutral-light opacity-80"> {/* text-neutral-medium was slate, now use neutral-light with opacity */}
              Empowering local governments with cutting-edge AI and data analytics to build smarter, more efficient communities.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-neutral-light hover:text-secondary transition-colors duration-300 text-sm opacity-90">About Us</a></li>
              <li><a href="#expertise" className="text-neutral-light hover:text-secondary transition-colors duration-300 text-sm opacity-90">Our Expertise</a></li>
              <li><a href="#solutions" className="text-neutral-light hover:text-secondary transition-colors duration-300 text-sm opacity-90">Solutions</a></li>
              <li><a href="#blog" className="text-neutral-light hover:text-secondary transition-colors duration-300 text-sm opacity-90">Blog</a></li>
              <li><a href="#contact" className="text-neutral-light hover:text-secondary transition-colors duration-300 text-sm opacity-90">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-neutral-light hover:text-secondary transition-colors duration-300">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-neutral-light hover:text-secondary transition-colors duration-300">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="mailto:info@luminacity.net" aria-label="Email" className="text-neutral-light hover:text-secondary transition-colors duration-300">
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
             <p className="mt-4 text-sm text-neutral-light opacity-80">
              12851 Tower Beach Way<br />
              Rancho Cordova, CA 95742
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-neutral-light/20 text-center text-sm text-neutral-light opacity-70">
          &copy; {currentYear} LuminaCity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
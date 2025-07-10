
import React, { useState } from 'react';
import { SectionProps } from '../types';
import SectionContainer from '../components/ui/SectionContainer';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { MailIcon as ContactMailIcon, PhoneIcon, LocationMarkerIcon } from '../components/icons/ContactIcons'; // Renamed to avoid conflict

const ContactSection: React.FC<SectionProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: ''});
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <SectionContainer id={id} className="bg-neutral-very-light" hasPattern>
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Contact Us" 
        className="text-neutral-dark"
      />
      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-white p-8 rounded-xl shadow-xl"> {/* Form card remains white */}
          <h3 className="text-2xl font-semibold text-neutral-dark mb-6">Send us a message</h3>
          {isSubmitted && (
            <div className="mb-4 p-3 rounded-md bg-primary-light/20 text-primary-dark text-sm"> {/* Success message uses primary theme colors */}
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* Hidden field for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-dark">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-neutral-dark/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-dark"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-dark">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-neutral-dark/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-dark"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-neutral-dark/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-dark"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-dark">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-neutral-dark/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-dark"
              />
            </div>
            <div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-dark mb-4">Contact Information</h3>
            <p className="text-neutral-medium leading-relaxed mb-6">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <LocationMarkerIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-neutral-dark">Our Office</h4>
              <p className="text-neutral-medium">12858 Tower Beach Way<br />Rancho Cordova, CA 95742</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <ContactMailIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-neutral-dark">Email Us</h4>
              <a href="mailto:contact@luminacity.net" className="text-neutral-medium hover:text-primary transition-colors">contact@luminacity.net</a>
            </div>
          </div>
           <div className="flex items-start space-x-4">
            <PhoneIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-neutral-dark">Call Us</h4>
              <a href="tel:+1234567890" className="text-neutral-medium hover:text-primary transition-colors">(123) 456-7890</a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
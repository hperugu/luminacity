
import React from 'react';
import { SectionProps } from '../types';
import SectionContainer from '../components/ui/SectionContainer';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { UsersIcon, LightBulbIcon, ShieldCheckIcon } from '../components/icons/FeatureIcons';

const AboutSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionContainer id={id} className="section-on-light-bg" hasPattern>
      <SectionTitle title="About LuminaCity" subtitle="Our Mission & Vision" className="section-title-heading" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://picsum.photos/seed/smartcityfuture/800/600" 
            alt="Illustrative image of a smart city, showcasing technology and urban innovation" 
            className="rounded-xl shadow-2xl object-cover w-full h-auto aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            At LuminaCity, we are passionate about harnessing the power of cutting-edge technology to address the unique challenges faced by local governments. Our team of experts in data science, artificial intelligence, and public administration collaborates closely with municipalities to develop tailored solutions that drive meaningful impact.
          </p>
          <p className="text-lg leading-relaxed">
            We believe in a future where public services are more efficient, data-driven, and citizen-centric. Our commitment is to provide innovative tools and strategies that empower local authorities to better serve their communities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <UsersIcon className="w-12 h-12 text-primary mb-3" />
              <h4 className="font-semibold text-neutral-dark">Citizen-Centric</h4>
              <p className="text-sm text-neutral-medium">Focusing on improving lives.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <LightBulbIcon className="w-12 h-12 text-primary mb-3" />
              <h4 className="font-semibold text-neutral-dark">Innovation-Driven</h4>
              <p className="text-sm text-neutral-medium">Pioneering new approaches.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <ShieldCheckIcon className="w-12 h-12 text-primary mb-3" />
              <h4 className="font-semibold text-neutral-dark">Ethical & Secure</h4>
              <p className="text-sm text-neutral-medium">Responsible AI development.</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href="#expertise" variant="primary">
              Explore Our Expertise
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;

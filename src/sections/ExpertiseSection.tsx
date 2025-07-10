
import React from 'react';
import { SectionProps, ServiceItem } from '../types';
import { EXPERTISE_ITEMS } from '../constants';
import SectionContainer from '../components/ui/SectionContainer';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const ExpertiseCard: React.FC<ServiceItem> = ({ icon, title, description }) => (
  <Card className="p-6 md:p-8 text-center h-full flex flex-col bg-white"> {/* Explicitly white card bg */}
    <div className="mx-auto mb-6 text-primary"> {/* Icon color changed to primary (teal) */}
      {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-16 h-16" })}
    </div>
    <div className="card-content"> {/* Wrapper for text content styling */}
      <h3 className="text-xl font-semibold text-neutral-dark mb-3">{title}</h3>
      <p className="text-neutral-medium text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  </Card>
);

const ExpertiseSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionContainer id={id} className="bg-neutral-dark">
      <SectionTitle 
        title="Our Core Expertise" 
        subtitle="Empowering Governments with Technology" 
        className="text-white"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {EXPERTISE_ITEMS.map((item) => (
          <ExpertiseCard key={item.title} {...item} />
        ))}
      </div>
      <div className="mt-12 bg-secondary/10 border border-secondary/30 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          🎯 Our Unique Advantage: End-to-End Grant Support
        </h3>
        <p className="text-neutral-light text-lg leading-relaxed max-w-4xl mx-auto">
          Unlike other consultants who only focus on implementation, we guide you through the entire journey—from identifying the perfect grants for your specific needs to developing winning proposals and ensuring successful project delivery. We turn innovative ideas into funded realities.
        </p>
      </div>
    </SectionContainer>
  );
};

export default ExpertiseSection;

import React from 'react';
import { SectionProps, SolutionItem } from '../types';
import { SOLUTION_ITEMS } from '../constants';
import SectionContainer from '../components/ui/SectionContainer';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ChevronRightIcon } from '../components/icons/ChevronIcons';

const SolutionCard: React.FC<SolutionItem> = ({ imageUrl, title, description, tags }) => (
  <Card className="flex flex-col h-full bg-white"> {/* Explicitly white card bg */}
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow card-content"> {/* Wrapper for text content styling */}
      <h3 className="text-xl font-semibold text-neutral-dark mb-2">{title}</h3>
      <p className="text-neutral-medium text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        {tags.map(tag => (
          <span key={tag} className="inline-block bg-secondary/20 text-secondary-darker-text-on-yellow text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
             {/* Assuming secondary is yellow, text color needs to be dark for contrast. Tailwind doesn't have secondary-darker-text-on-yellow by default, adjust if needed or use text-neutral-dark */}
            {tag}
          </span>
        ))}
      </div>
      <Button href="#" variant="outline" size="sm" className="mt-auto self-start group text-primary border-primary hover:text-white hover:bg-primary">
        Learn More <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </Card>
);

const SolutionsSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionContainer id={id} className="bg-neutral-very-light" hasPattern>
      <SectionTitle 
        title="Tailored Solutions for Local Government" 
        subtitle="Practical Applications" 
        className="text-neutral-dark"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOLUTION_ITEMS.map((item) => (
          <SolutionCard key={item.title} {...item} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button href="#contact" variant="primary" size="lg">
          Discuss Your Project
        </Button>
      </div>
    </SectionContainer>
  );
};

export default SolutionsSection;
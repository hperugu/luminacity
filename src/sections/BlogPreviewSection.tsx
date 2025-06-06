
import React from 'react';
import { SectionProps, BlogPostItem } from '../types';
import { BLOG_POST_ITEMS } from '../constants';
import SectionContainer from '../components/ui/SectionContainer';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ChevronRightIcon } from '../components/icons/ChevronIcons';

const BlogPostCard: React.FC<BlogPostItem> = ({ imageUrl, category, title, excerpt, author, date }) => (
  <Card className="flex flex-col h-full bg-white"> {/* Explicitly white card bg */}
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow card-content"> {/* Wrapper for text content styling */}
      <p className="text-sm text-primary font-semibold mb-1">{category}</p> {/* Category color to primary (teal) */}
      <h3 className="text-lg font-semibold text-neutral-dark mb-2 flex-grow">{title}</h3>
      <p className="text-neutral-medium text-sm leading-relaxed mb-3 line-clamp-3">{excerpt}</p>
      <p className="text-xs text-neutral-medium mb-4">By {author} on {date}</p>
      <Button href="#" variant="outline" size="sm" className="mt-auto self-start group text-primary border-primary hover:text-white hover:bg-primary">
        Read More <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </Card>
);

const BlogPreviewSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionContainer id={id} className="section-on-light-bg"> {/* Updated background */}
      <SectionTitle title="Latest Insights & News" subtitle="From Our Blog" className="section-title-heading"/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POST_ITEMS.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
      <div className="text-center mt-12">
        {/* Secondary button will be Yellow with dark text */}
        <Button href="#" variant="secondary" size="lg"> 
          Visit Our Blog
        </Button>
      </div>
    </SectionContainer>
  );
};

export default BlogPreviewSection;
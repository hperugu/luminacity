import React from 'react';
import { NavItem, ServiceItem, SolutionItem, BlogPostItem } from './types';
import { BriefcaseIcon, ChartBarIcon, CpuChipIcon, LightBulbIcon, MegaphoneIcon, ShieldCheckIcon, UsersIcon } from './components/icons/FeatureIcons';

// Placeholder icons, replace with actual SVG components if FeatureIcons is not created
const PlaceholderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8 8-3.59 8-8 8 3.59 8 8-8 8z" />
  </svg>
);


export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];

export const EXPERTISE_ITEMS: ServiceItem[] = [
  {
    icon: <ChartBarIcon className="w-10 h-10 text-primary-light" />,
    title: 'Advanced Data Analytics',
    description: 'Unlock insights from complex datasets to drive informed decisions for public services and urban planning.',
  },
  {
    icon: <CpuChipIcon className="w-10 h-10 text-primary-light" />,
    title: 'Artificial Intelligence Solutions',
    description: 'Implement AI-driven automation and predictive modeling to enhance efficiency and citizen engagement.',
  },
  {
    icon: <LightBulbIcon className="w-10 h-10 text-primary-light" />,
    title: 'Generative LLM Applications',
    description: 'Leverage Large Language Models for innovative solutions in public communication, data summarization, and service delivery.',
  },
  {
    icon: <BriefcaseIcon className="w-10 h-10 text-primary-light" />,
    title: 'Grant Identification & Strategy',
    description: 'Navigate federal and state funding opportunities to secure grants for your AI and data analytics initiatives, ensuring projects are financially viable.',
  },
];

export const SOLUTION_ITEMS: SolutionItem[] = [
  {
    imageUrl: 'https://picsum.photos/seed/govsolution1/600/400',
    title: 'Data Analytics for Smart Cities',
    description: 'Data analytics is transforming cities by turning raw information into actionable insights. It\'s crucial for optimizing urban life, from easing traffic to improving public health and maintaining vital infrastructure.',
    tags: ['Traffic Optimization', 'Air Quality', 'Predictive Maintenance', 'Urban Intelligence'],
  },
  {
    imageUrl: 'https://picsum.photos/seed/govsolution2/600/400',
    title: 'AI-Powered Public Safety',
    description: 'Artificial Intelligence (AI) and predictive analytics are transforming urban safety, moving cities from reactive responses to proactive prevention. By analyzing vast datasets, these technologies help anticipate and mitigate risks in traffic management, public safety, and emergency response. From forecasting accident hotspots to optimizing patrol routes and predicting crime patterns, AI empowers cities to create safer, more efficient environments for all residents.',
    tags: ['Predictive Analytics', 'Traffic Safety', 'Emergency Response', 'Crime Prevention'],
  },
  {
    imageUrl: 'https://picsum.photos/seed/govsolution3/600/400',
    title: 'GenLLM-Powered Public Services',
    description: 'Generative Large Language Models (GenLLMs) are revolutionizing how citizens interact with public services. By powering advanced chatbots, GenLLMs can transform public works, making information more accessible and service delivery more efficient. These AI-driven tools can understand natural language, provide instant answers, and even help citizens submit requests, drastically improving responsiveness and satisfaction.',
    tags: ['Natural Language Processing', 'Citizen Engagement', 'Service Automation', 'Real-time Support'],
  },
];

// BLOG POSTS:
// To add a new blog post, copy one of the existing entries below,
// paste it as a new item in the array, and update its content.
// - id: A unique string for this post (e.g., '4', 'my-new-post').
// - imageUrl: A URL to an image for the blog post (e.g., from picsum.photos or your own uploaded image).
//             For images in your project, you'd place them in a 'public/images' folder
//             and reference them like '/images/my-post-image.jpg' after setting up Vite.
// - category: The category of the blog post.
// - title: The title of the blog post.
// - excerpt: A short summary of the blog post.
// - author: The author's name.
// - date: The publication date.
//
// After adding a post and pushing the changes to GitHub, the website will automatically update
// (if GitHub Actions deployment is set up as described in the instructions).
export const BLOG_POST_ITEMS: BlogPostItem[] = [
  {
    id: '1',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1388/format:webp/1*1mr-h_Ma38FNb3feDqBfGw.png',
    category: 'Data Science',
    title: 'Spatial Analysis of Pedestrian Traffic Fatalities',
    excerpt: 'AI-driven spatial analysis correlating lighting, signage, and traffic control systems to reduce pedestrian fatalitie.',
    author: 'Arashdeep Mehroke',
    date: 'July 18, 2024',
    url: 'https://medium.com/@arashdeepsingh123/spatial-analysis-of-pedestrian-traffic-fatalities-in-stockton-ede386e68ca7',
  },
  {
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Data Analytics',
    title: 'Spatial Analysis of Illegal Dumping Hotspots 2020-2022',
    excerpt: 'Comprehensive spatial analysis identifying patterns and hotspots of illegal dumping activities to support municipal enforcement strategies.',
    author: 'Arashdeep Mehroke',
    date: 'March 15, 2024',
    url: 'https://medium.com/@arashdeepsingh123/spatial-analysis-of-illegal-dumping-hotspots-2020-2022-189b440f58ac',
  },
  {
    id: '4',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Data Processing',
    title: 'Addresses Anonymization Using SHP Files',
    excerpt: 'Advanced techniques for protecting citizen privacy through geographic data anonymization while maintaining analytical value.',
    author: 'Arashdeep Mehroke',
    date: 'February 20, 2024',
    url: 'https://medium.com/@arashdeepsingh123/addresses-anonymization-using-shp-files-fe76947cb908',
  },
  // Example of a new blog post structure:
  // {
  //   id: '4',
  //   imageUrl: 'https://picsum.photos/seed/newpost/600/400',
  //   category: 'Grant Writing',
  //   title: 'Securing Grants for AI Implementation in Cities',
  //   excerpt: 'A step-by-step guide for local governments to find and apply for funding for AI projects.',
  //   author: 'LuminaCity Team',
  //   date: 'November 10, 2023', // Replace with current date
  // },
  {
    id: '5',
    imageUrl: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Grant Strategy',
    title: 'Funding Your Smart City Vision: A Grant Identification Guide',
    excerpt: 'Navigate the complex landscape of federal, state, and private grants to turn your AI and data analytics projects from concepts into funded realities.',
    author: 'LuminaCity Team',
    date: 'January 15, 2025',
  },
];
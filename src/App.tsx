import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExpertiseSection from './sections/ExpertiseSection';
import SolutionsSection from './sections/SolutionsSection';
import BlogPreviewSection from './sections/BlogPreviewSection';
import ContactSection from './sections/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <ExpertiseSection id="expertise" />
        <SolutionsSection id="solutions" />
        <BlogPreviewSection id="blog" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
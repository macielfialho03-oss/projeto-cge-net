import React from 'react';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import WelcomeMessage from '@/components/WelcomeMessage';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header é renderizado automaticamente pelo LayoutWithHeader */}
      <main className="flex-grow animate-fade-in">
        <div className="gov-container pt-4">
          <WelcomeMessage />
        </div>
        <ServicesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

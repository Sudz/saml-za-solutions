
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-saml-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Building Africa's AI Future through innovative solutions
          </p>
        </div>
      </div>
      <AboutContent />
      <Footer />
    </div>
  );
};

export default AboutPage;

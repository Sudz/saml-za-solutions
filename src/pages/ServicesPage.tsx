
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-saml-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our SQL Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Comprehensive database solutions tailored for South African businesses
          </p>
        </div>
      </div>
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ServicesPage;

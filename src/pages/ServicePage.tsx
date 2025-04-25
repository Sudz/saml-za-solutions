
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

const ServicePage = () => {
  const { serviceId } = useParams();
  
  // Find the selected service from ServicesSection's services array
  const service = ServicesSection().props.children.props.children[2].props.children
    .find((service: any) => service.key === serviceId)?.props.service;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="bg-saml-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Service Not Found</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-saml-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">{service.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {service.description}
          </p>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Services Included</h2>
            <ul className="space-y-4">
              {service.services.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-saml-600 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-lg font-medium">Price Range: {service.costRange}</p>
              <p className="mt-2 text-saml-600">{service.highlight}</p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default ServicePage;

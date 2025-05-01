
import React, { useState } from 'react';
import ServiceCard from './service/ServiceCard';
import ServiceTabs from './service/ServiceTabs';
import { services } from '@/data/services';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filterServices = () => {
    if (activeTab === 'all') return services;
    if (activeTab === 'warehouse') return services.filter(service => service.category === 'Data Warehouse Solutions');
    return services.filter(service => service.id === activeTab);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">POPIA Compliant Database Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All our services are designed to ensure compliance with the Protection of Personal Information Act
          </p>
        </div>
        
        <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterServices().map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

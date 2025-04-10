
import React from 'react';
import { Globe, Shield, Zap, DollarSign, CheckCircle, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Local Expertise',
      icon: <Globe className="text-saml-600" size={24} />,
      description: 'Our team of South African certified database professionals understands the local business landscape and regulatory environment.'
    },
    {
      title: 'POPIA Compliance',
      icon: <Shield className="text-saml-600" size={24} />,
      description: 'Our solutions are designed to help your business meet all POPIA requirements for data storage, processing, and protection.'
    },
    {
      title: 'Load Shedding Resilience',
      icon: <Zap className="text-saml-600" size={24} />,
      description: 'We implement robust solutions to ensure your databases remain operational during power outages and load shedding.'
    },
    {
      title: 'Cost Optimization in ZAR',
      icon: <DollarSign className="text-saml-600" size={24} />,
      description: 'We help you minimize costs while maximizing performance, with billing in Rand to avoid currency fluctuation risks.'
    },
    {
      title: 'Local Data Sovereignty',
      icon: <CheckCircle className="text-saml-600" size={24} />,
      description: 'Options for keeping your data within South African borders to meet regulatory requirements and improve performance.'
    },
    {
      title: '24/7 Local Support',
      icon: <Clock className="text-saml-600" size={24} />,
      description: 'Our South African team is always available to handle emergencies and answer questions in your time zone.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our SQL Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver database solutions tailored to the unique challenges of the South African business environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

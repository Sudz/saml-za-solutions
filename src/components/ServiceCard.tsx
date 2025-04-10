
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface ServiceProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  costRange: string;
  highlight: string;
  category?: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300 h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          {service.icon}
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.name}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
        
        <button
          className="cursor-pointer text-saml-600 hover:text-saml-800 font-medium flex items-center mt-2"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show less' : 'Show all services'}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>
        
        {isExpanded && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Services included:</h4>
            <ul className="text-gray-600 space-y-1">
              {service.services.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-saml-600 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-gray-900">
                <span className="font-medium">Price Range:</span> {service.costRange}
              </div>
              <div className="mt-2 text-saml-600 font-medium">
                {service.highlight}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

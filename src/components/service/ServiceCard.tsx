
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col hover-card-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <div className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {service.icon}
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.name}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
        
        <div className={`mt-4 bg-gray-50 p-4 rounded-lg transition-all duration-300 ${isHovered ? 'bg-saml-50' : ''}`}>
          <h4 className="font-medium text-gray-900 mb-2">Services included:</h4>
          <ul className="text-gray-600 space-y-1">
            {service.services.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className={`text-saml-600 mr-2 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>✓</span>
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
            <div className={`mt-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <Button asChild variant="outline" className="w-full group">
                <Link to={`/services/${service.id}`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

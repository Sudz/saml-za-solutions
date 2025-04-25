
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

const sqlServices = [
  { id: 'mysql', name: 'MySQL Services' },
  { id: 'postgresql', name: 'PostgreSQL Services' },
  { id: 'mssql', name: 'MS SQL Server' },
  { id: 'oracle', name: 'Oracle Database' },
  { id: 'data-warehouse', name: 'Data Warehouse' }
];

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Logo className="h-8 mb-4" />
            <p className="text-gray-600 mb-4">
              Professional SQL database solutions tailored for South African businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/sudzdpn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-saml-600"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com/sudz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-saml-600"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:sudhir@saml.co.za" 
                className="text-gray-500 hover:text-saml-600"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {sqlServices.map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleServiceClick(service.id)}
                    className="text-gray-500 hover:text-saml-600"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-saml-600 flex-shrink-0 mr-2 mt-1" />
                <span className="text-gray-600">
                  <a href="mailto:sudhir@saml.co.za" className="hover:text-saml-600">
                    sudhir@saml.co.za
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-saml-600 flex-shrink-0 mr-2 mt-1" />
                <span className="text-gray-600">+27 72 208 4032</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-saml-600 flex-shrink-0 mr-2 mt-1" />
                <span className="text-gray-600">
                  Transwerke, Sam Hancock St,<br />
                  Braamfontein, Johannesburg, 2017
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} SAML Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

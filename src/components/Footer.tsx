
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
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
              <li><Link to="/services/mysql" className="text-gray-600 hover:text-saml-600">MySQL Services</Link></li>
              <li><Link to="/services/postgresql" className="text-gray-600 hover:text-saml-600">PostgreSQL Services</Link></li>
              <li><Link to="/services/mssql" className="text-gray-600 hover:text-saml-600">MS SQL Server</Link></li>
              <li><Link to="/services/oracle" className="text-gray-600 hover:text-saml-600">Oracle Database</Link></li>
              <li><Link to="/services/data-warehouse" className="text-gray-600 hover:text-saml-600">Data Warehouse</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-saml-600">About Us</Link></li>
              <li><Link to="/team" className="text-gray-600 hover:text-saml-600">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-saml-600">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-saml-600">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-saml-600">Contact</Link></li>
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
                <span className="text-gray-600">+27 (0) 123 456 789</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-saml-600 flex-shrink-0 mr-2 mt-1" />
                <span className="text-gray-600">Johannesburg, South Africa</span>
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

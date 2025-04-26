import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-saml-100 text-saml-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Enterprise SQL Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              South Africa's SQL <span className="text-saml-600">Database Experts</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              Optimized database services designed for South African businesses, with POPIA compliance and load shedding resilience built-in.
            </p>
            
            <div className="mt-6 space-y-3 bg-saml-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="text-saml-600 h-6 w-6" />
                <h3 className="font-semibold text-gray-800">South African Regulatory Compliance</h3>
              </div>
              <ul className="text-gray-600 space-y-2 pl-9">
                <li className="list-disc">
                  <strong>POPIA Compliance:</strong> Full compliance with the Protection of Personal Information Act
                </li>
                <li className="list-disc">
                  <strong>FICA Requirements:</strong> Solutions for financial institutions' data management
                </li>
                <li className="list-disc">
                  <strong>B-BBEE Certified:</strong> Level 2 contributor improving your procurement recognition
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-saml-600 hover:bg-saml-700 text-white px-6 py-6 rounded-lg font-semibold text-lg">
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-saml-600 text-saml-600 hover:bg-saml-50 px-6 py-6 rounded-lg font-semibold text-lg">
                <Link to="/services">
                  View Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-saml-500 rounded-lg transform rotate-3 scale-105 opacity-10"></div>
              <div className="bg-white p-8 rounded-lg shadow-xl relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <div className="h-5 w-full bg-saml-200 rounded animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-saml-100 rounded"></div>
                    <div className="h-10 w-full bg-saml-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-saml-100 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-2/3 bg-saml-100 rounded"></div>
                    <div className="h-10 w-full bg-gray-100 rounded"></div>
                    <div className="h-4 w-3/4 bg-saml-100 rounded"></div>
                  </div>
                  <div className="col-span-2 pt-4">
                    <div className="h-24 w-full bg-gray-100 rounded flex items-center justify-center">
                      <div className="text-saml-800 font-mono text-sm">SELECT * FROM solutions WHERE region = 'South Africa'</div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="h-8 w-full bg-saml-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-saml-600 to-saml-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:px-12 md:py-16 text-center text-white relative">
            <div className="absolute inset-0 bg-white opacity-5 pattern-grid-lg"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to optimize your database infrastructure?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our team of South African database experts is ready to help you implement a solution that meets your specific business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white text-saml-700 hover:bg-blue-50 px-6 py-6 text-lg font-semibold rounded-lg shadow-lg transition duration-300">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild
                  variant="outline" 
                  className="bg-saml-700 border-white text-white hover:bg-saml-800 px-6 py-6 text-lg rounded-lg font-semibold shadow-lg transition duration-300"
                >
                  <Link to="/services">View Pricing Options</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

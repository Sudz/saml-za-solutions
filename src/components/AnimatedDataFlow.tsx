
import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, Server, BarChart2, Cloud } from 'lucide-react';

const AnimatedDataFlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  
  const steps = [
    "data-source",
    "data-processing",
    "data-analysis",
    "data-visualization"
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setCurrentStep(-1);
      }
    }, { threshold: 0.5 });
    
    const section = document.getElementById('data-flow-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < steps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="data-flow-section" className="py-16 bg-gradient-to-br from-saml-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real-Time Data Integration Flow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This transaction provides real-time integrated data analysis for your specific business needs
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              {/* Data Source */}
              <div className={`text-center transition-all duration-500 ${currentStep >= 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${currentStep >= 0 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <Server className={`h-12 w-12 ${currentStep >= 0 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <h3 className="font-medium">Data Source</h3>
                <p className="text-sm text-gray-600 mt-1">Databases & APIs</p>
              </div>
              
              {/* Arrow 1 */}
              <div className={`w-16 transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <ArrowRight className={`h-8 w-8 mx-auto ${currentStep >= 1 ? 'text-saml-600' : 'text-gray-300'}`} />
              </div>
              
              {/* Data Processing */}
              <div className={`text-center transition-all duration-500 ${currentStep >= 1 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <Database className={`h-12 w-12 ${currentStep >= 1 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <h3 className="font-medium">Data Processing</h3>
                <p className="text-sm text-gray-600 mt-1">ETL & Transformation</p>
              </div>
              
              {/* Arrow 2 */}
              <div className={`w-16 transition-all duration-500 ${currentStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                <ArrowRight className={`h-8 w-8 mx-auto ${currentStep >= 2 ? 'text-saml-600' : 'text-gray-300'}`} />
              </div>
              
              {/* Data Analysis */}
              <div className={`text-center transition-all duration-500 ${currentStep >= 2 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <Cloud className={`h-12 w-12 ${currentStep >= 2 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <h3 className="font-medium">Data Analysis</h3>
                <p className="text-sm text-gray-600 mt-1">ML & Analytics</p>
              </div>
              
              {/* Arrow 3 */}
              <div className={`w-16 transition-all duration-500 ${currentStep >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                <ArrowRight className={`h-8 w-8 mx-auto ${currentStep >= 3 ? 'text-saml-600' : 'text-gray-300'}`} />
              </div>
              
              {/* Data Visualization */}
              <div className={`text-center transition-all duration-500 ${currentStep >= 3 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <BarChart2 className={`h-12 w-12 ${currentStep >= 3 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <h3 className="font-medium">Visualization</h3>
                <p className="text-sm text-gray-600 mt-1">Dashboards & Reports</p>
              </div>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden">
            <div className="space-y-8">
              {/* Data Source */}
              <div className={`flex items-center transition-all duration-500 ${currentStep >= 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-16 h-16 mr-4 rounded-full flex items-center justify-center flex-shrink-0 ${currentStep >= 0 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <Server className={`h-8 w-8 ${currentStep >= 0 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h3 className="font-medium">Data Source</h3>
                  <p className="text-sm text-gray-600">Databases & APIs</p>
                </div>
              </div>
              
              {/* Arrow 1 */}
              <div className={`flex justify-center transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="rotate-90">
                  <ArrowRight className={`h-8 w-8 mx-auto ${currentStep >= 1 ? 'text-saml-600' : 'text-gray-300'}`} />
                </div>
              </div>
              
              {/* Data Processing */}
              <div className={`flex items-center transition-all duration-500 ${currentStep >= 1 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-16 h-16 mr-4 rounded-full flex items-center justify-center flex-shrink-0 ${currentStep >= 1 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <Database className={`h-8 w-8 ${currentStep >= 1 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h3 className="font-medium">Data Processing</h3>
                  <p className="text-sm text-gray-600">ETL & Transformation</p>
                </div>
              </div>
              
              {/* Arrow 2 */}
              <div className={`flex justify-center transition-all duration-500 ${currentStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="rotate-90">
                  <ArrowRight className={`h-8 w-8 mx-auto ${currentStep >= 2 ? 'text-saml-600' : 'text-gray-300'}`} />
                </div>
              </div>
              
              {/* Data Analysis */}
              <div className={`flex items-center transition-all duration-500 ${currentStep >= 2 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-16 h-16 mr-4 rounded-full flex items-center justify-center flex-shrink-0 ${currentStep >= 2 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <Cloud className={`h-8 w-8 ${currentStep >= 2 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h3 className="font-medium">Data Analysis</h3>
                  <p className="text-sm text-gray-600">ML & Analytics</p>
                </div>
              </div>
              
              {/* Arrow 3 */}
              <div className={`flex justify-center transition-all duration-500 ${currentStep >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="rotate-90">
                  <ArrowRight className={`h-8 w-8 mx-auto ${currentStep >= 3 ? 'text-saml-600' : 'text-gray-300'}`} />
                </div>
              </div>
              
              {/* Data Visualization */}
              <div className={`flex items-center transition-all duration-500 ${currentStep >= 3 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className={`w-16 h-16 mr-4 rounded-full flex items-center justify-center flex-shrink-0 ${currentStep >= 3 ? 'bg-saml-100' : 'bg-gray-100'}`}>
                  <BarChart2 className={`h-8 w-8 ${currentStep >= 3 ? 'text-saml-600' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h3 className="font-medium">Visualization</h3>
                  <p className="text-sm text-gray-600">Dashboards & Reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Data Flow Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="bg-saml-100 rounded-full p-2 mr-3">
                  <div className="text-saml-600">✓</div>
                </div>
                <div>
                  <h4 className="font-medium">Seamless Integration</h4>
                  <p className="text-sm text-gray-600">Connect all your data sources in one unified flow</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-saml-100 rounded-full p-2 mr-3">
                  <div className="text-saml-600">✓</div>
                </div>
                <div>
                  <h4 className="font-medium">Real-Time Processing</h4>
                  <p className="text-sm text-gray-600">Act on data as it arrives with minimal latency</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="bg-saml-100 rounded-full p-2 mr-3">
                  <div className="text-saml-600">✓</div>
                </div>
                <div>
                  <h4 className="font-medium">Scalable Infrastructure</h4>
                  <p className="text-sm text-gray-600">Handle growing data volumes without performance issues</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-saml-100 rounded-full p-2 mr-3">
                  <div className="text-saml-600">✓</div>
                </div>
                <div>
                  <h4 className="font-medium">Decision Support</h4>
                  <p className="text-sm text-gray-600">Enable data-driven decisions with actionable insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedDataFlow;

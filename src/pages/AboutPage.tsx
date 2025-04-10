
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Shield, Lightbulb, Users, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-saml-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">About SAML Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            South Africa's trusted partner for enterprise-grade SQL database solutions
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded by Sudhir Deepnarain, SAML Solutions was established to provide South African businesses with professional SQL database solutions that address local challenges such as POPIA compliance, load shedding, and high latency environments.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With years of experience in the database management industry, our team brings together deep technical expertise and local market knowledge to deliver solutions that truly work for South African businesses.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to helping organizations of all sizes optimize their database infrastructure, ensure data security, and achieve operational excellence through reliable, high-performance database solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-saml-600 text-4xl font-bold mb-2">100+</div>
                  <p className="text-gray-600">Clients Served</p>
                </div>
                <div className="text-center">
                  <div className="text-saml-600 text-4xl font-bold mb-2">300+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-saml-600 text-4xl font-bold mb-2">15+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-saml-600 text-4xl font-bold mb-2">99.9%</div>
                  <p className="text-gray-600">Uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Security</h3>
              <p className="text-gray-600">We prioritize the security of your data and build solutions you can trust.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously explore cutting-edge technologies to improve our solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centric</h3>
              <p className="text-gray-600">We design our solutions around the specific needs of each client.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in all aspects of our service delivery.</p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutPage;

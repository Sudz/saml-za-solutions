
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-saml-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Get in touch with our team of SQL database experts
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our SQL database solutions? Ready to optimize your database infrastructure? Fill out the form and our team will get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-saml-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:sudhir@saml.co.za" className="hover:text-saml-600">
                        sudhir@saml.co.za
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-saml-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+27 72 208 4032</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-saml-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      Transwerke, Sam Hancock St,<br />
                      Braamfontein, Johannesburg, 2017
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="text-saml-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                    <p className="text-gray-600">
                      <a 
                        href="https://twitter.com/sudzdpn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-saml-600"
                      >
                        Twitter: @sudzdpn
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a 
                        href="https://github.com/sudz" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-saml-600"
                      >
                        GitHub: github.com/sudz
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      type="text" 
                      placeholder="Your first name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      placeholder="Your last name" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Your company name" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select 
                    id="service" 
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-saml-500 focus:ring-saml-500"
                  >
                    <option value="">Select a service</option>
                    <option value="dbms">Database Management Systems</option>
                    <option value="mysql">MySQL Services</option>
                    <option value="postgresql">PostgreSQL Services</option>
                    <option value="mssql">Microsoft SQL Server</option>
                    <option value="oracle">Oracle Database</option>
                    <option value="warehouse">Data Warehouse Solutions</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project or inquiry" 
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <div>
                  <Button className="w-full bg-saml-600 hover:bg-saml-700 text-white">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

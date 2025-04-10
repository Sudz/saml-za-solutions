
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Shield, Lightbulb, Users, Award, Mail, MapPin, Terminal, Server, Database, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-saml-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">About SAML Solutions</h1>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            <p className="mb-4">Industrial-Grade AI Services</p>
            <p className="text-lg">Powered by TMG Makerspace Africa</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Badge className="bg-[#00A98F] hover:bg-[#00A98F]/80">Kedro Demo</Badge>
            <Badge className="bg-[#181717] hover:bg-[#181717]/80">Omni Repo</Badge>
            <Badge className="bg-green-600 hover:bg-green-600/80">Service Mesh - Operational</Badge>
            <Badge className="bg-green-600 hover:bg-green-600/80">Uptime - 99.9%</Badge>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">👋🏾 Hi, I'm Sudhir!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome! I'm passionate about transforming data science experiments into production-ready solutions, particularly in the challenging and diverse context of Africa. At TMG Makerspace Africa, I build resilient AI infrastructures designed for real-world implementation.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Eliminating technical debt, not just reducing it.</strong> Based at TMG Makerspace Africa, we're revolutionizing how data science experiments transform into production systems. Our solutions are battle-tested in South Africa's challenging context, ensuring resilience in any environment worldwide.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="mailto:sudzdpn@outlook.com" className="bg-[#D14836] text-white px-3 py-1 rounded-md hover:bg-[#D14836]/80">
                  <Mail className="inline-block mr-1 h-4 w-4" /> Email
                </a>
                <a href="https://huggingface.co/sudzdpn" className="bg-[#FF6F00] text-white px-3 py-1 rounded-md hover:bg-[#FF6F00]/80">
                  HuggingFace
                </a>
                <a href="https://x.com/sudzdpn" className="bg-[#1DA1F2] text-white px-3 py-1 rounded-md hover:bg-[#1DA1F2]/80">
                  Twitter
                </a>
              </div>
            </div>
            
            <Card className="bg-white p-8 rounded-xl shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💥 What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">⚡</span>
                    <span><strong>Zero-Compromise MLOps:</strong> Production-ready from day one</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">⚡</span>
                    <span><strong>Ruthless Efficiency:</strong> 60% faster experiment-to-production time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">⚡</span>
                    <span><strong>Built for Africa:</strong> Engineered for our unique infrastructure challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">⚡</span>
                    <span><strong>Scale-Ready:</strong> Seamless scaling from prototype to continental deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🚀 Flagship Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Terminal className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">⚡ 4o Experiment Manager</h3>
              <p className="text-gray-600">The definitive ML experiment tracker for enterprise deployment</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🛡️ Technical Debt Shield</h3>
              <p className="text-gray-600">Proactive technical debt prevention system</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Server className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🔥 Production Pipeline Builder</h3>
              <p className="text-gray-600">Transform notebooks to production in minutes, not months</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Database className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📊 Analytics Command Center</h3>
              <p className="text-gray-600">Complete visibility across ML operations</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">⚡ Resource Optimizer</h3>
              <p className="text-gray-600">Maximize performance while minimizing resource usage</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lock className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🖼️ pix2tex</h3>
              <p className="text-gray-600">Vision Transformer converting equation images to LaTeX code</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🛠️ Core Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MLOps</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600">Kedro</Badge>
                <Badge className="bg-blue-600">MLflow</Badge>
                <Badge className="bg-blue-600">Kubeflow</Badge>
                <Badge className="bg-blue-600">TensorFlow Extended</Badge>
              </div>
            </Card>
            
            <Card className="p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Native</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-600">AWS IoT Greengrass</Badge>
                <Badge className="bg-green-600">Azure Arc</Badge>
                <Badge className="bg-green-600">Google Anthos</Badge>
              </div>
            </Card>
            
            <Card className="p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Fabric</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">Delta Lake</Badge>
                <Badge className="bg-purple-600">Apache Iceberg</Badge>
                <Badge className="bg-purple-600">AWS Glue</Badge>
              </div>
            </Card>
            
            <Card className="p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-red-600">HashiCorp Vault</Badge>
                <Badge className="bg-red-600">AWS IAM</Badge>
                <Badge className="bg-red-600">Azure Sentinel</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Impact Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">🌍 Impact Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🏢 Database Management</h3>
              <p className="text-gray-600">Enterprise-grade DBMS with POPIA compliance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🌍 MySQL Services</h3>
              <p className="text-gray-600">Optimized MySQL solutions for African businesses</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🎯 PostgreSQL Services</h3>
              <p className="text-gray-600">Advanced PostgreSQL implementations with high availability</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-saml-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-saml-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🤖 AI Integration</h3>
              <p className="text-gray-600">Custom AI solutions for unique African challenges</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🏆 Certifications & Achievements</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🎓</span>
                    <span>Microsoft Azure AI Engineer Associate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🎓</span>
                    <span>Microsoft Certified: Azure Solutions Architect Expert</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🎓</span>
                    <span>Certified Information Systems Security Professional (CISSP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🏆</span>
                    <span>Red Bull Basement National Finalist 🇿🇦</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">⚡</span>
                    <span>Microsoft Founders Hub - Level 3</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🎓</span>
                    <span>Microsoft Certified: Azure Fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🎓</span>
                    <span>Microsoft Certified: Azure AI Fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🚗</span>
                    <span>AWS DeepRacer Championship Participant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">☁️</span>
                    <span>AWS Cloud Practitioner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-saml-600 mr-2">🎓</span>
                    <span>Microsoft Certified Solutions Developer: SQL Server 2016</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center">
              <MapPin className="text-saml-600 mr-2" size={18} />
              <a href="https://g.co/kgs/CKQ5KiE" className="text-gray-600 hover:text-saml-600">
                Transwerke, Braamfontein, Johannesburg, 2017
              </a>
            </div>
            <div>
              <span className="text-gray-600">🚀 Innovation Hub: </span>
              <a href="https://tmgmakerspace.africa" className="text-saml-600 hover:underline">
                tmgmakerspace.africa
              </a>
            </div>
            <div>
              <a href="https://g.dev/sudz" className="bg-[#4285F4] text-white px-3 py-1 rounded-md hover:bg-[#4285F4]/80 inline-flex items-center">
                <span>Google Developer Profile</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-lg italic text-gray-700">Building Africa's AI Future</p>
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

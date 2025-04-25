
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

const AboutContent = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🌍 Industrial-Grade AI Services</h2>
          <p className="text-xl text-saml-600">Powered by TMG Makerspace Africa</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open('https://github.com/gpt-omni/mini-omni', '_blank')}
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open('https://status.tmgmakerspace.africa', '_blank')}
          >
            Service Status
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">👋🏾 Hi, I'm Sudhir!</h3>
            <p className="text-gray-600 mb-6">
              I'm passionate about transforming data science experiments into production-ready solutions, 
              particularly in the challenging and diverse context of Africa. At TMG Makerspace Africa, 
              I build resilient AI infrastructures designed for real-world implementation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">🎯 Our Mission</h3>
            <p className="text-gray-600">
              Eliminating technical debt, not just reducing it. Based at TMG Makerspace Africa, 
              we're revolutionizing how data science experiments transform into production systems. 
              Our solutions are battle-tested in South Africa's challenging context, ensuring 
              resilience in any environment worldwide.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">💥 What Sets Us Apart</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Zero-Compromise MLOps: Production-ready from day one",
              "Ruthless Efficiency: 60% faster experiment-to-production time",
              "Built for Africa: Engineered for our unique infrastructure challenges",
              "Scale-Ready: Seamless scaling from prototype to continental deployment"
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <p className="text-saml-600">⚡ {feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">🚀 Flagship Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "4o Experiment Manager",
                description: "The definitive ML experiment tracker for enterprise deployment"
              },
              {
                icon: "🛡️",
                title: "Technical Debt Shield",
                description: "Proactive technical debt prevention system"
              },
              {
                icon: "🔥",
                title: "Production Pipeline Builder",
                description: "Transform notebooks to production in minutes, not months"
              },
              {
                icon: "📊",
                title: "Analytics Command Center",
                description: "Complete visibility across ML operations"
              },
              {
                icon: "⚡",
                title: "Resource Optimizer",
                description: "Maximize performance while minimizing resource usage"
              },
              {
                icon: "🧩",
                title: "Project IDX",
                description: "Integrated development experience for seamless collaboration"
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <div className="text-2xl mb-2">{solution.icon}</div>
                <h4 className="font-semibold mb-2">{solution.title}</h4>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-6">🏢 Contact</h3>
          <p className="text-gray-600">Transwerke, Sam Hancock St, Braamfontein, Johannesburg, 2017</p>
          <p className="text-gray-600">Innovation Hub: tmgmakerspace.africa</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

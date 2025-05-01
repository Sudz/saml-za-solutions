
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link, Cloud, Database, Server, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface PlatformCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
  index: number;
  isVisible: boolean;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ title, icon, color, description, features, index, isVisible }) => {
  return (
    <Card className={`overflow-hidden transition-all duration-700 hover:shadow-lg transform hover:-translate-y-1 border-t-4 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
         style={{ borderTopColor: color }}>
      <CardHeader className="pb-3">
        <div className="flex items-center mb-2">
          <div className="mr-3 rounded-full p-2" style={{ backgroundColor: `${color}25` }}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="text-saml-600 mr-2 mt-1">✓</div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const PlatformIntegrationSection = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('platform-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const platforms = [
    {
      title: "AWS Integration",
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      color: "#0062ed",
      description: "Seamless integration with Amazon Web Services",
      features: [
        "RDS performance optimization",
        "Redshift data warehouse solutions",
        "Aurora MySQL & PostgreSQL expertise",
        "DynamoDB integration for hybrid solutions"
      ]
    },
    {
      title: "Microsoft Azure",
      icon: <Database className="h-6 w-6 text-blue-800" />,
      color: "#0043ae",
      description: "Full Microsoft Azure environment support",
      features: [
        "Azure SQL Database optimization",
        "Azure Synapse Analytics integration",
        "Cosmos DB performance tuning",
        "Microsoft Power BI connectivity"
      ]
    },
    {
      title: "Google Cloud",
      icon: <Cloud className="h-6 w-6 text-green-600" />,
      color: "#1E8E3E",
      description: "Google Cloud Platform database solutions",
      features: [
        "Cloud SQL optimization for MySQL & PostgreSQL",
        "BigQuery data warehouse expertise",
        "Spanner global-scale database solutions",
        "Looker analytics integration"
      ]
    },
    {
      title: "On-Premises",
      icon: <Server className="h-6 w-6 text-gray-600" />,
      color: "#4A4A4A",
      description: "Traditional on-premises database solutions",
      features: [
        "Oracle Database optimization",
        "Microsoft SQL Server tuning",
        "MySQL & PostgreSQL performance",
        "Hybrid cloud integration strategies"
      ]
    },
    {
      title: "Multi-Cloud",
      icon: <Layers className="h-6 w-6 text-purple-600" />,
      color: "#7E69AB",
      description: "Cross-platform database management",
      features: [
        "Consistent database management across clouds",
        "Data synchronization between platforms",
        "Unified monitoring and alerts",
        "Disaster recovery across providers"
      ]
    },
    {
      title: "Data Integration",
      icon: <Link className="h-6 w-6 text-orange-600" />,
      color: "#ff7b0d",
      description: "Connect data across your organization",
      features: [
        "ETL pipeline development and optimization",
        "Real-time data streaming solutions",
        "API development for data access",
        "Legacy system integration"
      ]
    }
  ];

  return (
    <section id="platform-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cross-Platform Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SAML deploys solutions across these platforms for seamless data management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.title}
              title={platform.title}
              icon={platform.icon}
              color={platform.color}
              description={platform.description}
              features={platform.features}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`bg-gradient-to-r from-saml-50 to-blue-50 p-6 rounded-xl shadow-sm border border-saml-100 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Need custom platform integration?</h3>
              <p className="text-gray-700">
                Our team of experts can help you integrate your database solutions with any platform, including custom or legacy systems.
              </p>
            </div>
            <Button className="bg-saml-600 hover:bg-saml-700 text-white px-6 py-6 rounded-lg whitespace-nowrap">
              Contact Our Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntegrationSection;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DataAnalyticsSection from '@/components/DataAnalyticsSection';
import PlatformIntegrationSection from '@/components/PlatformIntegrationSection';
import AnimatedDataFlow from '@/components/AnimatedDataFlow';
import '../components/ScrollAnimation.css';

const Index = () => {
  // Add smooth scrolling functionality
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AnimatedDataFlow />
      <DataAnalyticsSection />
      <PlatformIntegrationSection />
      <ServicesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

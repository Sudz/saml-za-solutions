
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-saml-600">SAML</span>
      <span className="text-xl font-medium text-gray-700">.co.za</span>
    </div>
  );
};

export default Logo;

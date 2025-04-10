
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d604e3bd-8d7a-40ba-bc34-c49edaf297c2.png" 
        alt="SAML 10X NOT 10%" 
        className="h-12 w-auto" 
      />
    </div>
  );
};

export default Logo;

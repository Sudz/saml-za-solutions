
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/abe3b87b-0ca9-4eaa-b6af-88b34673765e.png" 
        alt="SAML 10X NOT 10%" 
        className="h-12 w-auto" 
      />
    </div>
  );
};

export default Logo;

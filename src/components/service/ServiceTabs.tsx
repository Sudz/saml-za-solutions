
import React from 'react';

interface ServiceTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      <button 
        className={`px-4 py-2 rounded-full transition ${activeTab === 'all' ? 'bg-saml-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('all')}
      >
        All Services
      </button>
      <button 
        className={`px-4 py-2 rounded-full transition ${activeTab === 'dbms' ? 'bg-saml-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('dbms')}
      >
        DBMS
      </button>
      <button 
        className={`px-4 py-2 rounded-full transition ${activeTab === 'mysql' ? 'bg-saml-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('mysql')}
      >
        MySQL
      </button>
      <button 
        className={`px-4 py-2 rounded-full transition ${activeTab === 'postgresql' ? 'bg-saml-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('postgresql')}
      >
        PostgreSQL
      </button>
      <button 
        className={`px-4 py-2 rounded-full transition ${activeTab === 'mssql' ? 'bg-saml-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('mssql')}
      >
        MS SQL
      </button>
      <button 
        className={`px-4 py-2 rounded-full transition ${activeTab === 'oracle' ? 'bg-saml-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('oracle')}
      >
        Oracle
      </button>
      <button 
        className={`px-4 py-2 rounded-full transition ${activeTab === 'warehouse' ? 'bg-saml-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('warehouse')}
      >
        Data Warehouse
      </button>
    </div>
  );
};

export default ServiceTabs;

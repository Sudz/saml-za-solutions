
import { Database, Server, Snowflake, Cloud } from 'lucide-react';
import React from 'react';
import { ServiceProps } from '@/components/service/ServiceCard';

export const services: ServiceProps[] = [
  {
    id: 'dbms',
    name: 'Database Management Systems (DBMS)',
    icon: <Server className="text-saml-600 h-12 w-12" />,
    description: 'Our comprehensive DBMS services provide end-to-end management of your database infrastructure, ensuring optimal performance, security, and POPIA compliance.',
    services: [
      'Database design and architecture consulting',
      'Installation and configuration',
      'POPIA-compliant data governance implementation',
      'Performance tuning optimized for South African internet conditions',
      'Backup and recovery planning with load shedding considerations',
      'Security auditing and implementation aligned with local regulations',
      'High availability and disaster recovery solutions for the SA market'
    ],
    costRange: 'R25,000-R50,000/month depending on database size and complexity',
    highlight: 'POPIA Compliant Database Solutions'
  },
  {
    id: 'mysql',
    name: 'MySQL Services',
    icon: <Database className="text-green-600" size={24} />,
    description: 'MySQL is one of the world\'s most popular open-source relational database management systems, ideal for South African businesses seeking cost-effective and reliable database solutions.',
    services: [
      'MySQL database design and implementation with POPIA compliance built-in',
      'Query optimization for South African bandwidth considerations',
      'Replication setup with local and international options',
      'Migration from legacy South African banking and retail systems',
      'Performance tuning for high latency environments',
      'Version upgrades and security patches',
      '24/7 local monitoring and support by SA-based engineers'
    ],
    costRange: 'R13,500-R25,000/month for managed services',
    highlight: 'Top choice for cost-conscious businesses with relational data needs'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL Services',
    icon: <Database className="text-purple-600" size={24} />,
    description: 'PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.',
    services: [
      'PostgreSQL installation and configuration',
      'Database design and optimization',
      'High availability cluster setup',
      'Performance tuning and monitoring',
      'Extensions management',
      'Version upgrades',
      'Advanced features implementation (JSON support, partitioning)',
      'Database migration'
    ],
    costRange: 'R15,000-R30,000/month for managed services',
    highlight: 'Ideal for businesses needing advanced features without licensing costs'
  },
  {
    id: 'mssql',
    name: 'Microsoft SQL Server Services',
    icon: <Database className="text-red-600" size={24} />,
    description: 'Microsoft SQL Server is widely used in South African enterprise environments, particularly in financial services, retail, and government sectors. Our services are tailored for local business needs.',
    services: [
      'SQL Server installation and configuration with Microsoft Azure South Africa regions',
      'Performance tuning optimized for local network conditions',
      'High availability solutions designed for load shedding environments',
      'Business intelligence implementation for South African business reporting needs',
      'Security hardening with POPIA and ECT Act compliance',
      'Database maintenance schedule aligned with South African business hours',
      'Version upgrades and migrations with minimal disruption',
      'Licensing optimization for South African businesses'
    ],
    costRange: 'R20,000-R42,000/month for managed services (excluding licensing costs)',
    highlight: 'Enterprise-grade solution for Windows-based environments'
  },
  {
    id: 'oracle',
    name: 'Oracle Database Services',
    icon: <Database className="text-yellow-600" size={24} />,
    description: 'Oracle Database is an enterprise-grade relational database management system known for its performance, scalability, and comprehensive feature set.',
    services: [
      'Oracle Database installation and configuration',
      'Performance tuning and optimization',
      'RAC (Real Application Clusters) implementation',
      'Data Guard setup for disaster recovery',
      'Security assessment and hardening',
      'Patching and version upgrades',
      'Licensing optimization',
      '24/7 monitoring and support'
    ],
    costRange: 'R30,000-R58,500/month for managed services (excluding licensing costs)',
    highlight: 'For large enterprises needing maximum performance and reliability'
  },
  {
    id: 'redshift',
    name: 'Amazon Redshift',
    icon: <Database className="text-blue-400" size={24} />,
    description: 'Amazon Redshift is a fully managed, petabyte-scale data warehouse service with options for deployment in the AWS Cape Town region to meet data residency requirements.',
    services: [
      'Redshift cluster design and implementation in the AWS Africa (Cape Town) region',
      'Data modeling and schema design with POPIA compliance',
      'ETL pipeline development optimized for South African data sources',
      'Performance tuning for local network conditions',
      'Security implementation meeting POPIA and industry regulations',
      'Integration with local and international BI tools',
      'Ongoing maintenance with backup strategies designed for load shedding resilience'
    ],
    costRange: 'R20,000-R42,000/month for managed services (excluding AWS infrastructure costs)',
    highlight: 'Best for analytics workloads on AWS infrastructure',
    category: 'Data Warehouse Solutions'
  },
  {
    id: 'bigquery',
    name: 'Google BigQuery',
    icon: <Cloud className="text-blue-500" size={24} />,
    description: 'Google BigQuery is a serverless, highly scalable, and cost-effective multi-cloud data warehouse designed for business agility.',
    services: [
      'BigQuery implementation and configuration',
      'Data migration and integration',
      'Query optimization',
      'Security and access control setup',
      'Cost optimization strategies',
      'Machine learning integration',
      'BI tool connection and visualization'
    ],
    costRange: 'R18,500-R38,500/month for managed services (excluding Google Cloud costs)',
    highlight: 'Ideal for organizations requiring serverless data warehousing',
    category: 'Data Warehouse Solutions'
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    icon: <Snowflake className="text-blue-600" size={24} />,
    description: 'Snowflake is a cloud-based data warehouse delivered as a Software-as-a-Service (SaaS) that offers full SQL database support and unique architecture designed for the cloud.',
    services: [
      'Snowflake implementation and architecture design',
      'Data migration from existing platforms',
      'Performance optimization',
      'Security configuration',
      'Cost management strategies',
      'Integration with data pipeline tools',
      'Training and support'
    ],
    costRange: 'R22,000-R47,000/month for managed services (excluding Snowflake subscription costs)',
    highlight: 'Perfect for enterprises needing scalable cloud data warehousing',
    category: 'Data Warehouse Solutions'
  }
];

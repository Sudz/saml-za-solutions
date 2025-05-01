
import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight, Database, Server, BarChart2, Activity, RefreshCw } from 'lucide-react';

const sampleData = [
  { name: 'Jan', value: 4000, queries: 2400, latency: 240 },
  { name: 'Feb', value: 3000, queries: 1398, latency: 139 },
  { name: 'Mar', value: 2000, queries: 9800, latency: 980 },
  { name: 'Apr', value: 2780, queries: 3908, latency: 390 },
  { name: 'May', value: 1890, queries: 4800, latency: 480 },
  { name: 'Jun', value: 2390, queries: 3800, latency: 380 },
  { name: 'Jul', value: 3490, queries: 4300, latency: 430 },
];

const chartConfig = {
  throughput: { label: "Throughput", theme: { light: "#0062ed", dark: "#1a81f8" } },
  queries: { label: "Queries", theme: { light: "#7cc2ff", dark: "#3aa0ff" } },
  latency: { label: "Latency", theme: { light: "#ff7b0d", dark: "#ff9930" } },
};

const DataAnalyticsSection = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('realtime');
  const [animatedData, setAnimatedData] = useState<typeof sampleData>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('data-analytics-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= sampleData.length) {
          setAnimatedData(sampleData.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 300);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible]);

  return (
    <section id="data-analytics-section" className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real-Time Integrated Data Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor and optimize your business performance with our real-time data analysis solutions
          </p>
        </div>

        <div className="mb-12">
          <Tabs defaultValue="realtime" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="realtime" className="text-sm md:text-base">Real-Time Monitoring</TabsTrigger>
              <TabsTrigger value="business" className="text-sm md:text-base">Business Intelligence</TabsTrigger>
              <TabsTrigger value="predictive" className="text-sm md:text-base">Predictive Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="realtime" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className={`col-span-1 lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-saml-600" />
                      Database Performance Metrics
                    </CardTitle>
                    <CardDescription>
                      Real-time monitoring of your SQL database performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[300px]">
                      <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={animatedData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip />
                            <Legend />
                            <Line 
                              type="monotone" 
                              dataKey="value" 
                              name="Throughput" 
                              stroke="var(--color-throughput)" 
                              strokeWidth={2}
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                              animationDuration={1500}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="queries" 
                              name="Queries" 
                              stroke="var(--color-queries)" 
                              strokeWidth={2}
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                              animationDuration={1500}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <RefreshCw className="mr-2 h-5 w-5 text-saml-600" />
                      Live Latency
                    </CardTitle>
                    <CardDescription>
                      Query response time metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[300px]">
                      <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={animatedData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip />
                            <Area 
                              type="monotone" 
                              dataKey="latency" 
                              name="Latency" 
                              fill="var(--color-latency)" 
                              stroke="var(--color-latency)"
                              fillOpacity={0.3} 
                              animationDuration={1500}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-saml-50 p-6 rounded-lg shadow-sm border border-saml-100 mt-8">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Database className="mr-2 h-5 w-5 text-saml-600" />
                  How Real-Time Analysis Benefits Your Business
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                      <div className="bg-saml-600 text-white h-6 w-6 rounded-full flex items-center justify-center">✓</div>
                    </div>
                    <div>
                      <h4 className="font-medium">Instant Issue Detection</h4>
                      <p className="text-gray-600">Identify and address performance bottlenecks before they affect your operations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                      <div className="bg-saml-600 text-white h-6 w-6 rounded-full flex items-center justify-center">✓</div>
                    </div>
                    <div>
                      <h4 className="font-medium">Resource Optimization</h4>
                      <p className="text-gray-600">Automatically scale resources based on real-time usage patterns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                      <div className="bg-saml-600 text-white h-6 w-6 rounded-full flex items-center justify-center">✓</div>
                    </div>
                    <div>
                      <h4 className="font-medium">Cost Reduction</h4>
                      <p className="text-gray-600">Identify inefficient queries and optimize for reduced infrastructure costs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                      <div className="bg-saml-600 text-white h-6 w-6 rounded-full flex items-center justify-center">✓</div>
                    </div>
                    <div>
                      <h4 className="font-medium">Proactive Alerts</h4>
                      <p className="text-gray-600">Receive notifications when metrics exceed predefined thresholds</p>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="business" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="overflow-hidden transition-all duration-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart2 className="mr-2 h-5 w-5 text-saml-600" />
                      Business Performance Dashboard
                    </CardTitle>
                    <CardDescription>
                      Key business metrics at a glance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[300px]">
                      <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={sampleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip />
                            <Legend />
                            <Bar dataKey="value" name="Revenue" fill="#0062ed" />
                            <Bar dataKey="queries" name="Transactions" fill="#7cc2ff" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Custom BI Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Our Business Intelligence tools integrate with your existing data infrastructure to provide actionable insights tailored to your business needs.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="text-saml-600 mr-2 mt-1">✓</div>
                      <span>Custom dashboards with your specific KPIs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-saml-600 mr-2 mt-1">✓</div>
                      <span>Scheduled reports delivered to stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-saml-600 mr-2 mt-1">✓</div>
                      <span>Data visualization designed for non-technical users</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-saml-600 mr-2 mt-1">✓</div>
                      <span>Cross-platform integration with your existing tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="predictive" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 overflow-hidden transition-all duration-700">
                  <CardHeader>
                    <CardTitle>Predictive Trend Analysis</CardTitle>
                    <CardDescription>
                      Machine learning algorithms predict future business trends
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[300px]">
                      <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={sampleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip />
                            <Legend />
                            <Line 
                              type="monotone" 
                              dataKey="value" 
                              name="Actual" 
                              stroke="#0062ed" 
                              strokeWidth={2}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="queries" 
                              name="Predicted" 
                              stroke="#ff7b0d" 
                              strokeWidth={2}
                              strokeDasharray="5 5"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Powered Insights</CardTitle>
                    <CardDescription>
                      Advanced analytics predicting future trends
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="bg-saml-50 p-3 rounded-lg border border-saml-100">
                        <span className="font-medium">Demand Forecasting</span>
                        <p className="text-sm text-gray-600">Predict customer demand patterns</p>
                      </li>
                      <li className="bg-saml-50 p-3 rounded-lg border border-saml-100">
                        <span className="font-medium">Anomaly Detection</span>
                        <p className="text-sm text-gray-600">Identify unusual patterns in your data</p>
                      </li>
                      <li className="bg-saml-50 p-3 rounded-lg border border-saml-100">
                        <span className="font-medium">Risk Assessment</span>
                        <p className="text-sm text-gray-600">Evaluate potential business risks</p>
                      </li>
                      <li className="bg-saml-50 p-3 rounded-lg border border-saml-100">
                        <span className="font-medium">Growth Opportunities</span>
                        <p className="text-sm text-gray-600">Discover untapped business potential</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsSection;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BandwidthUsage = () => {
  const navigate = useNavigate();
  
  const bandwidthData = [
    { app: 'E-Commerce Platform', usage: '2.4 TB', percentage: 100 },
    { app: 'Analytics Dashboard', usage: '1.8 TB', percentage: 75 },
    { app: 'Media Streaming', usage: '1.2 TB', percentage: 50 },
    { app: 'API Gateway', usage: '890 GB', percentage: 37 },
    { app: 'Blog Platform', usage: '650 GB', percentage: 27 }
  ];

  const handleAppClick = (appName: string) => {
    navigate(`/detailed-analytics?app=${encodeURIComponent(appName)}&metric=bandwidth`);
  };

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Top 5 by Bandwidth Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {bandwidthData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors duration-200 group"
              onClick={() => handleAppClick(item.app)}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                    {item.app}
                  </div>
                  <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {item.usage}
                </Badge>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BandwidthUsage;

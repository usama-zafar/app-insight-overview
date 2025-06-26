
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AutoscalingUsage = () => {
  const navigate = useNavigate();
  
  const autoscalingData = [
    { app: 'E-Commerce Platform', cost: '$1,240', podHours: '2,480h', percentage: 100 },
    { app: 'API Gateway', cost: '$890', podHours: '1,780h', percentage: 72 },
    { app: 'Analytics Dashboard', cost: '$650', podHours: '1,300h', percentage: 52 },
    { app: 'Media Streaming', cost: '$480', podHours: '960h', percentage: 39 },
    { app: 'Blog Platform', cost: '$320', podHours: '640h', percentage: 26 }
  ];

  const handleAppClick = (appName: string) => {
    navigate(`/detailed-analytics?app=${encodeURIComponent(appName)}&metric=autoscaling`);
  };

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Top 5 by Autoscaling Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-4">
          {autoscalingData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors duration-200 group"
              onClick={() => handleAppClick(item.app)}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium text-slate-800 group-hover:text-orange-600 transition-colors">
                    {item.app}
                  </div>
                  <div className="text-sm text-slate-600">{item.podHours}</div>
                  <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  {item.cost}
                </Badge>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AutoscalingUsage;

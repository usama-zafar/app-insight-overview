
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VisitsAnalytics = () => {
  const navigate = useNavigate();
  
  const visitsData = [
    { app: 'Blog Platform', visits: '450K', percentage: 100 },
    { app: 'E-Commerce Platform', visits: '380K', percentage: 84 },
    { app: 'Analytics Dashboard', visits: '290K', percentage: 64 },
    { app: 'Portfolio Site', visits: '180K', percentage: 40 },
    { app: 'API Documentation', visits: '120K', percentage: 27 }
  ];

  const handleAppClick = (appName: string) => {
    navigate(`/detailed-analytics?app=${encodeURIComponent(appName)}&metric=visits`);
  };

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <CardTitle className="flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Top 5 by Monthly Visits
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {visitsData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors duration-200 group"
              onClick={() => handleAppClick(item.app)}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium text-slate-800 group-hover:text-green-600 transition-colors">
                    {item.app}
                  </div>
                  <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {item.visits}
                </Badge>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-green-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitsAnalytics;

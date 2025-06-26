
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardDrive, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DiskSpaceUsage = () => {
  const navigate = useNavigate();
  
  const diskData = [
    { app: 'Media Streaming', usage: '850 GB', percentage: 100 },
    { app: 'File Storage Service', usage: '720 GB', percentage: 85 },
    { app: 'Backup System', usage: '650 GB', percentage: 76 },
    { app: 'E-Commerce Platform', usage: '480 GB', percentage: 56 },
    { app: 'Analytics Dashboard', usage: '320 GB', percentage: 38 }
  ];

  const handleAppClick = (appName: string) => {
    navigate(`/detailed-analytics?app=${encodeURIComponent(appName)}&metric=disk-space`);
  };

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardTitle className="flex items-center gap-2">
          <HardDrive className="w-5 h-5" />
          Top 5 by Disk Space Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {diskData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors duration-200 group"
              onClick={() => handleAppClick(item.app)}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium text-slate-800 group-hover:text-purple-600 transition-colors">
                    {item.app}
                  </div>
                  <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  {item.usage}
                </Badge>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiskSpaceUsage;

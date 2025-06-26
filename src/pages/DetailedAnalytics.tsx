
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Activity, Eye, HardDrive, Zap } from 'lucide-react';

const DetailedAnalytics = () => {
  const [searchParams] = useSearchParams();
  const app = searchParams.get('app') || 'Unknown App';
  const metric = searchParams.get('metric') || 'general';

  const getMetricIcon = () => {
    switch (metric) {
      case 'bandwidth': return <Activity className="w-6 h-6" />;
      case 'visits': return <Eye className="w-6 h-6" />;
      case 'disk-space': return <HardDrive className="w-6 h-6" />;
      case 'autoscaling': return <Zap className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  const getMetricColor = () => {
    switch (metric) {
      case 'bandwidth': return 'from-blue-500 to-cyan-500';
      case 'visits': return 'from-green-500 to-emerald-500';
      case 'disk-space': return 'from-purple-500 to-pink-500';
      case 'autoscaling': return 'from-orange-500 to-red-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/plans-overview">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Plans Overview
            </Button>
          </Link>
        </div>

        <Card className="bg-white shadow-lg border-0">
          <CardHeader className={`bg-gradient-to-r ${getMetricColor()} text-white`}>
            <CardTitle className="flex items-center gap-3 text-2xl">
              {getMetricIcon()}
              Detailed Analytics: {app}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="text-6xl">📊</div>
              <h2 className="text-2xl font-bold text-slate-800">Analytics Dashboard</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                This is a placeholder for the detailed analytics view for <strong>{app}</strong> 
                focusing on <strong>{metric.replace('-', ' ')}</strong> metrics. 
                In a real application, this would show comprehensive charts, graphs, and detailed statistics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800">Real-time Data</div>
                  <div className="text-slate-600">Live metrics and monitoring</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800">Historical Trends</div>
                  <div className="text-slate-600">Performance over time</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800">Detailed Reports</div>
                  <div className="text-slate-600">Comprehensive analysis</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DetailedAnalytics;

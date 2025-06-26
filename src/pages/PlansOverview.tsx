
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PlansStats from '@/components/PlansStats';
import BandwidthUsage from '@/components/BandwidthUsage';
import VisitsAnalytics from '@/components/VisitsAnalytics';
import DiskSpaceUsage from '@/components/DiskSpaceUsage';
import AutoscalingUsage from '@/components/AutoscalingUsage';

const PlansOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-800">Plans Overview</h1>
          <p className="text-slate-600 text-lg">Monitor your applications and resource usage</p>
        </div>

        {/* Plans Statistics */}
        <PlansStats />

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BandwidthUsage />
          <VisitsAnalytics />
          <DiskSpaceUsage />
          <AutoscalingUsage />
        </div>
      </div>
    </div>
  );
};

export default PlansOverview;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, TrendingUp, Building2, Sparkles, Crown } from 'lucide-react';

const PlansStats = () => {
  const plansData = [
    { type: 'Starter', count: 4, color: 'bg-blue-500', icon: Users },
    { type: 'Pro', count: 0, color: 'bg-purple-500', icon: Zap },
    { type: 'Growth', count: 1, color: 'bg-green-500', icon: TrendingUp },
    { type: 'Enterprise', count: 1, color: 'bg-orange-500', icon: Building2 },
    { type: 'Custom', count: 0, color: 'bg-pink-500', icon: Sparkles }
  ];

  const totalPlans = plansData.reduce((sum, plan) => sum + plan.count, 0);

  return (
    <Card className="bg-white shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Crown className="w-6 h-6" />
          Active Plans Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-800">{totalPlans}</div>
            <div className="text-slate-600">Total Active Plans</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {plansData.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div key={plan.type} className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className={`${plan.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-800">{plan.count}</div>
                <div className="text-sm text-slate-600">{plan.type}</div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlansStats;

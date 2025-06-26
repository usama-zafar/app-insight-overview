
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl font-bold text-slate-800">
            Application Management Hub
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Monitor your applications, track resource usage, and manage your plans all in one place
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <BarChart3 className="w-8 h-8" />
                Dashboard Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Plans Management</h3>
                  <p className="text-slate-600">Track active plans and subscriptions</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Usage Analytics</h3>
                  <p className="text-slate-600">Monitor bandwidth, visits, and resources</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Performance Insights</h3>
                  <p className="text-slate-600">Detailed application metrics</p>
                </div>
              </div>

              <div className="text-center">
                <Link to="/plans-overview">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View Plans Overview
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;

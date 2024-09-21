import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header1';

const halfCircleData = [
  { name: 'Filled', value: 60 },
  { name: 'Empty', value: 40 },
];

const barChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 280 },
  { name: 'May', value: 590 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-start space-x-6">
        <div className="w-1/2 relative">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={halfCircleData}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill="#FFA500" />
                <Cell fill="#FFD580" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variant="outline"
              >
                Open Popover
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Popover Content</h4>
                  <p className="text-sm text-muted-foreground">
                    This is the popover content. You can add more details or actions here.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Dashboard Header</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Welcome to your dashboard. Here you can view important metrics and data visualizations.</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FFA500" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow ml-0 overflow-y-auto">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import { TrendingUp, Clock, Zap, Battery } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Daily Usage"
        value="28.5 kWh"
        change="+2.3%"
        icon={<TrendingUp className="h-6 w-6 text-blue-500" />}
      />
      <StatCard
        title="Peak Hours"
        value="2-4 PM"
        change="High demand"
        icon={<Clock className="h-6 w-6 text-yellow-500" />}
      />
      <StatCard
        title="Real-time Power"
        value="3.2 kW"
        change="Normal usage"
        icon={<Zap className="h-6 w-6 text-green-500" />}
      />
      <StatCard
        title="Efficiency Score"
        value="87/100"
        change="+5 pts"
        icon={<Battery className="h-6 w-6 text-purple-500" />}
      />
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
        {icon}
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{change}</p>
    </div>
  );
}
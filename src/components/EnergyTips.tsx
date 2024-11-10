import React from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';

export function EnergyTips() {
  const tips = [
    {
      title: 'Switch to LED Bulbs',
      description: 'Replace traditional bulbs with LED alternatives to save up to 75% on lighting costs.',
    },
    {
      title: 'Optimize Thermostat',
      description: 'Set your thermostat 7-10°F lower for 8 hours daily to reduce heating costs by 10%.',
    },
    {
      title: 'Unplug Devices',
      description: 'Disconnect unused electronics to prevent phantom energy consumption.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Energy Saving Tips</h2>
      </div>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <TipCard key={index} {...tip} />
        ))}
      </div>
    </div>
  );
}

interface TipCardProps {
  title: string;
  description: string;
}

function TipCard({ title, description }: TipCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="border dark:border-gray-700 rounded-lg">
      <button
        className="w-full px-4 py-3 flex items-center justify-between text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium text-gray-900 dark:text-white">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transform transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isExpanded && (
        <div className="px-4 pb-3 text-sm text-gray-600 dark:text-gray-400">{description}</div>
      )}
    </div>
  );
}
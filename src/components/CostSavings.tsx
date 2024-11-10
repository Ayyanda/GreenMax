import React from 'react';
import { DollarSign } from 'lucide-react';

export function CostSavings() {
  const savings = [
    {
      title: 'Monthly Savings',
      amount: '$45.20',
      description: 'Based on current usage patterns',
    },
    {
      title: 'Annual Projection',
      amount: '$542.40',
      description: 'Estimated yearly savings',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <DollarSign className="h-5 w-5 text-green-500 mr-2" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Cost Savings</h2>
      </div>
      <div className="space-y-4">
        {savings.map((item, index) => (
          <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {item.title}
              </span>
              <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                {item.amount}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
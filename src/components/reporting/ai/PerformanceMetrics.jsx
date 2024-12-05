import React from 'react';

const metrics = [
  {
    label: 'Active Conversations',
    value: '24',
    trend: '+12%',
    isPositive: true
  },
  {
    label: 'Leads Generated',
    value: '156',
    trend: '+8%',
    isPositive: true
  },
  {
    label: 'Avg. Response Time',
    value: '45s',
    trend: '-15%',
    isPositive: true
  },
  {
    label: 'Conversion Rate',
    value: '18%',
    trend: '+5%',
    isPositive: true
  },
  {
    label: 'Client Satisfaction',
    value: '4.8/5',
    trend: '+0.3',
    isPositive: true
  }
];

export function PerformanceMetrics() {
  return (
    <div className="space-y-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="p-4 rounded-lg border border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {metric.label}
            </p>
            <span
              className={`text-sm font-medium ${
                metric.isPositive
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {metric.trend}
            </span>
          </div>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}
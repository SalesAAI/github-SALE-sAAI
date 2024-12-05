import React from 'react';

export function RiskAnalysis({ data }) {
  return (
    <div className="bg-gray-50 dark:bg-dark-hover rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Risk Analysis
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">DSCR</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {data.dscr.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Break-even Period</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {Math.ceil(data.breakEvenMonths)} months
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Vacancy Risk</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {data.vacancyRisk}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Market Risk</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {data.marketRisk}
          </p>
        </div>
      </div>
    </div>
  );
}
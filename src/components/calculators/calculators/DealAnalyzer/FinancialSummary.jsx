import React from 'react';

export function FinancialSummary({ data }) {
  return (
    <div className="bg-gray-50 dark:bg-dark-hover rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Financial Summary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Investment</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${data.totalInvestment.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Cash Flow</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${data.monthlyCashFlow.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Cash-on-Cash Return</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {data.cashOnCashReturn.toFixed(2)}%
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Cap Rate</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {data.capRate.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
}
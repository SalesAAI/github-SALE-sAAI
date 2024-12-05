import React from 'react';

export function ExitStrategy({ data }) {
  return (
    <div className="bg-gray-50 dark:bg-dark-hover rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Exit Strategy Options
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Potential Flip Profit</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${data.flipProfit.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Rental Income</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${data.monthlyRentRevenue.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Wholesale Value</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${data.wholesaleValue.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
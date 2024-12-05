import React from 'react';
import { TrainingNavigation } from './dashboard/TrainingNavigation';
import { WholesalingContent } from './dashboard/WholesalingContent';
import { SupportResources } from './dashboard/SupportResources';

export default function Dashboard() {
  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Your Learning Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Access your training materials, wholesaling masterclass, and support resources all in one place.
          </p>
        </div>

        {/* Top Row - Training & Education and Support & Resources */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-6 mb-6">
          <TrainingNavigation />
          <SupportResources />
        </div>

        {/* Bottom Row - Centered Wholesaling Masterclass */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <WholesalingContent />
          </div>
        </div>
      </div>
    </main>
  );
}
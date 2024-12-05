import React, { useState } from 'react';
import { IntegrationSelector } from './ai/IntegrationSelector';
import { SetupGuide } from './ai/SetupGuide';
import { PerformanceMetrics } from './ai/PerformanceMetrics';
import { Card, CardHeader, CardContent } from '../ui/Card';

export function AIAssistant() {
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
            AI Command Center
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Integration Points
                </h2>
              </CardHeader>
              <CardContent>
                <IntegrationSelector
                  onSelect={setSelectedIntegration}
                  selected={selectedIntegration}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Setup Guide
                </h2>
              </CardHeader>
              <CardContent>
                <SetupGuide selectedIntegration={selectedIntegration} />
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Performance Overview
                </h2>
              </CardHeader>
              <CardContent>
                <PerformanceMetrics />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
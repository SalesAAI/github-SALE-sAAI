import React from 'react';
import { Card } from '../ui/Card';

const trainingModules = [
  {
    id: 'getting-started',
    title: 'Getting Started Guide',
    duration: '45 min',
    progress: 0,
    thumbnail: 'https://cdn.usegalileo.ai/stability/117a7a12-7704-4917-9139-4a3f76c42e78.png'
  },
  {
    id: 'navigation',
    title: 'Platform Navigation Masterclass',
    duration: '30 min',
    progress: 0,
    thumbnail: 'https://cdn.usegalileo.ai/stability/117a7a12-7704-4917-9139-4a3f76c42e78.png'
  },
  {
    id: 'features',
    title: 'Feature-by-Feature Training',
    duration: '2 hours',
    progress: 0,
    thumbnail: 'https://cdn.usegalileo.ai/stability/117a7a12-7704-4917-9139-4a3f76c42e78.png'
  },
  {
    id: 'user-guides',
    title: 'Interactive User Guides',
    duration: '1.5 hours',
    progress: 0,
    thumbnail: 'https://cdn.usegalileo.ai/stability/117a7a12-7704-4917-9139-4a3f76c42e78.png'
  },
];

export function TrainingNavigation() {
  return (
    <Card className="h-full">
      <div className="p-4 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Training & Education
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {trainingModules.map((module) => (
            <button
              key={module.id}
              className="flex flex-col rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors overflow-hidden"
            >
              <div className="relative pb-[56.25%]">
                <img
                  src={module.thumbnail}
                  alt={module.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 px-2 py-1 text-xs font-medium bg-black/75 text-white rounded">
                  {module.duration}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {module.title}
                </h3>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
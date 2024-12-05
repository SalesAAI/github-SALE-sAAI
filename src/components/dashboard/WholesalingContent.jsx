import React from 'react';
import { Card } from '../ui/Card';

const modules = [
  {
    id: 'intro',
    title: 'Introduction to Wholesaling',
    description: 'Learn the fundamentals of real estate wholesaling',
    duration: '1 hour',
    lessons: 5,
  },
  {
    id: 'market',
    title: 'Market Analysis & Deal Finding',
    description: 'Master techniques for finding and analyzing potential deals',
    duration: '2 hours',
    lessons: 8,
  },
  {
    id: 'negotiation',
    title: 'Contract Negotiation',
    description: 'Essential strategies for successful negotiations',
    duration: '1.5 hours',
    lessons: 6,
  },
  {
    id: 'buyers',
    title: 'Building Buyer Lists',
    description: 'Create and maintain a strong buyer network',
    duration: '1 hour',
    lessons: 4,
  },
  {
    id: 'closing',
    title: 'Closing Strategies',
    description: 'Navigate the closing process effectively',
    duration: '1.5 hours',
    lessons: 7,
  },
  {
    id: 'cases',
    title: 'Case Studies & Success Stories',
    description: 'Real-world examples and lessons learned',
    duration: '2 hours',
    lessons: 10,
  },
];

export function WholesalingContent() {
  return (
    <Card className="h-full">
      <div className="p-4 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Wholesaling Masterclass
        </h2>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module) => (
          <button
            key={module.id}
            className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                {module.title}
              </h3>
              <span className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                {module.duration}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {module.description}
            </p>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="mr-1">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"/>
              </svg>
              {module.lessons} Lessons
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}
import React from 'react';
import { Card } from '../ui/Card';

const resources = [
  {
    id: 'chat',
    title: '24/7 Live Chat Support',
    description: 'Get instant help from our support team',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#508ff7" viewBox="0 0 256 256">
        <path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216Z"/>
      </svg>
    ),
  },
  {
    id: 'docs',
    title: 'Help Center Documentation',
    description: 'Browse our comprehensive guides',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#508ff7" viewBox="0 0 256 256">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216v96H40ZM40,200V168H216v32Z"/>
      </svg>
    ),
  },
  {
    id: 'faq',
    title: 'FAQ Database',
    description: 'Find answers to common questions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#508ff7" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a36,36,0,0,0-36,36,8,8,0,0,0,16,0,20,20,0,1,1,20,20,8,8,0,0,0-8,8v16a8,8,0,0,0,16,0v-9.54A36,36,0,0,0,128,72Zm0,104a12,12,0,1,0-12-12A12,12,0,0,0,128,176Z"/>
      </svg>
    ),
  },
  {
    id: 'ticket',
    title: 'Submit Support Ticket',
    description: 'Create a new support request',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#508ff7" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"/>
      </svg>
    ),
  },
  {
    id: 'consultation',
    title: 'Schedule 1-on-1 Consultation',
    description: 'Book a personal training session',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#508ff7" viewBox="0 0 256 256">
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.49A107.71,107.71,0,0,0,73.89,34.49a8,8,0,0,0-3.94,6L67.31,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.93,107.21,107.21,0,0,0-10.88,26.25,8,8,0,0,0,1.48,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.49,107.71,107.71,0,0,0,26.25-10.87,8,8,0,0,0,3.94-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.93,107.21,107.21,0,0,0,10.88-26.25,8,8,0,0,0-1.48-7.06ZM128,168A40,40,0,1,1,168,128,40,40,0,0,1,128,168Z"/>
      </svg>
    ),
  },
];

export function SupportResources() {
  return (
    <Card className="h-full">
      <div className="p-4 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Support & Resources
        </h2>
      </div>
      <div className="p-4 space-y-4">
        {resources.map((resource) => (
          <button
            key={resource.id}
            className="w-full flex items-start gap-3 p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors text-left"
          >
            <div className="p-2 rounded-lg bg-[#508ff7]/10">
              {resource.icon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {resource.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}
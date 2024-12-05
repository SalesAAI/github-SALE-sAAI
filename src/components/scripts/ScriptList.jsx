import React from 'react';
import { CardContent } from '../ui/Card';

const scriptData = {
  'motivated-seller': [
    {
      id: 'ms1',
      title: 'Distressed Property Script',
      rating: 4.8,
      usageCount: 1250,
      preview: 'Effective approach for homeowners with urgent selling needs',
      content: `Hello [Name], I understand you're looking to sell your property. Could you tell me a bit about your situation and what timeline you're working with?`
    },
    {
      id: 'ms2',
      title: 'Time-Sensitive Sale Script',
      rating: 4.6,
      usageCount: 980,
      preview: 'For situations requiring quick resolution',
      content: `I specialize in helping homeowners who need to sell quickly. What's your ideal closing timeline?`
    }
  ],
  'fsbo': [
    {
      id: 'fsbo1',
      title: 'FSBO Initial Contact Script',
      rating: 4.9,
      usageCount: 2100,
      preview: 'Professional approach for first contact with FSBO sellers',
      content: `Hi, I noticed you're selling your home yourself. How's the process going so far?`
    }
  ],
  'first-time-buyer': [
    {
      id: 'ftb1',
      title: 'First-Time Buyer Consultation',
      rating: 4.7,
      usageCount: 1560,
      preview: 'Comprehensive guide for first-time homebuyer discussions',
      content: `Let's start by discussing your ideal home and what features are most important to you.`
    }
  ]
};

export function ScriptList({ category, searchQuery, onSelectScript }) {
  const scripts = category ? scriptData[category] || [] : Object.values(scriptData).flat();
  
  const filteredScripts = scripts.filter(script =>
    !searchQuery || script.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CardContent>
      <div className="space-y-4">
        {filteredScripts.map(script => (
          <button
            key={script.id}
            onClick={() => onSelectScript(script)}
            className="w-full text-left p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                {script.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ★ {script.rating}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {script.usageCount} uses
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {script.preview}
            </p>
          </button>
        ))}
      </div>
    </CardContent>
  );
}
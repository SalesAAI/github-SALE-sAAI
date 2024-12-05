import React, { useState } from 'react';
import { CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export function ScriptViewer({ script, onBack }) {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customScript, setCustomScript] = useState(script.content);

  return (
    <>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {script.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              onClick={() => setIsCustomizing(!isCustomizing)}
            >
              {isCustomizing ? 'View Original' : 'Customize'}
            </Button>
            <Button>Save to Library</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isCustomizing ? (
          <textarea
            value={customScript}
            onChange={(e) => setCustomScript(e.target.value)}
            className="w-full h-[400px] p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-hover text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        ) : (
          <div className="prose dark:prose-invert max-w-none">
            {script.content}
          </div>
        )}
      </CardContent>
    </>
  );
}
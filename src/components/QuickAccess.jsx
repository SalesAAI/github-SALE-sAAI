import React from 'react';
import { format } from 'date-fns';
import { useNavigation } from '../contexts/NavigationContext';

export function QuickAccess({ onNavigate }) {
  const { recentPaths } = useNavigation();

  if (recentPaths.length === 0) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400 px-4 py-3">
        No recent activity
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {recentPaths.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.path)}
          className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#508ff7]"></div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {item.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {format(new Date(item.timestamp), 'MMM d, h:mm a')}
              </p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="text-gray-400">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
          </svg>
        </button>
      ))}
    </div>
  );
}
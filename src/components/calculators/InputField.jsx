import React from 'react';

export function InputField({ label, value, onChange, type = 'number', tooltip, error }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-black dark:text-black">
        {label}
        {tooltip && (
          <div className="group relative">
            <span className="cursor-help text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"/>
              </svg>
            </span>
            <div className="invisible group-hover:visible absolute left-full ml-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg">
              {tooltip}
            </div>
          </div>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                  bg-white dark:bg-dark-hover text-gray-900 dark:text-white 
                  focus:ring-2 focus:ring-black/20 focus:border-black"
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
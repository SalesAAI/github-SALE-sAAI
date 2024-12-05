import React, { useState, useRef, useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

export function SearchBar({ onSearch, onClear }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Handle keyboard shortcuts
  useHotkeys('ctrl+k, cmd+k', (e) => {
    e.preventDefault();
    inputRef.current?.focus();
  });

  useHotkeys('esc', () => {
    if (query) {
      handleClear();
    }
  });

  const handleClear = () => {
    setQuery('');
    onClear();
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-6">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search calculators..."
        aria-label="Search calculators"
        className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-dark-hover text-gray-900 dark:text-white
                 focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
        </svg>
      </div>
      {query && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
          </svg>
        </button>
      )}
      <div className="absolute right-14 top-1/2 -translate-y-1/2">
        <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
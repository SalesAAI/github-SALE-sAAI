import React from 'react';

export function RoleButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full p-6 bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-hover 
                 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm
                 transition-colors duration-200 text-gray-900 dark:text-white
                 font-medium text-center"
    >
      {label}
    </button>
  );
}
import React from 'react';
import { Card } from '../ui/Card';

const categories = [
  {
    id: 'home-sellers',
    title: 'Home Sellers',
    subcategories: [
      { id: 'motivated-seller', title: 'Motivated Seller Scripts' },
      { id: 'fsbo', title: 'FSBO Scripts' },
      { id: 'expired-listing', title: 'Expired Listing Scripts' }
    ]
  },
  {
    id: 'home-buyers',
    title: 'Home Buyers',
    subcategories: [
      { id: 'first-time-buyer', title: 'First-Time Buyer Scripts' },
      { id: 'investor', title: 'Investor Scripts' },
      { id: 'lifestyle-transition', title: 'Lifestyle Transition Scripts' }
    ]
  },
  {
    id: 'negotiations',
    title: 'Negotiations',
    subcategories: [
      { id: 'objection-handler', title: 'Objection Handler Scripts' },
      { id: 'creative-financing', title: 'Creative Financing Scripts' },
      { id: 'deal-closure', title: 'Deal Closure Scripts' }
    ]
  },
  {
    id: 'prospecting',
    title: 'Prospecting',
    subcategories: [
      { id: 'cold-call', title: 'Cold Call Scripts' },
      { id: 'follow-up', title: 'Follow-Up Scripts' },
      { id: 'referral-request', title: 'Referral Request Scripts' }
    ]
  }
];

export function ScriptCategories({ selectedCategory, onSelectCategory }) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h2>
      <div className="space-y-4">
        {categories.map(category => (
          <div key={category.id}>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              {category.title}
            </h3>
            <div className="space-y-1">
              {category.subcategories.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => onSelectCategory(sub.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === sub.id
                      ? 'bg-primary bg-opacity-15 text-primary dark:bg-opacity-20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-hover'
                  }`}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
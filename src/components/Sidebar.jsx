import React from 'react';
import { QuickAccess } from './QuickAccess';
import { useNavigation } from '../contexts/NavigationContext';
import clsx from 'clsx';

// Custom icons for each section with medium blue color
const Calculator = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#508ff7" viewBox="0 0 256 256">
    <path d="M200,32H56A24,24,0,0,0,32,56V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V56A24,24,0,0,0,200,32Zm8,168a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8ZM76,80A12,12,0,1,1,88,92,12,12,0,0,1,76,80Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,116,80Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,156,80Zm-80,40a12,12,0,1,1,12,12A12,12,0,0,1,76,120Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,116,120Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,156,120Zm-80,40a12,12,0,1,1,12,12A12,12,0,0,1,76,160Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,116,160Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,156,160Z" />
  </svg>
);

const ChatDots = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#508ff7" viewBox="0 0 256 256">
    <path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216ZM116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-44,0a12,12,0,1,1,12,12A12,12,0,0,1,72,128Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,128Z" />
  </svg>
);

const Scripts = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#508ff7" viewBox="0 0 256 256">
    <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM40,192a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0V184A8,8,0,0,0,40,192Zm88-64a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v48A8,8,0,0,0,128,128Zm48,24a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v72A8,8,0,0,0,176,152ZM216,96v48a8,8,0,0,0,16,0V96a8,8,0,0,0-16,0ZM80,160a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v80A8,8,0,0,0,80,160Z" />
  </svg>
);

const AI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#508ff7" viewBox="0 0 256 256">
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,208V48H208V208ZM152,80v96a8,8,0,0,1-16,0V95.32l-27.71,27.72a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0l40,40a8,8,0,0,1-11.32,11.32L152,95.32Z" />
  </svg>
);

const House = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#508ff7" viewBox="0 0 256 256">
    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
  </svg>
);

const menuItems = [
  { id: 'dashboard', icon: House, text: 'Dashboard' },
  { id: 'customers', icon: Calculator, text: 'Calculators' },
  { id: 'conversations', icon: ChatDots, text: 'Conversations' },
  { id: 'campaigns', icon: Scripts, text: 'Scripts' },
  { id: 'reporting', icon: AI, text: 'AI' }
];

export default function Sidebar({ isOpen, onClose, currentPage, onMenuItemClick }) {
  const { addPath } = useNavigation();

  const handleMenuItemClick = (item) => {
    onMenuItemClick(item.id);
    addPath(item.id, item.text);
  };

  return (
    <aside className={clsx(
      'fixed inset-y-0 left-0 z-40 w-80 bg-white dark:bg-dark-card border-r border-gray-100 dark:border-gray-800 lg:static transform transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    )}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-1 p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200',
                  currentPage === item.id
                    ? 'bg-[#508ff7]/10 text-[#508ff7]'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-hover'
                )}
              >
                <item.icon />
                <span className="text-sm font-medium">{item.text}</span>
              </button>
            ))}
          </nav>
          
          <div className="border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-gray-900 dark:text-white text-sm font-semibold px-4 py-3">
              Quick Access
            </h3>
            <QuickAccess onNavigate={onMenuItemClick} />
          </div>
        </div>
      </div>
    </aside>
  );
}
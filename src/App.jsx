import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/ui/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { CustomersPage } from './components/customers/CustomersPage';
import { ConversationsPage } from './components/conversations/ConversationsPage';
import { CampaignsPage } from './components/campaigns/CampaignsPage';
import { ReportingPage } from './components/reporting/ReportingPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { SettingsPage } from './components/settings/SettingsPage';
import { MobileMenu } from './components/ui/MobileMenu';
import { NavigationProvider } from './contexts/NavigationContext';

const pageLabels = {
  dashboard: 'Dashboard',
  customers: 'Calculators',
  conversations: 'Conversations',
  campaigns: 'Scripts',
  reporting: 'AI',
  profile: 'Profile',
  settings: 'Settings'
};

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'customers':
        return <CustomersPage />;
      case 'conversations':
        return <ConversationsPage />;
      case 'campaigns':
        return <CampaignsPage />;
      case 'reporting':
        return <ReportingPage />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <NavigationProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg dark:text-gray-100 transition-colors duration-200">
        <Header 
          onMenuClick={() => setIsSidebarOpen(true)} 
          onNavigate={setCurrentPage}
        />
        <div className="max-w-[1440px] mx-auto">
          <div className="flex">
            <Sidebar 
              isOpen={isSidebarOpen} 
              onClose={() => setIsSidebarOpen(false)}
              currentPage={currentPage}
              onMenuItemClick={handleMenuItemClick}
            />
            {renderPage()}
          </div>
        </div>
        <MobileMenu 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          currentPage={currentPage}
          onNavigate={handleMenuItemClick}
        />
        <Toaster position="top-right" />
      </div>
    </NavigationProvider>
  );
}
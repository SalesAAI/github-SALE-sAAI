import React from 'react';
import { RoleButton } from './RoleButton';

const roles = [
  'Home Seller',
  'Home Buyer',
  'Investor',
  'Wholesalers',
  'Landlords',
  'Lenders/Hard Money Lenders',
  'Real Estate Agents/Brokers',
  'Contractors',
  'Tenants',
  'Title Company/Closing Attorney'
];

export function RoleGrid() {
  const handleRoleClick = (role) => {
    console.log(`Selected role: ${role}`);
    // Handle role selection logic here
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {roles.map((role) => (
        <RoleButton
          key={role}
          label={role}
          onClick={() => handleRoleClick(role)}
        />
      ))}
    </div>
  );
}
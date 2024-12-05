import React from 'react';
import { InputField } from '../../InputField';

export function ExpenseInputs({ values, onChange, errors }) {
  const handleChange = (key, value) => {
    onChange(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Monthly Expenses
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Property Tax ($)"
          value={values.propertyTax}
          onChange={(value) => handleChange('propertyTax', value)}
          tooltip="Monthly property tax payment"
          error={errors.propertyTax}
        />
        <InputField
          label="Insurance ($)"
          value={values.insurance}
          onChange={(value) => handleChange('insurance', value)}
          tooltip="Monthly insurance premium"
          error={errors.insurance}
        />
        <InputField
          label="Utilities ($)"
          value={values.utilities}
          onChange={(value) => handleChange('utilities', value)}
          tooltip="Average monthly utilities cost"
          error={errors.utilities}
        />
        <InputField
          label="Maintenance ($)"
          value={values.maintenance}
          onChange={(value) => handleChange('maintenance', value)}
          tooltip="Monthly maintenance and repairs budget"
          error={errors.maintenance}
        />
      </div>
    </div>
  );
}
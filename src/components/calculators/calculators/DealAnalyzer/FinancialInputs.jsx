import React from 'react';
import { InputField } from '../../InputField';

export function FinancialInputs({ values, onChange, errors }) {
  const handleChange = (key, value) => {
    onChange(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Financial Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Purchase Price ($)"
          value={values.purchasePrice}
          onChange={(value) => handleChange('purchasePrice', value)}
          tooltip="Total purchase price of the property"
          error={errors.purchasePrice}
        />
        <InputField
          label="Rehab Costs ($)"
          value={values.rehabCosts}
          onChange={(value) => handleChange('rehabCosts', value)}
          tooltip="Estimated renovation and repair costs"
          error={errors.rehabCosts}
        />
        <InputField
          label="After Repair Value ($)"
          value={values.arv}
          onChange={(value) => handleChange('arv', value)}
          tooltip="Estimated value after improvements"
          error={errors.arv}
        />
        <InputField
          label="Down Payment (%)"
          value={values.downPayment}
          onChange={(value) => handleChange('downPayment', value)}
          tooltip="Percentage of purchase price as down payment"
          error={errors.downPayment}
        />
        <InputField
          label="Interest Rate (%)"
          value={values.interestRate}
          onChange={(value) => handleChange('interestRate', value)}
          tooltip="Annual interest rate for the loan"
          error={errors.interestRate}
        />
        <InputField
          label="Loan Term (years)"
          value={values.loanTerm}
          onChange={(value) => handleChange('loanTerm', value)}
          tooltip="Length of the loan in years"
          error={errors.loanTerm}
        />
        <InputField
          label="Monthly Rent ($)"
          value={values.monthlyRent}
          onChange={(value) => handleChange('monthlyRent', value)}
          tooltip="Expected monthly rental income"
          error={errors.monthlyRent}
        />
        <InputField
          label="Hold Period (months)"
          value={values.holdPeriod}
          onChange={(value) => handleChange('holdPeriod', value)}
          tooltip="Planned investment duration"
          error={errors.holdPeriod}
        />
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function LTVCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!loanAmount || isNaN(loanAmount) || Number(loanAmount) <= 0) {
      newErrors.loanAmount = 'Please enter a valid loan amount';
    }
    if (!propertyValue || isNaN(propertyValue) || Number(propertyValue) <= 0) {
      newErrors.propertyValue = 'Please enter a valid property value';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const ltv = (Number(loanAmount) / Number(propertyValue)) * 100;
      setResult(ltv.toFixed(2) + '%');
    }
  };

  const handleClear = () => {
    setLoanAmount('');
    setPropertyValue('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Loan-to-Value Ratio (LTV)"
      description="Measures lending risk"
      formula="LTV = (Loan Amount / Property Value) × 100"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Loan Amount"
        value={loanAmount}
        onChange={setLoanAmount}
        tooltip="Total amount of the loan"
        error={errors.loanAmount}
      />
      <InputField
        label="Property Value"
        value={propertyValue}
        onChange={setPropertyValue}
        tooltip="Current market value of the property"
        error={errors.propertyValue}
      />
    </CalculatorCard>
  );
}
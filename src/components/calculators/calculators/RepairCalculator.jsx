import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function RepairCalculator() {
  const [repairs, setRepairs] = useState({
    roofing: '',
    plumbing: '',
    electrical: '',
    hvac: '',
    flooring: '',
    painting: '',
    kitchen: '',
    bathroom: '',
    windows: '',
    landscaping: ''
  });
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    Object.entries(repairs).forEach(([key, value]) => {
      if (value && (isNaN(value) || Number(value) < 0)) {
        newErrors[key] = 'Please enter a valid amount';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const subtotal = Object.values(repairs).reduce((sum, value) => 
        sum + (value ? Number(value) : 0), 0);
      const contingency = subtotal * 0.1;
      const total = subtotal + contingency;
      setResult(total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    }
  };

  const handleClear = () => {
    setRepairs({
      roofing: '',
      plumbing: '',
      electrical: '',
      hvac: '',
      flooring: '',
      painting: '',
      kitchen: '',
      bathroom: '',
      windows: '',
      landscaping: ''
    });
    setResult(undefined);
    setErrors({});
  };

  const handleChange = (key, value) => {
    setRepairs(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <CalculatorCard
      title="Repair Cost Calculator"
      description="Estimates total renovation expenses"
      formula="Total = Sum of repairs + 10% contingency"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      {Object.keys(repairs).map(key => (
        <InputField
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          value={repairs[key]}
          onChange={(value) => handleChange(key, value)}
          tooltip={`Estimated cost for ${key} repairs`}
          error={errors[key]}
        />
      ))}
    </CalculatorCard>
  );
}
import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function CapRateCalculator() {
  const [noi, setNoi] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!noi || isNaN(noi)) {
      newErrors.noi = 'Please enter a valid Net Operating Income';
    }
    if (!propertyValue || isNaN(propertyValue) || Number(propertyValue) <= 0) {
      newErrors.propertyValue = 'Please enter a valid property value';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const capRate = (Number(noi) / Number(propertyValue)) * 100;
      setResult(capRate.toFixed(2) + '%');
    }
  };

  const handleClear = () => {
    setNoi('');
    setPropertyValue('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Capitalization Rate"
      description="Evaluates rental property profitability"
      formula="Cap Rate = (NOI / Property Value) × 100"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Net Operating Income (NOI)"
        value={noi}
        onChange={setNoi}
        tooltip="Annual income after operating expenses but before mortgage payments"
        error={errors.noi}
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
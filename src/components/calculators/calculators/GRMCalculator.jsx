import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function GRMCalculator() {
  const [propertyPrice, setPropertyPrice] = useState('');
  const [annualRentalIncome, setAnnualRentalIncome] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!propertyPrice || isNaN(propertyPrice) || Number(propertyPrice) <= 0) {
      newErrors.propertyPrice = 'Please enter a valid property price';
    }
    if (!annualRentalIncome || isNaN(annualRentalIncome) || Number(annualRentalIncome) <= 0) {
      newErrors.annualRentalIncome = 'Please enter a valid annual rental income';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const grm = Number(propertyPrice) / Number(annualRentalIncome);
      setResult(grm.toFixed(2));
    }
  };

  const handleClear = () => {
    setPropertyPrice('');
    setAnnualRentalIncome('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Gross Rent Multiplier (GRM)"
      description="Compares rental property income potential"
      formula="GRM = Property Price / Annual Rental Income"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Property Price"
        value={propertyPrice}
        onChange={setPropertyPrice}
        tooltip="Current market price or purchase price of the property"
        error={errors.propertyPrice}
      />
      <InputField
        label="Annual Rental Income"
        value={annualRentalIncome}
        onChange={setAnnualRentalIncome}
        tooltip="Total yearly rental income before expenses"
        error={errors.annualRentalIncome}
      />
    </CalculatorCard>
  );
}
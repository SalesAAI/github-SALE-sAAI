import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function ROICalculator() {
  const [netProfit, setNetProfit] = useState('');
  const [totalInvestment, setTotalInvestment] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!netProfit || isNaN(netProfit)) {
      newErrors.netProfit = 'Please enter a valid net profit';
    }
    if (!totalInvestment || isNaN(totalInvestment) || Number(totalInvestment) <= 0) {
      newErrors.totalInvestment = 'Please enter a valid total investment amount';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const roi = (Number(netProfit) / Number(totalInvestment)) * 100;
      setResult(roi.toFixed(2) + '%');
    }
  };

  const handleClear = () => {
    setNetProfit('');
    setTotalInvestment('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Return on Investment (ROI)"
      description="Measures overall investment profitability"
      formula="ROI = (Net Profit / Total Investment) × 100"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Net Profit"
        value={netProfit}
        onChange={setNetProfit}
        tooltip="Total profit after all expenses"
        error={errors.netProfit}
      />
      <InputField
        label="Total Investment"
        value={totalInvestment}
        onChange={setTotalInvestment}
        tooltip="Total amount invested in the property"
        error={errors.totalInvestment}
      />
    </CalculatorCard>
  );
}
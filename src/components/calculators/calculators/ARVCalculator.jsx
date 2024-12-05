import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function ARVCalculator() {
  const [currentValue, setCurrentValue] = useState('');
  const [improvements, setImprovements] = useState('');
  const [marketTrend, setMarketTrend] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!currentValue || isNaN(currentValue) || Number(currentValue) <= 0) {
      newErrors.currentValue = 'Please enter a valid current value';
    }
    if (!improvements || isNaN(improvements) || Number(improvements) < 0) {
      newErrors.improvements = 'Please enter valid improvement value';
    }
    if (!marketTrend || isNaN(marketTrend)) {
      newErrors.marketTrend = 'Please enter a valid market trend percentage';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const baseValue = Number(currentValue) + Number(improvements);
      const trendMultiplier = 1 + (Number(marketTrend) / 100);
      const arv = baseValue * trendMultiplier;
      setResult(arv.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    }
  };

  const handleClear = () => {
    setCurrentValue('');
    setImprovements('');
    setMarketTrend('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="After Repair Value (ARV)"
      description="Calculate property value after improvements"
      formula="ARV = (Current Value + Improvements) × (1 + Market Trend%)"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Current Property Value"
        value={currentValue}
        onChange={setCurrentValue}
        tooltip="Current market value of the property"
        error={errors.currentValue}
      />
      <InputField
        label="Planned Improvements"
        value={improvements}
        onChange={setImprovements}
        tooltip="Total cost of planned improvements"
        error={errors.improvements}
      />
      <InputField
        label="Market Trend (%)"
        value={marketTrend}
        onChange={setMarketTrend}
        tooltip="Expected market appreciation/depreciation percentage"
        error={errors.marketTrend}
      />
    </CalculatorCard>
  );
}
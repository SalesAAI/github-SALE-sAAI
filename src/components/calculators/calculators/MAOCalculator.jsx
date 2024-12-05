import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function MAOCalculator() {
  const [arv, setArv] = useState('');
  const [repairCosts, setRepairCosts] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!arv || isNaN(arv) || Number(arv) <= 0) {
      newErrors.arv = 'Please enter a valid ARV';
    }
    if (!repairCosts || isNaN(repairCosts) || Number(repairCosts) < 0) {
      newErrors.repairCosts = 'Please enter valid repair costs';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const mao = (Number(arv) * 0.7) - Number(repairCosts);
      setResult(mao.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    }
  };

  const handleClear = () => {
    setArv('');
    setRepairCosts('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Maximum Allowable Offer (MAO)"
      description="Calculates highest purchase price for profitable investment"
      formula="MAO = (ARV × 70%) - Repair Costs"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="After Repair Value (ARV)"
        value={arv}
        onChange={setArv}
        tooltip="The estimated value of the property after repairs"
        error={errors.arv}
      />
      <InputField
        label="Repair Costs"
        value={repairCosts}
        onChange={setRepairCosts}
        tooltip="Estimated total cost of repairs"
        error={errors.repairCosts}
      />
    </CalculatorCard>
  );
}
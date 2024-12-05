import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function DSCRCalculator() {
  const [noi, setNoi] = useState('');
  const [annualDebtPayments, setAnnualDebtPayments] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!noi || isNaN(noi) || Number(noi) <= 0) {
      newErrors.noi = 'Please enter a valid Net Operating Income';
    }
    if (!annualDebtPayments || isNaN(annualDebtPayments) || Number(annualDebtPayments) <= 0) {
      newErrors.annualDebtPayments = 'Please enter a valid annual debt payments amount';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const dscr = Number(noi) / Number(annualDebtPayments);
      setResult(dscr.toFixed(2));
    }
  };

  const handleClear = () => {
    setNoi('');
    setAnnualDebtPayments('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Debt Service Coverage Ratio (DSCR)"
      description="Assesses loan payment coverage ability"
      formula="DSCR = NOI / Annual Debt Payments"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Net Operating Income (NOI)"
        value={noi}
        onChange={setNoi}
        tooltip="Annual income after operating expenses but before debt payments"
        error={errors.noi}
      />
      <InputField
        label="Annual Debt Payments"
        value={annualDebtPayments}
        onChange={setAnnualDebtPayments}
        tooltip="Total yearly mortgage and loan payments"
        error={errors.annualDebtPayments}
      />
    </CalculatorCard>
  );
}
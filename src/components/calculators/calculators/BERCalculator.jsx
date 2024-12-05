import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function BERCalculator() {
  const [operatingExpenses, setOperatingExpenses] = useState('');
  const [debtPayments, setDebtPayments] = useState('');
  const [grossIncome, setGrossIncome] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!operatingExpenses || isNaN(operatingExpenses) || Number(operatingExpenses) < 0) {
      newErrors.operatingExpenses = 'Please enter valid operating expenses';
    }
    if (!debtPayments || isNaN(debtPayments) || Number(debtPayments) < 0) {
      newErrors.debtPayments = 'Please enter valid debt payments';
    }
    if (!grossIncome || isNaN(grossIncome) || Number(grossIncome) <= 0) {
      newErrors.grossIncome = 'Please enter valid gross income';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const ber = ((Number(operatingExpenses) + Number(debtPayments)) / Number(grossIncome)) * 100;
      setResult(ber.toFixed(2) + '%');
    }
  };

  const handleClear = () => {
    setOperatingExpenses('');
    setDebtPayments('');
    setGrossIncome('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Break-Even Ratio (BER)"
      description="Determines income needed for expense coverage"
      formula="BER = (Operating Expenses + Debt Payments) / Gross Income × 100"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Operating Expenses"
        value={operatingExpenses}
        onChange={setOperatingExpenses}
        tooltip="Annual operating expenses excluding debt payments"
        error={errors.operatingExpenses}
      />
      <InputField
        label="Debt Payments"
        value={debtPayments}
        onChange={setDebtPayments}
        tooltip="Annual mortgage and loan payments"
        error={errors.debtPayments}
      />
      <InputField
        label="Gross Income"
        value={grossIncome}
        onChange={setGrossIncome}
        tooltip="Total annual income before expenses"
        error={errors.grossIncome}
      />
    </CalculatorCard>
  );
}
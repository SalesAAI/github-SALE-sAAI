import React, { useState } from 'react';
import { CalculatorCard } from '../CalculatorCard';
import { InputField } from '../InputField';

export function VacancyCalculator() {
  const [vacantUnits, setVacantUnits] = useState('');
  const [totalUnits, setTotalUnits] = useState('');
  const [result, setResult] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!vacantUnits || isNaN(vacantUnits) || Number(vacantUnits) < 0) {
      newErrors.vacantUnits = 'Please enter a valid number of vacant units';
    }
    if (!totalUnits || isNaN(totalUnits) || Number(totalUnits) <= 0) {
      newErrors.totalUnits = 'Please enter a valid total number of units';
    }
    if (Number(vacantUnits) > Number(totalUnits)) {
      newErrors.vacantUnits = 'Vacant units cannot exceed total units';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const vacancyRate = (Number(vacantUnits) / Number(totalUnits)) * 100;
      setResult(vacancyRate.toFixed(2) + '%');
    }
  };

  const handleClear = () => {
    setVacantUnits('');
    setTotalUnits('');
    setResult(undefined);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Vacancy Rate Calculator"
      description="Projects potential rental income loss"
      formula="Vacancy Rate = (Vacant Units / Total Units) × 100"
      result={result}
      onCalculate={handleCalculate}
      onClear={handleClear}
    >
      <InputField
        label="Vacant Units"
        value={vacantUnits}
        onChange={setVacantUnits}
        tooltip="Number of currently vacant units"
        error={errors.vacantUnits}
      />
      <InputField
        label="Total Units"
        value={totalUnits}
        onChange={setTotalUnits}
        tooltip="Total number of units in the property"
        error={errors.totalUnits}
      />
    </CalculatorCard>
  );
}
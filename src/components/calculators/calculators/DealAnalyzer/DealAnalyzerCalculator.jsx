import React, { useState } from 'react';
import { CalculatorCard } from '../../CalculatorCard';
import { FinancialInputs } from './FinancialInputs';
import { ExpenseInputs } from './ExpenseInputs';
import { FinancialSummary } from './FinancialSummary';
import { RiskAnalysis } from './RiskAnalysis';
import { ExitStrategy } from './ExitStrategy';

export function DealAnalyzerCalculator() {
  const [financials, setFinancials] = useState({
    purchasePrice: '',
    rehabCosts: '',
    arv: '',
    downPayment: '',
    interestRate: '',
    loanTerm: '',
    monthlyRent: '',
    holdPeriod: ''
  });

  const [expenses, setExpenses] = useState({
    propertyTax: '',
    insurance: '',
    utilities: '',
    maintenance: ''
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    Object.entries(financials).forEach(([key, value]) => {
      if (!value || isNaN(value) || Number(value) < 0) {
        newErrors[key] = 'Please enter a valid number';
      }
    });
    Object.entries(expenses).forEach(([key, value]) => {
      if (!value || isNaN(value) || Number(value) < 0) {
        newErrors[key] = 'Please enter a valid number';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateResults = () => {
    if (!validate()) return;

    const totalInvestment = Number(financials.purchasePrice) + Number(financials.rehabCosts);
    const downPaymentAmount = (totalInvestment * Number(financials.downPayment)) / 100;
    const loanAmount = totalInvestment - downPaymentAmount;
    
    // Monthly mortgage payment calculation
    const monthlyInterest = Number(financials.interestRate) / 1200;
    const numberOfPayments = Number(financials.loanTerm) * 12;
    const monthlyMortgage = loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / 
                           (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    // Monthly cash flow calculation
    const totalMonthlyExpenses = Object.values(expenses).reduce((sum, value) => sum + Number(value), 0) + monthlyMortgage;
    const monthlyCashFlow = Number(financials.monthlyRent) - totalMonthlyExpenses;
    
    // Returns calculations
    const annualCashFlow = monthlyCashFlow * 12;
    const cashOnCashReturn = (annualCashFlow / downPaymentAmount) * 100;
    const noi = (Number(financials.monthlyRent) * 12) - (Object.values(expenses).reduce((sum, value) => sum + Number(value), 0) * 12);
    const capRate = (noi / totalInvestment) * 100;

    // Risk assessment
    const dscr = noi / (monthlyMortgage * 12);
    const breakEvenMonths = downPaymentAmount / monthlyCashFlow;
    
    // Exit strategies
    const potentialFlipProfit = Number(financials.arv) - totalInvestment;
    const wholesaleOption = totalInvestment * 0.85; // Estimated wholesale value

    setResults({
      financialSummary: {
        totalInvestment,
        monthlyCashFlow,
        cashOnCashReturn,
        capRate,
        noi
      },
      riskAnalysis: {
        dscr,
        breakEvenMonths,
        vacancyRisk: monthlyCashFlow < 0 ? 'High' : monthlyCashFlow < 500 ? 'Medium' : 'Low',
        marketRisk: capRate < 5 ? 'High' : capRate < 8 ? 'Medium' : 'Low'
      },
      exitStrategy: {
        flipProfit: potentialFlipProfit,
        wholesaleValue: wholesaleOption,
        monthlyRentRevenue: Number(financials.monthlyRent)
      }
    });
  };

  const handleClear = () => {
    setFinancials({
      purchasePrice: '',
      rehabCosts: '',
      arv: '',
      downPayment: '',
      interestRate: '',
      loanTerm: '',
      monthlyRent: '',
      holdPeriod: ''
    });
    setExpenses({
      propertyTax: '',
      insurance: '',
      utilities: '',
      maintenance: ''
    });
    setResults(null);
    setErrors({});
  };

  return (
    <CalculatorCard
      title="Deal Analyzer"
      description="Comprehensive real estate investment analysis"
      onCalculate={calculateResults}
      onClear={handleClear}
    >
      <div className="space-y-6">
        <FinancialInputs
          values={financials}
          onChange={setFinancials}
          errors={errors}
        />
        <ExpenseInputs
          values={expenses}
          onChange={setExpenses}
          errors={errors}
        />
        {results && (
          <div className="space-y-6 mt-8">
            <FinancialSummary data={results.financialSummary} />
            <RiskAnalysis data={results.riskAnalysis} />
            <ExitStrategy data={results.exitStrategy} />
          </div>
        )}
      </div>
    </CalculatorCard>
  );
}
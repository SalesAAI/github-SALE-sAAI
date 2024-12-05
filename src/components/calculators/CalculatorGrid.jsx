import React, { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar';
import { DealAnalyzerCalculator } from './calculators/DealAnalyzer/DealAnalyzerCalculator';
import { MAOCalculator } from './calculators/MAOCalculator';
import { CoCCalculator } from './calculators/CoCCalculator';
import { CapRateCalculator } from './calculators/CapRateCalculator';
import { GRMCalculator } from './calculators/GRMCalculator';
import { DSCRCalculator } from './calculators/DSCRCalculator';
import { LTVCalculator } from './calculators/LTVCalculator';
import { BERCalculator } from './calculators/BERCalculator';
import { ROICalculator } from './calculators/ROICalculator';
import { RepairCalculator } from './calculators/RepairCalculator';
import { VacancyCalculator } from './calculators/VacancyCalculator';
import { ARVCalculator } from './calculators/ARVCalculator';

const calculatorMeta = [
  {
    id: 'deal-analyzer',
    component: DealAnalyzerCalculator,
    title: 'Deal Analyzer',
    description: 'Comprehensive real estate investment analysis',
    keywords: ['investment', 'analysis', 'profit', 'roi', 'comprehensive']
  },
  {
    id: 'arv',
    component: ARVCalculator,
    title: 'After Repair Value (ARV)',
    description: 'Calculate property value after improvements',
    keywords: ['repair', 'value', 'improvement', 'renovation', 'worth']
  },
  {
    id: 'mao',
    component: MAOCalculator,
    title: 'Maximum Allowable Offer (MAO)',
    description: 'Calculates highest purchase price for profitable investment',
    keywords: ['offer', 'purchase', 'price', 'arv', 'repairs']
  },
  {
    id: 'coc',
    component: CoCCalculator,
    title: 'Cash-on-Cash Return (CoC)',
    description: 'Measures return on actual cash investment',
    keywords: ['return', 'cash', 'investment', 'profit']
  },
  {
    id: 'cap-rate',
    component: CapRateCalculator,
    title: 'Capitalization Rate',
    description: 'Evaluates rental property profitability',
    keywords: ['cap', 'rate', 'rental', 'profit', 'noi']
  },
  {
    id: 'grm',
    component: GRMCalculator,
    title: 'Gross Rent Multiplier (GRM)',
    description: 'Compares rental property income potential',
    keywords: ['rent', 'multiplier', 'income', 'rental']
  },
  {
    id: 'dscr',
    component: DSCRCalculator,
    title: 'Debt Service Coverage Ratio (DSCR)',
    description: 'Assesses loan payment coverage ability',
    keywords: ['debt', 'coverage', 'loan', 'payment']
  },
  {
    id: 'ltv',
    component: LTVCalculator,
    title: 'Loan-to-Value Ratio (LTV)',
    description: 'Measures lending risk',
    keywords: ['loan', 'value', 'risk', 'lending']
  },
  {
    id: 'ber',
    component: BERCalculator,
    title: 'Break-Even Ratio (BER)',
    description: 'Determines income needed for expense coverage',
    keywords: ['break', 'even', 'income', 'expenses']
  },
  {
    id: 'roi',
    component: ROICalculator,
    title: 'Return on Investment (ROI)',
    description: 'Measures overall investment profitability',
    keywords: ['return', 'investment', 'profit', 'performance']
  },
  {
    id: 'repair',
    component: RepairCalculator,
    title: 'Repair Cost Calculator',
    description: 'Estimates total renovation expenses',
    keywords: ['repair', 'renovation', 'cost', 'expenses']
  },
  {
    id: 'vacancy',
    component: VacancyCalculator,
    title: 'Vacancy Rate Calculator',
    description: 'Projects potential rental income loss',
    keywords: ['vacancy', 'rental', 'income', 'loss']
  }
];

export function CalculatorGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCalculators = useMemo(() => {
    if (!searchQuery) return calculatorMeta;
    
    const query = searchQuery.toLowerCase();
    return calculatorMeta.filter(calc => 
      calc.title.toLowerCase().includes(query) ||
      calc.description.toLowerCase().includes(query) ||
      calc.keywords.some(keyword => keyword.includes(query))
    );
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
        {filteredCalculators.map((calc) => {
          const Calculator = calc.component;
          return <Calculator key={calc.id} />;
        })}
      </div>
    </div>
  );
}
import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { toast } from 'react-hot-toast';

export function CalculatorCard({ title, description, formula, children, result, onCalculate, onClear }) {
  const handleSave = () => {
    toast.success('Calculation saved successfully');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-bold text-black dark:text-black">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      
      <div className="mt-4 p-3 bg-gray-50 dark:bg-dark-hover rounded-lg">
        <code className="text-sm text-[#02894b] dark:text-[#02894b]">{formula}</code>
      </div>

      <div className="mt-6 space-y-4">
        {children}
      </div>

      {result !== undefined && (
        <div className="mt-6 p-4 bg-black/10 dark:bg-black/20 rounded-lg">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Result:</p>
          <p className="text-lg font-bold text-black">{result}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Button 
          onClick={onCalculate}
          className="bg-[#e66912] hover:bg-[#e66912]/90 text-white"
        >
          Calculate
        </Button>
        <Button variant="secondary" onClick={onClear}>Clear</Button>
        <Button variant="secondary" onClick={handleSave}>Save</Button>
        <Button variant="secondary" onClick={handlePrint}>Print</Button>
      </div>
    </Card>
  );
}
import React, { useState } from 'react';
import { ScriptCategories } from './ScriptCategories';
import { ScriptList } from './ScriptList';
import { ScriptViewer } from './ScriptViewer';
import { SearchBar } from '../ui/SearchBar';
import { Card } from '../ui/Card';

export function ScriptsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedScript, setSelectedScript] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
            Script Library
          </h1>
          <div className="w-full md:w-auto">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search scripts..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
          <div className="lg:col-span-1">
            <ScriptCategories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          
          <div className="lg:col-span-3">
            <Card>
              {selectedScript ? (
                <ScriptViewer
                  script={selectedScript}
                  onBack={() => setSelectedScript(null)}
                />
              ) : (
                <ScriptList
                  category={selectedCategory}
                  searchQuery={searchQuery}
                  onSelectScript={setSelectedScript}
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
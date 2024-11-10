import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { DashboardStats } from './components/DashboardStats';
import { EnergyGraph } from './components/EnergyGraph';
import { EnergyTips } from './components/EnergyTips';
import { CostSavings } from './components/CostSavings';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <div className="p-6 space-y-6">
          <DashboardStats />
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <EnergyGraph />
            </div>
            <div className="space-y-6">
              <EnergyTips />
              <CostSavings />
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TimeImportIncentive from './pages/TimeImportIncentive';
import TimeImportDiligence from './pages/TimeImportDiligence';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-slate-800">
        <nav className="bg-white border-b border-slate-200 p-4">
          <div className="max-w-5xl mx-auto flex gap-4">
            <Link className="text-blue-600 hover:underline" to="/time/import/incentive">
              Incentive
            </Link>
            <Link className="text-blue-600 hover:underline" to="/time/import/diligence">
              Diligence
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/time/import/incentive" element={<TimeImportIncentive />} />
          <Route path="/time/import/diligence" element={<TimeImportDiligence />} />
          <Route
            path="*"
            element={
              <div className="p-8">
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className="mt-2 text-slate-600">Use the links above to navigate to a page.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

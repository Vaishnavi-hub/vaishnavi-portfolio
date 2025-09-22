import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from './components/ui/toaster';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
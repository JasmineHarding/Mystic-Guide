import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BasicSpells from './components/BasicSpells';
import FundamentalsComponents from './components/FundamentalsComponents';
import Home from './components/Home';
import PsychicAbilities from './components/PsychicAbilities';
import './styles/GlobalStyles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychic-abilities" element={<PsychicAbilities />} />
          <Route path="/basic-spells" element={<BasicSpells />} />
          <Route path="/fundamentals-components" element={<FundamentalsComponents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';

function App() {
  const [selectedBot, setSelectedBot] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BotCollection setSelectedBot={setSelectedBot} />} />
        <Route path="/bot/:id" element={<BotArmy selectedBot={selectedBot} />} />
      </Routes>
    </Router>
  );
}

export default App;

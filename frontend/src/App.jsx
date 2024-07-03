import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateMatch from './CreateMatch';
import Team from './Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateMatch />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import './App.css'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/ListAppointments'
import { Navbar } from './components/custom/Navbar'
import  DetailsPage  from './pages/SelectAppointment';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

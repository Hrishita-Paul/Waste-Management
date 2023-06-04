import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import UserPage from './Pages/UserPage';
import ManagementPage from './Pages/ManagementPage';

export default function App() {
  const [wastes, setWastes] = useState([]);

  const handleEntrySaved = () => {
    // Fetch the updated waste entries from local storage
    const wasteObj = localStorage.getItem('wastes');
    if (wasteObj) {
      setWastes(JSON.parse(wasteObj));
    }
  };

  const fetchWastes = () => {
    const wasteObj = localStorage.getItem('wastes');
    if (wasteObj) {
      setWastes(JSON.parse(wasteObj));
    }
  };

  useEffect(() => {
    fetchWastes();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<UserPage onEntrySaved={handleEntrySaved} />} />
        <Route exact path="/management" element={<ManagementPage wastes={wastes} setWastes={setWastes} />} />
      </Routes>
    </Router>
  );
}

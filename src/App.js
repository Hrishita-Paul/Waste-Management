import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
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
      <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
        <Navbar.Brand >
         Waste Management Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
              HomePage
            </Nav.Link>
            <Nav.Link as={Link} to="/user" style={{ color: 'white' }}>
              UserPage
            </Nav.Link>
            <Nav.Link as={Link} to="/management" style={{ color: 'white' }}>
              ManagementPage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
      <Route exact path="/" element={<HomePage />} />
       <Route exact path="/user" element={<UserPage onEntrySaved={handleEntrySaved} />} />
        <Route exact path="/management" element={<ManagementPage wastes={wastes} setWastes={setWastes} />} />
      </Routes>
    </Router>
  );
}
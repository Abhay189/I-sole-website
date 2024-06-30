import React from 'react';
import { useEffect } from 'react';
import './Styles/App.css';
import { HashRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import SignupPage from './Scripts/SignupPage';
import LoginPage from './Scripts/LoginPage';
import AnalyticsPage from './Scripts/AnalyticsPage';
import Navbar from './Scripts/Navbar';

const App = () => {

  //Store the base API URL for usage in other pages.
  useEffect( () =>{
    localStorage.setItem('API_URL', 'http://127.0.0.1:5000');
  }, []
  );


  return (
    <Router>
      <NavbarWrapper />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

const NavbarWrapper = () => {
  let location = useLocation();
  
  // Check if the current location matches the Analytics page
  if (location.pathname === '/analytics') {
    return <Navbar />;
  }

  return null;
};

export default App;

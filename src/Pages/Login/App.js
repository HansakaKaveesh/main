import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage1 from './components/LoginPage';
import SignUpPage1 from './components/SignUpPage/SignUpPage';
import AdminLoginPage1 from './components/AdminLoginPage/LoginPage';
import AdminLoginPage from './components/AdminLoginPage/LoginPage';

function App() {
  return (
    
      
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage1 />} />
        <Route path="/signup" element={<SignUpPage1 />} />
        <Route path="/admin" element={<AdminLoginPage1 />} />
        <Route path="/admin" element={<AdminLoginPage />}  />
        
      </Routes>
    </Router>
    
  );
}

export default App;


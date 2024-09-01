import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/components/LoginPage';
import  Admin from './Pages/Login/components/AdminLoginPage/LoginPage';
import  Signup from './Pages/Login/components/SignUpPage/SignUpPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Signup" element={<Signup/>} />
        </Routes>
    </Router>

  );
}

export default App;

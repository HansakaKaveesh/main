
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/App';
import QUOTATION from './Pages/QUOTATION/App';

import Product from './Pages/Product/App'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/QUOTATION" element={<QUOTATION />} />
        <Route path="/Product" element={<Product/>} />
        </Routes>
    </Router>

  );
}

export default App;

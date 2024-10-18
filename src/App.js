
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/App';
import Quotation from './Pages/QUOTATION/App';
import Product from './Pages/Product/App';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quotation" element={<Quotation />} />
        <Route path="/Product" element={<Product/>} />
        </Routes>
    </Router>

  );
}

export default App;

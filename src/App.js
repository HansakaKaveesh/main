
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/App';
import Contact from './Pages/Contact/App';
import Quotation from './Pages/QUOTATION/App';
import Product from './Pages/Product/App';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/product" element={<Product/>} />
        </Routes>
    </Router>

  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/App';
import Contact from './Pages/Contact/App';
import Quotation from './Pages/QUOTATION/App';
import Products from './Pages/Product/App';

// ScrollToTop component that handles scrolling on route change
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

// Wrap all routes with ScrollToTop
function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        </Routes>
    </Router>

  );
}

export default App;

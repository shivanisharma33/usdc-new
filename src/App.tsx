import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Investors from './pages/Investors';
import Insights from './pages/Insights';
import Management from './pages/Management';
import Locations from './pages/Locations';
import Careers from './pages/Careers';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-cyan-100 selection:text-cyan-700 uppercase-none">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/management" element={<Management />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RedefiningSection from './components/RedefiningSection';
import WhatWeDo from './components/WhatWeDo';
import Opportunity from './components/Opportunity';
import EarthSection from './components/EarthSection';
import LatestNews from './components/LatestNews';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-cyan-100 selection:text-cyan-700 uppercase-none">
      <Navbar />
      <main>
        <Hero />
        <RedefiningSection />
        <WhatWeDo />
        <Opportunity />
        <EarthSection />
        <LatestNews />
      </main>

      {/* Optional: Add a footer or rest of the page content here */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trusted by Global Enterprises</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Logo placeholders could go here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

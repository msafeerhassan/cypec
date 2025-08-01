import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PerksSection from './components/PerksSection';
import LookingForSection from './components/LookingForSection';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }

    // Simple routing based on URL hash or pathname
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/thanks' || path.includes('/thanks')) {
        setCurrentPage('thanks');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial route
    handleRouteChange();

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  // Render Thank You page
  if (currentPage === 'thanks') {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-cypec-slate-950 text-white' : 'bg-white text-cypec-slate-900'
      }`}>
        <ThankYouPage darkMode={darkMode} />
      </div>
    );
  }

  // Render main homepage
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-950 text-white' : 'bg-white text-cypec-slate-900'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <PerksSection darkMode={darkMode} />
      <LookingForSection darkMode={darkMode} />
      <ApplicationForm darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import cypecLogo from '../media/1.png'; // Using the existing logo

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect ${
      darkMode 
        ? 'bg-cypec-slate-900/90 border-b border-cypec-slate-800' 
        : 'bg-white/90 border-b border-cypec-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src={cypecLogo} 
                alt="CYPEC Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-cypec-slate-900'
            }`}>
              CYPEC
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`transition-colors font-medium hover:scale-105 ${
              darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
            }`}>
              About
            </a>
            <a href="#perks" className={`transition-colors font-medium hover:scale-105 ${
              darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
            }`}>
              Perks
            </a>
            <a href="#apply" className={`transition-colors font-medium hover:scale-105 ${
              darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
            }`}>
              Apply
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-cypec-slate-800 text-cypec-slate-300 hover:text-cypec-primary-400 hover:bg-cypec-slate-700' 
                  : 'bg-cypec-slate-100 text-cypec-slate-600 hover:text-cypec-primary-600 hover:bg-cypec-slate-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-cypec-slate-800 text-cypec-slate-300 hover:text-cypec-primary-400 hover:bg-cypec-slate-700' 
                  : 'bg-cypec-slate-100 text-cypec-slate-600 hover:text-cypec-primary-600 hover:bg-cypec-slate-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-cypec-slate-800 text-cypec-slate-300 hover:text-cypec-primary-400 hover:bg-cypec-slate-700' 
                  : 'bg-cypec-slate-100 text-cypec-slate-600 hover:text-cypec-primary-600 hover:bg-cypec-slate-200'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t animate-fade-in ${
            darkMode ? 'border-cypec-slate-800' : 'border-cypec-slate-200'
          }`}>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#about" 
                className={`py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                  darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400 hover:bg-cypec-slate-800' : 'text-cypec-slate-600 hover:text-cypec-primary-600 hover:bg-cypec-slate-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#perks" 
                className={`py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                  darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400 hover:bg-cypec-slate-800' : 'text-cypec-slate-600 hover:text-cypec-primary-600 hover:bg-cypec-slate-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Perks
              </a>
              <a 
                href="#apply" 
                className={`py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                  darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400 hover:bg-cypec-slate-800' : 'text-cypec-slate-600 hover:text-cypec-primary-600 hover:bg-cypec-slate-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
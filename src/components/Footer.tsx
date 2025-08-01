import { Mail, Heart } from 'lucide-react';
import cypecLogo from '../media/1.png';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-900 border-t border-cypec-slate-800' : 'bg-cypec-slate-50 border-t border-cypec-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-10">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center cypec-gradient p-2">
              <img 
                src={cypecLogo} 
                alt="CYPEC Logo" 
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  console.error('Failed to load footer logo:', cypecLogo);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className={`text-3xl font-black tracking-tight ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                CYPEC
              </span>
              <p className={`text-sm font-medium ${
                darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
              }`}>
                By teens for teens
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <a 
              href="#about"
              className={`transition-all duration-300 font-semibold hover:scale-105 ${
                darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
              }`}
            >
              About
            </a>
            <a 
              href="#perks"
              className={`transition-all duration-300 font-semibold hover:scale-105 ${
                darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
              }`}
            >
              Perks
            </a>
            <a 
              href="#apply"
              className={`transition-all duration-300 font-semibold hover:scale-105 ${
                darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
              }`}
            >
              Apply
            </a>
            <a 
              href="mailto:cypecofficial@gmail.com"
              className={`transition-all duration-300 font-semibold hover:scale-105 ${
                darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <a 
              href="mailto:cypecofficial@gmail.com"
              className={`flex items-center gap-3 transition-all duration-300 font-medium hover:scale-105 ${
                darkMode ? 'text-cypec-slate-300 hover:text-cypec-primary-400' : 'text-cypec-slate-600 hover:text-cypec-primary-600'
              }`}
            >
              <div className="w-10 h-10 cypec-gradient rounded-xl flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              cypecofficial@gmail.com
            </a>
          </div>

          <div className={`pt-8 border-t ${
            darkMode ? 'border-cypec-slate-800' : 'border-cypec-slate-200'
          }`}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <p className={`text-sm font-medium ${
                darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
              }`}>
                Built with
              </p>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <p className={`text-sm font-medium ${
                darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
              }`}>
                by CYPEC Team – A{' '}
                <span className="font-bold cypec-text-gradient">Hack Club</span>
              </p>
            </div>
            <p className={`text-sm font-bold ${
              darkMode ? 'text-cypec-slate-500' : 'text-cypec-slate-500'
            }`}>
              CYPEC © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
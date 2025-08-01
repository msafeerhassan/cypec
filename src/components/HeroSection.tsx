import { ArrowRight, Sparkles } from 'lucide-react';
import cypecLogo from '../media/1.png';

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-950' : 'bg-gradient-to-br from-white to-cypec-slate-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${darkMode ? '#0c8ce9' : '#0c8ce9'} 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, ${darkMode ? '#064c85' : '#064c85'} 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="relative mb-8 animate-bounce-gentle">
            <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-bold transition-all duration-300 cypec-shadow-dark overflow-hidden ${
              darkMode 
                ? 'bg-gradient-to-br from-cypec-primary-600 to-cypec-primary-800 shadow-2xl shadow-cypec-primary-900/30' 
                : 'bg-gradient-to-br from-cypec-primary-500 to-cypec-primary-700 shadow-2xl shadow-cypec-primary-600/30'
            }`}>
              <img 
                src={cypecLogo} 
                alt="CYPEC Logo" 
                className="w-20 h-20 object-contain rounded-full"
                onError={(e) => {
                  console.error('Failed to load logo:', cypecLogo);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="text-cypec-primary-400 animate-pulse" size={24} />
            </div>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight animate-slide-up ${
            darkMode ? 'text-white' : 'text-cypec-slate-900'
          }`}>
            Empowering Pakistan's Tech Future {' '}
            <span className="cypec-text-gradient block mt-2">
              Dream | Code | Lead
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
            <p className={`text-lg sm:text-xl leading-relaxed font-medium ${
              darkMode ? 'text-cypec-slate-300' : 'text-cypec-slate-600'
            }`}>
              CYPEC is an initiative under{' '}
              <span className="font-bold cypec-text-gradient">Hack Club</span>{' '}
              focused on supporting teenage coders and builders from every corner of Pakistan. 
              Through open-source collaboration, project-based learning, and a vibrant community, 
              we empower the next generation of engineers and software developers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button 
              onClick={scrollToApply}
              className="btn-primary flex items-center justify-center gap-3 text-lg px-12 py-4 group"
            >
              Apply to Join
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <a 
              href="#about"
              className={`btn-outline text-lg px-12 py-4 inline-flex items-center justify-center ${
                darkMode ? 'border-cypec-primary-400 text-cypec-primary-400 hover:bg-cypec-primary-400' : ''
              }`}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
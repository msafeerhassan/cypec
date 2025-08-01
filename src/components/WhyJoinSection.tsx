import React from 'react';
import { Code, Globe, Brain, Settings } from 'lucide-react';

interface WhyJoinSectionProps {
  darkMode: boolean;
}

export default function WhyJoinSection({ darkMode }: WhyJoinSectionProps) {
  const features = [
    {
      icon: Code,
      title: "Real Learning",
      description: "Offer workshops, help sessions, and hands-on coding to build real skills."
    },
    {
      icon: Globe,
      title: "Global Stage",
      description: "Connect members with other international student developers, share work, and gain feedback."
    },
    {
      icon: Brain,
      title: "Mentorship",
      description: "Access support from experienced teen coders, college students, and volunteers."
    },
    {
      icon: Settings,
      title: "Projects & Experience",
      description: "Work on real projects with your peers to build a strong portfolio."
    }
  ];

  return (
    <section id="why-join" className={`py-24 transition-colors duration-300 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why Join{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              CYPEC?
            </span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We provide the foundation, community, and opportunities you need to excel in technology and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-900 border border-slate-800 hover:border-blue-600 hover:bg-slate-800' 
                    : 'bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
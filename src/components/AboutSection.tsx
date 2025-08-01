import { MessageCircle, Globe, Lightbulb, Users, Code, Heart } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

export default function AboutSection({ darkMode }: AboutSectionProps) {
  const highlights = [
    {
      icon: MessageCircle,
      title: "Text-Based Online Meetings",
      description: "Accessible discussions that work with any internet connection, ensuring no one is left behind."
    },
    {
      icon: Globe,
      title: "Nationwide Youth Participation",
      description: "Connecting teens from every corner of Pakistan, from Karachi to Gilgit-Baltistan."
    },
    {
      icon: Lightbulb,
      title: "Focus on Building Real Projects",
      description: "Learn by creating meaningful, practical solutions that solve real-world problems."
    },
    {
      icon: Users,
      title: "Mentorship & Community",
      description: "Connect with experienced developers and build lasting friendships with like-minded peers."
    },
    {
      icon: Code,
      title: "Open Source Culture",
      description: "Contribute to open source projects and build a portfolio that showcases your skills."
    },
    {
      icon: Heart,
      title: "Inclusive Environment",
      description: "A welcoming space for all backgrounds, experience levels, and perspectives to thrive."
    }
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-900' : 'bg-cypec-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cypec-primary-100 text-cypec-primary-700 font-semibold text-sm mb-6">
            <Heart size={16} />
            About the Club
          </div>
          <h2 className={`text-4xl sm:text-6xl font-black mb-8 ${
            darkMode ? 'text-white' : 'text-cypec-slate-900'
          }`}>
            Building Pakistan's{' '}
            <span className="cypec-text-gradient">Tech Community</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg sm:text-xl leading-relaxed font-medium ${
              darkMode ? 'text-cypec-slate-300' : 'text-cypec-slate-600'
            }`}>
              We are not just another tech group — we are a movement. CYPEC provides teenagers across Pakistan, 
              especially from underserved areas, a chance to connect, learn, build, and grow in technology. 
              With structured discussions, project showcases, mentorship, and community events — all fully online 
              to adapt to cultural and connectivity constraints — we foster meaningful innovation and skill-building.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 card-hover ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border border-cypec-slate-700 hover:border-cypec-primary-500' 
                    : 'bg-white border border-cypec-slate-200 hover:border-cypec-primary-300 cypec-shadow hover:cypec-shadow-dark'
                }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110 ${
                    darkMode 
                      ? 'cypec-gradient cypec-shadow-dark' 
                      : 'cypec-gradient cypec-shadow'
                  }`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    darkMode ? 'text-white' : 'text-cypec-slate-900'
                  }`}>
                    {highlight.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
                  }`}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl ${
            darkMode 
              ? 'bg-cypec-slate-800 border border-cypec-slate-700' 
              : 'bg-white border border-cypec-slate-200 cypec-shadow'
          }`}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 cypec-gradient flex items-center justify-center text-white font-semibold text-sm ${
                    darkMode ? 'border-cypec-slate-800' : 'border-white'
                  }`}
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className={`font-semibold ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                Join the young developers
              </p>
              <p className={`text-sm ${
                darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
              }`}>
                Building the future of Pakistan's tech ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
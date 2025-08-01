import { Wrench, Brain, Globe, Trophy, Users, TrendingUp, Snowflake, Sun, Zap, Gift } from 'lucide-react';

interface PerksSectionProps {
  darkMode: boolean;
}

export default function PerksSection({ darkMode }: PerksSectionProps) {
  const perks = [
    {
      icon: Wrench,
      title: "Free Developer Tools",
      description: "GitHub Student Developer Pack, CodeCrafters, Brilliant Premium, Zoom Pro, Figma Team Plan and some other dev tools for free."
    },
    {
      icon: Brain,
      title: "Project Mentorship",
      description: "Get project reviews, advice from experienced teen coders, and help finding open-source contributions."
    },
    {
      icon: Globe,
      title: "Global Hackathons & Events",
      description: "Participate in events like CodeDay, Hackathons, and project sprints with international teens."
    },
    {
      icon: Users,
      title: "Peer Network & Exposure",
      description: "Be part of a nationwide club and a global movement."
    },
    {
      icon: TrendingUp,
      title: "Skill Growth",
      description: "Learn real coding skills by building real-world projects, not just watching tutorials."
    }
  ];

  const ysws = [
    {
      icon: Snowflake,
      title: "Gemini",
      description: "Ship An Android App and get a FREE Android Phone + Dev License!"
    },
    {
      icon: Sun,
      title: "Summer of Making",
      description: "Build stuff. Earn shells. Order items (USB, Printer, PlayDate, Flipper Zero, 3D Printer, iPad, Mac Mini, Macbook and much more). Repeat."
    },
    {
      icon: Zap,
      title: "Build Something Cool",
      description: "Make any hardware project (Keyboard, Game Console, Rocket, Robot, 3D Printer, etc), get up to 350 USD to build it! Then, go to a 4-day hardware hackathon at Github HQ this summer (2025)!"
    }
  ];

  return (
    <section id="perks" className={`py-24 transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-950' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cypec-primary-100 text-cypec-primary-700 font-semibold text-sm mb-6">
            <Gift size={16} />
            Member Benefits
          </div>
          <h2 className={`text-4xl sm:text-6xl font-black mb-8 ${
            darkMode ? 'text-white' : 'text-cypec-slate-900'
          }`}>
            Perks for{' '}
            <span className="cypec-text-gradient">Members</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg sm:text-xl leading-relaxed mb-8 font-medium ${
              darkMode ? 'text-cypec-slate-300' : 'text-cypec-slate-600'
            }`}>
              As a member of CYPEC, you'll get access to amazing global opportunities through{' '}
              <span className="font-bold cypec-text-gradient">Hack Club's ecosystem</span>  
               :
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <div 
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 card-hover ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border border-cypec-slate-700 hover:border-cypec-primary-500' 
                    : 'bg-cypec-slate-50 border border-cypec-slate-200 hover:border-cypec-primary-300 cypec-shadow hover:cypec-shadow-dark'
                }`}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
                    darkMode 
                      ? 'cypec-gradient cypec-shadow-dark' 
                      : 'cypec-gradient cypec-shadow'
                  }`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    darkMode ? 'text-white' : 'text-cypec-slate-900'
                  }`}>
                    {perk.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
                  }`}>
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* YSWS Section */}
        <div className={`p-10 rounded-3xl mb-16 relative overflow-hidden ${
          darkMode 
            ? 'bg-gradient-to-br from-cypec-primary-900/30 to-cypec-accent-900/30 border border-cypec-primary-800/50' 
            : 'bg-gradient-to-br from-cypec-primary-50 to-cypec-accent-50 border border-cypec-primary-200'
        }`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, ${darkMode ? '#0c8ce9' : '#0c8ce9'} 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, ${darkMode ? '#064c85' : '#064c85'} 0%, transparent 50%)`
            }} />
          </div>
          
          <div className="text-center mb-10 relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 cypec-gradient rounded-2xl flex items-center justify-center mr-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className={`text-3xl font-black ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                YSWS Programs
              </h3>
            </div>
            <p className={`text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-medium ${
              darkMode ? 'text-cypec-slate-300' : 'text-cypec-slate-600'
            }`}>
              Join exclusive Hack Club programs. CYPEC educates members about Project Development for each program, helping you make the most of these incredible opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {ysws.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-cypec-slate-800/80 border border-cypec-slate-700 backdrop-blur-sm' 
                      : 'bg-white/80 border border-cypec-slate-200 backdrop-blur-sm cypec-shadow'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 cypec-gradient rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className={`font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-cypec-slate-900'
                    }`}>
                      {program.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
                    }`}>
                      {program.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
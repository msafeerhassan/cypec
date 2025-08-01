import { Users, Heart, Code, Globe, Search } from 'lucide-react';

interface LookingForSectionProps {
  darkMode: boolean;
}

export default function LookingForSection({ darkMode }: LookingForSectionProps) {
  const criteria = [
    {
      icon: Users,
      title: "Ages 13-18",
      description: "Pakistani teens passionate about technology"
    },
    {
      icon: Code,
      title: "All Skill Levels",
      description: "From complete beginners to advanced coders"
    },
    {
      icon: Heart,
      title: "Underserved Communities",
      description: "Especially encouraging students from rural areas"
    },
    {
      icon: Globe,
      title: "All Backgrounds",
      description: "Welcoming all genders, regions, and experiences"
    }
  ];

  return (
    <section className={`py-24 transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-900' : 'bg-cypec-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cypec-primary-100 text-cypec-primary-700 font-semibold text-sm mb-6">
            <Search size={16} />
            Who Can Join
          </div>
          <h2 className={`text-4xl sm:text-6xl font-black mb-8 ${
            darkMode ? 'text-white' : 'text-cypec-slate-900'
          }`}>
            What We're{' '}
            <span className="cypec-text-gradient">Looking For</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon;
            return (
              <div 
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 text-center card-hover ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border border-cypec-slate-700 hover:border-cypec-primary-500' 
                    : 'bg-white border border-cypec-slate-200 hover:border-cypec-primary-300 cypec-shadow hover:cypec-shadow-dark'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-300 ${
                  darkMode 
                    ? 'cypec-gradient cypec-shadow-dark' 
                    : 'cypec-gradient cypec-shadow'
                }`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-cypec-slate-900'
                }`}>
                  {criterion.title}
                </h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-600'
                }`}>
                  {criterion.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
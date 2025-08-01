import { Send, UserPlus } from 'lucide-react';

interface ApplicationFormProps {
  darkMode: boolean;
}

export default function ApplicationForm({ darkMode }: ApplicationFormProps) {
  const experienceOptions = [
    'None',
    'Beginner',
    'Intermediate',
    'Advanced'
  ];

  return (
    <section id="apply" className={`py-24 transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-950' : 'bg-white'
    }`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cypec-primary-100 text-cypec-primary-700 font-semibold text-sm mb-6">
            <UserPlus size={16} />
            Join Us
          </div>
          <h2 className={`text-4xl sm:text-6xl font-black mb-6 ${
            darkMode ? 'text-white' : 'text-cypec-slate-900'
          }`}>
            Application Form
            <span className={`block text-2xl font-semibold mt-4 ${
              darkMode ? 'text-cypec-primary-400' : 'text-cypec-primary-600'
            }`}>
              (Invite-only)
            </span>
          </h2>
          <p className={`text-lg leading-relaxed font-medium ${
            darkMode ? 'text-cypec-slate-300' : 'text-cypec-slate-600'
          }`}>
            Join a community of ambitious Pakistani teens building the future of technology.
          </p>
        </div>

        <form 
          action="https://formsubmit.co/msafeerhassan0@gmail.com" 
          method="POST" 
          className={`p-10 rounded-3xl animate-slide-up ${
            darkMode 
              ? 'bg-cypec-slate-900 border border-cypec-slate-800' 
              : 'bg-cypec-slate-50 border border-cypec-slate-200 cypec-shadow'
          }`}
        >
          {/* Hidden FormSubmit configuration fields */}
          <input type="hidden" name="_next" value="https://cypec.vercel.app/thanks" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_autoresponse" value="Thank you for applying to CYPEC! We've received your application and will review it within 3-5 business days. We'll contact you via email with further instructions. Welcome to the CYPEC community!" />
          <input type="hidden" name="_subject" value="🚀 New CYPEC Application - Review Required" />
          <input type="hidden" name="_template" value="table" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                    : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                required
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                    : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
                }`}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-cypec-slate-900'
            }`}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                darkMode 
                  ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                  : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                City/Region *
              </label>
              <input
                type="text"
                name="city"
                required
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                    : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                School/College Name
              </label>
              <input
                type="text"
                name="school"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                    : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
                }`}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-cypec-slate-900'
            }`}>
              How much coding experience do you have? *
            </label>
            <select
              name="experience"
              required
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                darkMode 
                  ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                  : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
              }`}
            >
              <option value="">Select your experience level</option>
              {experienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-cypec-slate-900'
            }`}>
              What motivates you to join CYPEC? *
            </label>
            <textarea
              name="motivation"
              required
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] resize-vertical ${
                darkMode 
                  ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                  : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
              }`}
            />
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-cypec-slate-900'
            }`}>
              Share any project you've built or want to build (optional)
            </label>
            <textarea
              name="project"
              rows={3}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] resize-vertical ${
                darkMode 
                  ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                  : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                Discord Username (if already on Discord)
              </label>
              <input
                type="text"
                name="discordUsername"
                placeholder="username#1234"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500 placeholder-cypec-slate-500' 
                    : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500 placeholder-cypec-slate-400'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-cypec-slate-900'
              }`}>
                How did you hear about us? *
              </label>
              <input
                type="text"
                name="hearAbout"
                required
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cypec-primary-500 focus:scale-[1.02] ${
                  darkMode 
                    ? 'bg-cypec-slate-800 border-cypec-slate-700 text-white focus:border-cypec-primary-500' 
                    : 'bg-white border-cypec-slate-300 text-cypec-slate-900 focus:border-cypec-primary-500'
                }`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary text-lg px-8 py-4 flex items-center justify-center gap-3"
          >
            <Send size={24} />
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
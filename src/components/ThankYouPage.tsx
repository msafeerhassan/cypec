import { CheckCircle, ArrowRight, Mail, MessageCircle } from 'lucide-react';

interface ThankYouPageProps {
  darkMode: boolean;
}

export default function ThankYouPage({ darkMode }: ThankYouPageProps) {
  const goBackToHome = () => {
    window.location.href = '#hero';
  };

  const contactEmail = () => {
    window.open('mailto:cypecofficial@gmail.com', '_blank');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
      darkMode ? 'bg-cypec-slate-950' : 'bg-gradient-to-br from-white to-cypec-slate-50'
    }`}>
      <div className="max-w-2xl mx-auto text-center">
        <div className={`p-12 rounded-3xl animate-fade-in ${
          darkMode 
            ? 'bg-gradient-to-br from-green-900/30 to-cypec-primary-900/30 border border-green-800/50 cypec-shadow-dark' 
            : 'bg-gradient-to-br from-green-50 to-cypec-primary-50 border border-green-200 cypec-shadow'
        }`}>
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-gentle">
            <CheckCircle className="text-white" size={48} />
          </div>

          {/* Success Message */}
          <h1 className={`text-5xl font-black mb-6 ${
            darkMode ? 'text-white' : 'text-cypec-slate-900'
          }`}>
            Application Submitted!
          </h1>
          
          <p className={`text-xl leading-relaxed font-medium mb-8 ${
            darkMode ? 'text-cypec-slate-300' : 'text-cypec-slate-600'
          }`}>
            Thank you for applying to <span className="cypec-text-gradient font-bold">CYPEC</span>! 
            We've received your application and will review it carefully.
          </p>

          <div className={`p-6 rounded-xl mb-8 ${
            darkMode 
              ? 'bg-cypec-slate-800/50 border border-cypec-slate-700' 
              : 'bg-white/80 border border-cypec-slate-200'
          }`}>
            <h3 className={`text-lg font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-cypec-slate-900'
            }`}>
              What happens next?
            </h3>
            <ul className={`text-left space-y-2 ${
              darkMode ? 'text-cypec-slate-300' : 'text-cypec-slate-600'
            }`}>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cypec-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Our team will review your application within 3-5 business days</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cypec-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>You'll receive an email with further instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cypec-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>If selected, we'll invite you to our Discord community</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={goBackToHome}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              <ArrowRight size={20} />
              Back to Home
            </button>
            
            <button
              onClick={contactEmail}
              className={`px-8 py-4 rounded-xl border-2 font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${
                darkMode
                  ? 'border-cypec-slate-600 text-cypec-slate-300 hover:border-cypec-primary-500 hover:text-cypec-primary-400'
                  : 'border-cypec-slate-300 text-cypec-slate-700 hover:border-cypec-primary-500 hover:text-cypec-primary-600'
              }`}
            >
              <Mail size={20} />
              Contact Us
            </button>
          </div>

          {/* Additional Info */}
          <div className={`mt-8 pt-6 border-t ${
            darkMode ? 'border-cypec-slate-700' : 'border-cypec-slate-200'
          }`}>
            <p className={`text-sm flex items-center justify-center gap-2 ${
              darkMode ? 'text-cypec-slate-400' : 'text-cypec-slate-500'
            }`}>
              <MessageCircle size={16} />
              Questions? Email us at cypecofficial@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

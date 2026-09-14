import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { AlertTriangle, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-md w-full text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black font-mono text-blue-950 block">404</span>
          <h1 className="text-xl font-bold text-slate-900 uppercase">
            {language === 'hi' ? 'पृष्ठ उपलब्ध नहीं है' : 'Page Not Found'}
          </h1>
          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            {language === 'hi'
              ? 'आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या हटा दिया गया है।'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
        >
          <Home className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Back to Home'}</span>
        </Link>
      </div>
    </div>
  );
};

import React from 'react';
import { Content, Language } from '../types';
import LanguageToggle from './LanguageToggle';

interface Props {
  content: Content['nav'];
  currentLang: Language['code'];
  onToggleLanguage: () => void;
}

const Navigation: React.FC<Props> = ({
  content,
  currentLang,
  onToggleLanguage,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-cyber-dark/80 backdrop-blur-sm border-b border-cyber-accent/10 z-40">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Liens de navigation */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            {Object.entries(content).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="inline-flex items-center px-1 pt-1 text-xs sm:text-sm lg:text-base font-medium text-cyber-text hover:text-cyber-accent transition-colors"
              >
                {value}
              </a>
            ))}
          </div>
          {/* Bouton de changement de langue */}
          <div className="ml-auto pl-0">
            <LanguageToggle
              currentLang={currentLang}
              onToggle={onToggleLanguage}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

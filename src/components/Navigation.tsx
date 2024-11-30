import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cyber-dark/80 backdrop-blur-sm border-b border-cyber-accent/10 z-40">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Bouton hamburger pour mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-cyber-text hover:text-cyber-accent"
            aria-label="Menu principal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Liens de navigation - version desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(content).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="inline-flex items-center px-1 pt-1 text-sm lg:text-base font-medium text-cyber-text hover:text-cyber-accent transition-colors"
              >
                {value}
              </a>
            ))}
          </div>

          {/* Bouton de changement de langue */}
          <div className="ml-auto pl-4">
            <LanguageToggle
              currentLang={currentLang}
              onToggle={onToggleLanguage}
            />
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden pb-3 space-y-1`}
        >
          {Object.entries(content).map(([key, value]) => (
            <a
              key={key}
              href={`#${key}`}
              className="block px-3 py-2 text-base font-medium text-cyber-text hover:text-cyber-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {value}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { Language } from '../types';
import { Globe, Languages } from 'lucide-react';

interface Props {
  currentLang: Language['code'];
  onToggle: () => void;
}

const LanguageToggle: React.FC<Props> = ({ currentLang, onToggle }) => {
  const getLanguageIcon = () => {
    return currentLang === 'en' ? (
      <Globe className="w-5 h-5 text-cyber-accent" />
    ) : (
      <Languages className="w-5 h-5 text-cyber-accent" />
    );
  };

  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-cyber-accent transition-colors"
    >
      {getLanguageIcon()}
    </button>
  );
};

export default LanguageToggle;

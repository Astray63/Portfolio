import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Content, Language } from '../types';

interface Props {
  content: Content['certifications'];
  lang: Language['code'];
}

const sectionClass =
  'bg-cyber-light rounded-xl border border-cyber-accent/10 p-6 backdrop-blur-sm hover:border-cyber-accent/30 transition-all duration-300';

const Certifications: React.FC<Props> = ({ content, lang }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.items.map((cert, index) => (
          <div key={index} className={sectionClass}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-cyber-highlight">
                  {cert.name}
                </h3>
                <p className="text-cyber-accent">{cert.issuer}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar className="w-4 h-4 text-cyber-text" />
                  <p className="text-cyber-text">{cert.date}</p>
                  {cert.validUntil && (
                    <span className="text-cyber-text">→ {cert.validUntil}</span>
                  )}
                </div>
              </div>
              <Award className="w-5 h-5 md:w-6 md:h-6 text-cyber-accent opacity-50" />
            </div>
            {cert.description && (
              <p className="text-cyber-text mt-2">{cert.description}</p>
            )}
            {cert.credentialId && (
              <p className="text-cyber-text mt-2">ID: {cert.credentialId}</p>
            )}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyber-accent hover:text-cyber-highlight transition-colors mt-4"
              >
                <span>
                  {lang === 'en' ? 'View Certificate' : 'Voir la Certification'}
                </span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

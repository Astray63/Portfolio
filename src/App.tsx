import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { Section } from './components/Section';
import MatrixRain from './components/MatrixRain';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import { Language, Content, Project } from './types';
import { en } from './locales/en';
import { fr } from './locales/fr';
import {
  Code2,
  GraduationCap,
  Shield,
  Mail,
  ExternalLink,
  Github,
  Linkedin,
  Lock,
  Server,
  Terminal,
  Globe,
  Languages,
} from 'lucide-react';

const sectionClass =
  'bg-cyber-light rounded-xl border border-cyber-accent/10 p-6 backdrop-blur-sm hover:border-cyber-accent/30 transition-all duration-300';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language['code']>('fr');
  const content: Content = lang === 'en' ? en : fr;

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const getLanguageIcon = (code: string) => {
    switch (code) {
      case 'en':
        return <Globe className="w-5 h-5 text-cyber-accent" />;
      case 'fr':
        return <Languages className="w-5 h-5 text-cyber-accent" />;
      default:
        return <Languages className="w-5 h-5 text-cyber-accent" />;
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text">
      <div className="fixed inset-0 bg-gradient-to-br from-cyber-dark via-cyber-dark to-cyber-light -z-10" />
      <MatrixRain />
      <Navigation
        content={content.nav}
        currentLang={lang}
        onToggleLanguage={toggleLanguage}
      />

      {/* Section Héro */}
      <Section id="hero" className="pt-32">
        <Hero content={content.hero} />
      </Section>

      {/* Section À propos */}
      <Section id="about">
        <SectionHeader icon={Terminal} title={content.about.title} />
        <div className={sectionClass}>
          <div className="space-y-4">
            {content.about.content.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Expérience */}
      <Section id="experience">
        <SectionHeader icon={Server} title={content.experience.title} />
        <div className={sectionClass}>
          <h3 className="text-lg md:text-xl font-semibold">
            {content.experience.company}
          </h3>
          <p className="mt-1 text-cyber-accent">{content.experience.role}</p>
          <p className="mt-1">{content.experience.period}</p>
          <ul className="mt-4 space-y-2">
            {content.experience.description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-cyber-accent mt-2 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Section Projets */}
      <Section id="projects">
        <SectionHeader icon={Code2} title={content.projects.title} />
        <div className="space-y-6">
          {content.projects.items.map((project, index) => (
            <ProjectCard key={index} project={project} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Section Compétences */}
      <Section id="skills">
        <SectionHeader icon={Lock} title={content.skills.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.skills.categories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>
        <div className={`mt-8 ${sectionClass}`}>
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            {content.skills.languages.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {content.skills.languages.items.map((langItem, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>{getLanguageIcon(langItem.code)}</span>
                <span className="font-medium text-cyber-highlight">
                  {langItem.name}
                </span>
                <span className="text-cyber-text">•</span>
                <span>{langItem.level}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Licences et Certifications */}
      <Section id="certifications">
        <SectionHeader
          icon={GraduationCap}
          title={content.certifications.title}
        />
        <Certifications content={content.certifications} lang={lang} />
      </Section>

      {/* Section Cybersécurité */}
      <Section id="cybersecurity">
        <SectionHeader icon={Shield} title={content.cybersecurity.title} />
        <div className={sectionClass}>
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-cyber-accent" />
            <h3 className="text-lg md:text-xl font-semibold">
              Hack The Box & CTF
            </h3>
          </div>
          <div className="space-y-4">
            {content.cybersecurity.content.map((item, index) => (
              <p key={index} className="leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Contact */}
      <Section id="contact">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {content.contact.title}
          </h2>
          <p className="text-base md:text-lg mb-8">{content.contact.cta}</p>
          <div className={`flex flex-wrap justify-center space-x-6 ${sectionClass}`}>
            <ContactLink
              icon={Mail}
              href={`mailto:${content.contact.email}`}
              label={content.contact.email}
            />
            <ContactLink
              icon={Github}
              href="https://github.com/Astray63"
              label="GitHub"
            />
            <ContactLink
              icon={Linkedin}
              href="https://www.linkedin.com/in/elijah-lasserre"
              label="LinkedIn"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

// Composant SectionHeader
interface SectionHeaderProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => (
  <div className="relative mb-8">
    <Icon className="absolute -left-4 -top-4 w-5 h-5 md:w-6 md:h-6 text-cyber-accent opacity-20" />
    <h2 className="text-2xl md:text-3xl font-bold text-cyber-highlight">
      {title}
    </h2>
  </div>
);

// Composant ProjectCard
interface ProjectCardProps {
  project: Project;
  lang: Language['code'];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang }) => (
  <div className={sectionClass}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <Terminal className="w-5 h-5 md:w-6 md:h-6 text-cyber-accent" />
        <h3 className="text-lg md:text-xl font-semibold text-cyber-highlight">
          {project.name}
        </h3>
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-cyber-accent hover:text-cyber-highlight transition-colors"
      >
        <Github className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-sm">
          {lang === 'en' ? 'View Code' : 'Voir le Code'}
        </span>
        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
      </a>
    </div>
    <p className="text-cyber-text mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, idx) => (
        <span
          key={idx}
          className="px-3 py-1 rounded-full text-sm font-medium bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20"
        >
          {tech}
        </span>
      ))}
    </div>
    {project.features && (
      <ul className="mt-4 space-y-2">
        {project.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-cyber-text">
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-accent mt-2 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    )}
  </div>
);

// Composant SkillCategoryCard
interface SkillCategoryCardProps {
  category: Content['skills']['categories'][0];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => (
  <div className={sectionClass}>
    <div className="flex items-center space-x-3 mb-4">
      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-cyber-accent" />
      <h3 className="text-lg md:text-xl font-semibold text-cyber-highlight">
        {category.title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {category.items.map((item, idx) => (
        <span
          key={idx}
          className="px-3 py-1 rounded-full text-sm font-medium bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

// Composant ContactLink
interface ContactLinkProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center space-x-2 text-cyber-accent hover:text-cyber-highlight transition-colors"
  >
    <Icon className="w-5 h-5 md:w-6 md:h-6" />
    <span>{label}</span>
    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
  </a>
);

export default App;

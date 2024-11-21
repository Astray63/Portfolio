export interface Language {
  code: 'en' | 'fr';
  label: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  features?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialId?: string;
  link?: string;
  validUntil?: string;
}

export interface Content {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    certifications: string;
    cybersecurity: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    content: string[];
  };
  experience: {
    title: string;
    company: string;
    role: string;
    period: string;
    description: string[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  skills: {
    title: string;
    categories: {
      title: string;
      items: string[];
    }[];
    languages: {
      title: string;
      items: {
        name: string;
        level: string;
        code: string;
      }[];
    };
  };
  certifications: {
    title: string;
    items: Certification[];
  };
  cybersecurity: {
    title: string;
    content: string[];
  };
  contact: {
    title: string;
    cta: string;
    email: string;
  };
}

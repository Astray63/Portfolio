import { Content } from '../types';

export const en: Content = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    certifications: 'Certifications',
    cybersecurity: 'Cybersecurity',
    contact: 'Contact'
  },
  hero: {
    greeting: 'Hello, I am',
    title: 'Elijah Lasserre',
    subtitle: 'Apprentice Web Developer & Cybersecurity Enthusiast'
  },
  about: {
    title: 'About Me',
    content: [
      'As a motivated apprentice web developer with a passion for both front-end and back-end development, I bring a unique perspective shaped by my experience in digital mediation and cybersecurity.',
      'Currently supported by France Travail, I am actively seeking opportunities to join a dynamic team where I can contribute my technical skills and continue growing as a developer.',
      'Beyond coding, I am passionate about travel and fitness, which help me maintain a balanced approach to both personal and professional growth.'
    ]
  },
  experience: {
    title: 'Professional Experience',
    company: 'Cyberbase, Maison des Citoyens',
    role: 'Digital Mediation Intern',
    period: 'Cournon d\'Auvergne',
    description: [
      'Provided comprehensive support to users in their digital journey, enhancing their autonomy with technology',
      'Conducted regular IT maintenance to ensure optimal system performance',
      'Implemented and taught best practices for digital security',
      'Developed and delivered workshops on digital literacy and online safety'
    ]
  },
  projects: {
    title: 'Featured Projects',
    items: [
      {
        name: 'Taquin Game in C',
        description: 'A classic sliding puzzle game implemented in C, featuring an intuitive graphical interface for manual play.',
        tech: ['C', 'Data Structures', 'Algorithms'],
        github: 'https://github.com/Astray63/Taquin-Game-In-C'
      },
      {
        name: 'Faster R-CNN Object Detection',
        description: 'A high-precision object detection model focusing on both accuracy and processing speed, demonstrating practical applications of machine learning in real-world scenarios.',
        tech: ['Python', 'Deep Learning', 'Computer Vision', 'Neural Networks'],
        github: 'https://github.com/Astray63/FasterRCNN'
      },
      {
        name: 'AI Data Processing Scripts',
        description: 'A comprehensive collection of Python scripts for AI data preprocessing and format conversion, specifically designed for object detection workflows.',
        tech: ['Python', 'OpenCV', 'YOLO', 'COCO'],
        github: 'https://github.com/Astray63/ScriptsForAi',
        features: [
          'rename.py: Batch file renaming with specific formatting',
          'variation.py: Image augmentation with automatic annotation updates',
          'video.py: Custom YOLOv8 model implementation for video object detection',
          'yolotococo.py: YOLO to COCO annotation format converter',
          'coco.py: COCO annotation ID sequencing tool'
        ]
      }
    ]
  },
  skills: {
    title: 'Skills & Education',
    categories: [
      {
        title: 'Web Development',
        items: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Python']
      },
      {
        title: 'Tools & Technologies',
        items: ['Git', 'Linux', 'Docker', 'AWS', 'Network Security']
      }
    ],
    languages: {
      title: 'Languages',
      items: [
        { name: 'French', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'Spanish', level: 'Basic' }
      ]
    }
  },
  certifications: {
    title: 'Licenses & Certifications',
    items: [
      {
        name: 'MOOC SecNumAcadémie Certification',
        issuer: 'ANSSI - French National Cybersecurity Agency',
        date: 'November 2023',
        description: 'Comprehensive cybersecurity certification covering network security, cryptography, and information security fundamentals.',
        validUntil: 'January 2034'
      },
      {
        name: 'Dante Certification',
        issuer: 'Hack The Box',
        date: 'February 2024',
        credentialId: 'HTBCERT-B59E651961',
        description: 'Advanced certification in exploitation techniques and web application security.'
      },
      
      {
        name: 'Cybersecurity Threat Overview',
        issuer: 'LinkedIn',
        date: 'February 2024',
        description: 'Threat and vulnerability management fundamentals'
      },
      {
        name: 'IT Security and Cybersecurity Foundations',
        issuer: 'LinkedIn',
        date: 'February 2024'
      },
      {
        name: 'Microsoft Cybersecurity Career Preparation',
        issuer: 'Microsoft',
        date: 'February 2024'
      },
      {
        name: 'Cybersecurity Awareness: Terminology',
        issuer: 'LinkedIn',
        date: 'February 2024',
        description: 'Information security awareness and cybersecurity fundamentals'
      }
    ]
  },
  cybersecurity: {
    title: 'Cybersecurity Experience',
    content: [
      'Active participant in Hack The Box challenges, continuously developing practical security skills',
      'Experience in Capture The Flag (CTF) competitions, focusing on real-world security scenarios',
      'Knowledgeable in network security, penetration testing, and security best practices'
    ]
  },
  contact: {
    title: 'Get in Touch',
    cta: 'Interested in working together? Let\'s connect!',
    email: 'elijahlasserre63@gmail.com'
  }
};
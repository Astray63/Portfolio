import { Content } from '../types';

export const fr: Content = {
  nav: {
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    skills: 'Compétences',
    certifications: 'Certifications',
    cybersecurity: 'Cybersécurité',
    contact: 'Contact'
  },
  hero: {
    greeting: 'Bonjour, je suis',
    title: 'Elijah Lasserre',
    subtitle: 'Apprenti Développeur Web & Passionné de Cybersécurité'
  },
  about: {
    title: 'À Propos',
    content: [
      'En tant que apprenti développeur web motivé avec une passion pour le développement front-end et back-end, j\'apporte une perspective unique façonnée par mon expérience en médiation numérique et en cybersécurité.',
      'Actuellement accompagné par France Travail, je recherche activement des opportunités pour rejoindre une équipe dynamique où je pourrai mettre à profit mes compétences techniques et continuer à évoluer en tant que développeur.',
      'Au-delà du code, je suis passionné par les voyages et le fitness, qui m\'aident à maintenir une approche équilibrée tant sur le plan personnel que professionnel.'
    ]
  },
  experience: {
    title: 'Expérience Professionnelle',
    company: 'Cyberbase, Maison des Citoyens',
    role: 'Stagiaire en Médiation Numérique',
    period: 'Cournon d\'Auvergne',
    description: [
      'Accompagnement complet des utilisateurs dans leur parcours numérique, renforçant leur autonomie avec la technologie',
      'Maintenance informatique régulière pour assurer une performance optimale des systèmes',
      'Mise en place et enseignement des bonnes pratiques en matière de sécurité numérique',
      'Développement et animation d\'ateliers sur la littératie numérique et la sécurité en ligne'
    ],
    internship: {
      company: 'S2E Groupe',
      role: 'Stagiaire en développement Web',
      period: 'Janvier 2025 · 1 mois · Besançon, France',
      description: [
        'Réalisation du site web de l\'entreprise avec un focus sur le développement front-end.',
        'Stage de 1 mois consacré à la création d\'interfaces utilisateur modernes et intuitives, en utilisant HTML, CSS, TypeScript et React.',
        'Optimisation des performances et de l\'expérience utilisateur afin d\'assurer un site rapide, fluide et réactif.'
      ]
    }
  },
  projects: {
    title: 'Projets Principaux',
    items: [
      {
        name: 'Jeu de Taquin en C',
        description: 'Un jeu de puzzle coulissant classique implémenté en C, avec une interface graphique intuitive permettant de jouer manuellement.',
        tech: ['C', 'Structures de Données', 'Algorithmes'],
        github: 'https://github.com/Astray63/Taquin-Game-In-C'
      },
      {
        name: 'Détection d\'Objets Faster R-CNN',
        description: 'Un modèle de détection d\'objets haute précision axé sur la précision et la vitesse de traitement, démontrant les applications pratiques de l\'apprentissage automatique dans des scénarios réels.',
        tech: ['Python', 'Deep Learning', 'Vision par Ordinateur', 'Réseaux de Neurones'],
        github: 'https://github.com/Astray63/FasterRCNN'
      },
      {
        name: 'Scripts de Traitement de Données IA',
        description: 'Une collection complète de scripts Python pour le prétraitement des données IA et la conversion de formats, spécialement conçue pour les flux de travail de détection d\'objets.',
        tech: ['Python', 'OpenCV', 'YOLO', 'COCO'],
        github: 'https://github.com/Astray63/ScriptsForAi',
        features: [
          'rename.py : Renommage par lot de fichiers avec formatage spécifique',
          'variation.py : Augmentation d\'images avec mise à jour automatique des annotations',
          'video.py : Implémentation de modèle YOLOv8 personnalisé pour la détection d\'objets vidéo',
          'yolotococo.py : Convertisseur de format d\'annotation YOLO vers COCO',
          'coco.py : Outil de séquençage des ID d\'annotation COCO'
        ]
      }
    ]
  },
  skills: {
    title: 'Compétences & Formation',
    categories: [
      {
        title: 'Développement Web',
        items: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Python']
      },
      {
        title: 'Outils & Technologies',
        items: ['Git', 'Linux', 'Docker', 'AWS', 'Sécurité Réseau']
      }
    ],
    languages: {
      title: 'Langues',
      items: [
        { name: 'Français', level: 'Langue maternelle', code: 'fr' },
        { name: 'Anglais', level: 'Courant', code: 'en' },
        { name: 'Espagnol', level: 'Notions', code: 'es' }
      ]
    }
  },
  certifications: {
    title: 'Licences & Certifications',
    items: [
      {
        name: 'Certification MOOC SecNumAcadémie',
        issuer: 'ANSSI - Agence nationale de la sécurité des systèmes d\'information',
        date: 'Novembre 2023',
        description: 'Certification complète en cybersécurité couvrant la sécurité des réseaux, la cryptographie et les fondamentaux de la sécurité de l\'information.',
        validUntil: 'Janvier 2034'
      },
      {
        name: 'Certification Dante',
        issuer: 'Hack The Box',
        date: 'Février 2024',
        credentialId: 'HTBCERT-B59E651961',
        description: 'Certification avancée en techniques d\'exploitation et sécurité des applications web.'
      },
      
      {
        name: 'Aperçu des menaces de cybersécurité',
        issuer: 'LinkedIn',
        date: 'Février 2024',
        description: 'Fondamentaux de la gestion des menaces et des vulnérabilités'
      },
      {
        name: 'Les fondements de la sécurité informatique et de la cybersécurité',
        issuer: 'LinkedIn',
        date: 'Février 2024'
      },
      {
        name: 'Préparer votre carrière dans la cybersécurité',
        issuer: 'Microsoft',
        date: 'Février 2024'
      },
      {
        name: 'Sensibilisation à la cybersécurité : La terminologie',
        issuer: 'LinkedIn',
        date: 'Février 2024',
        description: 'Sensibilisation à la sécurité de l\'information et fondamentaux de la cybersécurité'
      }
    ]
  },
  cybersecurity: {
    title: 'Expérience en Cybersécurité',
    content: [
      'Participant actif aux défis Hack The Box, développant continuellement des compétences pratiques en sécurité',
      'Expérience dans les compétitions Capture The Flag (CTF), focalisées sur des scénarios de sécurité réels',
      'Connaissances en sécurité réseau, tests de pénétration et bonnes pratiques de sécurité'
    ]
  },
  contact: {
    title: 'Contact',
    cta: 'Intéressé par une collaboration ? Contactez-moi !',
    email: 'elijahlasserre63@gmail.com'
  }
};
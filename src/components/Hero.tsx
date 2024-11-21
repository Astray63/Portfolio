import React from 'react';
import { Content } from '../types';

interface Props {
  content: Content['hero'];
}

const Hero: React.FC<Props> = ({ content }) => {
  return (
    <div className="text-center relative animate-fade-in px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyber-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      <div className="mb-6 sm:mb-8">
        <img
          src="https://i.imgur.com/FFxiFlo.png"
          alt="Elijah Lasserre"
          className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full object-cover mx-auto border-2 border-cyber-accent/20 animate-slide-up"
        />
      </div>
      <p className="text-base sm:text-lg text-cyber-accent font-medium animate-slide-up">
        {content.greeting}
      </p>
      <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cyber-highlight animate-slide-up">
        {content.title}
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-cyber-text animate-slide-up">
        {content.subtitle}
      </p>
    </div>
  );
};

export default Hero;

import React from 'react';

interface Props {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ id, className = '', children }) => {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

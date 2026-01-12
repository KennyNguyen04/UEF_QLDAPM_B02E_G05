import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-xl md:text-2xl font-serif mb-3 tracking-wide ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 max-w-2xl mx-auto mt-3 font-light leading-relaxed text-xs md:text-sm">
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-px bg-primary/50 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
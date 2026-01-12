import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GeneralCardProps {
  title: string;
  imageUrl: string;
  buttonText?: string;
  onClick?: () => void;
}

export const GeneralCard: React.FC<GeneralCardProps> = ({ title, imageUrl, buttonText = "ĐẶT LỊCH", onClick }) => {
  return (
    <div className="flex flex-col">
      <div className="h-60 overflow-hidden mb-4">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
      </div>
      <h3 className="text-lg font-serif text-primary mb-3 tracking-wide">{title}</h3>
      <button 
        onClick={onClick}
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 border border-gray-300 w-fit px-4 py-2 hover:border-primary hover:text-primary transition-colors"
      >
        {buttonText} <ArrowRight size={10} />
      </button>
    </div>
  );
};
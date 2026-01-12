import React from 'react';
import { Room } from '../types';
import { Users, Layout, Bed, Home } from 'lucide-react';
import { formatCurrency } from '../utils';

interface RoomCardProps {
  room: Room;
  onBook?: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onBook }) => {
  return (
    <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden h-64 w-full relative">
        <img 
          src={room.imageUrl} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 bg-primary/90 text-white px-4 py-1 text-[10px] font-serif tracking-wider">
          {formatCurrency(room.price)} / đêm
        </div>
      </div>
      <div className="py-5 px-4 border border-t-0 border-gray-100">
        <h3 className="text-lg font-serif text-primary mb-3 group-hover:text-[#8e7655] transition-colors tracking-wide">{room.name}</h3>
        
        <div className="grid grid-cols-2 gap-y-2 text-[11px] text-gray-600 mb-5 font-light">
          <div className="flex items-center gap-2">
            <Users size={12} className="text-primary" />
            <span>{room.maxPeople} người lớn</span>
          </div>
          <div className="flex items-center gap-2">
            <Layout size={12} className="text-primary" />
            <span>{room.area} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <Home size={12} className="text-primary" />
            <span>{room.roomsCount} phòng</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Bed size={12} className="text-primary flex-shrink-0" />
            <span className="truncate">{room.bedType}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-3 border-t border-gray-100">
          <button 
            onClick={(e) => { e.stopPropagation(); onBook && onBook(room); }}
            className="flex-1 bg-primary text-white py-1.5 text-[9px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors"
          >
            Đặt phòng
          </button>
          <button className="flex-1 border border-primary text-primary py-1.5 text-[9px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};
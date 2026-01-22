
import React from 'react';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-red-600 text-white px-4 py-2 flex items-center justify-center gap-4 text-xs sm:text-sm font-bold sticky top-0 z-50 animate-pulse">
      <i className="fas fa-exclamation-triangle"></i>
      <span>EMERGENCIA: LLAMA AL 911 SI ESTÁS EN PELIGRO</span>
      <a href="tel:911" className="bg-white text-red-600 px-3 py-1 rounded shadow hover:bg-red-50 transition-colors uppercase">
        Llamar
      </a>
    </div>
  );
};

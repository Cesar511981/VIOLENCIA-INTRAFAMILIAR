
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-500/30 border border-indigo-400/50 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Educación para la Prevención
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Violencia Intrafamiliar contra la Mujer y el Núcleo Familiar
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mb-10 leading-relaxed">
              Guía informativa sobre derechos, normativas legales y rutas de protección en el Ecuador. Una iniciativa de la Pontificia Universidad Católica del Ecuador Sede Santo Domingo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ruta" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-900 bg-white hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl">
                ¿Cómo denunciar?
              </a>
              <a href="#recursos" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                Números de Ayuda
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <img 
              src="https://picsum.photos/seed/domestic-violence-help/800/600" 
              alt="Representación de familia y apoyo" 
              className="rounded-2xl shadow-2xl ring-4 ring-white/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs">
              <p className="text-indigo-900 font-bold text-sm mb-1 uppercase tracking-wider">No estás sola</p>
              <p className="text-slate-600 text-sm">Cualquier persona puede presentar una denuncia, incluso si no es la víctima directa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

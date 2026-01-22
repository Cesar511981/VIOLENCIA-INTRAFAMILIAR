
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">
              PUCE <span className="text-indigo-400">SD</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Trabajamos por una sociedad libre de violencia y discriminación a través de la educación y el apoyo legal.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Elaborado por:</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>Valeria Aguila</li>
              <li>María del Cisne Guamaní</li>
              <li>Pablo Yépez</li>
              <li>Johanna Aulestia</li>
              <li>Deivis Verdugo</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-sm text-indigo-400 uppercase tracking-widest mb-2">Revisado por:</h4>
              <p className="text-slate-300 text-sm">Abg. Genesis Daniela Cedeño Moreira</p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-indigo-400 uppercase tracking-widest mb-2">Aprobado por:</h4>
              <p className="text-slate-300 text-sm">PhD. Julio Adrián Alvarado Vélez</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; 2025 PUCE Sede Santo Domingo. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

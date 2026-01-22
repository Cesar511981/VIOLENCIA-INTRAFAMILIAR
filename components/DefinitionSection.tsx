
import React from 'react';

export const DefinitionSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">¿Qué es la Violencia?</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          La violencia es cualquier acción u omisión ejercida por una persona o grupo con el fin de imponer poder, control o dominio sobre otra, provocando daño físico, psicológico, sexual, económico o patrimonial.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-eye text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Violencia Visible</h3>
          <p className="text-slate-600 mb-4">
            Aquélla que deja huellas físicas detectables y evidentes.
          </p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start"><i className="fas fa-check text-indigo-500 mt-1 mr-2"></i> Golpes y agresiones directas</li>
            <li className="flex items-start"><i className="fas fa-check text-indigo-500 mt-1 mr-2"></i> Lesiones corporales</li>
            <li className="flex items-start"><i className="fas fa-check text-indigo-500 mt-1 mr-2"></i> Marcas visibles de maltrato</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-eye-slash text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Violencia Invisible</h3>
          <p className="text-slate-600 mb-4">
            Dificulta su detección ya que afecta el ámbito emocional, económico o social.
          </p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start"><i className="fas fa-check text-purple-500 mt-1 mr-2"></i> Humillaciones y amenazas</li>
            <li className="flex items-start"><i className="fas fa-check text-purple-500 mt-1 mr-2"></i> Manipulación y control</li>
            <li className="flex items-start"><i className="fas fa-check text-purple-500 mt-1 mr-2"></i> Privación de recursos o exclusión</li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <p className="text-indigo-900 font-medium italic text-center">
          "En el Ecuador, la violencia es reconocida como un problema estructural que trasciende el ámbito privado, constituyéndose como una grave vulneración de derechos humanos."
        </p>
      </div>
    </div>
  );
};

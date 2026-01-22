
import React from 'react';

export const CoipSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Definición y Tipos según el COIP</h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto">
          El Código Orgánico Integral Penal (COIP, Art. 155) define la violencia como toda acción de maltrato físico, psicológico o sexual ejercida por un miembro de la familia.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Physical */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <div className="h-2 bg-red-500"></div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Violencia Física</h3>
              <span className="text-xs font-semibold px-2 py-1 bg-red-100 text-red-700 rounded">Art. 156</span>
            </div>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Consiste en cualquier acción que cause daño corporal, como golpes, empujones o lesiones. La gravedad se determina según el nivel de afectación.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-slate-500 uppercase mb-2">Sanción</p>
              <p className="text-sm text-slate-700 italic">Varía según la incapacidad generada.</p>
            </div>
          </div>
        </div>

        {/* Psychological */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <div className="h-2 bg-indigo-500"></div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Violencia Psicológica</h3>
              <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 rounded">Art. 157</span>
            </div>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Acciones destinadas a controlar, degradar o afectar emocionalmente (Amenazas, manipulación, chantaje, hostigamiento).
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-slate-500 uppercase mb-2">Sanción</p>
              <p className="text-sm text-slate-700 italic font-semibold">6 meses a 1 año de prisión.</p>
              <p className="text-xs text-slate-500 mt-1">1-3 años en grupos prioritarios.</p>
            </div>
          </div>
        </div>

        {/* Sexual */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <div className="h-2 bg-purple-500"></div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Violencia Sexual</h3>
              <span className="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded">Art. 158</span>
            </div>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Se configura cuando se obliga a una persona a mantener relaciones o actos sexuales sin su consentimiento.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-xs font-bold text-slate-500 uppercase mb-2">Sanción</p>
              <p className="text-sm text-slate-700 italic font-semibold">Pena máxima prevista.</p>
              <p className="text-xs text-slate-500 mt-1">Agravantes si son niños o ancianos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <i className="fas fa-gavel text-indigo-600 mr-3"></i>
          Contravenciones (Art. 159)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-50">
            <h4 className="font-bold text-sm mb-2">Lesiones Leves</h4>
            <p className="text-xs text-slate-600 mb-2">Incapacidad menor a 3 días.</p>
            <p className="text-xs font-bold text-indigo-700">15 a 30 días de prisión.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50">
            <h4 className="font-bold text-sm mb-2">Agresiones</h4>
            <p className="text-xs text-slate-600 mb-2">Bofetadas, empujones, puntapiés.</p>
            <p className="text-xs font-bold text-indigo-700">5 a 10 días de prisión / Servicio Comunitario.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50">
            <h4 className="font-bold text-sm mb-2">Retención de Bienes</h4>
            <p className="text-xs text-slate-600 mb-2">Esconder objetos o documentos.</p>
            <p className="text-xs font-bold text-indigo-700">40 a 80h trabajo comunitario.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50">
            <h4 className="font-bold text-sm mb-2">Ofensas Verbales</h4>
            <p className="text-xs text-slate-600 mb-2">Insultos, gritos, humillaciones.</p>
            <p className="text-xs font-bold text-indigo-700">50 a 100h trabajo comunitario.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

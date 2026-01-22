
import React from 'react';

export const ResourcesSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="bg-indigo-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda inmediata?</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl font-bold">911</div>
                <div>
                  <p className="font-bold">Policía Nacional</p>
                  <p className="text-indigo-100 text-sm">Disponible las 24 horas del día.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold">1800 DELITO (335486)</p>
                  <p className="text-indigo-100 text-sm">Línea de auxilio y reporte confidencial.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <i className="fab fa-whatsapp text-3xl"></i>
                </div>
                <div>
                  <p className="font-bold">0958934487</p>
                  <p className="text-indigo-100 text-sm">Orientación digital inmediata y gratuita.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                <i className="fas fa-university text-sm"></i>
              </div>
              <h3 className="font-bold text-xl tracking-tight">PUCE Santo Domingo</h3>
            </div>
            <p className="text-indigo-900 font-bold mb-2">Consultorio Jurídico Gratuito "Santo Tomás Moro"</p>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Brinda atención gratuita para la defensa de tus derechos y acompañamiento legal en casos de violencia.
            </p>
            <div className="space-y-3">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Resolución de creación:</p>
              <p className="text-sm font-medium bg-slate-50 p-3 rounded-lg border border-slate-100 text-slate-700">
                DP-DPG-DASJ-2025-104 <span className="text-slate-400 font-normal ml-2">(02/07/2025)</span>
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="tel:0958934487" className="flex-1 bg-indigo-600 text-white py-3 rounded-xl text-center font-bold shadow-md hover:bg-indigo-700 transition-colors">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4">Defensoría Pública</h4>
          <p className="text-sm text-slate-600">Ofrece asesoramiento jurídico, asistencia legal y patrocinio judicial gratuito a víctimas de violencia.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4">Defensoría del Pueblo</h4>
          <p className="text-sm text-slate-600">Recibe quejas, peticiones o denuncias y vigila el cumplimiento del debido proceso y protección de derechos.</p>
        </div>
      </div>
    </div>
  );
};

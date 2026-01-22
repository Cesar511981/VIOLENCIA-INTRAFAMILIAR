
import React from 'react';

export const ReportingRouteSection: React.FC = () => {
  const steps = [
    {
      title: "1. Auxilio Inmediato",
      desc: "Llamar al ECU 911 o acudir a la Policía Nacional (UPC) o Centros de Salud.",
      icon: "fa-phone-volume",
      color: "bg-red-500"
    },
    {
      title: "2. Denuncia y Protección",
      desc: "Presentar denuncia ante Jueces, Fiscalía, Juntas de Protección o Comisarías.",
      icon: "fa-file-signature",
      color: "bg-indigo-600"
    },
    {
      title: "3. Acceso a la Justicia",
      desc: "Investigación de los hechos para determinar responsabilidades y sanciones.",
      icon: "fa-balance-scale",
      color: "bg-purple-600"
    },
    {
      title: "4. Restitución de Derechos",
      desc: "Atención psicológica, médica y reparación integral (económica y social).",
      icon: "fa-heart",
      color: "bg-emerald-600"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ruta para Denunciar</h2>
        <p className="text-slate-600">Un proceso integral y progresivo para garantizar tu seguridad y bienestar.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
              <i className={`fas ${step.icon} text-2xl`}></i>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
            <p className="text-sm text-slate-600">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200">
        <div className="grid md:grid-cols-2">
          <div className="p-8 space-y-6">
            <h3 className="text-xl font-bold">Autoridades Competentes</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <i className="fas fa-building-user text-indigo-600"></i>
                <p className="text-sm text-slate-600"><strong>Unidades Judiciales Especializadas:</strong> Receptan denuncias verbales/escritas.</p>
              </div>
              <div className="flex gap-3">
                <i className="fas fa-landmark text-indigo-600"></i>
                <p className="text-sm text-slate-600"><strong>Fiscalía General:</strong> Sistema de Atención Integral (SAI) para delitos.</p>
              </div>
              <div className="flex gap-3">
                <i className="fas fa-users text-indigo-600"></i>
                <p className="text-sm text-slate-600"><strong>Juntas Cantonales:</strong> Medidas administrativas de protección inmediata.</p>
              </div>
              <div className="flex gap-3">
                <i className="fas fa-shield-halved text-indigo-600"></i>
                <p className="text-sm text-slate-600"><strong>Comisarías de Policía:</strong> Brindan atención en situaciones de riesgo.</p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-4">
                <p className="text-indigo-900 font-bold text-4xl mb-1 tracking-tighter">911</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">Emergencias</p>
              </div>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                No es obligatorio contar con un abogado para denunciar. Las instituciones brindan orientación gratuita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';

export const ProtectionMeasuresSection: React.FC = () => {
  const measures = [
    "Boleta de auxilio",
    "Orden de alejamiento",
    "Prohibición de acercarse a la víctima o testigos",
    "Orden de salida del agresor del hogar",
    "Prohibición de perseguir, amenazar o intimidar",
    "Reintegro de la víctima a su hogar",
    "Ingreso a programas de protección y casas de acogida",
    "Suspensión del permiso para tener armas",
    "Instalar dispositivos de alerta en la vivienda",
    "Fijación de pensión alimenticia provisional"
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Medidas de Protección</h2>
          <p className="text-slate-600 leading-relaxed">
            Tienen carácter inmediato y prioritario. Se otorgan para salvaguardar la integridad de las víctimas y pueden ser dictadas incluso si ya existe un proceso judicial en curso.
          </p>
          <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-xl">
            <h4 className="text-pink-900 font-bold mb-2">Medidas Especiales (Art. 558.1)</h4>
            <ul className="text-sm text-pink-800 space-y-2">
              <li className="flex items-center"><i className="fas fa-user-shield mr-2"></i> Acompañamiento policial para retirar pertenencias</li>
              <li className="flex items-center"><i className="fas fa-file-invoice mr-2"></i> Devolución inmediata de documentos</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <ul className="grid grid-cols-1 gap-4">
            {measures.map((m, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <i className="fas fa-check-circle text-indigo-500 mt-1 mr-3 flex-shrink-0"></i>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-50 p-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-6 text-center">Medidas de Prevención (Reglamento Art. 46)</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">1</div>
            <p className="text-sm text-slate-600">Inventario de bienes comunes o de posesión legítima de la víctima.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">2</div>
            <p className="text-sm text-slate-600">Activación de servicios de protección del Sistema Nacional Integral.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">3</div>
            <p className="text-sm text-slate-600">Inserción en programas de inclusión social, salud y educación.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">4</div>
            <p className="text-sm text-slate-600">Seguimiento para verificar que el agresor rectifique sus conductas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

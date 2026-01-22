
import React from 'react';

export const LoipevmSection: React.FC = () => {
  const specializedTypes = [
    {
      title: 'Económica o Patrimonial',
      desc: 'Control o limitación al acceso a recursos, bienes, documentos o falta de pago de pensiones.',
      icon: 'fa-wallet'
    },
    {
      title: 'Simbólica',
      desc: 'Mensajes o imágenes que naturalizan la subordinación o discriminación de la mujer.',
      icon: 'fa-bullhorn'
    },
    {
      title: 'Política',
      desc: 'Acciones que limitan o impiden el ejercicio de funciones políticas o públicas.',
      icon: 'fa-landmark'
    },
    {
      title: 'Gineco-Obstétrica',
      desc: 'Faltas que limitan el derecho a atención adecuada en salud ginecológica o procedimientos sin consentimiento.',
      icon: 'fa-baby'
    },
    {
      title: 'Sexual Digital',
      desc: 'Violación de la intimidad usando tecnología (fotos, videos personales) sin permiso.',
      icon: 'fa-mobile-screen'
    }
  ];

  return (
    <div className="space-y-12 bg-indigo-900 text-white rounded-3xl p-8 lg:p-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-20">
        <i className="fas fa-shield-heart text-9xl"></i>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">LOIPEVM</h2>
        <p className="text-xl text-indigo-100 max-w-3xl mb-12">
          La Ley Orgánica Integral para Prevenir y Erradicar la Violencia contra las Mujeres (2018) establece mecanismos para proteger y reparar a las víctimas frente a patrones que normalizan la desigualdad.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedTypes.map((type, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-10 h-10 bg-white text-indigo-900 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${type.icon}`}></i>
              </div>
              <h4 className="text-lg font-bold mb-2">{type.title}</h4>
              <p className="text-sm text-indigo-50/80 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

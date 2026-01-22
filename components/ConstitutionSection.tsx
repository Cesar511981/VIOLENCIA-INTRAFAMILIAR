
import React from 'react';

export const ConstitutionSection: React.FC = () => {
  const articles = [
    {
      num: 'Art. 11',
      title: 'Igualdad y No Discriminación',
      desc: 'Obliga al Estado a realizar acciones afirmativas para promover una igualdad real, especialmente en favor de mujeres y grupos vulnerables.'
    },
    {
      num: 'Art. 35',
      title: 'Atención Prioritaria',
      desc: 'Mujeres embarazadas, niños, adultos mayores y personas con discapacidad recibirán atención prioritaria y especializada.'
    },
    {
      num: 'Art. 66 (3)',
      title: 'Integridad Personal',
      desc: 'La violencia intrafamiliar es una vulneración directa de este derecho. El Estado garantiza protección inmediata.'
    },
    {
      num: 'Art. 66 (9)',
      title: 'Decisiones Libres',
      desc: 'Garantiza el derecho a tomar decisiones libres sobre la vida y seguridad personal, incluyendo vivir libres de violencia.'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="border-l-4 border-indigo-600 pl-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Disposiciones de la Constitución</h2>
        <p className="text-lg text-slate-600">Marco normativo para la prevención, sanción y erradicación de la violencia.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((art, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors shadow-sm">
            <span className="text-indigo-600 font-bold text-lg block mb-2">{art.num}</span>
            <h4 className="font-bold text-slate-900 mb-3">{art.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{art.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold mb-2">Obligaciones del Estado (Art. 78, 83, 85)</h3>
            <p className="text-slate-300 text-sm">
              Establece derechos a protección, reparación integral y garantías de no repetición. Obliga a todas las personas a respetar y defender los derechos humanos.
            </p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            <span className="text-xs uppercase tracking-widest text-indigo-300 font-semibold">Tratados</span>
            <p className="text-sm font-medium">Belem do Pará & CEDAW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

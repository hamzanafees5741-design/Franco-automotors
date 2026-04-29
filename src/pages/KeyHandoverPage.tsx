import { useLang } from '../context/LanguageContext';

export default function KeyHandoverPage() {
  const { t, lang } = useLang();

  const steps = [
    { icon: '📤', key: 'kStep1', done: true, time: lang === 'es' ? 'Completado online' : 'Completed online', color: 'green' },
    { icon: '🚗', key: 'kStep2', done: true, time: lang === 'es' ? 'Valuado en 90 min' : 'Valued in 90 min', color: 'green' },
    { icon: '💳', key: 'kStep3', done: true, time: lang === 'es' ? 'Aprobado online' : 'Approved online', color: 'green' },
    { icon: '🚚', key: 'kStep4', done: true, time: lang === 'es' ? 'Listo en el dealer' : 'Ready at dealership', color: 'green' },
    { icon: '🔑', key: 'kStep5', done: false, time: lang === 'es' ? '< 5 minutos en persona' : '< 5 minutes in person', color: 'red', active: true },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-black via-red-950/40 to-black border-b border-red-800/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[20rem] font-black">5</span>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/40 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-400 text-sm font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Miami\'s Most Express Process' : 'Miami\'s Most Express Process'}
            </span>
          </div>
          <h1 className="text-white font-black text-5xl sm:text-7xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">5</span>
            {lang === 'es' ? ' Min' : ' Min'}
          </h1>
          <h2 className="text-white font-black text-3xl sm:text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('keyTitle')}
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">{t('keySub')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Big Timer */}
        <div className="text-center mb-14">
          <div className="inline-block">
            <div className="text-gray-400 text-sm uppercase tracking-widest mb-4">{t('expressTimer')}</div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-600/40">
                  <span className="text-white font-black text-5xl sm:text-6xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>0</span>
                </div>
                <div className="text-gray-400 text-sm mt-2">{lang === 'es' ? 'Horas' : 'Hours'}</div>
              </div>
              <div className="text-red-500 font-black text-4xl mb-8">:</div>
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-600/40">
                  <span className="text-white font-black text-5xl sm:text-6xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>5</span>
                </div>
                <div className="text-gray-400 text-sm mt-2">{t('minutes')}</div>
              </div>
              <div className="text-red-500 font-black text-4xl mb-8">:</div>
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-600/40">
                  <span className="text-white font-black text-5xl sm:text-6xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>0</span>
                </div>
                <div className="text-gray-400 text-sm mt-2">{lang === 'es' ? 'Segundos' : 'Seconds'}</div>
              </div>
            </div>
            <div className="mt-4 text-red-400 font-black text-xl">{lang === 'es' ? '¡Eso es todo lo que necesitas!' : "That's all you need!"}</div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-14">
          <h2 className="text-white font-black text-3xl text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {lang === 'es' ? 'El Proceso de 5 Pasos' : 'The 5-Step Process'}
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden md:flex items-start justify-between relative">
            <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-600 to-red-600 z-0 mx-24"></div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl border-4 shadow-xl transition-all ${
                  step.done
                    ? 'bg-green-600 border-green-500 shadow-green-600/30'
                    : step.active
                    ? 'bg-red-600 border-red-500 shadow-red-600/40 animate-pulse scale-110'
                    : 'bg-gray-800 border-gray-700'
                }`}>
                  {step.icon}
                </div>
                {step.done && !step.active && (
                  <div className="absolute -top-2 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-black">✓</div>
                )}
                <div className={`mt-4 text-center font-bold text-sm ${step.done ? 'text-green-400' : step.active ? 'text-white' : 'text-gray-500'}`}>
                  {t(step.key)}
                </div>
                <div className="text-gray-600 text-xs mt-1 text-center max-w-[120px]">{step.time}</div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4">
            {steps.map((step, i) => (
              <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border-2 ${
                step.active
                  ? 'border-red-500 bg-red-600/10 shadow-lg shadow-red-600/20'
                  : step.done
                  ? 'border-green-800/50 bg-green-900/10'
                  : 'border-gray-800 bg-gray-900/30'
              }`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                  step.done ? 'bg-green-600' : step.active ? 'bg-red-600 animate-pulse' : 'bg-gray-800'
                }`}>
                  {step.icon}
                </div>
                <div>
                  <div className={`font-bold ${step.active ? 'text-white text-lg' : step.done ? 'text-green-400' : 'text-gray-500'}`}>
                    {t(step.key)}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{step.time}</div>
                  {step.active && (
                    <div className="mt-2 px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full inline-block">
                      ← {lang === 'es' ? 'ÚLTIMO PASO' : 'FINAL STEP'}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { num: '< 5', label: lang === 'es' ? 'Minutos en el dealer' : 'Minutes at dealership', icon: '⚡', color: 'red' },
            { num: '100%', label: lang === 'es' ? 'Online pre-proceso' : 'Online pre-process', icon: '🌐', color: 'blue' },
            { num: '500+', label: lang === 'es' ? 'Entregas completadas' : 'Deliveries completed', icon: '🔑', color: 'green' },
            { num: '4.9⭐', label: lang === 'es' ? 'Calificación promedio' : 'Average rating', icon: '⭐', color: 'yellow' },
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-red-600/30 transition-colors">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-red-500 font-black text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.num}</div>
              <div className="text-gray-400 text-xs mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why 5 Minutes */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 mb-10">
          <h3 className="text-white font-black text-2xl text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {lang === 'es' ? '¿Por qué solo 5 minutos?' : 'Why Only 5 Minutes?'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📱',
                title: lang === 'es' ? 'Todo Pre-Hecho Online' : 'Everything Pre-Done Online',
                desc: lang === 'es' ? 'Documentos, firmas y financiamiento — todo completado desde tu teléfono antes de llegar.' : 'Documents, signatures and financing — all completed from your phone before arriving.',
              },
              {
                icon: '🔄',
                title: lang === 'es' ? 'Sistema Automatizado' : 'Automated System',
                desc: lang === 'es' ? 'Nuestro portal digital elimina toda la burocracia. Tu llegada es solo para recibir las llaves.' : 'Our digital portal eliminates all bureaucracy. Your arrival is just to receive the keys.',
              },
              {
                icon: '👥',
                title: lang === 'es' ? 'Equipo Dedicado' : 'Dedicated Team',
                desc: lang === 'es' ? 'Personal especializado listo con tu vehículo preparado y papeles listos antes de tu llegada.' : 'Specialized staff ready with your vehicle prepped and papers ready before your arrival.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-3xl p-10 text-center shadow-2xl shadow-red-600/30">
          <div className="text-6xl mb-4">🔑</div>
          <h3 className="text-white font-black text-3xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {lang === 'es' ? '¿Listo para Recibir tus Llaves?' : 'Ready to Get Your Keys?'}
          </h3>
          <p className="text-red-100 text-lg mb-6">
            {lang === 'es' ? 'El proceso más rápido de Miami — porque tu tiempo vale.' : "Miami's fastest process — because your time is money."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-red-700 font-black rounded-2xl hover:bg-gray-100 transition-all shadow-xl text-lg">
              📅 {lang === 'es' ? 'Programar Entrega' : 'Schedule Delivery'}
            </button>
            <button className="px-8 py-4 bg-red-800/50 text-white font-bold rounded-2xl border border-red-500/30 hover:bg-red-800/70 transition-all text-lg">
              💬 {lang === 'es' ? 'Hablar con un Asesor' : 'Talk to an Advisor'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useLang } from '../context/LanguageContext';

export default function TrackingPage() {
  const { t, lang } = useLang();

  const trackingSteps = [
    { done: true, time: '8:30 AM', label: lang === 'es' ? 'Orden Confirmada' : 'Order Confirmed', desc: lang === 'es' ? 'Tu orden fue procesada y confirmada' : 'Your order was processed and confirmed' },
    { done: true, time: '9:15 AM', label: lang === 'es' ? 'Documentos Verificados' : 'Documents Verified', desc: lang === 'es' ? 'Todos tus documentos fueron aprobados' : 'All your documents were approved' },
    { done: true, time: '9:45 AM', label: lang === 'es' ? 'Vehículo Preparado' : 'Vehicle Prepared', desc: lang === 'es' ? 'Tu F-150 está listo y detallado' : 'Your F-150 is ready and detailed' },
    { done: false, time: '10:10 AM', label: lang === 'es' ? 'Conductor en Camino' : 'Driver En Route', desc: lang === 'es' ? 'Carlos T. se dirige a tu ubicación' : 'Carlos T. is heading to your location', active: true },
    { done: false, time: '10:30 AM', label: lang === 'es' ? 'Llegada Estimada' : 'Estimated Arrival', desc: lang === 'es' ? 'Entrega en tu dirección' : 'Delivery at your address' },
    { done: false, time: '10:35 AM', label: lang === 'es' ? '⚡ Entrega de Llaves 5 Min' : '⚡ 5-Min Key Handover', desc: lang === 'es' ? '¡Las llaves son tuyas!' : 'The keys are yours!' },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-red-950/20 to-black border-b border-red-800/20 px-4 py-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-red-500 font-bold text-sm uppercase tracking-widest">🔴 {lang === 'es' ? 'En Vivo' : 'Live Tracking'}</span>
            <h1 className="text-white font-black text-3xl mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('trackingTitle')}</h1>
            <p className="text-gray-400 mt-1">{t('trackingSub')}</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-600/40 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 font-bold text-sm">{lang === 'es' ? 'Conductor en camino' : 'Driver en route'}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Map + Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Miami Map */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="relative h-72 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                {/* Fake Miami Map */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Streets */}
                    <line x1="0" y1="80" x2="400" y2="80" stroke="#374151" strokeWidth="1.5"/>
                    <line x1="0" y1="140" x2="400" y2="140" stroke="#374151" strokeWidth="1.5"/>
                    <line x1="0" y1="200" x2="400" y2="200" stroke="#374151" strokeWidth="1.5"/>
                    <line x1="80" y1="0" x2="80" y2="300" stroke="#374151" strokeWidth="1.5"/>
                    <line x1="160" y1="0" x2="160" y2="300" stroke="#374151" strokeWidth="1.5"/>
                    <line x1="240" y1="0" x2="240" y2="300" stroke="#374151" strokeWidth="1.5"/>
                    <line x1="320" y1="0" x2="320" y2="300" stroke="#374151" strokeWidth="1.5"/>
                    {/* Main roads */}
                    <line x1="0" y1="150" x2="400" y2="150" stroke="#6b7280" strokeWidth="3"/>
                    <line x1="200" y1="0" x2="200" y2="300" stroke="#6b7280" strokeWidth="3"/>
                    {/* Route */}
                    <path d="M 80 200 L 160 200 L 160 140 L 240 140 L 240 100" stroke="#ef4444" strokeWidth="4" strokeDasharray="8,4" fill="none"/>
                  </svg>
                </div>
                {/* Driver Marker */}
                <div className="absolute" style={{ left: '55%', top: '42%' }}>
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-lg animate-bounce">
                      🚗
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      Carlos T.
                    </div>
                  </div>
                </div>
                {/* Destination */}
                <div className="absolute" style={{ left: '60%', top: '32%' }}>
                  <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-sm">
                    📍
                  </div>
                </div>
                {/* Dealership */}
                <div className="absolute" style={{ left: '20%', top: '65%' }}>
                  <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-500 flex items-center justify-center text-sm">
                    🏢
                  </div>
                  <div className="text-gray-400 text-xs mt-1 font-bold">Franco</div>
                </div>
                {/* Labels */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg">
                  <div className="text-white text-xs font-bold">Miami-Dade County</div>
                  <div className="text-gray-400 text-xs">Live Tracking</div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg">
                  <div className="text-green-400 text-xs font-bold">🔴 Live</div>
                </div>
              </div>
            </div>

            {/* Tracking Steps */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-6">{lang === 'es' ? '📍 Seguimiento en Tiempo Real' : '📍 Real-Time Tracking'}</h3>
              <div className="relative">
                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-700"></div>
                <div className="space-y-6">
                  {trackingSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-5 relative">
                      <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 ${
                        step.done ? 'bg-green-600 border-green-500 shadow-lg shadow-green-600/30' :
                        step.active ? 'bg-red-600 border-red-500 shadow-lg shadow-red-600/40 animate-pulse' :
                        'bg-gray-800 border-gray-700'
                      }`}>
                        <span className="text-white text-xs font-bold">{step.time}</span>
                        {step.done && <span className="text-white text-lg">✓</span>}
                        {step.active && <span className="text-white text-lg">🚗</span>}
                      </div>
                      <div className="flex-1 pt-3">
                        <div className={`font-bold text-base ${step.done ? 'text-green-400' : step.active ? 'text-white' : 'text-gray-500'}`}>
                          {step.label}
                        </div>
                        <div className="text-gray-400 text-sm mt-0.5">{step.desc}</div>
                        {step.active && (
                          <div className="flex items-center gap-2 mt-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-red-400 text-sm font-bold">{lang === 'es' ? 'En progreso ahora' : 'In progress now'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-5">
            {/* ETA Card */}
            <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-700/40 rounded-2xl p-6 text-center">
              <div className="text-gray-400 text-sm mb-1">{t('estArrival')}</div>
              <div className="text-white font-black text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>10:30 AM</div>
              <div className="text-red-400 font-bold mt-1">{lang === 'es' ? 'En ~20 minutos' : 'In ~20 minutes'}</div>
              <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-green-500 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="text-gray-500 text-xs mt-2">60% {lang === 'es' ? 'del camino' : 'of the way'}</div>
            </div>

            {/* Driver Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-4">{t('driverDetails')}</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-red-600/20 border border-red-600/40 rounded-2xl flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div>
                  <div className="text-white font-bold">Carlos Torres</div>
                  <div className="text-gray-400 text-sm">{lang === 'es' ? 'Especialista de Entrega' : 'Delivery Specialist'}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-500 text-xs">4.9/5</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-green-600/20 border border-green-600/40 text-green-400 text-sm font-bold rounded-xl hover:bg-green-600/30 transition-colors">
                  📞 {lang === 'es' ? 'Llamar' : 'Call'}
                </button>
                <button className="flex-1 py-2 bg-blue-600/20 border border-blue-600/40 text-blue-400 text-sm font-bold rounded-xl hover:bg-blue-600/30 transition-colors">
                  💬 {lang === 'es' ? 'SMS' : 'SMS'}
                </button>
              </div>
            </div>

            {/* Vehicle */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 text-center">
              <div className="text-5xl mb-2">🚚</div>
              <div className="text-white font-bold">2024 Ford F-150 XLT</div>
              <div className="text-gray-400 text-sm mt-1">Oxford White • #FA-2024-0892</div>
            </div>

            {/* Live Chat */}
            <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <span>💬</span> {t('liveChat')}
            </button>

            {/* 5-Min Notice */}
            <div className="bg-gradient-to-br from-green-900/30 to-black border border-green-700/30 rounded-2xl p-4 text-center">
              <div className="text-green-400 font-bold text-sm">⚡ {lang === 'es' ? 'Cuando llegue el conductor:' : 'When driver arrives:'}</div>
              <div className="text-white font-black text-xl mt-1">{lang === 'es' ? 'Entrega en 5 Minutos' : '5-Minute Key Handover'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

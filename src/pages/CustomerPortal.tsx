import { useLang } from '../context/LanguageContext';

interface Props { setPage: (p: string) => void; }

const notifications = [
  { type: 'whatsapp', msg: '✅ Documentos recibidos. Revisión en proceso.', time: 'Hace 2 horas', color: 'green' },
  { type: 'sms', msg: '📅 Entrega confirmada para el Jueves 15 de Enero.', time: 'Hace 5 horas', color: 'blue' },
  { type: 'email', msg: '🚗 Tasación de tu Ram 1500 lista. Oferta: $24,500.', time: 'Hace 1 día', color: 'red' },
  { type: 'whatsapp', msg: '⚡ Tu entrega de llaves está programada para las 10:30 AM.', time: 'Hace 2 días', color: 'green' },
];

const steps = [
  { key: 'step1', done: true, active: false },
  { key: 'step2', done: true, active: false },
  { key: 'step3', done: true, active: false },
  { key: 'step4', done: false, active: true },
  { key: 'step5', done: false, active: false },
];

export default function CustomerPortal({ setPage }: Props) {
  const { t, lang } = useLang();

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-red-950/30 to-black border-b border-red-800/20 px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-red-500 text-sm font-bold uppercase tracking-widest">{lang === 'es' ? 'Portal Express' : 'Express Portal'}</span>
              <h1 className="text-white font-black text-3xl sm:text-4xl mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('dashWelcome')} Carlos! 👋
              </h1>
              <p className="text-gray-400 mt-1">
                {lang === 'es' ? '2024 Ford F-150 XLT — Orden #FA-2024-0892' : '2024 Ford F-150 XLT — Order #FA-2024-0892'}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-600/40 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 font-bold text-sm">{lang === 'es' ? 'Orden Activa' : 'Active Order'}</span>
              </div>
              <span className="text-gray-500 text-xs">{lang === 'es' ? 'Entrega: Jueves 15 Ene, 10:30 AM' : 'Delivery: Thu Jan 15, 10:30 AM'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 3 Main Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: '📤', label: t('uploadDocs'), sublabel: lang === 'es' ? '3 de 4 documentos subidos' : '3 of 4 documents uploaded',
              color: 'from-red-600 to-red-800', page: 'documents', urgent: true,
            },
            {
              icon: '🚗', label: t('checkTradeIn'), sublabel: lang === 'es' ? 'Oferta: $24,500 disponible' : 'Offer: $24,500 available',
              color: 'from-gray-700 to-gray-900', page: 'tradein', urgent: false,
            },
            {
              icon: '📅', label: t('scheduleDelivery'), sublabel: lang === 'es' ? 'Jue 15 Ene — 10:30 AM' : 'Thu Jan 15 — 10:30 AM',
              color: 'from-red-700 to-red-900', page: 'delivery', urgent: false,
            },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={() => setPage(btn.page)}
              className={`relative bg-gradient-to-br ${btn.color} rounded-2xl p-6 text-left hover:scale-[1.02] transition-all shadow-xl group`}
            >
              {btn.urgent && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xs font-black animate-bounce">
                  !
                </div>
              )}
              <div className="text-4xl mb-3">{btn.icon}</div>
              <div className="text-white font-black text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{btn.label}</div>
              <div className="text-white/70 text-sm mt-1">{btn.sublabel}</div>
              <div className="mt-4 text-white/60 text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                {lang === 'es' ? 'Acceder' : 'Access'} →
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Col - Order Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Tracker */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span>📊</span> {t('orderStatus')}
              </h3>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-700"></div>
                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 relative">
                      <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                        step.done
                          ? 'bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/30'
                          : step.active
                          ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/40 animate-pulse'
                          : 'bg-gray-800 border-gray-700 text-gray-500'
                      }`}>
                        {step.done ? '✓' : i + 1}
                      </div>
                      <div className="flex-1 pt-2">
                        <div className={`font-semibold ${step.done ? 'text-green-400' : step.active ? 'text-white' : 'text-gray-500'}`}>
                          {t(step.key)}
                        </div>
                        {step.active && (
                          <div className="text-red-400 text-xs mt-0.5 font-medium">
                            {lang === 'es' ? '← En progreso ahora' : '← In progress now'}
                          </div>
                        )}
                        {step.done && (
                          <div className="text-gray-500 text-xs mt-0.5">
                            {lang === 'es' ? 'Completado' : 'Completed'} ✓
                          </div>
                        )}
                      </div>
                      {step.done && (
                        <div className="flex-shrink-0 px-2 py-1 bg-green-600/20 border border-green-600/30 text-green-400 text-xs rounded-full font-bold mt-2">
                          ✓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span>🚚</span> {lang === 'es' ? 'Tu Vehículo' : 'Your Vehicle'}
              </h3>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center text-5xl">🚚</div>
                <div className="flex-1">
                  <div className="text-white font-black text-xl">2024 Ford F-150 XLT</div>
                  <div className="text-gray-400 text-sm mt-1">SuperCrew • 5.0L V8 • Oxford White</div>
                  <div className="text-red-500 font-black text-2xl mt-2">$42,900</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Tow Package', 'FordPass', 'LED Lights'].map((f, i) => (
                      <span key={i} className="px-2 py-1 bg-red-600/20 border border-red-600/30 text-red-400 text-xs rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Signature */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span>✍️</span> {t('digitalSig')}
              </h3>
              <div className="bg-white rounded-xl h-32 flex items-center justify-center border-2 border-dashed border-gray-300 mb-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-center">
                  <div className="text-gray-400 text-sm">{lang === 'es' ? 'Toca para firmar' : 'Tap to sign here'}</div>
                  <div className="text-gray-300 text-xs mt-1">{lang === 'es' ? 'Firma con tu dedo o mouse' : 'Sign with finger or mouse'}</div>
                </div>
              </div>
              <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-600/30">
                ✍️ {t('signContract')}
              </button>
            </div>
          </div>

          {/* Right Col - Notifications */}
          <div className="space-y-6">
            {/* Notification History */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span>🔔</span> {t('notifHistory')}
              </h3>
              <div className="space-y-3">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      n.color === 'green' ? 'bg-green-600/20' : n.color === 'blue' ? 'bg-blue-600/20' : 'bg-red-600/20'
                    }`}>
                      {n.type === 'whatsapp' ? '💬' : n.type === 'sms' ? '📱' : '✉️'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 text-xs leading-relaxed">{n.msg}</p>
                      <p className="text-gray-600 text-xs mt-1">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">{lang === 'es' ? '⚡ Acciones Rápidas' : '⚡ Quick Actions'}</h3>
              <div className="space-y-2">
                {[
                  { icon: '🔑', label: lang === 'es' ? 'Entrega en 5 Min' : '5-Min Key Handover', page: 'keyhandover' },
                  { icon: '📍', label: lang === 'es' ? 'Rastrear Entrega' : 'Track Delivery', page: 'tracking' },
                  { icon: '📞', label: lang === 'es' ? 'Llamar al Dealer' : 'Call Dealership', page: '' },
                  { icon: '💬', label: lang === 'es' ? 'Chat en Vivo' : 'Live Chat', page: '' },
                ].map((action, i) => (
                  <button
                    key={i}
                    onClick={() => action.page && setPage(action.page)}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800/50 hover:bg-red-600/20 border border-gray-700 hover:border-red-600/40 rounded-xl transition-all text-left"
                  >
                    <span>{action.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{action.label}</span>
                    <span className="ml-auto text-gray-600">›</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5-Min Countdown */}
            <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-700/40 rounded-2xl p-6 text-center">
              <div className="text-5xl mb-3">⚡</div>
              <div className="text-white font-black text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {lang === 'es' ? 'Entrega en' : 'Delivery in'}
              </div>
              <div className="text-red-400 font-black text-5xl mt-1">2d 14h</div>
              <div className="text-gray-400 text-sm mt-2">
                {lang === 'es' ? 'Jue 15 Ene • 10:30 AM EDT' : 'Thu Jan 15 • 10:30 AM EDT'}
              </div>
              <button onClick={() => setPage('keyhandover')} className="mt-4 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all">
                🔑 {lang === 'es' ? 'Ver Proceso' : 'View Process'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

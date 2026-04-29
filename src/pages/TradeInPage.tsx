import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

export default function TradeInPage() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    make: '', model: '', year: '', mileage: '', condition: '',
    damage: '', loan: '', photos: false,
  });
  const [loading, setLoading] = useState(false);

  const makes = ['Ford', 'Ram', 'Chevrolet', 'GMC', 'Toyota', 'Honda', 'Nissan', 'Jeep', 'Dodge', 'Hyundai', 'Kia'];
  const years = Array.from({ length: 20 }, (_, i) => String(2024 - i));

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const statusSteps = [
    { key: 'tradeStatus1', done: true, active: false },
    { key: 'tradeStatus2', done: false, active: true },
    { key: 'tradeStatus3', done: false, active: false },
    { key: 'tradeStatus4', done: false, active: false },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Success Card */}
          <div className="bg-gray-900 border border-gray-700 rounded-3xl p-10 text-center mb-6">
            <div className="w-24 h-24 bg-green-600/20 border-2 border-green-600/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">✅</span>
            </div>
            <h2 className="text-white font-black text-3xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('valuationSubmitted')}
            </h2>
            <p className="text-gray-300 text-lg mb-8">{t('valuationMsg')}</p>

            {/* Timer */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {['00', '01', '59'].map((n, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-red-600/30">
                    {n}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    {i === 0 ? (lang === 'es' ? 'Horas' : 'Hours') : i === 1 ? (lang === 'es' ? 'Min' : 'Min') : (lang === 'es' ? 'Seg' : 'Sec')}
                  </div>
                </div>
              ))}
            </div>

            {/* Status Steps */}
            <div className="flex items-center justify-between bg-gray-800/50 rounded-2xl p-5">
              {statusSteps.map((step, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 relative">
                  {i < statusSteps.length - 1 && (
                    <div className="absolute top-3 left-[60%] right-[-40%] h-0.5 bg-gray-700 z-0"></div>
                  )}
                  <div className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                    step.done ? 'bg-green-600 border-green-500 text-white' :
                    step.active ? 'bg-red-600 border-red-500 text-white animate-pulse' :
                    'bg-gray-800 border-gray-600 text-gray-500'
                  }`}>
                    {step.done ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs text-center leading-tight ${step.done ? 'text-green-400' : step.active ? 'text-white' : 'text-gray-500'}`}>
                    {t(step.key)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">📞</div>
              <div className="text-white font-bold text-sm">{lang === 'es' ? 'Te llamamos en' : "We'll call in"}</div>
              <div className="text-red-500 font-black text-2xl">{'< 2'}{lang === 'es' ? ' hrs' : ' hrs'}</div>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-white font-bold text-sm">{lang === 'es' ? 'Precio justo' : 'Fair market price'}</div>
              <div className="text-green-400 font-black text-lg">{lang === 'es' ? 'Garantizado' : 'Guaranteed'}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-red-950/30 to-black border-b border-red-800/20 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest">
            {lang === 'es' ? 'Sin Visita al Dealer' : 'No Dealer Visit Needed'}
          </span>
          <h1 className="text-white font-black text-4xl sm:text-5xl mt-2 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('tradeInTitle')}
          </h1>
          <p className="text-gray-300 text-lg">{t('tradeInSub')}</p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { icon: '🏠', label: lang === 'es' ? '100% Online' : '100% Online' },
              { icon: '⏰', label: lang === 'es' ? 'Respuesta en 2 hrs' : 'Response in 2 hrs' },
              { icon: '💰', label: lang === 'es' ? 'Precio Justo' : 'Fair Market Price' },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm">
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                🚗 {lang === 'es' ? 'Detalles de tu Vehículo' : 'Your Vehicle Details'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Make */}
                <div>
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-2">{t('vehicleMake')}</label>
                  <select
                    value={form.make}
                    onChange={e => setForm({ ...form, make: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white transition-colors outline-none"
                  >
                    <option value="">{lang === 'es' ? 'Seleccionar...' : 'Select...'}</option>
                    {makes.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-2">{t('vehicleModel')}</label>
                  <input
                    value={form.model}
                    onChange={e => setForm({ ...form, model: e.target.value })}
                    placeholder="F-150, Silverado, Ram 1500..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>

                {/* Year */}
                <div>
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-2">{t('year')}</label>
                  <select
                    value={form.year}
                    onChange={e => setForm({ ...form, year: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white outline-none transition-colors"
                  >
                    <option value="">{lang === 'es' ? 'Seleccionar...' : 'Select...'}</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                {/* Mileage */}
                <div>
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-2">{t('mileage')} (miles)</label>
                  <input
                    value={form.mileage}
                    onChange={e => setForm({ ...form, mileage: e.target.value })}
                    placeholder="ej. 45,000"
                    type="number"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>

                {/* Condition */}
                <div className="sm:col-span-2">
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-3">{t('condition')}</label>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { key: 'excellent', icon: '⭐⭐⭐', color: 'green' },
                      { key: 'good', icon: '⭐⭐', color: 'blue' },
                      { key: 'fair', icon: '⭐', color: 'yellow' },
                      { key: 'poor', icon: '⚠️', color: 'red' },
                    ].map(c => (
                      <button
                        key={c.key}
                        onClick={() => setForm({ ...form, condition: c.key })}
                        className={`py-4 px-2 rounded-xl border-2 transition-all text-center ${
                          form.condition === c.key
                            ? 'border-red-500 bg-red-600/20 text-white'
                            : 'border-gray-700 text-gray-400 hover:border-gray-500'
                        }`}
                      >
                        <div className="text-lg">{c.icon}</div>
                        <div className="text-xs mt-1 font-bold">{t(c.key)}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload Photos */}
                <div className="sm:col-span-2">
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-2">{t('uploadPhotos')}</label>
                  <div
                    onClick={() => setForm({ ...form, photos: true })}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                      form.photos
                        ? 'border-green-500 bg-green-600/10 text-green-400'
                        : 'border-gray-700 hover:border-red-500 text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="text-4xl mb-2">{form.photos ? '✅' : '📸'}</div>
                    <div className="font-semibold">
                      {form.photos
                        ? (lang === 'es' ? '3 fotos seleccionadas' : '3 photos selected')
                        : (lang === 'es' ? 'Toca para subir fotos' : 'Tap to upload photos')}
                    </div>
                    <div className="text-sm mt-1 opacity-70">
                      {lang === 'es' ? 'Frontal, lateral, interior' : 'Front, side, interior'}
                    </div>
                  </div>
                </div>

                {/* Damage */}
                <div>
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-2">{t('existingDamage')}</label>
                  <input
                    value={form.damage}
                    onChange={e => setForm({ ...form, damage: e.target.value })}
                    placeholder={lang === 'es' ? 'Ninguno / Describir...' : 'None / Describe...'}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>

                {/* Loan */}
                <div>
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-wider block mb-2">{t('loanAmount')}</label>
                  <input
                    value={form.loan}
                    onChange={e => setForm({ ...form, loan: e.target.value })}
                    placeholder="$0"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || !form.make || !form.model || !form.year}
                className="w-full mt-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 text-white font-black rounded-xl shadow-xl shadow-red-600/30 transition-all hover:scale-[1.02] disabled:scale-100 text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    {lang === 'es' ? 'Enviando...' : 'Submitting...'}
                  </span>
                ) : `🚗 ${t('submitValuation')}`}
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-5">
            {/* How It Works */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">{lang === 'es' ? '🔄 ¿Cómo Funciona?' : '🔄 How It Works'}</h3>
              <div className="space-y-4">
                {[
                  { step: '1', icon: '📝', text: lang === 'es' ? 'Llena el formulario online' : 'Fill out the online form' },
                  { step: '2', icon: '⏰', text: lang === 'es' ? 'Esperamos hasta 2 horas' : 'Wait up to 2 hours' },
                  { step: '3', icon: '📞', text: lang === 'es' ? 'Te contactamos con la oferta' : 'We contact you with offer' },
                  { step: '4', icon: '🤝', text: lang === 'es' ? 'Acepta y aplica al nuevo vehículo' : 'Accept & apply to new vehicle' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <span className="mr-1">{s.icon}</span>
                      <span className="text-gray-300 text-sm">{s.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Offers */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">💰 {lang === 'es' ? 'Ejemplos de Ofertas' : 'Sample Offers'}</h3>
              <div className="space-y-3">
                {[
                  { vehicle: 'Ford F-150 2020', miles: '45K', offer: '$28,500' },
                  { vehicle: 'Ram 1500 2019', miles: '62K', offer: '$22,000' },
                  { vehicle: 'Chevy Silverado 2021', miles: '31K', offer: '$31,200' },
                ].map((o, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                    <div>
                      <div className="text-white font-semibold text-sm">{o.vehicle}</div>
                      <div className="text-gray-500 text-xs">{o.miles} miles</div>
                    </div>
                    <div className="text-green-400 font-black">{o.offer}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* No Visit Badge */}
            <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-700/40 rounded-2xl p-5 text-center">
              <div className="text-4xl mb-2">🏠</div>
              <div className="text-white font-black text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {lang === 'es' ? '¡Sin visitar el dealer!' : 'No Dealership Visit!'}
              </div>
              <div className="text-gray-400 text-sm mt-2">
                {lang === 'es' ? 'Todo 100% online desde tu teléfono' : '100% online from your phone'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

export default function DeliveryPage() {
  const { t, lang } = useLang();
  const [confirmed, setConfirmed] = useState(false);
  const [timeSlot, setTimeSlot] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setConfirmed(true); }, 1500);
  };

  const timeSlots = [
    { id: 'morning', icon: '🌅', label: t('morning'), time: '8:00 AM – 11:00 AM', available: true },
    { id: 'afternoon', icon: '☀️', label: t('afternoon'), time: '11:00 AM – 2:00 PM', available: true },
    { id: 'evening', icon: '🌆', label: t('evening'), time: '2:00 PM – 6:00 PM', available: false },
  ];

  const dates = [
    { label: lang === 'es' ? 'Hoy' : 'Today', sub: 'Jan 13', available: false },
    { label: lang === 'es' ? 'Mañana' : 'Tomorrow', sub: 'Jan 14', available: true },
    { label: 'Jue', sub: 'Jan 15', available: true },
    { label: 'Vie', sub: 'Jan 16', available: true },
    { label: 'Sáb', sub: 'Jan 17', available: true },
    { label: 'Dom', sub: 'Jan 18', available: false },
  ];

  if (confirmed) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center px-4">
        <div className="max-w-lg w-full">
          <div className="bg-gray-900 border border-gray-700 rounded-3xl p-10 text-center">
            {/* Confetti Animation */}
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-white font-black text-3xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('deliveryConfirmed')}
            </h2>
            <p className="text-gray-300 mb-8">{t('deliveryNote')}</p>

            {/* Countdown */}
            <div className="bg-black/50 rounded-2xl p-6 mb-6 border border-red-800/30">
              <div className="text-red-400 text-sm font-bold uppercase tracking-widest mb-3">{t('countdownTitle')}</div>
              <div className="flex items-center justify-center gap-3">
                {[
                  { n: '01', label: lang === 'es' ? 'Días' : 'Days' },
                  { n: '14', label: lang === 'es' ? 'Horas' : 'Hours' },
                  { n: '32', label: lang === 'es' ? 'Min' : 'Min' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-red-600/40">
                      {item.n}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Details */}
            <div className="text-left bg-gray-800/50 rounded-2xl p-5 mb-6">
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-widest">{lang === 'es' ? 'Detalles de Entrega' : 'Delivery Details'}</h4>
              {[
                { icon: '📅', label: lang === 'es' ? 'Fecha' : 'Date', val: date || 'Jan 15, 2025' },
                { icon: '🕐', label: lang === 'es' ? 'Horario' : 'Time Slot', val: timeSlot === 'morning' ? '8:00 AM – 11:00 AM' : '11:00 AM – 2:00 PM' },
                { icon: '📍', label: lang === 'es' ? 'Dirección' : 'Address', val: address || '3130 SW 8th St, Miami FL' },
                { icon: '⚡', label: lang === 'es' ? 'Proceso' : 'Process', val: lang === 'es' ? 'Entrega en 5 Minutos' : '5-Minute Key Handover' },
              ].map((d, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-700/50 last:border-0">
                  <span>{d.icon}</span>
                  <span className="text-gray-400 text-sm flex-1">{d.label}:</span>
                  <span className="text-white text-sm font-semibold">{d.val}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-3 text-red-400 text-sm font-medium">
              ⚡ {t('miamiWindow')}
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
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest">⚡ {lang === 'es' ? 'Express — 5 Minutos' : 'Express — 5 Minutes'}</span>
          <h1 className="text-white font-black text-4xl sm:text-5xl mt-2 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('deliveryTitle')}
          </h1>
          <p className="text-gray-300 text-lg">{t('deliverySub')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Date Selection */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">📅 {t('prefDate')}</h3>
              <div className="grid grid-cols-6 gap-2">
                {dates.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => d.available && setDate(d.sub)}
                    disabled={!d.available}
                    className={`flex flex-col items-center py-3 px-1 rounded-xl border-2 transition-all text-center ${
                      date === d.sub
                        ? 'border-red-500 bg-red-600/20 text-white'
                        : d.available
                        ? 'border-gray-700 text-gray-300 hover:border-red-600/50'
                        : 'border-gray-800 text-gray-600 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-xs font-bold">{d.label}</span>
                    <span className="text-xs mt-1 opacity-70">{d.sub}</span>
                    {!d.available && <span className="text-xs mt-1 text-red-600">✕</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">🕐 {t('prefTime')}</h3>
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map(slot => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && setTimeSlot(slot.id)}
                    disabled={!slot.available}
                    className={`relative flex flex-col items-center py-5 px-3 rounded-2xl border-2 transition-all ${
                      timeSlot === slot.id
                        ? 'border-red-500 bg-red-600/20 shadow-lg shadow-red-600/20'
                        : slot.available
                        ? 'border-gray-700 hover:border-red-600/50 hover:bg-gray-800/50'
                        : 'border-gray-800 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    {!slot.available && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gray-700 text-gray-400 text-xs rounded-full">
                        {lang === 'es' ? 'Lleno' : 'Full'}
                      </div>
                    )}
                    <span className="text-3xl mb-2">{slot.icon}</span>
                    <span className={`font-bold text-sm ${timeSlot === slot.id ? 'text-white' : 'text-gray-300'}`}>{slot.label}</span>
                    <span className="text-gray-500 text-xs mt-1 text-center">{slot.time}</span>
                    {slot.available && timeSlot !== slot.id && (
                      <span className="mt-2 px-2 py-0.5 bg-green-600/20 border border-green-600/30 text-green-400 text-xs rounded-full">
                        {lang === 'es' ? 'Disponible' : 'Available'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">📍 {t('deliveryAddress')}</h3>
              <input
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="3130 SW 8th St, Miami, FL 33135"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white placeholder-gray-600 outline-none transition-colors mb-4"
              />
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder={lang === 'es' ? 'Instrucciones especiales (opcional)...' : 'Special instructions (optional)...'}
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-500 rounded-xl text-white placeholder-gray-600 outline-none transition-colors resize-none"
              />
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              disabled={loading || !timeSlot || !date}
              className="w-full py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 text-white font-black rounded-2xl shadow-2xl shadow-red-600/30 transition-all hover:scale-[1.02] disabled:scale-100 text-xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  {lang === 'es' ? 'Confirmando...' : 'Confirming...'}
                </span>
              ) : `🚀 ${t('bookDelivery')}`}
            </button>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* 5-Min Promise */}
            <div className="bg-gradient-to-br from-red-900/50 to-black border border-red-700/50 rounded-2xl p-6 text-center">
              <div className="text-5xl mb-3">⚡</div>
              <div className="text-red-400 font-black text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>5</div>
              <div className="text-white font-bold">{lang === 'es' ? 'Minutos de Entrega' : 'Minute Key Handover'}</div>
              <div className="text-gray-400 text-sm mt-2">{t('deliveryNote')}</div>
            </div>

            {/* Miami Window */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">🌴 Miami {lang === 'es' ? 'Zona de Entrega' : 'Delivery Zone'}</h4>
              <div className="bg-gray-800/50 rounded-xl p-3 text-center">
                <div className="text-red-400 font-bold text-sm">10:00 AM – 1:00 PM EDT</div>
                <div className="text-gray-500 text-xs mt-1">Miami-Dade County</div>
              </div>
              <div className="mt-3 space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Miami Beach</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Coral Gables</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Hialeah</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Doral</div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Kendall</div>
              </div>
            </div>

            {/* Vehicle Summary */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-3">🚚 {lang === 'es' ? 'Tu Vehículo' : 'Your Vehicle'}</h4>
              <div className="text-center py-3">
                <div className="text-5xl">🚚</div>
                <div className="text-white font-bold mt-2">2024 Ford F-150 XLT</div>
                <div className="text-red-500 font-black text-xl mt-1">$42,900</div>
                <div className="text-gray-400 text-xs mt-1">VIN: FA24X001</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

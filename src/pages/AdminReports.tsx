import { useLang } from '../context/LanguageContext';

export default function AdminReports() {
  const { t, lang } = useLang();

  const monthlyData = [
    { month: lang === 'es' ? 'Oct' : 'Oct', deliveries: 72, handovers: 68, tradeins: 45 },
    { month: lang === 'es' ? 'Nov' : 'Nov', deliveries: 81, handovers: 78, tradeins: 52 },
    { month: lang === 'es' ? 'Dic' : 'Dec', deliveries: 95, handovers: 91, tradeins: 61 },
    { month: lang === 'es' ? 'Ene' : 'Jan', deliveries: 89, handovers: 85, tradeins: 58 },
  ];

  const maxVal = Math.max(...monthlyData.map(d => d.deliveries));

  const kpiCards = [
    { icon: '🚚', label: t('totalDeliveriesMonth'), val: '89', change: '+12%', color: 'red' },
    { icon: '🔑', label: t('keyHandoversCompleted'), val: '85', change: '+10%', color: 'green' },
    { icon: '🚗', label: t('tradeInsSubmitted'), val: '58', change: '+18%', color: 'blue' },
    { icon: '📄', label: t('docUploadRate'), val: '94%', change: '+5%', color: 'purple' },
    { icon: '⚡', label: t('salesVelocity'), val: '4.2d', change: '-15%', color: 'yellow' },
    { icon: '⭐', label: t('custSatisfaction'), val: '4.9/5', change: '+0.2', color: 'orange' },
  ];

  const topVehicles = [
    { name: 'Ford F-150', sold: 24, revenue: '$1,029,600', pct: 90 },
    { name: 'Ram 1500', sold: 19, revenue: '$750,500', pct: 71 },
    { name: 'Chevy Silverado', sold: 17, revenue: '$751,400', pct: 64 },
    { name: 'GMC Sierra', sold: 14, revenue: '$714,000', pct: 53 },
    { name: 'Toyota Tacoma', sold: 10, revenue: '$468,000', pct: 37 },
    { name: 'Ram 2500', sold: 5, revenue: '$310,000', pct: 19 },
  ];

  const staffPerf = [
    { name: 'Maria González', deliveries: 28, rating: 4.9, speed: '4.2 min' },
    { name: 'Juan Pérez', deliveries: 24, rating: 4.8, speed: '4.7 min' },
    { name: 'Carlos Torres', deliveries: 22, rating: 4.9, speed: '3.9 min' },
    { name: 'Ana Ramírez', deliveries: 15, rating: 4.7, speed: '5.1 min' },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-red-950/20 to-black border-b border-red-800/20 px-4 py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-red-500 font-bold text-sm uppercase tracking-widest">{lang === 'es' ? 'Análisis de Rendimiento' : 'Performance Analytics'}</span>
            <h1 className="text-white font-black text-3xl mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('reportsTitle')}</h1>
            <p className="text-gray-400 mt-1">{lang === 'es' ? 'Enero 2025 — Miami, FL' : 'January 2025 — Miami, FL'}</p>
          </div>
          <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
            📊 {lang === 'es' ? 'Exportar PDF' : 'Export PDF'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {kpiCards.map((kpi, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 hover:border-red-600/30 rounded-2xl p-5 text-center transition-all hover:-translate-y-0.5">
              <div className="text-3xl mb-2">{kpi.icon}</div>
              <div className="text-white font-black text-2xl sm:text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>{kpi.val}</div>
              <div className="text-gray-500 text-xs mt-1 leading-tight">{kpi.label}</div>
              <div className={`text-xs font-bold mt-2 ${kpi.change.startsWith('+') ? 'text-green-400' : kpi.change.startsWith('-') && kpi.label !== t('salesVelocity') ? 'text-red-400' : 'text-green-400'}`}>
                {kpi.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-6">
              📊 {lang === 'es' ? 'Tendencia Mensual (Últimos 4 Meses)' : 'Monthly Trend (Last 4 Months)'}
            </h3>
            <div className="flex items-end justify-around h-52 gap-3">
              {monthlyData.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col gap-1 items-center justify-end" style={{ height: '180px' }}>
                    {/* Deliveries bar */}
                    <div className="relative w-full flex flex-col gap-0.5">
                      <div
                        className="w-full bg-gradient-to-t from-red-700 to-red-500 rounded-t-lg transition-all duration-700 flex items-end justify-center"
                        style={{ height: `${(d.deliveries / maxVal) * 150}px` }}
                      >
                        <span className="text-white text-xs font-bold pb-1">{d.deliveries}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs font-bold">{d.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span className="text-gray-400 text-xs">{lang === 'es' ? 'Entregas' : 'Deliveries'}</span>
              </div>
            </div>
          </div>

          {/* Donut-style stats */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-6">
              🔑 {lang === 'es' ? 'Eficiencia del Sistema Express' : 'Express System Efficiency'}
            </h3>
            <div className="space-y-4">
              {[
                { label: lang === 'es' ? 'Entregas completadas en 5 min' : 'Deliveries completed in 5 min', val: 95, color: 'green' },
                { label: lang === 'es' ? 'Documentos subidos online' : 'Documents uploaded online', val: 94, color: 'blue' },
                { label: lang === 'es' ? 'Tasaciones completadas online' : 'Valuations completed online', val: 88, color: 'purple' },
                { label: lang === 'es' ? 'Satisfacción del cliente' : 'Customer satisfaction', val: 98, color: 'yellow' },
                { label: lang === 'es' ? 'Contratos firmados digitalmente' : 'Contracts signed digitally', val: 91, color: 'red' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300 text-sm">{item.label}</span>
                    <span className="text-white font-bold text-sm">{item.val}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        item.color === 'green' ? 'bg-green-500' :
                        item.color === 'blue' ? 'bg-blue-500' :
                        item.color === 'purple' ? 'bg-purple-500' :
                        item.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Vehicles */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold text-lg mb-2">
            🚗 {lang === 'es' ? 'Vehículos Más Vendidos Este Mes — Portal Express' : 'Best Selling Vehicles This Month — Express Portal'}
          </h3>
          <p className="text-gray-500 text-sm mb-6">{lang === 'es' ? 'ROI del sistema digital' : 'Digital system ROI'}</p>
          <div className="space-y-4">
            {topVehicles.map((v, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center text-red-400 font-black text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm">{v.name}</span>
                    <span className="text-gray-400 text-sm">{v.sold} {lang === 'es' ? 'vendidos' : 'sold'}</span>
                  </div>
                  <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full transition-all"
                      style={{ width: `${v.pct}%` }}
                    />
                  </div>
                </div>
                <div className="text-green-400 font-bold text-sm flex-shrink-0 w-28 text-right">{v.revenue}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
            <span className="text-gray-400 font-semibold">{lang === 'es' ? 'Total Ingresos del Mes:' : 'Total Month Revenue:'}</span>
            <span className="text-white font-black text-2xl">$4,023,500</span>
          </div>
        </div>

        {/* Staff Performance */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-6">
            👥 {lang === 'es' ? 'Rendimiento del Personal' : 'Staff Performance'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  {[lang === 'es' ? 'Personal' : 'Staff', lang === 'es' ? 'Entregas' : 'Deliveries',
                    lang === 'es' ? 'Calificación' : 'Rating', lang === 'es' ? 'Velocidad Promedio' : 'Avg Speed',
                    lang === 'es' ? 'Rango' : 'Rank'].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-gray-500 text-xs font-bold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staffPerf.map((s, i) => (
                  <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-red-600/20 rounded-full flex items-center justify-center text-red-400 font-black text-sm">
                          {s.name[0]}
                        </div>
                        <span className="text-white font-semibold text-sm">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-white font-bold">{s.deliveries}</td>
                    <td className="px-4 py-4">
                      <span className="text-yellow-400 font-bold">⭐ {s.rating}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`font-bold ${parseFloat(s.speed) <= 4.5 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {s.speed}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-black ${
                        i === 0 ? 'bg-yellow-600/30 border border-yellow-600/50 text-yellow-400' :
                        i === 1 ? 'bg-gray-600/30 border border-gray-600/50 text-gray-300' :
                        i === 2 ? 'bg-orange-600/30 border border-orange-600/50 text-orange-400' :
                        'bg-gray-800 border border-gray-700 text-gray-500'
                      }`}>
                        {i === 0 ? '🥇 #1' : i === 1 ? '🥈 #2' : i === 2 ? '🥉 #3' : `#${i + 1}`}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

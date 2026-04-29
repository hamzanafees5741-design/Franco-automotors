import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

const orders = [
  { id: 'FA-0892', name: 'Carlos Rodríguez', vehicle: '2024 Ford F-150 XLT', status: 'delivery', tradein: 'Completado', staff: 'Maria G.', docs: '3/4', time: '10:30 AM' },
  { id: 'FA-0891', name: 'Miguel Sánchez', vehicle: '2023 Ram 1500 Crew', status: 'tradein', tradein: 'En Revisión', staff: 'Juan P.', docs: '4/4', time: '11:00 AM' },
  { id: 'FA-0890', name: 'José Martínez', vehicle: '2024 Chevy Silverado', status: 'docs', tradein: 'Pendiente', staff: 'Ana R.', docs: '2/4', time: '2:00 PM' },
  { id: 'FA-0889', name: 'Luis García', vehicle: '2023 GMC Sierra 2500', status: 'new', tradein: 'No Aplica', staff: 'Sin asignar', docs: '0/4', time: 'Por definir' },
  { id: 'FA-0888', name: 'Pedro Hernández', vehicle: '2024 Toyota Tacoma', status: 'complete', tradein: 'Completado', staff: 'Carlos T.', docs: '4/4', time: '✅ Entregado' },
  { id: 'FA-0887', name: 'Roberto Flores', vehicle: '2024 Ram 2500 PW', status: 'complete', tradein: 'Completado', staff: 'Maria G.', docs: '4/4', time: '✅ Entregado' },
];

const columns = ['new', 'docs', 'tradein', 'delivery', 'complete'];

export default function StaffDashboard() {
  const { t, lang } = useLang();
  const [tab, setTab] = useState<'list' | 'board'>('list');

  const stats = [
    { icon: '🚗', label: t('totalDeliveries'), val: '12', color: 'red', trend: '+3' },
    { icon: '👥', label: t('totalCustomers'), val: '247', color: 'blue', trend: '+8' },
    { icon: '📄', label: t('pendingDocs'), val: '5', color: 'yellow', trend: '-2' },
    { icon: '🚙', label: t('pendingTradeIn'), val: '3', color: 'purple', trend: '+1' },
    { icon: '📅', label: t('scheduledToday'), val: '4', color: 'green', trend: '0' },
    { icon: '✅', label: t('completedMonth'), val: '89', color: 'emerald', trend: '+15' },
  ];

  const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
    new: { label: t('newRequest'), color: 'text-blue-400', bg: 'bg-blue-600/20 border-blue-600/30' },
    docs: { label: t('docsPending'), color: 'text-yellow-400', bg: 'bg-yellow-600/20 border-yellow-600/30' },
    tradein: { label: t('tradeInReview'), color: 'text-purple-400', bg: 'bg-purple-600/20 border-purple-600/30' },
    delivery: { label: t('deliveryScheduled'), color: 'text-orange-400', bg: 'bg-orange-600/20 border-orange-600/30' },
    complete: { label: t('keyComplete'), color: 'text-green-400', bg: 'bg-green-600/20 border-green-600/30' },
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-red-950/20 to-black border-b border-red-800/20 px-4 py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-red-500 font-bold text-sm uppercase tracking-widest">{lang === 'es' ? 'Panel de Control' : 'Control Panel'}</span>
            <h1 className="text-white font-black text-3xl mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('staffTitle')}</h1>
            <p className="text-gray-400 mt-1">{lang === 'es' ? 'Jueves, 13 de Enero 2025 — Miami, FL' : 'Thursday, January 13, 2025 — Miami, FL'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTab('list')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'list' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
            >
              📋 {lang === 'es' ? 'Lista' : 'List'}
            </button>
            <button
              onClick={() => setTab('board')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'board' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
            >
              📊 {lang === 'es' ? 'Tablero' : 'Board'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 hover:border-red-600/30 rounded-2xl p-5 text-center transition-all hover:-translate-y-0.5 group">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-white font-black text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.val}</div>
              <div className="text-gray-400 text-xs mt-1 leading-tight">{s.label}</div>
              <div className={`text-xs font-bold mt-2 ${s.trend.startsWith('+') ? 'text-green-400' : s.trend.startsWith('-') ? 'text-red-400' : 'text-gray-500'}`}>
                {s.trend !== '0' ? s.trend + (lang === 'es' ? ' este mes' : ' this month') : '—'}
              </div>
            </div>
          ))}
        </div>

        {/* List View */}
        {tab === 'list' && (
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">
                {lang === 'es' ? '📋 Órdenes Activas' : '📋 Active Orders'}
              </h3>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors">
                + {lang === 'es' ? 'Nueva Orden' : 'New Order'}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    {[lang === 'es' ? 'Orden' : 'Order', lang === 'es' ? 'Cliente' : 'Customer', lang === 'es' ? 'Vehículo' : 'Vehicle',
                      lang === 'es' ? 'Estado' : 'Status', lang === 'es' ? 'Tasación' : 'Trade-In',
                      lang === 'es' ? 'Docs' : 'Docs', lang === 'es' ? 'Personal' : 'Staff', lang === 'es' ? 'Hora' : 'Time',
                      lang === 'es' ? 'Acción' : 'Action'].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-gray-400 text-xs font-bold uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, i) => (
                    <tr key={i} className="border-t border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                      <td className="px-4 py-4 text-red-400 font-bold text-sm">#{o.id}</td>
                      <td className="px-4 py-4 text-white font-semibold text-sm">{o.name}</td>
                      <td className="px-4 py-4 text-gray-300 text-sm">{o.vehicle}</td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusConfig[o.status].bg} ${statusConfig[o.status].color}`}>
                          {statusConfig[o.status].label}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-400 text-sm">{o.tradein}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-700 rounded-full">
                            <div
                              className="h-full bg-red-600 rounded-full"
                              style={{ width: `${(parseInt(o.docs) / 4) * 100}%` }}
                            />
                          </div>
                          <span className="text-gray-400 text-xs">{o.docs}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-400 text-sm">{o.staff}</td>
                      <td className="px-4 py-4 text-gray-400 text-sm">{o.time}</td>
                      <td className="px-4 py-4">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-700 hover:bg-red-600 text-gray-300 hover:text-white text-xs rounded-lg transition-colors">
                            {lang === 'es' ? 'Ver' : 'View'}
                          </button>
                          <button className="px-2 py-1 bg-red-600/20 hover:bg-red-600 border border-red-600/30 text-red-400 hover:text-white text-xs rounded-lg transition-colors">
                            {lang === 'es' ? 'Editar' : 'Edit'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Kanban Board View */}
        {tab === 'board' && (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {columns.map(col => {
                const colOrders = orders.filter(o => o.status === col);
                const cfg = statusConfig[col];
                return (
                  <div key={col} className="w-64 flex-shrink-0">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                      <div className={`px-4 py-3 border-b border-gray-800 flex items-center justify-between`}>
                        <span className={`font-bold text-sm ${cfg.color}`}>{cfg.label}</span>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black border ${cfg.bg} ${cfg.color}`}>
                          {colOrders.length}
                        </span>
                      </div>
                      <div className="p-3 space-y-3 min-h-[200px]">
                        {colOrders.map((o, i) => (
                          <div key={i} className="bg-gray-800/80 border border-gray-700 hover:border-red-600/40 rounded-xl p-4 cursor-pointer transition-all hover:-translate-y-0.5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-red-400 text-xs font-bold">#{o.id}</span>
                              <span className="text-gray-500 text-xs">{o.time}</span>
                            </div>
                            <div className="text-white font-semibold text-sm">{o.name}</div>
                            <div className="text-gray-400 text-xs mt-1">{o.vehicle}</div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-1">
                                <span className="text-gray-500 text-xs">📄 {o.docs}</span>
                              </div>
                              <span className="text-gray-500 text-xs">👤 {o.staff}</span>
                            </div>
                          </div>
                        ))}
                        {colOrders.length === 0 && (
                          <div className="text-center py-8 text-gray-700 text-sm">
                            {lang === 'es' ? 'Sin órdenes' : 'No orders'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

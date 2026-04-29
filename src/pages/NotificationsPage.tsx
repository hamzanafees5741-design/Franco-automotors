import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

export default function NotificationsPage() {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState<'all' | 'whatsapp' | 'sms' | 'email'>('all');

  const notifications = [
    {
      type: 'whatsapp', time: '10:32 AM', status: 'delivered',
      to: 'Carlos Rodríguez', phone: '+1 786-555-0192',
      msg_es: '⚡ Carlos, tu entrega de llaves de 5 minutos está programada para el Jueves 15 de Enero a las 10:30 AM. ¡Nos vemos pronto! — Franco Automotors',
      msg_en: '⚡ Carlos, your 5-Minute Key Handover is scheduled for Thursday January 15 at 10:30 AM. See you soon! — Franco Automotors',
    },
    {
      type: 'sms', time: '9:45 AM', status: 'delivered',
      to: 'Miguel Sánchez', phone: '+1 305-555-0847',
      msg_es: '📋 Miguel, tu tasación de Trade-In está lista — oferta: $24,500. Consulta el portal para ver los detalles. francoautomotors.com',
      msg_en: '📋 Miguel, your Trade-In Valuation is ready — offer: $24,500. Check the portal for details. francoautomotors.com',
    },
    {
      type: 'email', time: '9:00 AM', status: 'opened',
      to: 'José Martínez', phone: 'jose@contractor.com',
      msg_es: '✅ José, todos tus documentos han sido verificados y aprobados. Tu Ram 1500 está listo. Entrega programada para hoy. ¡5 minutos y las llaves son tuyas!',
      msg_en: '✅ José, all your documents have been verified and approved. Your Ram 1500 is ready. Delivery scheduled for today. 5 minutes and the keys are yours!',
    },
    {
      type: 'whatsapp', time: '8:15 AM', status: 'delivered',
      to: 'Luis García', phone: '+1 786-555-0374',
      msg_es: '🚗 ¡Hola Luis! Tu oferta de tasación para tu Silverado 2020 está lista. Oferta: $28,500. Válida por 72 horas. Responde "ACEPTO" para continuar.',
      msg_en: '🚗 Hello Luis! Your trade-in offer for your 2020 Silverado is ready. Offer: $28,500. Valid for 72 hours. Reply "ACCEPT" to continue.',
    },
    {
      type: 'sms', time: 'Ayer 3:00 PM', status: 'delivered',
      to: 'Pedro Hernández', phone: '+1 305-555-0619',
      msg_es: '📅 Pedro, tu entrega de llaves de 5 minutos fue completada exitosamente. ¡Bienvenido a la familia Franco! Califica tu experiencia: g.co/franco',
      msg_en: '📅 Pedro, your 5-Minute Key Handover was completed successfully! Welcome to the Franco family! Rate your experience: g.co/franco',
    },
    {
      type: 'email', time: 'Ayer 10:30 AM', status: 'delivered',
      to: 'Roberto Flores', phone: 'roberto@hvac.com',
      msg_es: '📄 Roberto, falta 1 documento para completar tu expediente. Por favor sube tu comprobante de seguro en el portal para continuar con la entrega.',
      msg_en: '📄 Roberto, 1 document is missing to complete your file. Please upload your proof of insurance in the portal to continue with delivery.',
    },
  ];

  const templates = [
    {
      type: 'whatsapp', icon: '💬',
      title_es: 'Confirmación de Entrega 5 Min', title_en: '5-Min Key Handover Confirmation',
      template_es: '⚡ [Nombre], tu entrega de llaves de 5 minutos está programada para el [Fecha] a las [Hora]. ¡Nos vemos pronto! — Franco Automotors 🔑',
      template_en: '⚡ [Name], your 5-Minute Key Handover is scheduled for [Date] at [Time]. See you soon! — Franco Automotors 🔑',
    },
    {
      type: 'sms', icon: '📱',
      title_es: 'Tasación de Trade-In Lista', title_en: 'Trade-In Valuation Ready',
      template_es: '🚗 [Nombre], tu tasación está lista — oferta: $[Valor]. Válida 72 hrs. Responde SÍ para aceptar. — Franco Automotors',
      template_en: '🚗 [Name], your valuation is ready — offer: $[Value]. Valid 72 hrs. Reply YES to accept. — Franco Automotors',
    },
    {
      type: 'email', icon: '✉️',
      title_es: 'Documentos Aprobados', title_en: 'Documents Approved',
      template_es: '✅ [Nombre], todos tus documentos han sido aprobados. Tu vehículo está listo. Entrega en 5 minutos — [Fecha] a las [Hora]. ¡Nos vemos!',
      template_en: '✅ [Name], all your documents have been approved. Your vehicle is ready. 5-minute handover — [Date] at [Time]. See you there!',
    },
    {
      type: 'whatsapp', icon: '💬',
      title_es: 'Recordatorio de Entrega', title_en: 'Delivery Reminder',
      template_es: '⏰ Recordatorio: Tu entrega express es MAÑANA a las [Hora]. Asegúrate de tener tu ID válido. ¡Solo 5 minutos y las llaves son tuyas! — Franco Automotors',
      template_en: '⏰ Reminder: Your express delivery is TOMORROW at [Time]. Make sure to bring your valid ID. Just 5 minutes and the keys are yours! — Franco Automotors',
    },
  ];

  const filtered = activeTab === 'all' ? notifications : notifications.filter(n => n.type === activeTab);

  const typeConfig: Record<string, { color: string; bg: string; icon: string }> = {
    whatsapp: { color: 'text-green-400', bg: 'bg-green-600/20 border-green-600/30', icon: '💬' },
    sms: { color: 'text-blue-400', bg: 'bg-blue-600/20 border-blue-600/30', icon: '📱' },
    email: { color: 'text-red-400', bg: 'bg-red-600/20 border-red-600/30', icon: '✉️' },
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-red-950/20 to-black border-b border-red-800/20 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest">{lang === 'es' ? 'Mensajes Automatizados' : 'Automated Messages'}</span>
          <h1 className="text-white font-black text-3xl mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('notifTitle')}</h1>
          <p className="text-gray-400 mt-1">{t('notifSub')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: '💬', label: 'WhatsApp', val: '142', color: 'green' },
            { icon: '📱', label: 'SMS', val: '89', color: 'blue' },
            { icon: '✉️', label: 'Email', val: '67', color: 'red' },
          ].map((s, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-white font-black text-3xl">{s.val}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              <div className="text-green-400 text-xs mt-1">{lang === 'es' ? 'este mes' : 'this month'}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications List */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-2 mb-5 flex-wrap">
              {(['all', 'whatsapp', 'sms', 'email'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'all' ? (lang === 'es' ? 'Todos' : 'All') :
                   tab === 'whatsapp' ? '💬 WhatsApp' :
                   tab === 'sms' ? '📱 SMS' : '✉️ Email'}
                </button>
              ))}
            </div>

            {/* Notification Items */}
            <div className="space-y-4">
              {filtered.map((n, i) => {
                const cfg = typeConfig[n.type];
                return (
                  <div key={i} className="bg-gray-900/50 border border-gray-800 hover:border-gray-700 rounded-2xl p-5 transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border ${cfg.bg}`}>
                        {cfg.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-semibold text-sm">{n.to}</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${cfg.bg} ${cfg.color}`}>
                              {n.type === 'whatsapp' ? 'WhatsApp' : n.type === 'sms' ? 'SMS' : 'Email'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs ${n.status === 'delivered' ? 'text-green-400' : n.status === 'opened' ? 'text-blue-400' : 'text-gray-400'}`}>
                              {n.status === 'delivered' ? '✓✓ ' : n.status === 'opened' ? '👁 ' : '✓ '}
                              {lang === 'es' ? (n.status === 'delivered' ? 'Entregado' : n.status === 'opened' ? 'Abierto' : 'Enviado') :
                                (n.status === 'delivered' ? 'Delivered' : n.status === 'opened' ? 'Opened' : 'Sent')}
                            </span>
                            <span className="text-gray-600 text-xs">{n.time}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {lang === 'es' ? n.msg_es : n.msg_en}
                        </p>
                        <div className="text-gray-600 text-xs mt-2">{n.phone}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Templates */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              📝 {lang === 'es' ? 'Plantillas Express' : 'Express Templates'}
            </h3>
            <div className="space-y-4">
              {templates.map((tpl, i) => {
                const cfg = typeConfig[tpl.type];
                return (
                  <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm border ${cfg.bg}`}>{tpl.icon}</span>
                      <span className="text-white font-bold text-sm">{lang === 'es' ? tpl.title_es : tpl.title_en}</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed italic">
                      "{lang === 'es' ? tpl.template_es : tpl.template_en}"
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs font-bold rounded-lg transition-colors">
                        {lang === 'es' ? 'Editar' : 'Edit'}
                      </button>
                      <button className="flex-1 py-1.5 bg-red-600/20 hover:bg-red-600 border border-red-600/30 text-red-400 hover:text-white text-xs font-bold rounded-lg transition-colors">
                        {lang === 'es' ? 'Usar' : 'Use'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

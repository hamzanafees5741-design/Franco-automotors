import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

interface Message {
  from: 'bot' | 'user';
  text: string;
}

export default function ChatWidget() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: t('chatWelcome') },
  ]);

  const botResponses = lang === 'es' ? [
    "¡Claro! Te ayudo con eso. ¿Qué documentos necesitas subir? 📄",
    "Tu tasación estará lista en menos de 2 horas. ¿Quieres iniciar el proceso ahora? 🚗",
    "Puedo programar tu entrega de llaves en 5 minutos. ¿Qué fecha prefieres? 📅",
    "Para financiamiento, trabajamos con todos los tipos de crédito. ¡Podemos ayudarte! 💰",
    "Nuestro equipo está disponible 24/7. ¡Estamos aquí para ti! ⚡",
    "¡Excelente! Un asesor de Franco Automotors te contactará en breve. 🏆",
  ] : [
    "Sure! I can help you with that. Which documents do you need to upload? 📄",
    "Your trade-in valuation will be ready in under 2 hours. Want to start now? 🚗",
    "I can schedule your 5-minute key handover! What date works for you? 📅",
    "For financing, we work with all credit types. We can help you! 💰",
    "Our team is available 24/7. We're always here for you! ⚡",
    "Excellent! A Franco Automotors advisor will contact you shortly. 🏆",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { from: 'user', text: input };
    const botMsg: Message = {
      from: 'bot',
      text: botResponses[Math.floor(Math.random() * botResponses.length)],
    };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl shadow-red-600/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-xs font-bold">!</span>
          </span>
        )}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" style={{ maxHeight: '70vh' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Franco Digital Assistant</div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-xs">24/7 Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: '200px', maxHeight: '350px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'bot' && (
                  <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <span className="text-sm">🤖</span>
                  </div>
                )}
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-red-600 text-white rounded-br-sm'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-3 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto">
            {(lang === 'es' ? ['📄 Documentos', '🚗 Tasación', '📅 Entrega'] : ['📄 Documents', '🚗 Trade-In', '📅 Delivery']).map(q => (
              <button
                key={q}
                onClick={() => {
                  setInput(q);
                  handleSend();
                }}
                className="flex-shrink-0 px-3 py-1.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-full hover:bg-red-100 transition-colors font-medium"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={t('chatInput')}
              className="flex-1 px-3 py-2 bg-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 bg-red-600 hover:bg-red-700 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

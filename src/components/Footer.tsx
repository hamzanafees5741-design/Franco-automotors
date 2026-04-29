import { useLang } from '../context/LanguageContext';

interface FooterProps {
  setPage: (p: string) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const { t, lang } = useLang();
  return (
    <footer className="bg-black border-t border-red-700/20 text-white">
      {/* Tagline Banner */}
      <div className="bg-red-600 py-3 px-4 text-center">
        <p className="text-white font-black text-sm sm:text-base tracking-wide uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          🏆 {t('footerTagline')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <div>
              <div className="font-black text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>FRANCO</div>
              <div className="text-red-500 text-xs font-bold tracking-widest">AUTOMOTORS</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {lang === 'en'
              ? "Miami's premier work vehicle dealership for Latino professionals since 2013."
              : "El concesionario de vehículos de trabajo premier de Miami para profesionales latinos desde 2013."}
          </p>
          <div className="flex gap-3">
            {['facebook','instagram','whatsapp'].map(s => (
              <a key={s} href="#" className="w-9 h-9 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">{s === 'facebook' ? '📘' : s === 'instagram' ? '📷' : '💬'}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Portal Express</h4>
          <ul className="space-y-2">
            {[
              { key: 'portal', label: t('portal') },
              { key: 'tradein', label: t('tradein') },
              { key: 'delivery', label: t('delivery') },
              { key: 'keyhandover', label: t('keyHandover') },
              { key: 'documents', label: t('documents') },
            ].map(l => (
              <li key={l.key}>
                <button onClick={() => setPage(l.key)} className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                  → {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Vehicles</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>🚚 Ford F-150 Trucks</li>
            <li>🚛 Ram 1500 / 2500</li>
            <li>🔧 Chevy Silverado</li>
            <li>🏗️ GMC Sierra</li>
            <li>🚗 Toyota Tacoma</li>
            <li>🛻 Ford Transit</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-gray-400">
              <span className="text-red-500 mt-0.5">📍</span>
              <span>{t('address')}</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-red-500">📞</span>
              <a href="tel:7868479726" className="hover:text-white transition-colors">{t('phone')}</a>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-red-500">✉️</span>
              <a href="mailto:info@francoautomotors.com" className="hover:text-white transition-colors text-xs">info@francoautomotors.com</a>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-red-500">🕐</span>
              <span>Mon–Sat: 9AM–7PM EDT</span>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-600/10 border border-red-600/30 rounded-xl">
            <p className="text-red-400 text-xs font-bold">⚡ 5-MIN KEY HANDOVER</p>
            <p className="text-gray-400 text-xs mt-1">Miami window: 10AM–1PM EDT</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 px-4 text-center">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Franco Automotors. {t('rights')} | Miami, FL 33135 | Dealer License #FL-2024-8876
        </p>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

interface LoginPageProps {
  onLogin: (role: 'customer' | 'staff' | 'admin') => void;
  setPage: (p: string) => void;
}

export default function LoginPage({ onLogin, setPage }: LoginPageProps) {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState<'customer' | 'staff' | 'admin'>('customer');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(activeTab);
    }, 1200);
  };

  const stats = [
    { num: '5', label: lang === 'es' ? 'Minutos Entrega' : 'Min Key Handover', icon: '⚡' },
    { num: '500+', label: lang === 'es' ? 'Clientes Felices' : 'Happy Clients', icon: '⭐' },
    { num: '24/7', label: lang === 'es' ? 'Asistente Digital' : 'Digital Assistant', icon: '🤖' },
    { num: '#1', label: lang === 'es' ? 'Dealer Express Miami' : 'Express Dealer Miami', icon: '🏆' },
  ];

  const features = [
    {
      icon: '📤',
      title: t('feat1Title'),
      desc: t('feat1Desc'),
      color: 'from-red-500 to-red-700',
    },
    {
      icon: '🚗',
      title: t('feat2Title'),
      desc: t('feat2Desc'),
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: '📅',
      title: t('feat3Title'),
      desc: t('feat3Desc'),
      color: 'from-red-600 to-red-800',
    },
  ];

  const vehicles = [
    { name: '2024 Ford F-150 XLT', price: '$42,900', img: '🚚', type: 'Truck', miles: '12,450' },
    { name: '2023 Ram 1500 Crew Cab', price: '$39,500', img: '🛻', type: 'Truck', miles: '18,200' },
    { name: '2024 Chevy Silverado 1500', price: '$44,200', img: '🚛', type: 'Truck', miles: '8,900' },
    { name: '2023 GMC Sierra 2500', price: '$51,000', img: '🏗️', type: 'Truck', miles: '22,100' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)',
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
          {/* Animated particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-600/20 blur-3xl animate-pulse"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                left: `${i * 18}%`,
                top: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/50">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-black text-2xl tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                FRANCO
              </div>
              <div className="text-red-400 text-xs font-bold tracking-[0.3em] uppercase">AUTOMOTORS</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage('inventory')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              {t('inventory')}
            </button>
            <LanguageToggle />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-12 max-w-7xl mx-auto w-full">
          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left">
            {/* Express Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/40 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                {lang === 'es' ? 'Portal Express Activo' : 'Express Portal Active'}
              </span>
            </div>

            {/* Main Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {lang === 'es' ? (
                <>
                  El Único Dealer en Miami con{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                    Entrega de Llaves en 5 Minutos
                  </span>
                </>
              ) : (
                <>
                  Miami's Only{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                    5-Minute Key Handover
                  </span>{' '}
                  Dealer
                </>
              )}
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl">
              {t('heroSub')}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur hover:bg-white/10 transition-colors">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-red-400 font-black text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.num}</div>
                  <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => setPage('inventory')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-xl shadow-red-600/30 transition-all hover:scale-105 text-lg"
              >
                {lang === 'es' ? '🚗 Ver Inventario' : '🚗 Browse Inventory'}
              </button>
              <button
                onClick={() => { onLogin('customer'); }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all hover:scale-105 text-lg backdrop-blur"
              >
                {lang === 'es' ? '⚡ Portal Express' : '⚡ Express Portal'}
              </button>
            </div>
          </div>

          {/* Right Side - Login Card */}
          <div className="w-full max-w-md">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-white font-black text-2xl text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('welcomeTitle')}
              </h2>
              <p className="text-gray-400 text-sm text-center mb-6">{t('welcomeSub')}</p>

              {/* Role Tabs */}
              <div className="flex bg-black/40 rounded-xl p-1 mb-6">
                {(['customer', 'staff', 'admin'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => setActiveTab(role)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      activeTab === role
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {role === 'customer' ? (lang === 'es' ? '👤 Cliente' : '👤 Customer') :
                     role === 'staff' ? (lang === 'es' ? '👷 Personal' : '👷 Staff') :
                     '🔐 Admin'}
                  </button>
                ))}
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={activeTab === 'customer' ? 'carlos@contractor.com' : activeTab === 'staff' ? 'maria@franco.com' : 'admin@franco.com'}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">
                    {lang === 'es' ? 'Contraseña' : 'Password'}
                  </label>
                  <input
                    type="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors text-sm"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black rounded-xl shadow-xl shadow-red-600/40 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {lang === 'es' ? 'Entrando...' : 'Logging in...'}
                    </span>
                  ) : (
                    `⚡ ${t('login')}`
                  )}
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-gray-500 text-xs">{lang === 'es' ? 'Demo: ingresa cualquier email y contraseña' : 'Demo: enter any email & password'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-black to-gray-950 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 font-bold text-sm uppercase tracking-widest">{lang === 'es' ? '¿Por qué nosotros?' : 'Why choose us?'}</span>
            <h2 className="text-white font-black text-4xl mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {lang === 'es' ? 'El Sistema Express Más Avanzado de Miami' : "Miami's Most Advanced Express System"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-600/50 rounded-2xl p-8 transition-all hover:-translate-y-2 cursor-pointer"
                onClick={() => setPage(i === 0 ? 'documents' : i === 1 ? 'tradein' : 'delivery')}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-4 text-red-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                  {lang === 'es' ? 'Comenzar' : 'Get Started'} →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Vehicles Preview */}
      <div className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-red-500 font-bold text-sm uppercase tracking-widest">{lang === 'es' ? 'Inventario Destacado' : 'Featured Inventory'}</span>
              <h2 className="text-white font-black text-3xl mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {lang === 'es' ? 'Vehículos de Trabajo Populares' : 'Popular Work Vehicles'}
              </h2>
            </div>
            <button onClick={() => setPage('inventory')} className="hidden sm:flex px-6 py-3 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white rounded-xl font-bold transition-all text-sm">
              {lang === 'es' ? 'Ver Todo →' : 'View All →'}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-600/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {v.img}
                </div>
                <div className="p-4">
                  <span className="text-xs text-red-400 font-bold uppercase tracking-wider">{v.type}</span>
                  <h4 className="text-white font-bold mt-1 text-sm">{v.name}</h4>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-red-500 font-black text-lg">{v.price}</span>
                    <span className="text-gray-500 text-xs">{v.miles} {t('miles')}</span>
                  </div>
                  <button
                    onClick={() => setPage('inventory')}
                    className="w-full mt-3 py-2 bg-red-600/20 hover:bg-red-600 border border-red-600/30 hover:border-red-600 text-red-400 hover:text-white text-sm font-bold rounded-lg transition-all"
                  >
                    {t('viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setPage('inventory')} className="sm:hidden px-6 py-3 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white rounded-xl font-bold transition-all text-sm">
              {lang === 'es' ? 'Ver Todo el Inventario →' : 'View All Inventory →'}
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-b from-gray-950 to-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 font-bold text-sm uppercase tracking-widest">{lang === 'es' ? 'Opiniones Reales' : 'Real Reviews'}</span>
            <h2 className="text-white font-black text-3xl mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {lang === 'es' ? 'Lo Que Dicen Nuestros Contratistas' : 'What Our Contractors Say'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Carlos Rodríguez', role: lang === 'es' ? 'Contratista de Construcción' : 'Construction Contractor',
                text: lang === 'es' ? '"Increíble. Llegué, firmé y tuve mis llaves en literalmente 4 minutos. Nunca había visto algo así en Miami."' : '"Incredible. I arrived, signed, and had my keys in literally 4 minutes. Never seen anything like this in Miami."',
                vehicle: 'Ford F-150 XLT 2024', rating: 5,
              },
              {
                name: 'Miguel Sánchez', role: lang === 'es' ? 'Dueño de Empresa de Plomería' : 'Plumbing Business Owner',
                text: lang === 'es' ? '"Subí todos mis documentos desde mi teléfono. El proceso fue completamente online. Franco Automotors entiende que mi tiempo vale."' : '"Uploaded all documents from my phone. Entire process was online. Franco Automotors understands that my time is valuable."',
                vehicle: 'Ram 1500 Crew Cab 2023', rating: 5,
              },
              {
                name: 'José Martínez', role: lang === 'es' ? 'Supervisor de HVAC' : 'HVAC Supervisor',
                text: lang === 'es' ? '"La tasación de mi auto la hice online, sin ir al dealer. Me contactaron en menos de 2 horas. ¡Así debe ser!"' : '"Did my trade-in valuation online without visiting the dealer. They contacted me in under 2 hours. That is how it should be done!"',
                vehicle: 'Chevy Silverado 1500 2024', rating: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic mb-5">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center text-red-400 font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs">{review.role}</div>
                    <div className="text-red-400 text-xs mt-0.5">🚗 {review.vehicle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

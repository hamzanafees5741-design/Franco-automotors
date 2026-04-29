import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  currentPage: string;
  setPage: (p: string) => void;
  userRole: string | null;
  onLogout: () => void;
}

export default function Navbar({ currentPage, setPage, userRole, onLogout }: NavbarProps) {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const customerLinks = [
    { key: 'home', label: t('home') },
    { key: 'inventory', label: t('inventory') },
    { key: 'portal', label: t('portal') },
    { key: 'tradein', label: t('tradein') },
    { key: 'delivery', label: t('delivery') },
    { key: 'keyhandover', label: t('keyHandover') },
    { key: 'documents', label: t('documents') },
    { key: 'tracking', label: t('tracking') },
  ];

  const staffLinks = [
    { key: 'staff', label: t('staffDash') },
    { key: 'notifications', label: t('notifications') },
    { key: 'tracking', label: t('tracking') },
  ];

  const adminLinks = [
    { key: 'admin', label: t('adminReports') },
    { key: 'staff', label: t('staffDash') },
    { key: 'notifications', label: t('notifications') },
  ];

  const links =
    userRole === 'admin' ? adminLinks :
    userRole === 'staff' ? staffLinks :
    customerLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-700/30 shadow-lg shadow-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-lg shadow-lg shadow-red-600/40 group-hover:bg-red-500 transition-colors">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-black text-lg leading-none tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                FRANCO
              </div>
              <div className="text-red-500 text-xs font-semibold tracking-widest uppercase">
                Automotors
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.slice(0, 5).map(link => (
              <button
                key={link.key}
                onClick={() => setPage(link.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === link.key
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            {links.length > 5 && (
              <div className="relative group">
                <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                  More ▾
                </button>
                <div className="absolute top-full right-0 mt-1 w-48 bg-black/95 border border-gray-700 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                  {links.slice(5).map(link => (
                    <button
                      key={link.key}
                      onClick={() => setPage(link.key)}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-red-600/20 first:rounded-t-xl last:rounded-b-xl transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            {userRole && (
              <button
                onClick={onLogout}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-red-600/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                {t('logout')}
              </button>
            )}
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-gray-800 px-4 py-3 space-y-1">
          {links.map(link => (
            <button
              key={link.key}
              onClick={() => { setPage(link.key); setMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentPage === link.key
                  ? 'bg-red-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          {userRole && (
            <button
              onClick={() => { onLogout(); setMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-400 hover:bg-red-600/20 transition-colors"
            >
              {t('logout')}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

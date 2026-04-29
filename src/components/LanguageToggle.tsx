import { useLang } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 transition-all text-white text-sm font-semibold shadow-lg"
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="text-lg">{lang === 'es' ? '🇺🇸' : '🇪🇸'}</span>
      <span>{lang === 'es' ? 'English' : 'Español'}</span>
    </button>
  );
}

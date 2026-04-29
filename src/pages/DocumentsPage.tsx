import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

type DocStatus = 'pending' | 'review' | 'approved';

interface DocItem {
  key: string;
  label: string;
  icon: string;
  status: DocStatus;
  desc: string;
}

export default function DocumentsPage() {
  const { t, lang } = useLang();

  const [docs, setDocs] = useState<DocItem[]>([
    { key: 'govId', label: t('govId'), icon: '🪪', status: 'approved', desc: lang === 'es' ? 'ID de Gobierno / Licencia de Conducir' : 'Government ID / Driver\'s License' },
    { key: 'insurance', label: t('insurance'), icon: '🛡️', status: 'review', desc: lang === 'es' ? 'Comprobante de seguro vigente' : 'Current proof of insurance' },
    { key: 'contracts', label: t('contracts'), icon: '📋', status: 'pending', desc: lang === 'es' ? 'Contratos de compra firmados digitalmente' : 'Purchase contracts digitally signed' },
    { key: 'tradePhotos', label: t('tradePhotos'), icon: '📸', status: 'pending', desc: lang === 'es' ? 'Fotos de tu auto a cambiar' : 'Photos of your trade-in vehicle' },
  ]);

  const [signSigned, setSignSigned] = useState(false);

  const updateStatus = (key: string) => {
    setDocs(prev => prev.map(d => d.key === key ? { ...d, status: 'review' as DocStatus } : d));
  };

  const statusConfig: Record<DocStatus, { label: string; color: string; bg: string; icon: string }> = {
    pending: { label: t('docPending'), color: 'text-yellow-400', bg: 'bg-yellow-600/20 border-yellow-600/40', icon: '⏳' },
    review: { label: t('docReview'), color: 'text-blue-400', bg: 'bg-blue-600/20 border-blue-600/40', icon: '🔍' },
    approved: { label: t('docApproved'), color: 'text-green-400', bg: 'bg-green-600/20 border-green-600/40', icon: '✅' },
  };

  const approved = docs.filter(d => d.status === 'approved').length;
  const progress = (approved / docs.length) * 100;

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-red-950/20 to-black border-b border-red-800/20 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest">
            {lang === 'es' ? 'Gestión de Documentos' : 'Document Management'}
          </span>
          <h1 className="text-white font-black text-4xl sm:text-5xl mt-2 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('docsTitle')}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t('docsSub')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Progress Bar */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-bold">{lang === 'es' ? '📊 Progreso de Documentos' : '📊 Document Progress'}</h3>
            <span className="text-white font-black text-xl">{approved}/{docs.length}</span>
          </div>
          <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-green-500 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>{lang === 'es' ? 'Inicio' : 'Start'}</span>
            <span className={`font-bold ${progress === 100 ? 'text-green-400' : 'text-red-400'}`}>
              {progress === 100
                ? (lang === 'es' ? '✅ Completo — Listo para entrega en 5 min!' : '✅ Complete — Ready for 5-min handover!')
                : `${Math.round(progress)}% ${lang === 'es' ? 'completado' : 'complete'}`}
            </span>
            <span>100%</span>
          </div>
        </div>

        {/* Document Cards */}
        <div className="space-y-4 mb-10">
          {docs.map((doc, i) => {
            const cfg = statusConfig[doc.status];
            return (
              <div key={i} className={`bg-gray-900/50 border rounded-2xl p-6 transition-all ${
                doc.status === 'approved' ? 'border-green-800/40' :
                doc.status === 'review' ? 'border-blue-800/40' :
                'border-gray-800 hover:border-red-600/30'
              }`}>
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    doc.status === 'approved' ? 'bg-green-600/20' :
                    doc.status === 'review' ? 'bg-blue-600/20' :
                    'bg-gray-700'
                  }`}>
                    {doc.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-white font-bold">{doc.label}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${cfg.bg} ${cfg.color} flex items-center gap-1`}>
                        {cfg.icon} {cfg.label}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{doc.desc}</p>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0">
                    {doc.status === 'approved' ? (
                      <div className="w-12 h-12 bg-green-600/20 border border-green-600/40 rounded-2xl flex items-center justify-center">
                        <span className="text-green-400 text-xl">✓</span>
                      </div>
                    ) : doc.status === 'review' ? (
                      <div className="px-4 py-2 bg-blue-600/20 border border-blue-600/40 text-blue-400 text-sm rounded-xl font-bold">
                        {lang === 'es' ? 'En revisión' : 'In review'}
                      </div>
                    ) : (
                      <button
                        onClick={() => updateStatus(doc.key)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        {t('uploadNow')}
                      </button>
                    )}
                  </div>
                </div>

                {/* Upload Area for pending */}
                {doc.status === 'pending' && (
                  <div
                    onClick={() => updateStatus(doc.key)}
                    className="mt-4 border-2 border-dashed border-gray-700 hover:border-red-500 rounded-xl p-6 text-center cursor-pointer transition-all group"
                  >
                    <svg className="w-8 h-8 text-gray-600 group-hover:text-red-500 mx-auto mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">
                      {lang === 'es' ? 'Arrastra tu archivo o toca para subir' : 'Drag file here or tap to upload'}
                    </p>
                    <p className="text-gray-600 text-xs mt-1">PDF, JPG, PNG {lang === 'es' ? 'hasta 10MB' : 'up to 10MB'}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Digital Signature */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-6">
          <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
            ✍️ {t('digitalSig')}
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            {lang === 'es' ? 'Firma tus contratos digitalmente — sin papel, sin visitar el dealer.' : 'Sign your contracts digitally — no paper, no dealership visit.'}
          </p>
          <div
            onClick={() => setSignSigned(true)}
            className={`relative h-36 rounded-2xl border-2 border-dashed flex items-center justify-center cursor-pointer transition-all ${
              signSigned ? 'border-green-500 bg-green-600/10' : 'border-gray-700 hover:border-red-500 bg-gray-800/30'
            }`}
          >
            {signSigned ? (
              <div className="text-center">
                <div className="text-green-400 text-4xl mb-2">✅</div>
                <div className="text-green-400 font-bold">{lang === 'es' ? '¡Contrato Firmado!' : 'Contract Signed!'}</div>
                <div className="text-gray-400 text-xs mt-1">{lang === 'es' ? 'Carlos Rodríguez — 13 Ene 2025' : 'Carlos Rodriguez — Jan 13, 2025'}</div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-gray-600 text-4xl mb-2">✍️</div>
                <div className="text-gray-400">{lang === 'es' ? 'Toca aquí para firmar' : 'Tap here to sign'}</div>
                <div className="text-gray-600 text-xs mt-1">{lang === 'es' ? 'Firma con tu dedo o ratón' : 'Sign with finger or mouse'}</div>
              </div>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="bg-gradient-to-r from-red-900/30 to-black border border-red-700/30 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">⚡</div>
          <h4 className="text-white font-black text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {lang === 'es' ? 'Documentos completos = Llaves en 5 minutos' : 'Documents complete = Keys in 5 minutes'}
          </h4>
          <p className="text-gray-400 text-sm mt-2">
            {lang === 'es'
              ? 'Cuando todos tus documentos estén aprobados, tu entrega de llaves tomará menos de 5 minutos en el dealer.'
              : 'When all your documents are approved, your key handover will take less than 5 minutes at the dealership.'}
          </p>
        </div>
      </div>
    </div>
  );
}

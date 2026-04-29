import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

interface InventoryPageProps {
  setPage: (p: string) => void;
}

const cars = [
  {
    id: 1, name: '2024 Ford F-150 XLT SuperCrew', price: 42900, category: 'truck',
    miles: '12,450', engine: '5.0L V8', transmission: 'Automatic', color: 'Oxford White',
    vin: 'FA24X001', status: 'inStock', emoji: '🚚', badge: 'HOT DEAL',
    features: ['Tow Package 13,000 lbs', 'Pro Trailer Backup Assist', 'FordPass Connect', 'LED Headlights'],
    mpg: '20/26', year: 2024,
  },
  {
    id: 2, name: '2023 Ram 1500 Crew Cab Laramie', price: 39500, category: 'truck',
    miles: '18,200', engine: '5.7L HEMI V8', transmission: 'Automatic', color: 'Granite Crystal',
    vin: 'RA23X002', status: 'inStock', emoji: '🛻', badge: 'BEST VALUE',
    features: ['Air Suspension', 'Uconnect 12" Display', 'Panoramic Sunroof', '4x4 eTorque'],
    mpg: '19/24', year: 2023,
  },
  {
    id: 3, name: '2024 Chevy Silverado 1500 LTZ', price: 44200, category: 'truck',
    miles: '8,900', engine: '6.2L V8 EcoTec3', transmission: 'Automatic', color: 'Black',
    vin: 'CS24X003', status: 'inStock', emoji: '🚛', badge: 'NEW ARRIVAL',
    features: ['Durabed Steel Bed', 'Multi-Flex Tailgate', 'Super Cruise', 'Bose Premium Audio'],
    mpg: '18/23', year: 2024,
  },
  {
    id: 4, name: '2023 GMC Sierra 2500HD Pro', price: 51000, category: 'truck',
    miles: '22,100', engine: '6.6L V8 Duramax', transmission: 'Automatic', color: 'Quicksilver',
    vin: 'GM23X004', status: 'inStock', emoji: '🏗️', badge: 'WORK READY',
    features: ['Max Trailering 18,500 lbs', 'Duramax Diesel', 'ProGrade Trailering System', 'EZ-Lift Tailgate'],
    mpg: '14/20', year: 2023,
  },
  {
    id: 5, name: '2024 Toyota Tacoma TRD Pro', price: 46800, category: 'truck',
    miles: '5,200', engine: '2.4L Turbo 4-Cyl', transmission: 'Automatic', color: 'Solar Octane',
    vin: 'TT24X005', status: 'inStock', emoji: '🚙', badge: 'POPULAR',
    features: ['Fox Shocks', 'Multi-Terrain Select', 'Wireless CarPlay', 'TRD Cat-Back Exhaust'],
    mpg: '21/25', year: 2024,
  },
  {
    id: 6, name: '2023 Ford Transit 250 Cargo', price: 38500, category: 'van',
    miles: '31,000', engine: '3.5L EcoBoost V6', transmission: 'Automatic', color: 'Oxford White',
    vin: 'FT23X006', status: 'inStock', emoji: '🚐', badge: 'WORK VAN',
    features: ['High-Roof Model', 'Dual Sliding Doors', 'Load Floor Rings', 'E350 Payload'],
    mpg: '17/24', year: 2023,
  },
  {
    id: 7, name: '2024 Jeep Grand Cherokee L', price: 48900, category: 'suv',
    miles: '9,400', engine: '3.6L Pentastar V6', transmission: 'Automatic', color: 'Diamond Black',
    vin: 'JG24X007', status: 'inStock', emoji: '🚜', badge: 'LUXURY SUV',
    features: ['7-Passenger Seating', 'Quadra-Drive II 4x4', 'McIntosh Premium Audio', 'Panoramic Sunroof'],
    mpg: '19/26', year: 2024,
  },
  {
    id: 8, name: '2023 Chevy Tahoe Z71 4WD', price: 57200, category: 'suv',
    miles: '14,600', engine: '5.3L V8 EcoTec3', transmission: 'Automatic', color: 'Summit White',
    vin: 'CT23X008', status: 'inStock', emoji: '🚗', badge: 'FAMILY BOSS',
    features: ['Max Tow Package 8,400 lbs', 'Magnetic Ride Control', 'Bose 14-Speaker Audio', 'Lane Change Alert'],
    mpg: '15/20', year: 2023,
  },
  {
    id: 9, name: '2024 RAM 2500 Power Wagon', price: 62000, category: 'truck',
    miles: '3,100', engine: '6.4L HEMI V8', transmission: '8-Speed Auto', color: 'Hydro Blue',
    vin: 'RP24X009', status: 'inStock', emoji: '🏆', badge: 'PREMIUM',
    features: ['Warn Winch 12,000 lbs', 'Disconnecting Front Sway Bar', 'Electronic Front Locking Axle', 'Off-Road Mode'],
    mpg: '12/17', year: 2024,
  },
];

export default function InventoryPage({ setPage }: InventoryPageProps) {
  const { t, lang } = useLang();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price_asc');
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const [quickBuy, setQuickBuy] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: t('filterAll'), icon: '🚗' },
    { key: 'truck', label: t('filterTruck'), icon: '🚚' },
    { key: 'suv', label: t('filterSUV'), icon: '🚜' },
    { key: 'van', label: lang === 'es' ? 'Vans' : 'Vans', icon: '🚐' },
  ];

  const filtered = cars
    .filter(c => filter === 'all' || c.category === filter)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'miles_asc') return parseInt(a.miles.replace(',', '')) - parseInt(b.miles.replace(',', ''));
      return b.year - a.year;
    });

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-black via-red-950 to-black border-b border-red-800/20 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest">{lang === 'es' ? 'Nuestros Vehículos' : 'Our Vehicles'}</span>
          <h1 className="text-white font-black text-4xl sm:text-5xl mt-2 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('inventoryTitle')}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t('inventorySub')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm">
            <span className="flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400">
              <span>⚡</span> {lang === 'es' ? '5-Min Entrega de Llaves' : '5-Min Key Handover'}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full text-green-400">
              <span>💰</span> {lang === 'es' ? 'Financiamiento Disponible' : 'Financing Available'}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400">
              <span>🚗</span> {lang === 'es' ? 'Tasación Online' : 'Online Trade-In'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  filter === cat.key
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-gray-900 border border-gray-700 text-gray-400 hover:border-red-600/50 hover:text-white'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-gray-300 focus:outline-none focus:border-red-500 text-sm"
          >
            <option value="price_asc">{lang === 'es' ? 'Precio: Menor a Mayor' : 'Price: Low to High'}</option>
            <option value="price_desc">{lang === 'es' ? 'Precio: Mayor a Menor' : 'Price: High to Low'}</option>
            <option value="miles_asc">{lang === 'es' ? 'Menos Millaje' : 'Lowest Miles'}</option>
            <option value="year_desc">{lang === 'es' ? 'Más Reciente' : 'Most Recent'}</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            {lang === 'es' ? `Mostrando ${filtered.length} vehículos` : `Showing ${filtered.length} vehicles`}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {lang === 'es' ? 'Todos en stock' : 'All in stock'}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(car => (
            <div
              key={car.id}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-600/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/20"
            >
              {/* Image Area */}
              <div className="relative h-52 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{car.emoji}</span>
                {/* Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full shadow-lg">
                  {car.badge}
                </div>
                {/* Status */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-green-600/90 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full"></span>
                  {t('inStock')}
                </div>
                {/* Year Tag */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 text-white text-xs font-bold rounded-lg backdrop-blur">
                  {car.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-base leading-tight mb-1">{car.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-red-500 font-black text-2xl">${car.price.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm">{car.miles} {t('miles')}</span>
                </div>

                {/* Specs Row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: '⚙️', val: car.engine.split(' ')[0] + ' ' + car.engine.split(' ')[1] },
                    { icon: '🔄', val: 'Auto' },
                    { icon: '⛽', val: car.mpg },
                  ].map((spec, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg px-2 py-1.5 text-center">
                      <div className="text-xs">{spec.icon}</div>
                      <div className="text-gray-400 text-xs mt-0.5 truncate">{spec.val}</div>
                    </div>
                  ))}
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {car.features.slice(0, 2).map((f, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">{f}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="flex-1 py-2.5 border border-gray-700 hover:border-red-600 text-gray-300 hover:text-white text-sm font-semibold rounded-xl transition-all"
                  >
                    {t('viewDetails')}
                  </button>
                  <button
                    onClick={() => setQuickBuy(car.id)}
                    className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all"
                  >
                    ⚡ {t('quickBuy')}
                  </button>
                </div>

                {/* Financing Note */}
                <p className="text-center text-green-400 text-xs mt-2 flex items-center justify-center gap-1">
                  <span>✓</span> {t('financing')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">{lang === 'es' ? 'No se encontraron vehículos' : 'No vehicles found'}</p>
            <button onClick={() => { setSearch(''); setFilter('all'); }} className="mt-4 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors">
              {lang === 'es' ? 'Limpiar filtros' : 'Clear filters'}
            </button>
          </div>
        )}
      </div>

      {/* Vehicle Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4" onClick={() => setSelectedCar(null)}>
          <div className="bg-gray-900 border border-gray-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="h-56 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative rounded-t-3xl">
              <span className="text-9xl">{selectedCar.emoji}</span>
              <button onClick={() => setSelectedCar(null)} className="absolute top-4 right-4 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                ✕
              </button>
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-black rounded-full">{selectedCar.badge}</div>
            </div>
            <div className="p-6">
              <h2 className="text-white font-black text-2xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{selectedCar.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-red-500 font-black text-3xl">${selectedCar.price.toLocaleString()}</span>
                <span className="text-gray-400">{selectedCar.miles} miles</span>
                <span className="px-3 py-1 bg-green-600/20 border border-green-600/40 text-green-400 text-sm rounded-full font-bold">{t('inStock')}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Engine', val: selectedCar.engine },
                  { label: 'Transmission', val: selectedCar.transmission },
                  { label: 'Color', val: selectedCar.color },
                  { label: 'MPG', val: selectedCar.mpg },
                  { label: 'VIN', val: selectedCar.vin },
                  { label: 'Year', val: String(selectedCar.year) },
                ].map((spec, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-xl p-3">
                    <div className="text-gray-500 text-xs uppercase tracking-wider">{spec.label}</div>
                    <div className="text-white font-semibold text-sm mt-1">{spec.val}</div>
                  </div>
                ))}
              </div>

              <h4 className="text-white font-bold mb-3">{lang === 'es' ? 'Características:' : 'Features:'}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCar.features.map((f, i) => (
                  <span key={i} className="px-3 py-1.5 bg-red-600/20 border border-red-600/30 text-red-400 text-sm rounded-full">✓ {f}</span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => { setSelectedCar(null); setPage('tradein'); }}
                  className="flex-1 py-3 border border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-bold rounded-xl transition-all"
                >
                  🚗 {lang === 'es' ? 'Tasar mi Auto' : 'Trade-In My Car'}
                </button>
                <button
                  onClick={() => { setSelectedCar(null); setPage('portal'); }}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-lg shadow-red-600/30 transition-all"
                >
                  ⚡ {lang === 'es' ? 'Compra Express' : 'Express Buy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Buy Modal */}
      {quickBuy && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4" onClick={() => setQuickBuy(null)}>
          <div className="bg-gray-900 border border-gray-700 rounded-3xl max-w-md w-full p-8 text-center" onClick={e => e.stopPropagation()}>
            <div className="w-20 h-20 bg-red-600/20 border border-red-600/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">⚡</span>
            </div>
            <h3 className="text-white font-black text-2xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {lang === 'es' ? '¡Compra Express!' : 'Express Buy!'}
            </h3>
            <p className="text-gray-400 mb-6">
              {lang === 'es' ? 'Te guiaremos por el proceso más rápido. Documentos online, entrega en 5 minutos.' : 'We will guide you through the fastest process. Documents online, delivery in 5 minutes.'}
            </p>
            <div className="space-y-3">
              <button onClick={() => { setQuickBuy(null); setPage('portal'); }} className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all">
                🚀 {lang === 'es' ? 'Ir al Portal Express' : 'Go to Express Portal'}
              </button>
              <button onClick={() => { setQuickBuy(null); setPage('tradein'); }} className="w-full py-3 border border-gray-700 text-gray-300 hover:text-white font-semibold rounded-xl transition-all">
                🚗 {lang === 'es' ? 'Primero Tasar mi Auto' : 'First Trade-In My Car'}
              </button>
              <button onClick={() => setQuickBuy(null)} className="w-full py-2 text-gray-600 hover:text-gray-400 text-sm transition-colors">
                {lang === 'es' ? 'Cancelar' : 'Cancel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

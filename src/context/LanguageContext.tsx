import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    home: 'Inicio',
    inventory: 'Inventario',
    portal: 'Portal Express',
    tradein: 'Tasación de Auto',
    delivery: 'Programar Entrega',
    keyHandover: 'Entrega en 5 Min',
    documents: 'Documentos',
    tracking: 'Seguimiento',
    notifications: 'Notificaciones',
    staffDash: 'Panel del Personal',
    adminReports: 'Reportes',
    login: 'Iniciar Sesión',
    logout: 'Cerrar Sesión',

    // Hero / Login
    tagline: "El Único Dealer en Miami con Entrega de Llaves en 5 Minutos",
    heroSub: "Portal Express para Profesionales Ocupados — Tu Tiempo Vale Oro",
    welcomeTitle: "Bienvenido a Franco Automotors",
    welcomeSub: "Compra tu próximo vehículo de trabajo desde tu teléfono — sin perder tiempo.",
    customerLogin: "Acceso Cliente",
    staffLogin: "Acceso Personal",
    adminLogin: "Acceso Administrador",

    // Features
    feat1Title: "Subida de Documentos",
    feat1Desc: "Sube todos tus documentos online y recoge tus llaves en minutos.",
    feat2Title: "Tasación de Auto",
    feat2Desc: "Recibe el valor de tu auto sin visitar el concesionario.",
    feat3Title: "Programar Entrega",
    feat3Desc: "Elige fecha y hora — te entregamos las llaves en 5 minutos.",

    // Dashboard
    dashWelcome: "¡Bienvenido de vuelta,",
    activeOrder: "Orden Activa",
    uploadDocs: "Subir Documentos",
    checkTradeIn: "Ver Tasación",
    scheduleDelivery: "Programar Entrega",
    orderStatus: "Estado de tu Orden",
    step1: "Orden Confirmada",
    step2: "Documentos Enviados",
    step3: "Tasación Evaluada",
    step4: "Entrega Programada",
    step5: "Llaves en 5 Minutos ✓",
    notifHistory: "Historial de Notificaciones",
    digitalSig: "Firma Digital",
    signContract: "Firmar Contrato",

    // Trade-In
    tradeInTitle: "Tasación de Tu Auto Online",
    tradeInSub: "Sin visitar el concesionario — recibe tu oferta en 2 horas",
    vehicleMake: "Marca del Vehículo",
    vehicleModel: "Modelo",
    year: "Año",
    mileage: "Millaje",
    condition: "Condición",
    excellent: "Excelente",
    good: "Buena",
    fair: "Regular",
    poor: "Mala",
    uploadPhotos: "Subir Fotos del Vehículo",
    existingDamage: "Daños Existentes",
    loanAmount: "Monto de Préstamo Actual",
    submitValuation: "Enviar Tasación",
    valuationSubmitted: "¡Tasación Enviada!",
    valuationMsg: "Nuestro equipo te contactará en menos de 2 horas con el valor de tu vehículo.",
    tradeStatus1: "Enviado",
    tradeStatus2: "En Revisión",
    tradeStatus3: "Tasación Lista",
    tradeStatus4: "Oferta Enviada",

    // Delivery
    deliveryTitle: "Programar Tu Entrega Express",
    deliverySub: "Entrega Express en Miami — Llaves en Menos de 5 Minutos",
    prefDate: "Fecha Preferida",
    prefTime: "Horario Preferido",
    morning: "Mañana",
    afternoon: "Tarde",
    evening: "Noche",
    deliveryAddress: "Dirección de Entrega",
    specialInstructions: "Instrucciones Especiales",
    bookDelivery: "Confirmar Entrega",
    deliveryConfirmed: "¡Entrega Confirmada!",
    deliveryNote: "Nuestro equipo completará la entrega de llaves en menos de 5 minutos.",
    countdownTitle: "Cuenta regresiva para tu entrega",
    miamiWindow: "Ventana de entrega en Miami: 10:00 AM — 1:00 PM EDT",

    // Key Handover
    keyTitle: "Entrega Express de Llaves en 5 Minutos",
    keySub: "Porque tu tiempo es dinero — te entregamos en 5 minutos.",
    kStep1: "Documentos Pre-Verificados Online",
    kStep2: "Tasación Completada",
    kStep3: "Financiamiento Pre-Aprobado",
    kStep4: "Vehículo Listo",
    kStep5: "Entrega de Llaves en 5 Minutos",
    expressTimer: "Proceso Completado en",
    minutes: "minutos",

    // Staff
    staffTitle: "Panel del Personal",
    totalDeliveries: "Entregas Activas",
    totalCustomers: "Total Clientes",
    pendingDocs: "Docs Pendientes",
    pendingTradeIn: "Tasaciones Pendientes",
    scheduledToday: "Entregas Hoy",
    completedMonth: "Completadas Este Mes",
    newRequest: "Nueva Solicitud",
    docsPending: "Docs Pendientes",
    tradeInReview: "Revisión Tasación",
    deliveryScheduled: "Entrega Programada",
    keyComplete: "Llaves Entregadas",

    // Documents
    docsTitle: "Gestión de Documentos",
    docsSub: "Sube tus documentos ahora — salta el papeleo — recibe tus llaves en 5 minutos.",
    govId: "ID del Gobierno",
    insurance: "Comprobante de Seguro",
    contracts: "Contratos Firmados",
    tradePhotos: "Fotos de Auto a Cambiar",
    docPending: "Pendiente",
    docReview: "En Revisión",
    docApproved: "Aprobado",
    uploadNow: "Subir Ahora",

    // Tracking
    trackingTitle: "Seguimiento de Entrega",
    trackingSub: "Sigue tu entrega en tiempo real",
    driverDetails: "Detalles del Conductor",
    estArrival: "Llegada Estimada",
    liveChat: "Chat en Vivo",

    // Notifications
    notifTitle: "Centro de Notificaciones",
    notifSub: "Mensajes automatizados en tiempo real",
    whatsapp: "WhatsApp",
    sms: "SMS",
    email: "Email",

    // Reports
    reportsTitle: "Reportes Administrativos",
    totalDeliveriesMonth: "Entregas Este Mes",
    keyHandoversCompleted: "Entregas de Llaves 5-Min",
    tradeInsSubmitted: "Tasaciones Enviadas",
    docUploadRate: "Tasa de Documentos",
    salesVelocity: "Velocidad de Ventas",
    custSatisfaction: "Satisfacción del Cliente",

    // Chat
    chatTitle: "Asistente Digital 24/7",
    chatWelcome: "¡Hola! Soy tu Asistente Digital de Franco Automotors. Puedo ayudarte a subir documentos, verificar tu tasación, o programar tu entrega de llaves en 5 minutos. ¿Cómo puedo ayudarte hoy?",
    chatInput: "Escribe tu mensaje...",
    chatSend: "Enviar",

    // Footer
    footerTagline: "El Único Dealer en Miami con Entrega de Llaves en 5 Minutos",
    address: "3130 SW 8th St, Miami, FL 33135",
    phone: "(786) 847-9726",
    rights: "Todos los derechos reservados.",

    // Inventory
    inventoryTitle: "Inventario de Vehículos",
    inventorySub: "Camiones y Vehículos de Trabajo para Profesionales Ocupados",
    viewDetails: "Ver Detalles",
    buyNow: "Comprar Ahora",
    testDrive: "Prueba de Manejo",
    price: "Precio",
    miles: "millas",
    filterAll: "Todos",
    filterTruck: "Camionetas",
    filterSUV: "SUVs",
    filterSedan: "Sedanes",
    searchPlaceholder: "Buscar vehículo...",
    inStock: "En Stock",
    soldOut: "Vendido",
    financing: "Financiamiento disponible",
    quickBuy: "Compra Express",
  },
  en: {
    // Nav
    home: 'Home',
    inventory: 'Inventory',
    portal: 'Express Portal',
    tradein: 'Trade-In Valuation',
    delivery: 'Schedule Delivery',
    keyHandover: '5-Min Key Handover',
    documents: 'Documents',
    tracking: 'Tracking',
    notifications: 'Notifications',
    staffDash: 'Staff Dashboard',
    adminReports: 'Reports',
    login: 'Login',
    logout: 'Logout',

    // Hero / Login
    tagline: "Miami's Only 5-Minute Key Handover Dealer",
    heroSub: "Express Portal for Busy Professionals — Because Your Time is Money",
    welcomeTitle: "Welcome to Franco Automotors",
    welcomeSub: "Buy your next work vehicle from your phone — without wasting time.",
    customerLogin: "Customer Login",
    staffLogin: "Staff Login",
    adminLogin: "Admin Login",

    // Features
    feat1Title: "Document Upload",
    feat1Desc: "Upload all documents online and pick up your keys in minutes.",
    feat2Title: "Trade-In Valuation",
    feat2Desc: "Get your vehicle value without visiting the dealership.",
    feat3Title: "Schedule Delivery",
    feat3Desc: "Choose your date and time — we deliver keys in 5 minutes.",

    // Dashboard
    dashWelcome: "Welcome back,",
    activeOrder: "Active Order",
    uploadDocs: "Upload Documents",
    checkTradeIn: "Check Trade-In",
    scheduleDelivery: "Schedule Delivery",
    orderStatus: "Your Order Status",
    step1: "Order Confirmed",
    step2: "Documents Submitted",
    step3: "Trade-In Assessed",
    step4: "Delivery Scheduled",
    step5: "5-Min Key Handover ✓",
    notifHistory: "Notification History",
    digitalSig: "Digital Signature",
    signContract: "Sign Contract",

    // Trade-In
    tradeInTitle: "Online Trade-In Valuation",
    tradeInSub: "No dealership visit needed — get your offer in 2 hours",
    vehicleMake: "Vehicle Make",
    vehicleModel: "Vehicle Model",
    year: "Year",
    mileage: "Mileage",
    condition: "Condition",
    excellent: "Excellent",
    good: "Good",
    fair: "Fair",
    poor: "Poor",
    uploadPhotos: "Upload Vehicle Photos",
    existingDamage: "Existing Damage",
    loanAmount: "Current Loan Amount",
    submitValuation: "Submit Valuation",
    valuationSubmitted: "Valuation Submitted!",
    valuationMsg: "Our team will contact you within 2 hours with your vehicle value.",
    tradeStatus1: "Submitted",
    tradeStatus2: "Under Review",
    tradeStatus3: "Valuation Ready",
    tradeStatus4: "Offer Sent",

    // Delivery
    deliveryTitle: "Schedule Your Express Delivery",
    deliverySub: "Express Delivery in Miami — Keys in Under 5 Minutes",
    prefDate: "Preferred Date",
    prefTime: "Preferred Time Slot",
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    deliveryAddress: "Delivery Address",
    specialInstructions: "Special Instructions",
    bookDelivery: "Confirm Delivery",
    deliveryConfirmed: "Delivery Confirmed!",
    deliveryNote: "Our team will complete your key handover in under 5 minutes.",
    countdownTitle: "Countdown to your delivery",
    miamiWindow: "Miami delivery window: 10:00 AM — 1:00 PM EDT",

    // Key Handover
    keyTitle: "5-Minute Express Key Handover",
    keySub: "Because your time is money — we deliver in 5 minutes.",
    kStep1: "Documents Pre-Verified Online",
    kStep2: "Trade-In Assessed",
    kStep3: "Financing Pre-Approved",
    kStep4: "Vehicle Ready",
    kStep5: "Key Handover in Under 5 Minutes",
    expressTimer: "Process Completed in",
    minutes: "minutes",

    // Staff
    staffTitle: "Staff Dashboard",
    totalDeliveries: "Active Deliveries",
    totalCustomers: "Total Customers",
    pendingDocs: "Pending Documents",
    pendingTradeIn: "Pending Valuations",
    scheduledToday: "Scheduled Today",
    completedMonth: "Completed This Month",
    newRequest: "New Request",
    docsPending: "Docs Pending",
    tradeInReview: "Trade-In Review",
    deliveryScheduled: "Delivery Scheduled",
    keyComplete: "Key Handover Complete",

    // Documents
    docsTitle: "Document Management",
    docsSub: "Upload your documents now — skip the paperwork — get your keys in 5 minutes.",
    govId: "Government ID",
    insurance: "Proof of Insurance",
    contracts: "Signed Contracts",
    tradePhotos: "Trade-In Vehicle Photos",
    docPending: "Pending",
    docReview: "Under Review",
    docApproved: "Approved",
    uploadNow: "Upload Now",

    // Tracking
    trackingTitle: "Delivery Tracking",
    trackingSub: "Track your delivery in real time",
    driverDetails: "Driver Details",
    estArrival: "Estimated Arrival",
    liveChat: "Live Chat",

    // Notifications
    notifTitle: "Notifications Center",
    notifSub: "Automated real-time messages",
    whatsapp: "WhatsApp",
    sms: "SMS",
    email: "Email",

    // Reports
    reportsTitle: "Admin Reports",
    totalDeliveriesMonth: "Deliveries This Month",
    keyHandoversCompleted: "5-Min Key Handovers",
    tradeInsSubmitted: "Trade-Ins Submitted",
    docUploadRate: "Document Upload Rate",
    salesVelocity: "Sales Velocity",
    custSatisfaction: "Customer Satisfaction",

    // Chat
    chatTitle: "24/7 Digital Assistant",
    chatWelcome: "Hi! I'm your Franco Automotors Digital Assistant. I can help you upload documents, check your trade-in value, or schedule your 5-minute key handover. How can I help you today?",
    chatInput: "Type your message...",
    chatSend: "Send",

    // Footer
    footerTagline: "Miami's Only 5-Minute Key Handover Dealer",
    address: "3130 SW 8th St, Miami, FL 33135",
    phone: "(786) 847-9726",
    rights: "All rights reserved.",

    // Inventory
    inventoryTitle: "Vehicle Inventory",
    inventorySub: "Work Trucks & Vehicles for Busy Professionals",
    viewDetails: "View Details",
    buyNow: "Buy Now",
    testDrive: "Test Drive",
    price: "Price",
    miles: "miles",
    filterAll: "All",
    filterTruck: "Trucks",
    filterSUV: "SUVs",
    filterSedan: "Sedans",
    searchPlaceholder: "Search vehicle...",
    inStock: "In Stock",
    soldOut: "Sold Out",
    financing: "Financing available",
    quickBuy: "Express Buy",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('es');
  const t = (key: string) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};

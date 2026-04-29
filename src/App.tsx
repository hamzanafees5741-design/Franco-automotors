import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LoginPage from './pages/LoginPage';
import InventoryPage from './pages/InventoryPage';
import CustomerPortal from './pages/CustomerPortal';
import TradeInPage from './pages/TradeInPage';
import DeliveryPage from './pages/DeliveryPage';
import KeyHandoverPage from './pages/KeyHandoverPage';
import StaffDashboard from './pages/StaffDashboard';
import DocumentsPage from './pages/DocumentsPage';
import TrackingPage from './pages/TrackingPage';
import NotificationsPage from './pages/NotificationsPage';
import AdminReports from './pages/AdminReports';

type UserRole = 'customer' | 'staff' | 'admin' | null;
type Page =
  | 'login' | 'home' | 'inventory' | 'portal' | 'tradein' | 'delivery'
  | 'keyhandover' | 'documents' | 'tracking' | 'notifications' | 'staff' | 'admin';

function AppContent() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [page, setPage] = useState<Page>('login');

  const handleLogin = (role: 'customer' | 'staff' | 'admin') => {
    setUserRole(role);
    if (role === 'customer') setPage('portal');
    else if (role === 'staff') setPage('staff');
    else if (role === 'admin') setPage('admin');
  };

  const handleLogout = () => {
    setUserRole(null);
    setPage('login');
  };

  const handleSetPage = (p: string) => {
    setPage(p as Page);
  };

  const renderPage = () => {
    // Login / Home Page
    if (page === 'login') {
      return <LoginPage onLogin={handleLogin} setPage={handleSetPage} />;
    }

    // Public pages (no auth needed for browsing)
    if (page === 'inventory') {
      return <InventoryPage setPage={handleSetPage} />;
    }
    if (page === 'home') {
      return <LoginPage onLogin={handleLogin} setPage={handleSetPage} />;
    }

    // Protected-ish pages (redirect to login if not authenticated)
    if (!userRole) {
      return <LoginPage onLogin={handleLogin} setPage={handleSetPage} />;
    }

    switch (page) {
      case 'portal': return <CustomerPortal setPage={handleSetPage} />;
      case 'tradein': return <TradeInPage />;
      case 'delivery': return <DeliveryPage />;
      case 'keyhandover': return <KeyHandoverPage />;
      case 'documents': return <DocumentsPage />;
      case 'tracking': return <TrackingPage />;
      case 'notifications': return <NotificationsPage />;
      case 'staff': return <StaffDashboard />;
      case 'admin': return <AdminReports />;
      default: return <CustomerPortal setPage={handleSetPage} />;
    }
  };

  const showNavAndFooter = page !== 'login' && page !== 'home';
  const isLoginPage = page === 'login' || page === 'home';

  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navbar - show on all pages except login */}
      {!isLoginPage && (
        <Navbar
          currentPage={page}
          setPage={handleSetPage}
          userRole={userRole}
          onLogout={handleLogout}
        />
      )}

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer - show on all pages except login */}
      {showNavAndFooter && <Footer setPage={handleSetPage} />}

      {/* Chat Widget - Always visible */}
      <ChatWidget />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

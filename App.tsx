import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Toaster } from 'react-hot-toast';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col text-slate-800 bg-slate-50">
        <Navbar onOpenContact={openContact} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenContact={openContact} />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
};

export default App;
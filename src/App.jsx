import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Reviews from './pages/Reviews';
import ListWithUs from './pages/ListWithUs';
import GetPrequalified from './pages/GetPrequalified';
import PropertyManagement from './pages/PropertyManagement';
import RecentlySold from './pages/RecentlySold';
import Contact from './pages/Contact';
import AwardsAndRecognition from './pages/AwardsAndRecognition';

function App() {
  const [page, setPage] = useState('home');

  // Handle syncing URL hash to page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = [
        'home',
        'about-us',
        'reviews',
        'list-with-us',
        'get-prequalified',
        'property-management',
        'awards-and-recognition',
        'recently-sold',
        'contact'
      ];
      if (hash && validPages.includes(hash)) {
        setPage(hash);
      } else {
        setPage('home');
      }
    };

    // Run once on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when state page changes
  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.location.hash = newPage === 'home' ? '' : newPage;
  };

  // Render active page component
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={handlePageChange} />;
      case 'about-us':
        return <AboutUs setPage={handlePageChange} />;
      case 'reviews':
        return <Reviews />;
      case 'list-with-us':
        return <ListWithUs />;
      case 'get-prequalified':
        return <GetPrequalified />;
      case 'property-management':
        return <PropertyManagement setPage={handlePageChange} />;
      case 'recently-sold':
        return <RecentlySold />;
      case 'awards-and-recognition':
        return <AwardsAndRecognition />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={handlePageChange} />;
    }
  };

  return (
    <>
      {/* Header Navigation */}
      <Navbar currentPage={page} setPage={handlePageChange} />

      {/* Main Content Area */}
      <main style={{ minHeight: 'calc(100vh - 80px)', paddingBottom: '60px' }}>
        {renderPage()}
      </main>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/15129989242?text=Hello.%20I%20visited%20your%20site.%20Could%20you%20please%20get%20back%20to%20me?"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>

      {/* Footer Navigation */}
      <Footer setPage={handlePageChange} />
    </>
  );
}

export default App;


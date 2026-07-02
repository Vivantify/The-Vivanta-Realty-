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
        <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
          <path d="M12.012 0C5.398 0 .02 5.378.02 11.992c0 2.113.547 4.178 1.59 6.004L.055 24l6.157-1.615c1.771.966 3.761 1.474 5.794 1.475h.005c6.612 0 11.993-5.379 11.993-11.995C24.005 5.379 18.625 0 12.012 0zm0 21.993c-1.8 0-3.56-.484-5.09-1.401l-.364-.216-3.784.993.101-3.684-.237-.378a9.92 9.92 0 0 1-1.524-5.31c0-5.506 4.48-9.986 9.99-9.986 2.668 0 5.176 1.04 7.06 2.928a9.924 9.924 0 0 1 2.922 7.067c-.002 5.51-4.484 9.99-9.998 9.99zm5.474-7.48c-.3-.15-1.774-.875-2.048-.975-.274-.1-.474-.15-.674.15-.2.3-.774.975-.95 1.174-.175.2-.35.225-.65.075a8.19 8.19 0 0 1-2.418-1.493c-.943-.84-1.58-1.879-1.765-2.179-.186-.3-.02-.463.13-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.924-2.225-.244-.588-.492-.507-.674-.516-.174-.008-.374-.01-.574-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.113 3.227 5.12 4.526.715.309 1.273.493 1.708.632.718.228 1.37.195 1.887.118.577-.087 1.774-.725 2.024-1.425.25-.7.25-1.3 1.175-1.425zm0 0"/>
        </svg>
      </a>

      {/* Footer Navigation */}
      <Footer setPage={handlePageChange} />
    </>
  );
}

export default App;


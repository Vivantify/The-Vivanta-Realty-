import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'list-with-us', label: 'List With Us' },
    { id: 'get-prequalified', label: 'Get Pre-Qualified' },
    { id: 'property-management', label: 'Property Management' },
    { id: 'awards-and-recognition', label: 'Awards and Recognition' },
    { id: 'recently-sold', label: 'Recently Sold' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    setPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo" onClick={() => handleNavClick('home')} style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '2px 0' }}>
          <img src="/logo.png" alt="Vivanta Realty" style={{ height: '100%', maxHeight: '110px', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <span
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="nav-actions">
          <a
            href="https://www.zillow.com/profile/Vivanta%20Realty"
            target="_blank"
            rel="noopener noreferrer"
            className="zillow-link-nav"
            title="View Zillow Profile"
          >
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.381 18.056c-7.43.445-15.51 3.135-16.362 3.51l.989-2.789c2.521-1.166 8.775-3.469 16.486-4.019-.15.57-.961 2.671-1.125 3.285l.012.013zm2.649-7.509s-.363.765-.709 1.814c-2.954.18-7.635 1.154-9.915 1.98 1.186-1.08 8.686-8.61 8.686-8.61C20.985 7.71 24 10.155 24 10.155l-3.97.395v-.003zm-17.55.33c1.647-.75 6.265-2.146 10.685-3.181 0 0-8.497 7.845-10.859 10.275l1.95-5.28c-1.516.225-2.184.315-4.256.75l2.479-2.551.001-.013zm10.6-8.432c.734.359 3.45 2.205 4.419 2.888-3.096.074-9.135 1.409-11.652 2.25 2.065-1.568 5.903-4.53 7.233-5.148v.01z" />
            </svg>
            <span>Zillow</span>
          </a>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <span
                  className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </span>
              </li>
            ))}
            <li className="mobile-nav-item" style={{ marginTop: '20px' }}>
              <a
                href="https://www.zillow.com/profile/Vivanta%20Realty"
                target="_blank"
                rel="noopener noreferrer"
                className="zillow-link-nav"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.381 18.056c-7.43.445-15.51 3.135-16.362 3.51l.989-2.789c2.521-1.166 8.775-3.469 16.486-4.019-.15.57-.961 2.671-1.125 3.285l.012.013zm2.649-7.509s-.363.765-.709 1.814c-2.954.18-7.635 1.154-9.915 1.98 1.186-1.08 8.686-8.61 8.686-8.61C20.985 7.71 24 10.155 24 10.155l-3.97.395v-.003zm-17.55.33c1.647-.75 6.265-2.146 10.685-3.181 0 0-8.497 7.845-10.859 10.275l1.95-5.28c-1.516.225-2.184.315-4.256.75l2.479-2.551.001-.013zm10.6-8.432c.734.359 3.45 2.205 4.419 2.888-3.096.074-9.135 1.409-11.652 2.25 2.065-1.568 5.903-4.53 7.233-5.148v.01z" />
                </svg>
                <span>View on Zillow</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

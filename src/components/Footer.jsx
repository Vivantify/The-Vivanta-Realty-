import React from 'react';

const Footer = ({ setPage }) => {
  const handleNavClick = (pageId) => {
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col">
            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
              <img src="/logo-light.png" alt="Vivanta Realty" style={{ height: '120px', width: 'auto' }} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
              Vivanta Realty provides modern, client‑first real estate services for buyers, sellers, and investors, combining market insight with proactive, transparent communication.
            </p>
            <div className="footer-socials" style={{ marginTop: '20px' }}>
              {/* Facebook */}
              <a href="https://www.facebook.com/Vivanta.Realty.NC" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* Zillow */}
              <a href="https://www.zillow.com/profile/Vivanta%20Realty" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Zillow">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.381 18.056c-7.43.445-15.51 3.135-16.362 3.51l.989-2.789c2.521-1.166 8.775-3.469 16.486-4.019-.15.57-.961 2.671-1.125 3.285l.012.013zm2.649-7.509s-.363.765-.709 1.814c-2.954.18-7.635 1.154-9.915 1.98 1.186-1.08 8.686-8.61 8.686-8.61C20.985 7.71 24 10.155 24 10.155l-3.97.395v-.003zm-17.55.33c1.647-.75 6.265-2.146 10.685-3.181 0 0-8.497 7.845-10.859 10.275l1.95-5.28c-1.516.225-2.184.315-4.256.75l2.479-2.551.001-.013zm10.6-8.432c.734.359 3.45 2.205 4.419 2.888-3.096.074-9.135 1.409-11.652 2.25 2.065-1.568 5.903-4.53 7.233-5.148v.01z"/></svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/vivantarealty" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/thevivantarealty" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@vivantarealty" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@thevivantarealty" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="TikTok">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.99 1.18 2.37 1.93 3.86 2.16v3.87c-1.92-.17-3.72-.95-5.13-2.27-.14 2.8-.1 5.59-.11 8.39-.02 2.05-.67 4.14-1.99 5.71-1.62 2.01-4.22 3.09-6.76 2.87-2.61-.17-5.07-1.78-6.19-4.14-1.27-2.58-.87-5.91 1.05-8.08 1.63-1.9 4.13-2.79 6.61-2.4v3.91c-1.3-.39-2.77-.07-3.79.79-.99.8-1.46 2.12-1.24 3.39.22 1.34 1.25 2.49 2.57 2.79 1.48.37 3.17-.37 3.79-1.77.29-.6.37-1.27.36-1.93-.01-5.1-.01-10.19 0-15.28z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li onClick={() => handleNavClick('list-with-us')}>List With Us</li>
              <li onClick={() => handleNavClick('get-prequalified')}>Get Pre-Qualified</li>
              <li onClick={() => handleNavClick('property-management')}>Property Management</li>
              <li onClick={() => handleNavClick('recently-sold')}>Recently Sold</li>
            </ul>
          </div>

          {/* Col 3: About Us Links */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li onClick={() => handleNavClick('about-us')}>About Us</li>
              <li onClick={() => handleNavClick('reviews')}>Client Reviews</li>
              <li onClick={() => handleNavClick('contact')}>Contact Us</li>
              <li onClick={() => handleNavClick('home')}>Home</li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links" style={{ gap: '16px' }}>
              <li style={{ cursor: 'default', transform: 'none', color: 'var(--text-muted)' }}>
                <strong>Address:</strong><br />
                1428 Baileys Run Ct,<br />
                Raleigh, NC 27606
              </li>
              <li style={{ cursor: 'default', transform: 'none', color: 'var(--text-muted)' }}>
                <strong>Phone:</strong><br />
                +1 (470)-706-5858
              </li>
              <li style={{ cursor: 'default', transform: 'none', color: 'var(--text-muted)' }}>
                <strong>Email:</strong><br />
                karthik@thevivantarealty.com
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vivanta Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

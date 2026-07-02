import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';

const Home = ({ setPage }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    { img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80' },
    { img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80' },
    { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const recentSales = [
    { price: '$514,469', address: '232 Sprenger St, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/1-1920w.webp' },
    { price: '$842,432', address: '2520 Terri Creek Dr #26, Fuquay Varina, NC 27526', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/2-1920w.webp' },
    { price: '$496,990', address: '212 Eden View Bnd #684, Raleigh, NC 27610', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/3-1920w.webp' },
    { price: '$610,775', address: '140 Yellow River Way, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/4-1920w.webp' },
    { price: '$617,343', address: '139 Yellow River Way, Garner, NC 27529', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/5-1920w.webp' },
    { price: '$770,000', address: '3657 Manifest Pl, Cary, NC 27519', img: 'https://irp.cdn-website.com/3044ffb2/dms3rep/multi/opt/6-3a0210a8-1920w.webp' }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        ))}
        <div className="hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content">
            <h1 className="hero-title">Modern Real Estate, <br /> Seamlessly Done</h1>
            <p className="hero-subtitle">Buy, sell, or invest with data‑driven strategy, clear communication, and start‑to‑finish guidance.</p>
            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => setPage('contact')}>
                Schedule a Consultation
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => setPage('get-prequalified')}
                style={{ 
                  color: '#FFFFFF', 
                  borderColor: 'rgba(255, 255, 255, 0.4)', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
              >
                Get Pre‑Qualified Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sales Section */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(23, 28, 33, 0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '10px' }} className="text-gradient">Recent Sales in North Carolina</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto 16px auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
              Explore some of the homes we have recently closed across the Triangle and greater North Carolina.
            </p>
          </div>

          <div className="sold-grid">
            {recentSales.map((item, idx) => (
              <PropertyCard
                key={idx}
                price={item.price}
                address={item.address}
                imageUrl={item.img}
                index={idx}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn btn-secondary" onClick={() => setPage('recently-sold')}>
              View All Recent Sales
            </button>
          </div>
        </div>
      </section>

      {/* Meet Advisor Section */}
      <section className="section-padding">
        <div className="container advisor-grid">
          <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '450px', border: '1px solid var(--border)' }}>
            <img
              src="/karthik.jpg"
              alt="Karthikeyan Kaduvettipalayam Sankarappan"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700' }}>
              Meet Your Real Estate Advisor
            </span>
            <h2 style={{ fontSize: '32px', margin: '8px 0 20px 0' }} className="text-gradient">
              Karthikeyan Kaduvettipalayam Sankarappan
            </h2>
            <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--primary)', marginBottom: '20px' }} />
            
            <p style={{ color: '#1A202C', fontWeight: '500', fontSize: '18px', marginBottom: '20px' }}>
              Personalized, detail‑driven support for buyers, sellers, and investors.
            </p>
            <p style={{ marginBottom: '16px', fontSize: '14px' }}>
              I specialize in helping clients find homes that align with their lifestyle, aspirations, and long‑term goals, handling every transaction with integrity, meticulous attention to detail, and a focus on exceptional results.
            </p>
            <p style={{ marginBottom: '30px', fontSize: '14px' }}>
              More than just a real estate agent, I guide you beyond the basics — helping you find not just a house, but a home that truly fits. From the first showing to the final signature, I work to make your journey smooth, transparent, and rewarding.
            </p>
            <button className="btn btn-primary" onClick={() => setPage('about-us')}>
              Read More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Banner */}
      <section className="section-padding" style={{ backgroundColor: '#F8F9FA', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '10px' }} className="text-gradient">Not Just Words — Results That Speak</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto' }} />
          </div>

          <div className="reviews-grid">
            {/* Review 1 */}
            <div className="card-glass" style={{ padding: '30px' }}>
              <div className="stars">
                {Array(5).fill().map((_, i) => (
                  <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/></svg>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: '20px', color: 'var(--text-muted)' }}>
                "I recently had the pleasure of working with Karthik as my realtor in buying my second home, and I couldn't be more satisfied with the experience. Karthik was incredibly detail-oriented and helpful, guiding me through every step of the process while advocating for my best interests as if he were making the purchase for himself..."
              </p>
              <div>
                <strong style={{ color: '#1A202C', fontSize: '15px' }}>Arunkumar Venkatachalam</strong>
                <div style={{ fontSize: '12px', color: 'var(--primary)', marginTop: '2px' }}>Bought a single‑family home in 2024 in Raleigh, NC</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="card-glass" style={{ padding: '30px' }}>
              <div className="stars">
                {Array(5).fill().map((_, i) => (
                  <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/></svg>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: '20px', color: 'var(--text-muted)' }}>
                "I recently had the pleasure of working with Karthikeyan to close on my new home, and I couldn't be happier with the experience. From start to finish, Karthikeyan was always available and incredibly easy to deal with. He guided me through every step of the process with professionalism and clear communication..."
              </p>
              <div>
                <strong style={{ color: '#1A202C', fontSize: '15px' }}>vnikith reddy</strong>
                <div style={{ fontSize: '12px', color: 'var(--primary)', marginTop: '2px' }}>Bought a single‑family home in 2024 in Fuquay Varina, NC</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button className="btn btn-secondary" onClick={() => setPage('reviews')}>
              View All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container cta-container">
          <div className="cta-left">
            <h2>Ready to Talk About Your Next Move?</h2>
            <p>Call us today to discuss your goals, timelines, and options, just clear guidance tailored to you</p>
          </div>
          <div className="cta-right">
            <div>
              <div className="cta-phone-label">CALL US TODAY</div>
              <div className="cta-phone-val">+1 (470)-706-5858</div>
            </div>
            <button className="cta-btn" onClick={() => setPage('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
